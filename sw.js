const CACHE_NAME = 'memory-vault-v1';
const FILES = [
  './',
  './index.html',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => res || fetch(e.request))
  );
});