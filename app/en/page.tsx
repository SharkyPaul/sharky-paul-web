"use client";

import { useEffect, useState } from "react";
import ShareButtons from "../components/ShareButtons";

// Links go through /prirucka so every open/download is counted in analytics.
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

export default function HomeEn() {
  // In-app browsers (TikTok / Instagram / Facebook) cannot download files.
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
    { num: "01", name: "Egyptian herbs", desc: "Dried herbs and spices from the oases and markets of Upper Egypt.", status: "In stock" },
    { num: "02", name: "Wood & furniture from Bali", desc: "Handmade furniture and decor from tropical wood, straight from Balinese workshops.", status: "Coming soon" },
    { num: "03", name: "Madagascar vanilla", desc: "Genuine Madagascar vanilla pods — straight from the growers, no middlemen.", status: "Coming soon" },
    { num: "04", name: "Moroccan saffron", desc: "The world's most precious spice, hand-harvested in small batches from Moroccan fields.", status: "Coming soon" },
    { num: "05", name: "Pure Egyptian jasmine oil", desc: "100% natural jasmine oil and menthol crystals from Egyptian markets — intense scent, inhalation, bath.", status: "In stock" },
    { num: "06", name: "Signature perfume", desc: "An oceanic-oriental fragrance based on Sharky Paul's own formula.", status: "Limited" },
    { num: "07", name: "Ebook: Snorkelling", desc: "A snorkelling guide for everyone — a Czech manual for the Red Sea.", status: "Download" },
    { num: "08", name: "Diving collection", desc: "Diving apparel with the shark fin — camo details, durable materials.", status: "Soon" },
    { num: "09", name: "Beach collection", desc: "T-shirts, towels and accessories for beach days and after the dive.", status: "Soon" },
  ];

  return (
    <div lang="en">
      <header>
        <span className="word">SHARKY PAUL</span>
        <nav>
          <a href="#mission">About</a>
          <a href="#expedice">Expeditions</a>
          <a href="#prirucka">Free guide</a>
          <a href="#music">Music</a>
          <a href="#kolekce">Collection</a>
          <a href="#shop">Shop</a>
          <a href="#kontakt">Contact</a>
        </nav>
        <a href="/" className="lang-switch" hrefLang="cs" aria-label="Česká verze">CZ</a>
        <div className="head-social">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Sharky Paul on ${s.name}`}
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
        <h1 className="sr-only">Sharky Paul – Respect the Locals: diving, sharks and the ocean</h1>
        <div className="eyebrow">Welcome to Sharky Paul World</div>
        <img
          src="/images/respect-the-locals.webp"
          alt="Respect The Locals"
          style={{ width: "min(420px, 80vw)", marginBottom: 20 }}
        />
        <p className="hero-sub">
          The ocean, music, adventure travel and things with a story. The world through the eyes
          of someone who loves the planet in all its colours — below the surface and above it.
        </p>
        <div className="hero-cta">
          <a href="#prirucka" className="btn solid">Free guide</a>
          <a href="#mission" className="btn">Mission</a>
        </div>
      </section>

      <div className="rule" />

      <section className="mission" id="mission">
        <div className="mission-collage">
          {collageImages.map((src, i) => (
            <img key={i} src={src} alt={`Sharky Paul – diving and the ocean, photo ${i + 1}`} loading="lazy" />
          ))}
        </div>
        <div className="mission-text">
          <div className="eyebrow-sm">01 — Who is Sharky Paul</div>
          <h2>
            Ocean.
            <br />
            Music.
            <br />
            Adventure.
          </h2>
          <p>
            Sharky Paul is a <strong>diver, content creator and DJ</strong> and the founder of the
            brand of the same name. He is passionate about marine biology and shark behaviour —
            constantly learning and gathering knowledge so that we can all move forward. After
            all, oceans cover 71% of the planet.
          </p>
          <p>
            Under the Sharky Paul brand he connects the ocean, diving, education, travel and
            digital content. The goal is to show the underwater world authentically, change how
            people see sharks and promote respect for the marine environment.
          </p>
          <p>
            Part of the philosophy is the <strong>Respect the Locals</strong> project — respect for
            local communities, nature and the environment that divers and travellers move through.
          </p>
        </div>
      </section>

      <div className="rule" />

      <section className="expeditions" id="expedice">
        <div className="expeditions-grid">
          <div className="shop-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow-sm">02 — Expeditions with Sharky</div>
            <h2>
              Education.
              <br />
              Respect.
              <br />
              Adrenaline.
            </h2>
            <p>
              I'll personally take you by the hand and show you the sea through my eyes. No mass
              tourism — expeditions run privately, in a small group, with people who care about
              it as much as I do.
            </p>
            <p>
              We keep growing and work only with the best. No compromises — just quality and
              respect for the places I take you.
            </p>
            <div className="collab-card">
              <div className="collab-label">Brotherly partnership</div>
              <div className="collab-title">
                DiveZen Red Sea <span>×</span> Hamada
              </div>
              <div className="collab-desc">
                Our Red Sea expeditions run together with DiveZen Red Sea and instructor Hamada —
                people I trust and who share the same diving philosophy.
              </div>
            </div>
          </div>

          <div className="video-embed">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TBKEMZPfgyw"
              title="Sharky Paul — documentary"
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
            aria-label="Download the free shark safety guide"
          >
            <img src="/images/prirucka-prevence.jpg" loading="lazy" alt="Cover of the Prevention guide – how to stay safe around sharks" />
          </a>
          <div className="shop-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow-sm">Free download</div>
            <h2>
              Shark Safety
              <br />
              Guide
            </h2>
            <p>
              How to stay safe around sharks. A practical guide for divers, snorkellers and ocean
              lovers — prevention, shark behaviour, critical situations, equipment, a checklist and
              myths worth correcting. Currently available in Czech; English edition coming soon.
            </p>
            <p className="guide-meta">PDF · 9 A4 pages · 7 MB · Czech</p>
            {inApp && (
              <p className="guide-note">
                Using the TikTok / Instagram app? It often can't download files. Tap the three dots in
                the top right, choose <strong>Open in browser</strong> and download the guide there.
              </p>
            )}
            <div className="hero-cta" style={{ marginTop: 28 }}>
              <a href={GUIDE_URL} className="btn solid">
                Download free
              </a>
              <a href={GUIDE_URL} target="_blank" rel="noopener noreferrer" className="btn">
                Open online
              </a>
            </div>
            <ShareButtons
              url="https://www.sharkypaul.com/prirucka"
              text="Free shark safety guide from Sharky Paul 🦈"
              lang="en"
            />
            <p style={{ marginTop: 10 }}>
              <a href="/en/shark-myths" className="spotify-fallback">
                Also read: 9 shark myths people still believe →
              </a>
            </p>
            <p style={{ marginTop: 6 }}>
              <a href="/en/what-to-do-if-you-see-a-shark" className="spotify-fallback">
                New: What to do if you see a shark – step by step →
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      <section className="music" id="music">
        <div className="shop-head">
          <div className="eyebrow-sm">03 — Music</div>
          <h2>Afro Tribal Bounce</h2>
          <p>
            Besides the ocean, Sharky Paul is active in music. As a DJ and producer he develops his
            own genre{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 500 }}>Afro Tribal Bounce</strong>,
            blending African and tribal rhythms with modern electronic dance music — connecting two
            seemingly different worlds: the energy of the ocean and the energy of music.
          </p>

          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/artist/2GHTzhhq2NyBqjfnpyXTme?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Sharky Paul on Spotify"
            />
          </div>
          <a
            href="https://open.spotify.com/artist/2GHTzhhq2NyBqjfnpyXTme"
            target="_blank"
            rel="noopener noreferrer"
            className="spotify-fallback"
          >
            Open on Spotify →
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
          04 — His philosophy
        </div>
        <h2 style={{ marginBottom: 24 }}>
          Discover. Experience.
          <br />
          Create. Respect.
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
          Whether he's underwater among sharks, travelling for ocean adventures, in front of the
          camera or behind the DJ decks — his goal is to create experiences with energy, story and
          identity.
        </p>
      </section>

      <div className="rule" />

      <section className="collection" id="kolekce">
        <div className="shop-head">
          <div className="eyebrow-sm">05 — Collection</div>
          <h2>Diving &amp; Beach</h2>
          <p>
            Men's rash guards with a camo fade and women's swimwear with the Sharky Paul logo.
            Limited first edition.
          </p>
        </div>
        <div className="coll-grid">
          {collectionItems.map((item, i) => (
            <div className="coll-item" key={i}>
              <img src={item.src} alt={`Sharky Paul collection – ${item.tag}`} loading="lazy" />
              <div className="coll-tag">{item.tag}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      <section className="shop" id="shop">
        <div className="shop-head">
          <div className="eyebrow-sm">06 — Shop</div>
          <h2>Rare Cargo</h2>
          <p>
            Hard-to-find goods straight from the source — from Bali, Egypt, Madagascar and other
            places our travels take us. Limited batches, hand-picked.
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
    </div>
  );
}
