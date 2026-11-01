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
import { NEIGHBORHOODS_DATA } from '../src/data/neighborhoodsData';

const origin = 'https://www.nutricionistajunior.digital';
const sitemap = new JSDOM(fs.readFileSync('dist/sitemap.xml', 'utf8'), { contentType: 'text/xml' });
const urls = [...sitemap.window.document.querySelectorAll('loc')].map(el => el.textContent!);
assert.equal(new Set(urls).size, urls.length, 'No duplicate sitemap entries');
for (const article of ARTICLES_DATA) assert(urls.includes(`${origin}/conteudos/${article.slug}`));
for (const info of Object.values(NEIGHBORHOODS_DATA)) assert(urls.includes(info.canonicalUrl));
const questions = new Set<string>();
assert.equal(LOCAL_COVERAGE.official.length, 75, '75 official neighborhoods without invented landing pages');
for (const url of urls) {
  const pathname = new URL(url).pathname;
  const insight = getPageInsight(pathname);
  assert(insight, `${url}: original insight`);
  assert(!questions.has(insight.question), `${url}: unique question`);
  questions.add(insight.question);
  const file = pathname === '/' ? 'dist/index.html' : path.join('dist', pathname.slice(1), 'index.html');
  const doc = new JSDOM(fs.readFileSync(file, 'utf8')).window.document;
  assert.equal(doc.querySelectorAll('link[rel="canonical"]').length, 1, `${url}: canonical unique`);
  assert.equal(doc.querySelector('link[rel="canonical"]')?.getAttribute('href'), url);
  assert.equal(doc.querySelectorAll('title').length, 1, `${url}: title unique`);
  assert(doc.querySelector('section[aria-label="Uma pergunta para a sua rotina"]'), `${url}: insight rendered`);
  assert(doc.querySelector('#root h1'), `${url}: visible page HTML`);
  assert(!doc.querySelector('meta[name="robots"]')?.getAttribute('content')?.includes('noindex'));
  assert((doc.querySelector('#root')?.textContent?.length || 0) > 500);
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
}
const missing = new JSDOM(fs.readFileSync('dist/404.html', 'utf8')).window.document;
assert(missing.querySelector('meta[name="robots"]')?.getAttribute('content')?.includes('noindex'));
for (const route of ['/conteudos/nao-existe', '/nutricionista-em-inventado-curitiba', '/atendimento/inventado']) {
  assert(renderToString(React.createElement(App, { initialPath: route })).includes('Página não encontrada'));
}
assert.equal(normalizePath('/SOBRE/'), '/sobre');
assert.equal(normalizePath('/blog/'), '/conteudos');
assert.equal(normalizePath('/atendimento/sjp-centro'), '/nutricionista-em-sao-jose-dos-pinhais-centro');
console.log(`PASS: ${urls.length} canonical pages with rendered body, structured data, sitemap, links and invalid-route checks.`);
