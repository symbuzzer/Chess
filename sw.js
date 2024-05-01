const CACHE_NAME = 'site-static-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/Scripts/App.js',
  '/Scripts/ComputerPlayer.js',
  '/Scripts/Pieces.js',
  '/Scripts/Restart.js',
  '/Scripts/Theme.js',
  '/Images/Icons/Dropdown.png',
  '/Images/Icons/WebsiteIcon.png',
  '/Images/Icons/WebsiteIcon192.png',
  '/Images/Icons/WebsiteIcon512.png',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching assets');
        cache.addAll(assetsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cacheResponse => {
      return cacheResponse || fetch(event.request);
    })
  );
});
