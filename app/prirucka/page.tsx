"use client";

import { useEffect } from "react";

const PDF = "/downloads/sharky-paul-prevence-zraloci.pdf";

// Mezikrok pro měření: návštěva této stránky = jedno otevření/stažení příručky.
export default function Prirucka() {
  useEffect(() => {
    const t = setTimeout(() => window.location.replace(PDF), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 6%",
        gap: 20,
      }}
    >
      <div className="eyebrow">Sharky Paul · Respect the Locals</div>
      <h1 style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(2.4rem,8vw,4rem)", letterSpacing: ".02em" }}>
        Příručka Prevence se otevírá…
      </h1>
      <p style={{ maxWidth: 460, color: "#c8dde8", lineHeight: 1.7 }}>
        Pokud se nic nestane, klepni na tlačítko níže. V aplikaci TikTok nebo Instagram zvol přes tři
        tečky vpravo nahoře <strong>Otevřít v prohlížeči</strong>.
      </p>
      <a href={PDF} className="btn solid">
        Otevřít příručku (PDF)
      </a>
      <a href="/" style={{ color: "#c8dde8", fontSize: 13, opacity: 0.8 }}>
        ← Zpět na sharkypaul.com
      </a>
    </main>
  );
}
