"use client";

import { useEffect, useRef } from "react";

const MAX_DEPTH = 30; // m – hranice PADI Advanced Open Water

// Hloubkoměr: posun stránky = sestup z hladiny do 30 metrů.
export default function DepthGauge({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const readRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      const read = readRef.current;
      if (!el || !read) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.setProperty("--p", p.toFixed(4));
      read.textContent = `${Math.round(p * MAX_DEPTH)} m`;
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
  }, []);

  return (
    <div className="gauge" ref={ref} aria-hidden="true">
      <div className="gauge-scale">
        <i className="gauge-mark" />
        <span className="gauge-read" ref={readRef} title={label}>
          0 m
        </span>
      </div>
    </div>
  );
}
