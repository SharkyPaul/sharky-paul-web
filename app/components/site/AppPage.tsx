"use client";

import { useEffect, useState } from "react";
import type { AppText } from "../../content/app";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const SAVED_CACHE = "sp-saved-v1"; // stejný název používá public/sw.js
const CHECK_KEY = "sp-check-v1";

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

function readChecks(n: number): boolean[] {
  try {
    const raw = window.localStorage.getItem(CHECK_KEY);
    const arr = raw ? (JSON.parse(raw) as boolean[]) : [];
    return Array.from({ length: n }, (_, i) => Boolean(arr[i]));
  } catch {
    return Array(n).fill(false);
  }
}

export default function AppPage({ t, altHref }: { t: AppText; altHref: string }) {
  const [installEvt, setInstallEvt] = useState<InstallEvent | null>(null);
  const [standalone, setStandalone] = useState(false);
  const [ios, setIos] = useState(false);
  const [offline, setOffline] = useState(false);
  const [guide, setGuide] = useState<"idle" | "saving" | "saved">("idle");
  const [checks, setChecks] = useState<boolean[]>(() => Array(t.check.length).fill(false));

  useEffect(() => {
    setChecks(readChecks(t.check.length));
    setStandalone(window.matchMedia("(display-mode: standalone)").matches || ("standalone" in navigator && Boolean((navigator as Navigator & { standalone?: boolean }).standalone)));
    setIos(/iPhone|iPad|iPod/i.test(navigator.userAgent));

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setInstallEvt(e as InstallEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(() => setOffline(true)).catch(() => {});
    }
    if ("caches" in window) {
      caches.open(SAVED_CACHE).then((c) => c.match(t.guidePdf)).then((r) => r && setGuide("saved")).catch(() => {});
    }
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, [t.check.length, t.guidePdf]);

  const toggle = (i: number) => {
    setChecks((prev) => {
      const next = prev.map((v, j) => (j === i ? !v : v));
      try {
        window.localStorage.setItem(CHECK_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const reset = () => {
    setChecks(Array(t.check.length).fill(false));
    try {
      window.localStorage.removeItem(CHECK_KEY);
    } catch {}
  };

  const install = async () => {
    if (!installEvt) return;
    await installEvt.prompt();
    const choice = await installEvt.userChoice.catch(() => ({ outcome: "dismissed" }));
    if (choice.outcome === "accepted") setStandalone(true);
    setInstallEvt(null);
  };

  const saveGuide = async () => {
    if (typeof caches === "undefined") {
      window.open(t.guidePdf, "_blank");
      return;
    }
    setGuide("saving");
    try {
      const c = await caches.open(SAVED_CACHE);
      await c.add(t.guidePdf);
      setGuide("saved");
    } catch {
      setGuide("idle");
    }
  };

  const done = checks.filter(Boolean).length;

  return (
    <>
      <SiteHeader lang={t.lang} altHref={altHref} />
      <main className="app" id="obsah">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className="app-lead">{t.lead}</p>

        <div className="hero-actions app-actions">
          {standalone ? (
            <p className="app-status">{t.installed}</p>
          ) : installEvt ? (
            <button type="button" className="btn solid" onClick={install}>
              {t.install}
            </button>
          ) : null}
          {guide === "saved" ? (
            <a className="btn" href={t.guidePdf} target="_blank" rel="noopener">
              {t.guideOpen}
            </a>
          ) : (
            <button type="button" className="btn" onClick={saveGuide} disabled={guide === "saving"}>
              {guide === "saving" ? t.guideSaving : t.guideSave}
            </button>
          )}
        </div>
        {!standalone && !installEvt && <p className="app-hint">{ios ? t.iosHint : t.otherHint}</p>}
        <p className="app-status">{offline ? t.offlineReady : t.offlinePending}</p>

        <section className="app-block" id="setkani" aria-labelledby="sos-h">
          <h2 id="sos-h">{t.sosTitle}</h2>
          <p>{t.sosIntro}</p>
          <ol className="sos">
            {t.sos.map((s) => (
              <li key={s.b}>
                <div>
                  <b>{s.b}</b>
                  <span>{s.s}</span>
                </div>
              </li>
            ))}
          </ol>
          <a className="link app-more" href={t.sosMoreHref}>
            {t.sosMore}
          </a>
        </section>

        <section className="app-block" aria-labelledby="signs-h">
          <h2 id="signs-h">{t.signsTitle}</h2>
          <ul className="app-signs">
            {t.signs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section className="app-block" id="checklist" aria-labelledby="check-h">
          <h2 id="check-h">{t.checkTitle}</h2>
          <p>
            {t.checkIntro} <span className="app-count">{done}/{t.check.length}</span>
          </p>
          <ul className="check">
            {t.check.map((item, i) => (
              <li key={item}>
                <label>
                  <input type="checkbox" checked={checks[i]} onChange={() => toggle(i)} />
                  <span>{item}</span>
                </label>
              </li>
            ))}
          </ul>
          {done > 0 && (
            <button type="button" className="link app-more" onClick={reset}>
              {t.checkReset}
            </button>
          )}
        </section>

        <section className="app-block" aria-labelledby="help-h">
          <h2 id="help-h">{t.helpTitle}</h2>
          <p>{t.helpText}</p>
          <div className="sos-call">
            {t.calls.map((c) => (
              <a key={c.tel} className="btn" href={`tel:${c.tel}`}>
                {c.label}
              </a>
            ))}
          </div>
          <p className="app-note">{t.callsNote}</p>
        </section>

        <section className="app-block" aria-labelledby="guide-h">
          <h2 id="guide-h">{t.guideTitle}</h2>
          <p>{t.guideText}</p>
          <div className="sos-call">
            {guide === "saved" ? (
              <p className="app-status">{t.guideSaved}</p>
            ) : (
              <button type="button" className="btn solid" onClick={saveGuide} disabled={guide === "saving"}>
                {guide === "saving" ? t.guideSaving : t.guideSave}
              </button>
            )}
            <a className="btn" href={t.guidePdf} target="_blank" rel="noopener">
              {t.guideOpen}
            </a>
          </div>
        </section>

        <section className="app-block" aria-labelledby="more-h">
          <h2 id="more-h">{t.moreTitle}</h2>
          <div className="tiles">
            {t.tiles.map((x) => (
              <a key={x.href} href={x.href}>
                <b>{x.b}</b>
                <span>{x.s}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="app-block app-sources" aria-labelledby="src-h">
          <h2 id="src-h">{t.sourcesTitle}</h2>
          <ul>
            {t.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="article-disc">{t.disclaimer}</p>
        </section>
      </main>
      <SiteFooter lang={t.lang} />
    </>
  );
}
