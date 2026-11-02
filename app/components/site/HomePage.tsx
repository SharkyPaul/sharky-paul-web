import type { HomeContent } from "../../content/home";
import ShareButtons from "../ShareButtons";
import DepthGauge from "./DepthGauge";
import InAppNote from "./InAppNote";
import { EMAIL, NAV } from "./nav";
import Signature from "./Signature";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import VideoFacade from "./VideoFacade";

const SPOTIFY_ARTIST = "2GHTzhhq2NyBqjfnpyXTme";

export default function HomePage({ c }: { c: HomeContent }) {
  const isCs = c.lang === "cs";
  return (
    <div lang={c.lang}>
      <SiteHeader lang={c.lang} />
      <DepthGauge label={NAV[c.lang].depth} />

      <main id="obsah">
        {/* 0 m – hladina */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 className="hero-title" id="hero-title">
              <span className="sr-only">{c.hero.srTitle}</span>
              Respect
              <span className="l2">the Locals</span>
            </h1>
            <Signature className="hero-sig" label={isCs ? "Podpis Sharky Paul" : "Sharky Paul signature"} />
            <p className="hero-lead">{c.hero.lead}</p>
            <div className="hero-actions">
              <a href={c.hero.ctaGuideHref} className="btn solid">
                {c.hero.ctaGuide}
              </a>
              <a href="#expedice" className="link">
                {c.hero.ctaExp}
              </a>
            </div>
            <p className="hero-proof">{c.hero.proof}</p>
          </div>
          <div className="hero-media">
            <picture>
              <source type="image/webp" srcSet="/images/brand/hero-diver-900.webp 900w, /images/brand/hero-diver-1400.webp 1400w" sizes="(max-width: 900px) 100vw, 52vw" />
              <img
                src="/images/brand/hero-diver-1400.jpg"
                srcSet="/images/brand/hero-diver-900.jpg 900w, /images/brand/hero-diver-1400.jpg 1400w"
                sizes="(max-width: 900px) 100vw, 52vw"
                alt={c.hero.imgAlt}
                width={1400}
                height={1556}
                fetchPriority="high"
              />
            </picture>
          </div>
        </section>

        {/* příběh */}
        <section className="sec" id="mission" aria-labelledby="story-title">
          <div className="wrap story">
            <figure className="story-fig">
              <img src="/images/brand/desert.webp" alt={c.story.imgAlt} width={900} height={1200} loading="lazy" />
              <figcaption className="chart">{c.story.caption}</figcaption>
            </figure>
            <div>
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

        {/* expedice */}
        <section className="sec" id="expedice" aria-labelledby="exp-title">
          <div className="wrap">
            <div className="exp">
              <figure className="exp-fig">
                <img src="/images/brand/turtles.webp" alt={c.exp.imgAlt} width={1074} height={670} loading="lazy" />
                <figcaption className="chart">{c.exp.caption}</figcaption>
              </figure>
              <div>
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
            <figure className="video">
              <VideoFacade id="TBKEMZPfgyw" title={c.exp.videoTitle} playLabel={c.exp.videoPlay} />
              <figcaption className="chart">{c.exp.videoCaption}</figcaption>
            </figure>
          </div>
        </section>

        {/* žraloci */}
        <section className="sec" id="prirucka" aria-labelledby="sharks-title">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="sec-title" id="sharks-title">
                {c.sharks.title}
              </h2>
              <p>{c.sharks.intro}</p>
            </div>
            <div className="guide">
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
                <li key={r.href}>
                  <a href={r.href}>
                    <span className="reads-t">{r.title}</span>
                    <span className="reads-d">{r.text}</span>
                    <span className="reads-go">{r.go}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* hudba */}
        <section className="sec" id="music" aria-labelledby="music-title">
          <div className="wrap music">
            <div className="music-figs">
              <img className="a" src="/images/brand/dj.webp" alt={c.music.imgAlt} width={896} height={894} loading="lazy" />
              <img className="b" src="/images/brand/dj-decks.webp" alt={c.music.imgAlt2} width={900} height={836} loading="lazy" />
            </div>
            <div>
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

        {/* kolekce */}
        <section className="sec" id="kolekce" aria-labelledby="coll-title">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="sec-title" id="coll-title">
                {c.coll.title}
              </h2>
              <p>{c.coll.intro}</p>
            </div>

            <article className="drop">
              <div className="drop-media">
                <a href="/images/ocean-gear-rashguard.jpg" target="_blank" rel="noopener">
                  <img src="/images/ocean-gear-rashguard.jpg" alt={c.coll.gear.alt1} width={1000} height={1094} loading="lazy" />
                </a>
                <a href="/images/ocean-gear-collection.jpg" target="_blank" rel="noopener">
                  <img src="/images/ocean-gear-collection.jpg" alt={c.coll.gear.alt2} width={1200} height={800} loading="lazy" />
                </a>
              </div>
              <div>
                <span className="drop-state">{c.coll.gear.state}</span>
                <h3>{c.coll.gear.title}</h3>
                <p>{c.coll.gear.text}</p>
              </div>
            </article>

            <article className="drop rev">
              <div className="drop-media single">
                <a href="/images/sharky-paul-bomber.jpg" target="_blank" rel="noopener">
                  <img src="/images/sharky-paul-bomber.jpg" alt={c.coll.bomber.alt} width={1000} height={1094} loading="lazy" />
                </a>
              </div>
              <div>
                <span className="drop-state">{c.coll.bomber.state}</span>
                <h3>{c.coll.bomber.title}</h3>
                <p>{c.coll.bomber.text}</p>
                <a href={`mailto:${EMAIL}?subject=Luxury%20Bomber`} className="btn solid">
                  {c.coll.bomber.cta}
                </a>
              </div>
            </article>

            <div className="cargo" id="shop">
              <h3>{c.coll.cargoTitle}</h3>
              <p>{c.coll.cargoText}</p>
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
            </div>
          </div>
        </section>

        {/* partneři */}
        <section className="sec" id="partneri" aria-labelledby="partners-title" style={{ paddingTop: 0 }}>
          <div className="wrap partners">
            <div>
              <h2 className="sec-title" id="partners-title" style={{ fontSize: "clamp(34px,3.6vw,54px)" }}>
                {c.partners.title}
              </h2>
              <p>{c.partners.text}</p>
            </div>
            <div className="hero-cta">
              <a href={c.partners.mediaKitHref} className="btn solid">
                {c.partners.kit}
              </a>
              <a href="/downloads/sharky-paul-media-kit.pdf" className="btn">
                {c.partners.kitPdf}
              </a>
              <a href={c.partners.bookingHref} className="btn">
                {c.partners.booking}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={c.lang} />
    </div>
  );
}
