// Cache only this site's versioned application assets; never cache contact data.
const CACHE_PREFIX = 'jr-coelho-nutri-';
const CACHE_NAME = `${CACHE_PREFIX}v2`;
const STATIC_ASSETS = ['/', '/manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((names) => Promise.all(names
    .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
    .map((name) => caches.delete(name)))));
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin || url.search) return;
  const navigation = event.request.mode === 'navigate';
  if (!navigation && !url.pathname.startsWith('/assets/') && url.pathname !== '/manifest.json') return;
  event.respondWith((async () => {
    try {
      const response = await fetch(event.request);
      if (response.ok && response.type === 'basic') {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(event.request, response.clone());
      }
      return response;
    } catch {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      // Do not substitute the homepage's content/canonical for another URL.
      if (navigation) return new Response('<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sem conexão | Junior Coelho</title><body><h1>Você está sem conexão</h1><p>Esta página ainda não está disponível offline. Reconecte-se e tente novamente.</p><a href="/">Voltar ao início</a></body></html>', { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
      return Response.error();
    }
  })());
});
