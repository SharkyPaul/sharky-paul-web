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
    <main className="redirect">
      <span className="sig" style={{ width: 220 }} role="img" aria-label="Podpis Sharky Paul" />
      <h1>Příručka Prevence se otevírá…</h1>
      <p>
        Pokud se nic nestane, klepni na tlačítko níže. V aplikaci TikTok nebo Instagram zvol přes tři
        tečky vpravo nahoře <strong>Otevřít v&nbsp;prohlížeči</strong>.
      </p>
      <a href={PDF} className="btn solid">
        Otevřít příručku (PDF)
      </a>
      <a href="/" className="link">
        Zpět na sharkypaul.com
      </a>
    </main>
  );
}
