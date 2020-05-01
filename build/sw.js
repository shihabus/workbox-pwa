importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );

// workbox.precaching.precacheAndRoute([]);

workbox.precaching.precacheAndRoute([{"revision":"ce1e339127ad9437c24526dcb2034a02","url":"css/main.css"},{"revision":"212da1dcc756cb47c14ad40ef67d708c","url":"index.html"},{"revision":"db17b47f40e963e2f8673e5697894121","url":"js/app.js"},{"revision":"b329050ccb5bda98f0835a2dc4956b72","url":"workbox-c692813c.js"}]);