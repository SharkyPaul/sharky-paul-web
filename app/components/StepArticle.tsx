import ShareButtons from "./ShareButtons";

export type Step = { title: string; text: string };
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
    image: "https://www.sharkypaul.com/images/og-sharkypaul.jpg",
    author: { "@type": "Person", name: "Sharky Paul", url: "https://www.sharkypaul.com" },
    publisher: { "@type": "Person", name: "Sharky Paul" },
  };

  return (
    <div lang={c.lang}>
      <header>
        <a href={c.homeUrl} className="word" style={{ textDecoration: "none" }}>
          SHARKY PAUL
        </a>
        <nav style={{ display: "flex" }}>
          <a href={c.homeUrl}>{c.homeLabel}</a>
          <a href={c.altUrl}>{c.altLabel}</a>
        </nav>
      </header>

      <main className="article">
        <div className="eyebrow-sm">{c.eyebrow}</div>
        <h1>{c.title}</h1>
        <p className="article-lead">{c.lead}</p>
        <ShareButtons url={c.url} text={c.shareText} lang={c.lang} />

        <ol className="myth-list">
          {c.steps.map((s, i) => (
            <li key={i} className="myth-item">
              <div className="myth-num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h2 className="myth-q">{s.title}</h2>
                <p className="myth-a">{s.text}</p>
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

      <footer>
        <div className="foot-word">SHARKY PAUL</div>
        <div className="foot-tag">Respect the locals — on land and at sea</div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    </div>
  );
}
