const CACHE_NAME = 'altaf-app-v4-4';

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

// إستراتيجية: جلب أحدث كود من السيرفر دائماً، وفي حال انقطاع النت يعرض النسخة المكيّشة
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});