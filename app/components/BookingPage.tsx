export type Offer = { title: string; text: string };
export type BookingContent = {
  lang: "cs" | "en";
  url: string;
  altUrl: string;
  altLabel: string;
  homeUrl: string;
  homeLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  offers: Offer[];
  whyTitle: string;
  why: string[];
  contactTitle: string;
  contactText: string;
  email?: string;
  emailCta: string;
  igCta: string;
  listenCta: string;
};

const IG = "https://www.instagram.com/sharky_paul_edu";
const SPOTIFY = "https://open.spotify.com/artist/2GHTzhhq2NyBqjfnpyXTme";

export default function BookingPage({ c }: { c: BookingContent }) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sharky Paul",
    url: "https://www.sharkypaul.com",
    jobTitle: ["DJ", "Diver", "Content creator"],
    sameAs: [IG, "https://www.tiktok.com/@sharkypaul.real", "https://www.youtube.com/@SharkyPaulOfficial", SPOTIFY],
    ...(c.email ? { email: `mailto:${c.email}` } : {}),
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

        <ol className="myth-list">
          {c.offers.map((o, i) => (
            <li key={i} className="myth-item">
              <div className="myth-num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h2 className="myth-q">{o.title}</h2>
                <p className="myth-a">{o.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <section className="works">
          <h2>{c.whyTitle}</h2>
          <ul>
            {c.why.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </section>

        <section className="article-guide" id="kontakt">
          <h2>{c.contactTitle}</h2>
          <p>{c.contactText}</p>
          <div className="hero-cta">
            {c.email && (
              <a href={`mailto:${c.email}?subject=Booking%20Sharky%20Paul`} className="btn solid">
                {c.emailCta}
              </a>
            )}
            <a href={IG} target="_blank" rel="noopener noreferrer" className={c.email ? "btn" : "btn solid"}>
              {c.igCta}
            </a>
            <a href={SPOTIFY} target="_blank" rel="noopener noreferrer" className="btn">
              {c.listenCta}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="foot-word">SHARKY PAUL</div>
        <div className="foot-tag">Respect the locals — on land and at sea</div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
    </div>
  );
}
