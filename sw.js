/* Service worker — Il Manuale della Mamma
   Cache base per funzionamento offline (app shell + dati). */

const CACHE_NAME = "manuale-mamma-v3";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./data.js",
  "./manifest.webmanifest",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/cover-1.png", "./assets/cover-1-wide.png",
  "./assets/cover-2.png", "./assets/cover-2-wide.png",
  "./assets/cover-3.png", "./assets/cover-3-wide.png",
  "./assets/cover-4.png", "./assets/cover-4-wide.png",
  "./assets/cover-5.png", "./assets/cover-5-wide.png",
  "./assets/cover-6.png", "./assets/cover-6-wide.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  // Rete prima (network-first): così gli aggiornamenti dell'app si vedono subito;
  // in assenza di connessione, si usa la copia salvata in cache.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
