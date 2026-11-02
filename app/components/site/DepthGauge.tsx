"use client";

import { useEffect, useRef } from "react";

const MAX_DEPTH = 30; // m – hranice PADI Advanced Open Water
const PSI_PER_BAR = 14.5;

// Barvy ve slunečním světle v čisté vodě: hloubka (m), ve které zhruba zmizí.
// Zdroj: scubadiverinfo.com (červená ~6 m, oranžová ~15 m, žlutá ~30 m); zelená a modrá vydrží nejdéle.
const COLORS = [
  { name: "red", css: "#e5484d", gone: 6 },
  { name: "orange", css: "#f5a524", gone: 15 },
  { name: "yellow", css: "#f5d90a", gone: 30 },
  { name: "green", css: "#3dd68c", gone: 60 },
  { name: "blue", css: "#5ccff0", gone: 0 },
];

// Popisek k barevným tečkám podle hloubky (pro laiky).
const COLOR_LABEL = {
  cs: ["všechny barvy", "mizí červená", "mizí oranžová", "mizí žlutá", "zbývá zelená a modrá"],
  en: ["all colours", "red is fading", "orange is fading", "yellow is fading", "green and blue remain"],
};
const colorStage = (d: number) => (d <= 2 ? 0 : d < 6 ? 1 : d < 15 ? 2 : d < 30 ? 3 : 4);

type Help = { label: string; title: string; items: { b: string; t: string }[]; close: string };
type Props = { label: string; lang?: "cs" | "en"; title?: string; help?: Help };

// Hloubkoměr: posun stránky = sestup z hladiny do 30 metrů.
// Ukazuje hloubku, absolutní tlak (bar a PSI; každých 10 m mořské vody přidá zhruba 1 bar)
// a barvy, které v dané hloubce ještě vidíš. Otazník otevře vysvětlení pro laiky
// (nativní <details>, funguje i bez JavaScriptu).
export default function DepthGauge({ label, lang = "cs", title, help }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const depthRef = useRef<HTMLElement>(null);
  const presRef = useRef<HTMLElement>(null);
  const dotsRef = useRef<HTMLSpanElement>(null);
  const colorTxtRef = useRef<HTMLElement>(null);
  const helpRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const d = Math.round(p * MAX_DEPTH);
      el.style.setProperty("--p", p.toFixed(4));
      const bar = 1 + d / 10;
      const psi = Math.round(bar * PSI_PER_BAR);
      const barTxt = lang === "cs" ? bar.toFixed(1).replace(".", ",") : bar.toFixed(1);
      if (depthRef.current) depthRef.current.textContent = `${d} m`;
      if (presRef.current) presRef.current.textContent = `${barTxt} bar · ${psi} PSI`;
      if (colorTxtRef.current) colorTxtRef.current.textContent = COLOR_LABEL[lang][colorStage(d)];
      const dots = dotsRef.current?.children;
      if (dots) {
        COLORS.forEach((c, i) => {
          const o = c.gone ? Math.max(0.12, 1 - d / c.gone) : 1;
          (dots[i] as HTMLElement).style.opacity = o.toFixed(2);
        });
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [lang]);

  const closeHelp = () => {
    if (helpRef.current) helpRef.current.open = false;
  };

  return (
    <div className="gauge" ref={ref}>
      <div className="gauge-scale" aria-hidden="true">
        <i className="gauge-mark" />
        <span className="gauge-read" title={title ?? label}>
          <b ref={depthRef}>0 m</b>
          <small ref={presRef}>{lang === "cs" ? "1,0" : "1.0"} bar · 15 PSI</small>
          <span className="gauge-colorrow">
            <span className="gauge-colors" ref={dotsRef}>
              {COLORS.map((c) => (
                <i key={c.name} style={{ background: c.css }} />
              ))}
            </span>
            <em ref={colorTxtRef}>{COLOR_LABEL[lang][0]}</em>
          </span>
        </span>
      </div>
      {help && (
        <details className="gauge-help" ref={helpRef}>
          <summary aria-label={help.label} title={help.label}>
            ?
          </summary>
          <div className="gauge-panel" role="note">
            <p className="gauge-panel-t">{help.title}</p>
            <dl>
              {help.items.map((it) => (
                <div key={it.b}>
                  <dt>{it.b}</dt>
                  <dd>{it.t}</dd>
                </div>
              ))}
            </dl>
            <button type="button" className="link gauge-close" onClick={closeHelp}>
              {help.close}
            </button>
          </div>
        </details>
      )}
    </div>
  );
}
