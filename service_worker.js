
const CACHES_NAME = "app-ver1";
const urlsToBeCache = [
    "/",
    "/index.html",
    "/Images/android-chrome-192x192.png",
    "/Images/android-chrome-512x512.png",
    "/style.css",
    "/app.js",
    "/audio/Lesson Ended.mp3",
    "/audio/Lesson-Ended-4.wav"
]
//Install PWA

self.addEventListener("install", (e) => {
    e.waitUntill(caches.open(CACHES_NAME).then(cache => {
        return cache.addAll(urlsToBeCache)
    }))
})


self.addEventListener("activate", (e) => {
    console.log("Service worker activated");
})

//Fetch Resources

self.addEventListener("fetch", e => {
    e.respondWith(caches.match(e.request).then(response => {
        return response || fetch(e.request)
    })
    )
})