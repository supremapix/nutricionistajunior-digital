import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { JSDOM } from 'jsdom';
import App from '../src/App';
import { ARTICLES_DATA } from '../src/data/contentData';
import { NEIGHBORHOODS_DATA } from '../src/data/neighborhoodsData';
import { LOCAL_GUIDES } from '../src/data/localGuides';
import { PRERENDER_ROUTES } from '../prerender.config.js';

const dist = path.resolve('dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const origin = 'https://www.nutricionistajunior.digital';
const routes = [...new Set([
  ...PRERENDER_ROUTES.map(route => route.path),
  ...ARTICLES_DATA.map(article => `/conteudos/${article.slug}`),
  ...Object.values(NEIGHBORHOODS_DATA).map(info => new URL(info.canonicalUrl).pathname),
  '/evolucao',
  ...LOCAL_GUIDES.map(guide => guide.route),
])];

// The exact React pages are rendered, not a separate crawler-only text version.
HelmetProvider.canUseDOM = false;
for (const route of [...routes, '/404']) {
  const context: any = {};
  const body = renderToString(React.createElement(HelmetProvider, { context }, React.createElement(App, { initialPath: route })));
  const dom = new JSDOM(template);
  const doc = dom.window.document;
  // Remove template metadata owned by Helmet so every URL has one authoritative set.
  doc.head.querySelectorAll('title, meta[name="description"], meta[name="robots"], meta[name="author"], meta[name="theme-color"], meta[name="viewport"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], script[type="application/ld+json"]').forEach(node => node.remove());
  doc.getElementById('root')!.innerHTML = body;
  // React 19 / Helmet 3 render metadata as native elements. Move these out of the body.
  doc.querySelectorAll('#root title, #root meta, #root link, #root script[type=\"application/ld+json\"]').forEach(node => { node.setAttribute("data-prerender-seo", "true"); doc.head.appendChild(node); });
  // Keep existing entrance animations, but reveal their content when JavaScript is disabled.
  doc.querySelectorAll('#root [style]').forEach(node => { if ((node as HTMLElement).style.opacity === '0') node.setAttribute('data-ssr-reveal', ''); });
  doc.head.insertAdjacentHTML('beforeend', '<noscript><style>[data-ssr-reveal]{opacity:1!important;transform:none!important}</style></noscript>');
  if (!doc.querySelector('#root h1') || doc.querySelector('link[rel="canonical"]')?.getAttribute('href') !== `${origin}${route}`) throw new Error(`Missing rendered page content/SEO: ${route}`);
  const target = route === '/' ? path.join(dist, 'index.html') : route === '/404' ? path.join(dist, '404.html') : path.join(dist, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, '<!DOCTYPE html>' + doc.documentElement.outerHTML);
  dom.window.close();
  console.log(`Rendered ${route}`);
}
// Keep sitemap synchronized with actual canonical pages, without invented update dates.
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(route => `  <url><loc>${origin}${route}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
console.log(`${routes.length} indexable routes and one noindex 404 rendered with full body content.`);

// Compatibility URLs redirect to one canonical page instead of becoming duplicate content.
const aliases: Record<string, string> = { '/resultados': '/evolucao', '/artigos': '/conteudos', '/blog': '/conteudos', '/e-book': '/ebooks', '/ebook': '/ebooks', '/nutricionista-em-vila-fanny-curitiba': '/nutricionista-em-fanny-curitiba' };
for (const info of Object.values(NEIGHBORHOODS_DATA)) {
  const canonicalPath = new URL(info.canonicalUrl).pathname;
  aliases[info.altUrl] = canonicalPath;
  const legacy = `/nutricionista-em-${info.slug}-curitiba`;
  if (legacy !== canonicalPath) aliases[legacy] = canonicalPath;
}
for (const [alias, canonicalPath] of Object.entries(aliases)) {
  if (alias === canonicalPath) continue;
  const target = path.join(dist, alias.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0;url=${canonicalPath}"><link rel="canonical" href="${origin}${canonicalPath}"><title>Página atualizada | Junior Coelho</title></head><body><p>Esta página está em <a href="${canonicalPath}">seu endereço oficial</a>.</p></body></html>`);
}
fs.writeFileSync(path.join(dist, '_redirects'), `${Object.entries(aliases).map(([from, to]) => `${from} ${to} 301`).join('\n')}\n/* /404.html 404\n`);
