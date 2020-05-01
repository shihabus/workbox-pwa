const cacheName = 'cache-v1'

const resourcesToPreCache = [
  '/',
  '/index.html',
  '/main.css',
  '/app.js'
]

// self is the SW
self.addEventListener('install', e => {
  console.log('SW Install event')
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(resourcesToPreCache)
    })
  )
})

self.addEventListener('activate', e => {
  console.log('activate e')
})



self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
    .then(cachedResponse => {
      return cachedResponse || fetch(e.request)
  }))
})


