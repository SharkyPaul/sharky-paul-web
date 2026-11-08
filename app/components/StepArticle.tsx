import SiteFooter from "./site/SiteFooter";
import SiteHeader from "./site/SiteHeader";
import ShareButtons from "./ShareButtons";

export type ArticleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
  creditUrl?: string;
};
export type Step = { title: string; text: string; image?: ArticleImage };
export type Faq = { q: string; a: string };
export type StepContent = {
  lang: "cs" | "en";
  url: string;
  altUrl: string;
  altLabel: string;
  homeUrl: string;
  homeLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  heroImage?: ArticleImage;
  steps: Step[];
  signsTitle: string;
  signs: string[];
  worksTitle: string;
  works: string[];
  faqTitle: string;
  faq: Faq[];
  guideTitle: string;
  guideText: string;
  guideCta: string;
  guideUrl: string;
  related?: { label: string; url: string }[];
  relatedTitle?: string;
  shareText: string;
  sourcesTitle: string;
  sources: { name: string; url: string }[];
  disclaimer: string;
  datePublished: string;
};

function Figure({ img }: { img: ArticleImage }) {
  return (
    <figure className="article-figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" />
      {img.credit && (
        <figcaption>
          {img.creditUrl ? (
            <a href={img.creditUrl} target="_blank" rel="noopener noreferrer">
              {img.credit}
            </a>
          ) : (
            img.credit
          )}
        </figcaption>
      )}
    </figure>
  );
}

export default function StepArticle({ c }: { c: StepContent }) {
  const inLanguage = c.lang === "en" ? "en" : "cs-CZ";
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: c.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.lead,
    inLanguage,
    url: c.url,
    datePublished: c.datePublished,
    image: c.heroImage ? c.heroImage.src : "https://www.sharkypaul.com/images/og-sharkypaul.jpg",
    author: { "@type": "Person", name: "Sharky Paul", url: "https://www.sharkypaul.com" },
    publisher: { "@type": "Person", name: "Sharky Paul" },
  };

  return (
    <div lang={c.lang}>
      <SiteHeader lang={c.lang} altHref={c.altUrl} />

      <main className="article" id="obsah">
        <div className="eyebrow-sm">{c.eyebrow}</div>
        <h1>{c.title}</h1>
        <p className="article-lead">{c.lead}</p>
        {c.heroImage && <Figure img={c.heroImage} />}
        <ShareButtons url={c.url} text={c.shareText} lang={c.lang} />

        <ol className="myth-list">
          {c.steps.map((s, i) => (
            <li key={i} className="myth-item">
              <div className="myth-num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h2 className="myth-q">{s.title}</h2>
                <p className="myth-a">{s.text}</p>
                {s.image && <Figure img={s.image} />}
              </div>
            </li>
          ))}
        </ol>

        <section className="works">
          <h2>{c.signsTitle}</h2>
          <ul>
            {c.signs.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </section>

        <section className="works">
          <h2>{c.worksTitle}</h2>
          <ul>
            {c.works.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </section>

        <section className="works">
          <h2>{c.faqTitle}</h2>
          {c.faq.map((f, i) => (
            <div key={i} style={{ marginBottom: 18 }}>
              <h3 className="myth-q">{f.q}</h3>
              <p className="myth-a">{f.a}</p>
            </div>
          ))}
        </section>

        <section className="article-guide">
          <h2>{c.guideTitle}</h2>
          <p>{c.guideText}</p>
          <a href={c.guideUrl} className="btn solid">
            {c.guideCta}
          </a>
        </section>

        <ShareButtons url={c.url} text={c.shareText} lang={c.lang} />

        {c.related && c.related.length > 0 && (
          <section className="article-sources">
            <h2>{c.relatedTitle}</h2>
            <ul>
              {c.related.map((r, i) => (
                <li key={i}>
                  <a href={r.url}>{r.label}</a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="article-sources">
          <h2>{c.sourcesTitle}</h2>
          <ul>
            {c.sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="article-disc">{c.disclaimer}</p>
        </section>
      </main>

      <SiteFooter lang={c.lang} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    </div>
  );
}
