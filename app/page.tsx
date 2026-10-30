"use client";

import { useEffect, useState } from "react";

// Odkaz vede přes stránku /prirucka, aby se každé otevření/stažení započítalo v analytice.
const GUIDE_URL = "/prirucka";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sharky_paul_edu",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.73 3.73 0 0 1-1.38-.9 3.73 3.73 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.15c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.71 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@sharkypaul.real",
    path: "M16.6 5.82c-1.03-.9-1.6-2.2-1.6-3.6h-3.03v13.66c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.3 0 .58.05.85.13V9.9a6 6 0 0 0-.85-.06 6 6 0 1 0 6 6V9.6c1.24.88 2.75 1.4 4.38 1.4V8a4.9 4.9 0 0 1-2.85-1.18z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@SharkyPaulOfficial",
    path: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z",
  },
];

export default function Home() {
  // V aplikacích TikTok / Instagram / Facebook vestavěný prohlížeč neumí stahovat soubory.
  const [inApp, setInApp] = useState(false);
  useEffect(() => {
    const ua = navigator.userAgent || "";
    setInApp(/TikTok|musical_ly|Bytedance|BytedanceWebview|Instagram|FBAN|FBAV|FB_IAB/i.test(ua));
  }, []);
  const collageImages = Array.from({ length: 12 }, (_, i) => `/images/coll-${i + 1}.jpg`);
  const collectionItems = [
    { src: "/images/shop-men1.jpg", tag: "Rash guard — Ash" },
    { src: "/images/shop-men2.jpg", tag: "Rash guard — Fin Fade" },
    { src: "/images/shop-men3.jpg", tag: "Rash guard — Scale" },
    { src: "/images/shop-women1.jpg", tag: "Ocean One-Piece — Respect the Locals" },
    { src: "/images/shop-women2.jpg", tag: "Ocean One-Piece — Deep Blue" },
  ];

  const shopItems = [
    { num: "01", name: "Egyptské byliny", desc: "Sušené byliny a koření z oáz a trhů Horního Egypta.", status: "Skladem" },
    { num: "02", name: "Dřevo & nábytek z Bali", desc: "Ručně vyráběný nábytek a dekorace z tropického dřeva přímo z balijských dílen.", status: "Připravujeme" },
    { num: "03", name: "Vanilka z Madagaskaru", desc: "Pravé madagaskarské vanilkové lusky — přímo od pěstitelů, bez prostředníků.", status: "Připravujeme" },
    { num: "04", name: "Šafrán z Maroka", desc: "Nejvzácnější koření světa, ruční sklizeň v malých šaržích přímo z marockých polí.", status: "Připravujeme" },
    { num: "05", name: "Pravý jasmínový olej z Egypta", desc: "100% přírodní jasmínový olej a mentolové krystaly z egyptských trhů — intenzivní vůně, inhalace, lázeň.", status: "Skladem" },
    { num: "06", name: "Signature parfém", desc: "Oceánsko-orientální vůně podle vlastní receptury Sharky Paul.", status: "Limitovaně" },
    { num: "07", name: "Ebook: Šnorchlování", desc: "Průvodce šnorchlováním pro každého — český manuál pro Rudé moře.", status: "Ke stažení" },
    { num: "08", name: "Diving kolekce", desc: "Potápěčské oblečení s žraločí ploutví — camo detaily, odolné materiály.", status: "Brzy" },
    { num: "09", name: "Beach kolekce", desc: "Trička, ručníky a doplňky pro dny na pláži i po ponoru.", status: "Brzy" },
  ];

  return (
    <>
      <header>
        <span className="word">SHARKY PAUL</span>
        <nav>
          <a href="#mission">O mně</a>
          <a href="#expedice">Expedice</a>
          <a href="#prirucka">Příručka</a>
          <a href="#music">Hudba</a>
          <a href="#kolekce">Kolekce</a>
          <a href="#shop">Obchod</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <div className="head-social">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Sharky Paul na ${s.name}`}
              title={s.name}
              className="head-social-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
      </header>

      <section className="hero">
        <img className="hero-fin" src="/images/fin.png" alt="Sharky Paul logo" fetchPriority="high" />
        <h1 className="sr-only">Sharky Paul – Respect the Locals: potápění, žraloci a oceán</h1>
        <div className="eyebrow">Welcome to Sharky Paul World</div>
        <img
          src="/images/respect-the-locals.webp"
          alt="Respect The Locals"
          style={{ width: "min(420px, 80vw)", marginBottom: 20 }}
        />
        <p className="hero-sub">
          Oceán, hudba, cesty za dobrodružstvím a věci, které mají svůj příběh. Svět viděný očima
          někoho, kdo miluje planetu ve všech jejích barvách — pod hladinou i nad ní.
        </p>
        <div className="hero-cta">
          <a href="#shop" className="btn solid">Obchod</a>
          <a href="#mission" className="btn">Mise</a>
        </div>
      </section>

      <div className="rule" />

      <section className="mission" id="mission">
        <div className="mission-collage">
          {collageImages.map((src, i) => (
            <img key={i} src={src} alt={`Sharky Paul – potápění a oceán, foto ${i + 1}`} loading="lazy" />
          ))}
        </div>
        <div className="mission-text">
          <div className="eyebrow-sm">01 — Kdo je Sharky Paul</div>
          <h2>
            Moře.
            <br />
            Hudba.
            <br />
            Dobrodružství.
          </h2>
          <p>
            Sharky Paul je <strong>potápěč, tvůrce obsahu, DJ</strong> a zakladatel stejnojmenné
            značky. Nadšeně se věnuje zkoumání mořské biologie a chování žraloků — neustále se
            učí, prohlubuje si znalosti a shromažďuje informace, abychom se v tom mohli posouvat
            všichni. Vždyť oceány pokrývají 71 % planety.
          </p>
          <p>
            Pod značkou Sharky Paul propojuje oceán, potápění, vzdělávání, cestování a digitální
            tvorbu. Cílem je přibližovat lidem svět pod hladinou autenticky, měnit pohled na
            žraloky a podporovat respekt k mořskému prostředí.
          </p>
          <p>
            Součástí filozofie je i projekt <strong>Respect the Locals</strong> — respekt k
            místním komunitám, přírodě a prostředí, ve kterém se potápěči a cestovatelé pohybují.
          </p>
        </div>
      </section>

      <div className="rule" />

      <section className="expeditions" id="expedice">
        <div className="expeditions-grid">
          <div className="shop-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow-sm">02 — Expedice se Sharkym</div>
            <h2>
              Edukace.
              <br />
              Respekt.
              <br />
              Adrenalin.
            </h2>
            <p>
              Osobně tě vezmu za ruku a ukážu ti moře mýma očima. Žádná masová turistika —
              expedice probíhají na privátní úrovni, v malé skupině, s lidmi, kterým na tom
              záleží stejně jako mně.
            </p>
            <p>
              Neustále se rozvíjíme a pracujeme jen s těmi nejlepšími. Žádné kompromisy, jen
              kvalita a respekt k místu, kam tě beru.
            </p>
            <div className="collab-card">
              <div className="collab-label">Bratrská spolupráce</div>
              <div className="collab-title">
                DiveZen Red Sea <span>×</span> Hamada
              </div>
              <div className="collab-desc">
                Expedice v Rudém moři realizujeme ve spolupráci s DiveZen Red Sea a instruktorem
                Hamadou — lidmi, kterým věřím a se kterými sdílím stejnou filozofii potápění.
              </div>
            </div>
          </div>

          <div className="video-embed">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TBKEMZPfgyw"
              title="Sharky Paul — dokument"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <div className="rule" />

      <section className="guide" id="prirucka">
        <div className="guide-grid">
          <a
            href={GUIDE_URL}
            
            className="guide-cover"
            aria-label="Stáhnout příručku Prevence zdarma"
          >
            <img src="/images/prirucka-prevence.jpg" alt="Obálka příručky Prevence – jak se chovat bezpečně v přítomnosti žraloků" />
          </a>
          <div className="shop-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow-sm">Zdarma ke stažení</div>
            <h2>
              Příručka
              <br />
              Prevence
            </h2>
            <p>
              Jak se chovat bezpečně v přítomnosti žraloků. Praktický průvodce pro potápěče,
              šnorchlaře a milovníky oceánu — prevence, chování žraloků, krizové situace,
              vybavení, kontrolní seznam a mýty, které je dobré opravit.
            </p>
            <p className="guide-meta">PDF · 9 stran A4 · 7 MB</p>
            {inApp && (
              <p className="guide-note">
                Jsi v aplikaci (TikTok / Instagram)? Ta často neumí stahovat soubory. Klepni na
                tři tečky vpravo nahoře a zvol <strong>Otevřít v prohlížeči</strong>, pak příručku
                stáhni.
              </p>
            )}
            <div className="hero-cta" style={{ marginTop: 28 }}>
              <a href={GUIDE_URL} className="btn solid">
                Stáhnout zdarma
              </a>
              <a href={GUIDE_URL} target="_blank" rel="noopener noreferrer" className="btn">
                Otevřít online
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      <section className="music" id="music">
        <div className="shop-head">
          <div className="eyebrow-sm">03 — Hudba</div>
          <h2>Afro Tribal Bounce</h2>
          <p>
            Vedle oceánu je Sharky Paul aktivní i v hudbě. Působí jako DJ a producent a rozvíjí
            vlastní hudební směr{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 500 }}>Afro Tribal Bounce</strong>,
            kde propojuje africké a kmenové rytmy s moderní elektronickou taneční hudbou. Jeho
            tvorba tak spojuje dva zdánlivě odlišné světy — energii oceánu a energii hudby.
          </p>

          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/artist/2GHTzhhq2NyBqjfnpyXTme?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Sharky Paul na Spotify"
            />
          </div>
          <a
            href="https://open.spotify.com/artist/2GHTzhhq2NyBqjfnpyXTme"
            target="_blank"
            rel="noopener noreferrer"
            className="spotify-fallback"
          >
            Otevřít profil na Spotify →
          </a>
        </div>
      </section>

      <div className="rule" />

      <section
        className="philosophy"
        id="filozofie"
        style={{ textAlign: "center", background: "var(--navy2)" }}
      >
        <div className="eyebrow-sm" style={{ justifyContent: "center", display: "flex" }}>
          04 — Jeho filozofie
        </div>
        <h2 style={{ marginBottom: 24 }}>
          Poznávat. Zažívat.
          <br />
          Tvořit. Respektovat.
        </h2>
        <p
          style={{
            maxWidth: 620,
            margin: "0 auto",
            color: "#c8dde8",
            fontSize: 16,
            lineHeight: 1.85,
          }}
        >
          Ať už je pod hladinou mezi žraloky, na cestách za mořským dobrodružstvím, před kamerou
          nebo za DJ pultem — jeho cílem je vytvářet zážitky, které mají energii, příběh a vlastní
          identitu.
        </p>
      </section>

      <div className="rule" />

      <section className="collection" id="kolekce">
        <div className="shop-head">
          <div className="eyebrow-sm">05 — Kolekce</div>
          <h2>Diving &amp; Beach</h2>
          <p>
            Rash guardy pro muže s camo přechodem a plavky s logem Sharky Paul pro ženy.
            Limitovaná první série.
          </p>
        </div>
        <div className="coll-grid">
          {collectionItems.map((item, i) => (
            <div className="coll-item" key={i}>
              <img src={item.src} alt={`Sharky Paul kolekce – ${item.tag}`} loading="lazy" />
              <div className="coll-tag">{item.tag}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      <section className="shop" id="shop">
        <div className="shop-head">
          <div className="eyebrow-sm">06 — Obchod</div>
          <h2>Vzácný náklad</h2>
          <p>
            Těžko dostupné komodity přímo od zdroje — z Bali, Egypta, Madagaskaru i dalších míst,
            kam nás zavedou cesty. Limitované série, ruční výběr.
          </p>
        </div>
        <div className="shop-list">
          {shopItems.map((item) => (
            <div className="item" key={item.num}>
              <div className="item-num">{item.num}</div>
              <div>
                <div className="item-name">{item.name}</div>
                <div className="item-desc">{item.desc}</div>
              </div>
              <div className="item-status">{item.status}</div>
            </div>
          ))}
        </div>
      </section>

      <footer id="kontakt">
        <div className="foot-word">SHARKY PAUL</div>
        <div className="foot-tag">Respect the locals — on land and at sea</div>
        <div className="foot-social">
          <a href="https://www.tiktok.com/@sharkypaul.real" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.6 5.82c-1.03-.9-1.6-2.2-1.6-3.6h-3.03v13.66c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.3 0 .58.05.85.13V9.9a6 6 0 0 0-.85-.06 6 6 0 1 0 6 6V9.6c1.24.88 2.75 1.4 4.38 1.4V8a4.9 4.9 0 0 1-2.85-1.18z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/@SharkyPaulOfficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/sharky_paul_edu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.73 3.73 0 0 1-1.38-.9 3.73 3.73 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.15c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.71 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z"/>
            </svg>
          </a>
          <a href="#" aria-label="E-mail" className="social-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 9L2 6v12h20V6l-10 7zm0-2 9.5-6.5H2.5L12 11z"/>
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}
