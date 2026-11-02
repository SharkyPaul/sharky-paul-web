"use client";

import { useEffect, useState } from "react";
import { NAV, SOCIALS, type Lang } from "./nav";

type Props = { lang: Lang; altHref?: string };

export default function SiteHeader({ lang, altHref }: Props) {
  const t = NAV[lang];
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const lang2 = altHref ?? t.langHref;

  return (
    <>
      <a className="skip" href="#obsah">
        {t.skip}
      </a>
      <header className={`site-head${solid ? " is-solid" : ""}`}>
        <a href={t.home} className="brand" aria-label="Sharky Paul">
          <img src="/images/fin.png" alt="Sharky Paul" width={873} height={608} />
        </a>
        <nav className="site-nav" aria-label={lang === "cs" ? "Hlavní navigace" : "Main navigation"}>
          {t.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="head-tools">
          <div className="social-row">
            {SOCIALS.slice(0, 2).map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={s.name}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
          <a href={lang2} className="lang-switch" hrefLang={lang === "cs" ? "en" : "cs"} aria-label={t.langName}>
            {t.langLabel}
          </a>
          <button type="button" className="menu-btn" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>
            <span aria-hidden="true" />
            {t.menu}
          </button>
        </div>
      </header>

      {open && (
        <div className="menu" id="menu" role="dialog" aria-modal="true" aria-label={t.menu}>
          <div className="menu-top">
            <a href={t.home} className="brand" aria-label="Sharky Paul" onClick={() => setOpen(false)}>
              <img src="/images/fin.png" alt="Sharky Paul" width={873} height={608} />
            </a>
            <button type="button" className="menu-btn" style={{ display: "inline-flex" }} onClick={() => setOpen(false)} autoFocus>
              {t.close}
            </button>
          </div>
          <nav className="menu-links" aria-label={t.menu}>
            {t.links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="menu-foot">
            <div className="social-row">
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={s.name}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
            <a href={lang2} className="lang-switch" hrefLang={lang === "cs" ? "en" : "cs"}>
              {t.langName}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
