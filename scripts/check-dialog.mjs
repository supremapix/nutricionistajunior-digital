import assert from 'node:assert/strict';
import fs from 'node:fs';
import { JSDOM } from 'jsdom';

// JSDOM has no native top layer/focus trap. This tests our state/event integration,
// not the browser's native dialog rendering or keyboard focus containment.
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'https://www.nutricionistajunior.digital/', pretendToBeVisual: true,
});
for (const key of ['window', 'document', 'navigator', 'HTMLElement', 'HTMLDialogElement', 'Element', 'Node', 'Event', 'MouseEvent']) {
  Object.defineProperty(globalThis, key, { value: dom.window[key], configurable: true });
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
let opens = 0;
HTMLDialogElement.prototype.showModal = function () {
  if (!this.isConnected) throw new dom.window.DOMException('Disconnected dialog', 'InvalidStateError');
  if (this.open) return;
  opens += 1;
  this.setAttribute('open', '');
  const first = this.querySelector('[autofocus], button, a[href]');
  if (first) first.focus();
};
HTMLDialogElement.prototype.close = function (returnValue = '') {
  if (!this.open) return;
  this.returnValue = returnValue;
  this.removeAttribute('open');
  // The browser queues a close event; it does not bubble and cannot be canceled.
  setTimeout(() => this.dispatchEvent(new Event('close')), 0);
};
const React = await import('react');
const { createRoot } = await import('react-dom/client');
const { PageInsight } = await import('../src/components/PageInsight.tsx');
const { getPageInsight } = await import('../src/data/pageInsights.ts');
const root = createRoot(document.getElementById('root'));
const tick = () => new Promise(resolve => setTimeout(resolve, 5));
const render = async path => React.act(async () => { root.render(React.createElement(PageInsight, { path })); await tick(); });
const click = async element => React.act(async () => { element.focus(); element.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, button: 0 })); await tick(); });
const sitemap = new JSDOM(fs.readFileSync('dist/sitemap.xml', 'utf8'), { contentType: 'text/xml' });
const routes = [...sitemap.window.document.querySelectorAll('loc')].map(el => new URL(el.textContent).pathname);
assert.equal(routes.length, 55, 'All 55 canonical pages must be covered');
const questions = new Set();
for (const path of routes) {
  const content = getPageInsight(path);
  assert(content, `${path}: contextual copy exists`);
  assert(!questions.has(content.question), `${path}: unique contextual question`);
  questions.add(content.question);
  const before = opens;
  await render(path);
  const trigger = document.querySelector('[data-open-insight]');
  const dialog = document.querySelector('[data-insight-dialog]');
  assert(trigger instanceof dom.window.HTMLButtonElement, `${path}: real user-trigger button`);
  assert(dialog instanceof HTMLDialogElement, `${path}: native dialog element`);
  assert.equal(dialog.open, false, `${path}: no automatic opening`);
  assert.equal(opens, before, `${path}: no showModal before user action`);
  for (const attr of ['aria-labelledby', 'aria-describedby']) {
    const ids = (dialog.getAttribute(attr) || '').trim().split(/\s+/);
    assert(ids[0], `${path}: ${attr} exists`);
    for (const id of ids) assert(document.getElementById(id), `${path}: ${attr} resolves`);
  }
  assert(dialog.textContent.includes(content.question), `${path}: question tied to this page`);
  assert.equal(dialog.querySelectorAll('input, textarea, select').length, 0, `${path}: no health data collection`);
  if (path === '/politica-de-privacidade') {
    assert.equal(dialog.querySelector('a[href^="https://wa.me/"]'), null, 'Privacy window has no WhatsApp sales CTA');
    assert.equal(dialog.querySelector('a[href^="mailto:"]')?.getAttribute('href'), 'mailto:nutricionistajuniorcoelho@gmail.com', 'Privacy window provides official email');
  }
  for (const link of dialog.querySelectorAll('a[href]')) {
    const url = new URL(link.getAttribute('href'), window.location.origin);
    if (url.hostname === 'wa.me') {
      assert.equal(url.protocol, 'https:');
      assert.equal(url.pathname, '/5541997899045');
      assert(link.rel.includes('noopener') && link.rel.includes('noreferrer'));
    }
  }
  await click(trigger);
  assert.equal(dialog.open, true, `${path}: opens on explicit click`);
  const close = [...dialog.querySelectorAll('button')].find(button => /fechar/i.test(button.getAttribute('aria-label') || button.textContent));
  assert(close, `${path}: explicit accessible close button`);
  assert.equal(document.activeElement, close, `${path}: close action receives initial focus`);
  const beforeRepeatedClick = opens;
  await click(trigger);
  assert.equal(opens, beforeRepeatedClick, `${path}: repeated open request is guarded`);
  await click(close);
  assert.equal(dialog.open, false, `${path}: close button works`);
  assert.equal(document.activeElement, trigger, `${path}: focus returned to trigger`);
  await click(trigger);
  assert.equal(dialog.open, true, `${path}: opens again after dismissal`);
  // Escape triggers native cancel, whose default action is close unless prevented.
  await React.act(async () => {
    const proceed = dialog.dispatchEvent(new Event('cancel', { cancelable: true }));
    if (proceed) dialog.close();
    await tick();
  });
  assert.equal(dialog.open, false, `${path}: Escape/cancel dismissal`);
  assert.equal(document.activeElement, trigger, `${path}: focus restored after Escape/cancel`);
  // Merely rerendering the same page must never reopen a dismissed window.
  const afterDismissal = opens;
  await render(path);
  assert.equal(dialog.open, false);
  assert.equal(opens, afterDismissal);
}
await render('/');
await click(document.querySelector('[data-open-insight]'));
assert(document.querySelector('[data-insight-dialog]').open);
await render('/sobre');
assert.equal(document.querySelector('[data-insight-dialog]').open, false, 'Changing route closes the window');
await render('/rota-inexistente');
assert.equal(document.querySelector('[data-insight-dialog]'), null, 'No window for unknown routes');
await React.act(async () => root.unmount());
sitemap.window.close();
dom.window.close();
console.log('PASS: 55 unique contextual dialogs; explicit trigger, dismiss/reopen, simulated native Escape/cancel, focus return, route changes and no health inputs. JSDOM integration only; native browser top-layer/focus trap not tested.');
