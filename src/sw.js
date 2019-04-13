// Save the files to the user's device.
// The 'install' event is called when the ServiceWorker starts up.
self.addEventListener('install', e => {
  console.log('SW: install', e);

  // Tells the browser that the install event is not finished until we have
  // cached all of our files.
  e.waitUntil(
    caches.open('cache').then(cache => {
            return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/manifest.webmanifest'
      ]);
    })
  );
});

// Removing outdated caches.
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cache => {
      return Promise.all(cache.map(name => caches.delete(name)));
    })
  );
});

// Intercept requests and return the cached version instead.
self.addEventListener('fetch', e => {
  e.respondWith(
    // If cached file exists, return it.
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
