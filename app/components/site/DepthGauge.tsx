"use client";

import { useEffect, useRef } from "react";

const MAX_DEPTH = 30; // m – hranice PADI Advanced Open Water

// Barvy ve slunečním světle v čisté vodě: hloubka (m), ve které zhruba zmizí.
// Zdroj: scubadiverinfo.com (červená ~6 m, oranžová ~15 m, žlutá ~30 m); zelená a modrá vydrží nejdéle.
const COLORS = [
  { name: "red", css: "#e5484d", gone: 6 },
  { name: "orange", css: "#f5a524", gone: 15 },
  { name: "yellow", css: "#f5d90a", gone: 30 },
  { name: "green", css: "#3dd68c", gone: 60 },
  { name: "blue", css: "#5ccff0", gone: 0 },
];

type Props = { label: string; lang?: "cs" | "en"; title?: string };

// Hloubkoměr: posun stránky = sestup z hladiny do 30 metrů.
// Ukazuje hloubku, absolutní tlak (bar a PSI; každých 10 m mořské vody přidá zhruba 1 bar)
// a barvy, které v dané hloubce ještě vidíš.
export default function DepthGauge({ label, lang = "cs", title }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const depthRef = useRef<HTMLElement>(null);
  const presRef = useRef<HTMLElement>(null);
  const dotsRef = useRef<HTMLSpanElement>(null);

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
      const psi = Math.round(bar * 14.7);
      const barTxt = lang === "cs" ? bar.toFixed(1).replace(".", ",") : bar.toFixed(1);
      if (depthRef.current) depthRef.current.textContent = `${d} m`;
      if (presRef.current) presRef.current.textContent = `${barTxt} bar · ${psi} PSI`;
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

  return (
    <div className="gauge" ref={ref} aria-hidden="true">
      <div className="gauge-scale">
        <i className="gauge-mark" />
        <span className="gauge-read" title={title ?? label}>
          <b ref={depthRef}>0 m</b>
          <small ref={presRef}>{lang === "cs" ? "1,0" : "1.0"} bar · 15 PSI</small>
          <span className="gauge-colors" ref={dotsRef}>
            {COLORS.map((c) => (
              <i key={c.name} style={{ background: c.css }} />
            ))}
          </span>
        </span>
      </div>
    </div>
  );
}
