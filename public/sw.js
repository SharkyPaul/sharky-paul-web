/* Sharky Paul – service worker.
   Zásady: stránky vždy nejdřív ze sítě (web se nikdy „nezasekne“ ve staré verzi),
   z mezipaměti jen když není signál. Aplikace (/aplikace, /en/app) a články o setkání
   se žralokem se ukládají pro offline. Příručku PDF ukládá uživatel tlačítkem v aplikaci. */
const VERSION = "sp-v1";
const SHELL = `${VERSION}-shell`;
const SAVED = "sp-saved-v1"; // příručka uložená uživatelem, přežije aktualizace
const OFFLINE_PAGES = ["/aplikace", "/en/app", "/co-delat-kdyz-potkas-zraloka", "/en/what-to-do-if-you-see-a-shark"];
const PRECACHE = ["/aplikace", "/en/app", "/icons/icon-192.png", "/images/brand/signature.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL).then((c) => Promise.all(PRECACHE.map((u) => c.add(u).catch(() => null)))).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== SHELL && k !== SAVED).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Stránky: síť, při výpadku mezipaměť, nakonec aplikace.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok && OFFLINE_PAGES.includes(url.pathname)) {
            const copy = res.clone();
            caches.open(SHELL).then((c) => c.put(url.pathname, copy));
          }
          return res;
        })
        .catch(async () => {
          const hit = (await caches.match(url.pathname)) || (await caches.match(req));
          if (hit) return hit;
          return (await caches.match(url.pathname.startsWith("/en") ? "/en/app" : "/aplikace")) || Response.error();
        })
    );
    return;
  }

  // Neměnné soubory Next.js: z mezipaměti, jinak ze sítě a uložit.
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok) {
              const copy = res.clone();
              caches.open(SHELL).then((c) => c.put(req, copy));
            }
            return res;
          })
      )
    );
    return;
  }

  // Uložená příručka, ikony a podpis: síť, při výpadku mezipaměť.
  if (url.pathname.startsWith("/downloads/") || url.pathname.startsWith("/icons/") || url.pathname.startsWith("/images/brand/")) {
    event.respondWith(fetch(req).catch(() => caches.match(req).then((hit) => hit || Response.error())));
  }
});
