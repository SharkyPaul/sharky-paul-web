import type { HomeContent } from "../../content/home";
import ShareButtons from "../ShareButtons";
import DepthGauge from "./DepthGauge";
import InAppNote from "./InAppNote";
import { EMAIL, NAV } from "./nav";
import Signature from "./Signature";
import SignatureLive from "./SignatureLive";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import VideoFacade from "./VideoFacade";

const SPOTIFY_ARTIST = "2GHTzhhq2NyBqjfnpyXTme";

// Úvodní stránka: jedna myšlenka na obrazovku. Pořadí: úvod → rozcestník → čísla → příběh → žraloci
// → expedice → hudba → spolupráce → kolekce. Bloky s třídou "reveal" se při posunu jemně objeví (jen CSS).
export default function HomePage({ c }: { c: HomeContent }) {
  const isCs = c.lang === "cs";
  return (
    <div lang={c.lang}>
      <SiteHeader lang={c.lang} />
      <DepthGauge label={NAV[c.lang].depth} lang={c.lang} title={NAV[c.lang].depthTitle} help={NAV[c.lang].gaugeHelp} />

      <main id="obsah">
        {/* 0 m – hladina */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 className="hero-title" id="hero-title">
              <span className="sr-only">{c.hero.srTitle}</span>
              Respect
              <span className="l2">the Locals</span>
            </h1>
            <SignatureLive className="hero-sig" label={isCs ? "Podpis Sharky Paul" : "Sharky Paul signature"} />
            <p className="hero-lead">{c.hero.lead}</p>
            <div className="hero-actions">
              <a href={c.hero.ctaGuideHref} className="btn solid">
                {c.hero.ctaGuide}
              </a>
              <a href={c.hero.ctaSecondHref} className="link">
                {c.hero.ctaSecond}
              </a>
            </div>
          </div>
          <div className="hero-media">
            <picture>
              <source type="image/webp" srcSet="/images/brand/hero-dugong-800.webp 800w, /images/brand/hero-dugong-1190.webp 1190w" sizes="(max-width: 900px) 100vw, 52vw" />
              <img
                src="/images/brand/hero-dugong-1190.jpg"
                srcSet="/images/brand/hero-dugong-800.jpg 800w, /images/brand/hero-dugong-1190.jpg 1190w"
                sizes="(max-width: 900px) 100vw, 52vw"
                alt={c.hero.imgAlt}
                width={1190}
                height={1920}
                fetchPriority="high"
              />
            </picture>
          </div>
        </section>

        {/* rozcestník */}
        <nav className="paths" aria-label={c.paths.title}>
          <ul className="paths-list">
            {c.paths.items.map((p) => (
              <li key={p.href} className="reveal">
                <a href={p.href} className="path">
                  <img src={p.img} alt={p.alt} width={p.w} height={p.h} loading="lazy" style={{ objectPosition: p.pos }} />
                  <span className="path-copy">
                    <span className="kicker">{p.kicker}</span>
                    <span className="path-t">{p.title}</span>
                    <span className="path-go">{c.paths.go}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* čísla */}
        <section className="stats" aria-label={c.stats.title}>
          <ul className="stats-list">
            {c.stats.items.map((s) => (
              <li key={s.t} className="reveal">
                <b>{s.n}</b>
                <span>{s.t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* příběh */}
        <section className="sec" id="mission" aria-labelledby="story-title">
          <div className="wrap story">
            <figure className="story-fig reveal">
              <img src="/images/brand/boat.webp" alt={c.story.imgAlt} width={1000} height={1000} loading="lazy" />
              <figcaption className="chart">{c.story.caption}</figcaption>
            </figure>
            <div className="reveal">
              <p className="kicker">{c.kickers.story}</p>
              <h2 className="sec-title" id="story-title">
                {c.story.title}
              </h2>
              <p className="lede">{c.story.lede}</p>
              <div className="prose">
                {c.story.paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="creds">
                {c.story.creds.map((cr) => (
                  <li key={cr}>{cr}</li>
                ))}
              </ul>
              <div className="signoff">
                <Signature label={isCs ? "Podpis" : "Signature"} />
                <span>{c.story.signoff}</span>
              </div>
            </div>
          </div>
        </section>

        {/* žraloci */}
        <section className="sec" id="prirucka" aria-labelledby="sharks-title">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <p className="kicker">{c.kickers.sharks}</p>
                <h2 className="sec-title" id="sharks-title">
                  {c.sharks.title}
                </h2>
              </div>
              <p>{c.sharks.intro}</p>
            </div>
            <div className="guide reveal">
              <a href="/prirucka" className="guide-cover" aria-label={c.sharks.guideCta}>
                <img src="/images/brand/prirucka-prevence.webp" alt={c.sharks.guideAlt} width={600} height={848} loading="lazy" />
              </a>
              <div>
                <h3>{c.sharks.guideTitle}</h3>
                <p>{c.sharks.guideText}</p>
                <p className="guide-meta">{c.sharks.guideMeta}</p>
                <InAppNote text={c.sharks.inApp} />
                <div className="hero-cta">
                  <a href="/prirucka" className="btn solid">
                    {c.sharks.guideCta}
                  </a>
                </div>
                <ShareButtons url="https://www.sharkypaul.com/prirucka" text={c.sharks.shareText} lang={c.lang} />
              </div>
            </div>
            <ul className="reads">
              {c.sharks.reads.map((r) => (
                <li key={r.href} className="reveal">
                  <a href={r.href}>
                    <span className="reads-t">{r.title}</span>
                    <span className="reads-d">{r.text}</span>
                    <span className="reads-go">{r.go}</span>
                  </a>
                </li>
              ))}
            </ul>
            <figure className="video reveal">
              <VideoFacade id="TBKEMZPfgyw" title={c.sharks.videoTitle} playLabel={c.sharks.videoPlay} />
              <figcaption className="chart">{c.sharks.videoCaption}</figcaption>
            </figure>
          </div>
        </section>

        {/* expedice */}
        <section className="sec" id="expedice" aria-labelledby="exp-title">
          <div className="wrap">
            <div className="exp">
              <figure className="exp-fig reveal">
                <img src="/images/brand/turtles.webp" alt={c.exp.imgAlt} width={1074} height={670} loading="lazy" />
                <figcaption className="chart">{c.exp.caption}</figcaption>
              </figure>
              <div className="reveal">
                <p className="kicker">{c.kickers.exp}</p>
                <h2 className="sec-title" id="exp-title">
                  {c.exp.title}
                </h2>
                <div className="prose" style={{ marginTop: 28 }}>
                  {c.exp.paras.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="partner">
                  <h3>{c.exp.partnerTitle}</h3>
                  <p>{c.exp.partnerText}</p>
                  <a className="link" href="https://divezenretreats.com" target="_blank" rel="noopener noreferrer">
                    {c.exp.partnerLink}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* hudba */}
        <section className="sec" id="music" aria-labelledby="music-title">
          <div className="wrap music">
            <div className="music-figs reveal">
              <img className="a" src="/images/brand/dj.webp" alt={c.music.imgAlt} width={896} height={894} loading="lazy" />
              <img className="b" src="/images/brand/dj-decks.webp" alt={c.music.imgAlt2} width={900} height={836} loading="lazy" />
            </div>
            <div className="reveal">
              <p className="kicker">{c.kickers.music}</p>
              <h2 className="sec-title" id="music-title">
                {c.music.title}
              </h2>
              <p className="lede" style={{ marginTop: 22 }}>
                {c.music.lede}
              </p>
              <div className="prose" style={{ marginTop: 28 }}>
                {c.music.paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ol className="sets">
                {c.music.sets.map((s) => (
                  <li key={s.time}>
                    <b>{s.time}</b>
                    <span>{s.text}</span>
                  </li>
                ))}
              </ol>
              <p className="lineup">
                {c.music.lineupLabel} <strong>{c.music.lineup}</strong>.
              </p>
              <div className="spotify">
                <iframe
                  src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST}?utm_source=generator&theme=0`}
                  height="352"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  title={isCs ? "Sharky Paul na Spotify" : "Sharky Paul on Spotify"}
                />
              </div>
              <div className="hero-cta">
                <a href={`https://open.spotify.com/artist/${SPOTIFY_ARTIST}`} target="_blank" rel="noopener noreferrer" className="btn">
                  {c.music.spotifyCta}
                </a>
                <a href={c.partners.bookingHref} className="link">
                  {c.music.bookingCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* spolupráce */}
        <section className="sec" id="partneri" aria-labelledby="partners-title">
          <div className="wrap partners">
            <figure className="partners-fig reveal">
              <img src="/images/media/portrait.jpg" alt={c.partners.imgAlt} width={1000} height={1000} loading="lazy" />
            </figure>
            <div className="reveal">
              <p className="kicker">{c.kickers.partners}</p>
              <h2 className="sec-title" id="partners-title">
                {c.partners.title}
              </h2>
              <p className="partners-text">{c.partners.text}</p>
              <ul className="offer">
                {c.partners.offer.map((o) => (
                  <li key={o.t}>
                    <b>{o.t}</b>
                    <span>{o.d}</span>
                  </li>
                ))}
              </ul>
              <div className="hero-cta">
                <a href={c.partners.mediaKitHref} className="btn solid">
                  {c.partners.kit}
                </a>
                <a href="/downloads/sharky-paul-media-kit.pdf" className="btn">
                  {c.partners.kitPdf}
                </a>
                <a href={c.partners.bookingHref} className="link">
                  {c.partners.booking}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* kolekce */}
        <section className="sec" id="kolekce" aria-labelledby="coll-title">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <p className="kicker">{c.kickers.coll}</p>
                <h2 className="sec-title" id="coll-title">
                  {c.coll.title}
                </h2>
              </div>
              <p>{c.coll.intro}</p>
            </div>

            <div className="products">
              <article className="product reveal">
                <a href="/images/ocean-gear-rashguard.jpg" target="_blank" rel="noopener" className="product-img">
                  <img src="/images/ocean-gear-rashguard.jpg" alt={c.coll.gear.alt1} width={1000} height={1094} loading="lazy" />
                </a>
                <span className="drop-state">{c.coll.gear.state}</span>
                <h3>{c.coll.gear.title}</h3>
                <p>{c.coll.gear.text}</p>
                <a href="/images/ocean-gear-collection.jpg" target="_blank" rel="noopener" className="link">
                  {isCs ? "Celá kolekce" : "The full collection"}
                </a>
              </article>

              <article className="product reveal" id="shop">
                <a href="/images/sharky-paul-bomber.jpg" target="_blank" rel="noopener" className="product-img">
                  <img src="/images/sharky-paul-bomber.jpg" alt={c.coll.bomber.alt} width={1000} height={1094} loading="lazy" />
                </a>
                <span className="drop-state">{c.coll.bomber.state}</span>
                <h3>{c.coll.bomber.title}</h3>
                <p>{c.coll.bomber.text}</p>
                <a href={`mailto:${EMAIL}?subject=Luxury%20Bomber`} className="btn solid">
                  {c.coll.bomber.cta}
                </a>
              </article>
            </div>

            <details className="cargo reveal">
              <summary>
                <span className="cargo-h">{c.coll.cargoTitle}</span>
                <span className="cargo-sub">{c.coll.cargoText}</span>
              </summary>
              <ul className="cargo-list">
                {c.coll.cargo.map((it) => (
                  <li key={it.name}>
                    <span className="cargo-name">{it.name}</span>
                    <span className="cargo-desc">{it.desc}</span>
                    <span className="cargo-state">{it.state}</span>
                  </li>
                ))}
              </ul>
              <a className="link" href={`mailto:${EMAIL}?subject=${encodeURIComponent(c.coll.cargoTitle)}`}>
                {c.coll.cargoCta}
              </a>
            </details>
          </div>
        </section>
      </main>

      <SiteFooter lang={c.lang} />
      {/* profilová stránka: hlavní téma je osoba Sharky Paul (pomáhá Googlu propojit web s profily) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            url: isCs ? "https://www.sharkypaul.com/" : "https://www.sharkypaul.com/en",
            inLanguage: isCs ? "cs-CZ" : "en",
            mainEntity: { "@id": "https://www.sharkypaul.com/#person" },
            isPartOf: { "@id": "https://www.sharkypaul.com/#website" },
          }),
        }}
      />
    </div>
  );
}
