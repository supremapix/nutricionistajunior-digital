import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App, { normalizePath } from '../src/App';
import { ARTICLES_DATA } from '../src/data/contentData';
import { getPageInsight } from '../src/data/pageInsights';
import { LOCAL_COVERAGE } from '../src/data/localCoverage';
import { LOCAL_GUIDES } from '../src/data/localGuides';
import { PRERENDER_ROUTES } from '../prerender.config.js';
import { NEIGHBORHOODS_DATA } from '../src/data/neighborhoodsData';

const origin = 'https://www.nutricionistajunior.digital';
const sitemap = new JSDOM(fs.readFileSync('dist/sitemap.xml', 'utf8'), { contentType: 'text/xml' });
const urls = [...sitemap.window.document.querySelectorAll('loc')].map(el => el.textContent!);
assert.equal(new Set(urls).size, urls.length, 'No duplicate sitemap entries');
for (const article of ARTICLES_DATA) assert(urls.includes(`${origin}/conteudos/${article.slug}`));
for (const info of Object.values(NEIGHBORHOODS_DATA)) assert(urls.includes(info.canonicalUrl));
const expectedRoutes = new Set([...PRERENDER_ROUTES.map(page => `${origin}${page.path}`), ...ARTICLES_DATA.map(article => `${origin}/conteudos/${article.slug}`), ...Object.values(NEIGHBORHOODS_DATA).map(area => area.canonicalUrl), ...LOCAL_GUIDES.map(guide => `${origin}${guide.route}`), `${origin}/evolucao`]);
assert.deepEqual(new Set(urls), expectedRoutes, 'Every supported route belongs in sitemap exactly once');
const questions = new Set<string>();
const miniArticles = new Set<string>();
assert.equal(LOCAL_COVERAGE.official.length, 75, '75 official neighborhoods correctly classified');
for (const url of urls) {
  const pathname = new URL(url).pathname;
  const insight = getPageInsight(pathname);
  assert(insight, `${url}: original insight`);
  assert(!questions.has(insight.question), `${url}: unique question`);
  questions.add(insight.question);
  const file = pathname === '/' ? 'dist/index.html' : path.join('dist', pathname.slice(1), 'index.html');
  const dom = new JSDOM(fs.readFileSync(file, 'utf8'));
  const doc = dom.window.document;
  assert.equal(doc.querySelectorAll('link[rel="canonical"]').length, 1, `${url}: canonical unique`);
  assert.equal(doc.querySelector('link[rel="canonical"]')?.getAttribute('href'), url);
  assert.equal(doc.querySelectorAll('title').length, 1, `${url}: title unique`);
  assert(doc.querySelector('section[aria-label="Uma pergunta para a sua rotina"]'), `${url}: insight rendered`);
  assert(doc.querySelector('#root h1'), `${url}: visible page HTML`);
  assert(!doc.querySelector('meta[name="robots"]')?.getAttribute('content')?.includes('noindex'));
  assert((doc.querySelector('#root')?.textContent?.length || 0) > 500);
  const guide = LOCAL_GUIDES.find(guide => guide.route === pathname);
  if (guide) {
    const article = doc.querySelector('[data-local-guide-article]');
    assert(article, `${url}: complete educational miniarticle`);
    const articleText = article.textContent?.replace(/\s+/g, ' ').trim() || '';
    assert(guide.faq.length >= 2, `${url}: useful answered questions`);
    for (const faq of guide.faq) {
      assert(doc.body.textContent?.includes(faq.question), `${url}: FAQ question rendered`);
      assert(doc.body.textContent?.includes(faq.answer), `${url}: FAQ answer rendered`);
    }
    const educationalText = [guide.scenario, guide.explanation, guide.practicalStep, ...guide.faq.flatMap(faq => [faq.question, faq.answer])].join(' ');
    assert(educationalText.trim().split(/\s+/).length >= 160, `${url}: substantive educational body plus answered FAQ (at least160words)`);
    assert(!miniArticles.has(articleText), `${url}: not a duplicate article`);
    miniArticles.add(articleText);
    assert(doc.querySelector('a[href="/atendimento"]'), `${url}: discovery hub link`);
  }
  const schemas = [...doc.querySelectorAll('script[type="application/ld+json"]')].map(el => JSON.parse(el.textContent!));
  assert(!schemas.some(schema => schema['@type'] === 'Physician'));
  const practice = schemas.find(schema => schema['@type'] === 'LocalBusiness');
  assert(practice, `${url}: practice entity`);
  assert.equal(practice.openingHoursSpecification.length, 2);
  assert.equal(practice.geo, undefined);
  for (const link of doc.querySelectorAll('a[href^="/"]')) {
    const href = link.getAttribute('href')!.split(/[?#]/)[0];
    if (!href || href === '/') continue;
    assert(fs.existsSync(path.join('dist', href, 'index.html')) || fs.existsSync(path.join('dist', href)), `${url}: internal href ${href} exists`);
  }
  dom.window.close();
}
const hubDom = new JSDOM(fs.readFileSync('dist/atendimento/index.html', 'utf8'));
const hub = hubDom.window.document;
for (const [selector, count] of [['[data-coverage-official]', LOCAL_COVERAGE.official.length], ['[data-coverage-popular]', LOCAL_COVERAGE.popular.length], ['[data-coverage-municipalities]', LOCAL_GUIDES.filter(guide => guide.kind === 'municipality').length]] as const) {
  const links = hub.querySelectorAll(`${selector} a[href^="/"]`);
  assert.equal(links.length, count, `${selector}: every listed location is clickable`);
  for (const link of links) assert(urls.includes(`${origin}${link.getAttribute('href')}`), `Hub target ${link.getAttribute('href')} has complete canonical page`);
}
hubDom.window.close();
// RMC pages preserve the previously published URL set and link both ways to a city.
const oldSitemap = JSON.parse(fs.readFileSync('scripts/fixtures/published-routes-136.json', 'utf8')) as string[];
for (const old of oldSitemap) assert(urls.includes(old), `Preserved published route ${old}`);
for (const guide of LOCAL_GUIDES.filter(item => item.kind === 'urban_locality')) {
  assert(guide.source?.startsWith('https://'), `${guide.route}: primary geography source`);
  const parent = LOCAL_GUIDES.find(item => item.route === guide.parentRoute && item.kind === 'municipality');
  assert(parent, `${guide.route}: explicit municipal parent`);
  const childDom = new JSDOM(fs.readFileSync(path.join('dist', guide.route, 'index.html'), 'utf8'));
  const parentDom = new JSDOM(fs.readFileSync(path.join('dist', parent.route, 'index.html'), 'utf8'));
  assert(parentDom.window.document.querySelector(`a[href="${guide.route}"]`), `${guide.route}: city-to-neighborhood link`);
  assert(childDom.window.document.querySelector(`a[href="${parent.route}"]`), `${guide.route}: return-to-city link`);
  const trail = childDom.window.document.querySelector('nav[aria-label="Trilha de navegação"]');
  assert(trail?.textContent?.includes(parent.name), `${guide.route}: visible parent breadcrumb`);
  const schemas = [...childDom.window.document.querySelectorAll('script[type="application/ld+json"]')].map(el => JSON.parse(el.textContent!));
  const crumb = schemas.find(item => item['@type'] === 'BreadcrumbList');
  assert.equal(crumb.itemListElement.length, 4);
  assert.equal(crumb.itemListElement[2].item, `${origin}${parent.route}`);
  childDom.window.close(); parentDom.window.close();
}
const missing = new JSDOM(fs.readFileSync('dist/404.html', 'utf8')).window.document;
assert(missing.querySelector('meta[name="robots"]')?.getAttribute('content')?.includes('noindex'));
for (const route of ['/conteudos/nao-existe', '/nutricionista-em-inventado-curitiba', '/atendimento/inventado', '/nutricionista-online-em-inventado']) {
  assert(renderToString(React.createElement(App, { initialPath: route })).includes('Página não encontrada'));
}
for (const guide of LOCAL_GUIDES) assert.equal(normalizePath(`${guide.route.toUpperCase()}/`), guide.route, `${guide.route}: case/trailing-slash normalization`);
assert.equal(normalizePath('/SOBRE/'), '/sobre');
assert.equal(normalizePath('/blog/'), '/conteudos');
assert.equal(normalizePath('/atendimento/sjp-centro'), '/nutricionista-em-sao-jose-dos-pinhais-centro');
console.log(`PASS: ${urls.length} canonical pages with rendered body, structured data, sitemap, links and invalid-route checks.`);
