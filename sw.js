/* INCOSE Quiz service worker: offline app shell. Same-origin only; cross-origin requests are never intercepted. */
const CACHE_PREFIX = 'incose-quiz-';
const CACHE = CACHE_PREFIX + 'v2';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png'];
const SCOPE_PATH = new URL('./', self.location).pathname;

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // let cross-origin traffic pass through untouched
  if (!url.pathname.startsWith(SCOPE_PATH)) return;

  if (req.mode === 'navigate') {
    // Network-first so updates arrive promptly; fall back to the cached shell offline.
    event.respondWith(
      fetch(req).then(res => {
        if (res && res.ok && res.type === 'basic') {
          // Refresh both shell keys so the start_url ('./') never serves a stale copy offline.
          const a = res.clone(), b = res.clone();
          event.waitUntil(caches.open(CACHE).then(c => Promise.all([c.put('./', a), c.put('./index.html', b)])));
        }
        return res;
      }).catch(() =>
        caches.match('./index.html')
          .then(r => r || caches.match('./'))
          .then(r => r || caches.match(req, { ignoreSearch: true }))
      )
    );
    return;
  }

  // Cache-first for the rest of the same-origin app shell.
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }))
  );
});
