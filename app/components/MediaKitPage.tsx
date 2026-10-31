export type Stat = { value: string; label: string };
export type Deliverable = { item: string; hotel: string; agency: string };
export type MediaKitContent = {
  lang: "cs" | "en";
  altUrl: string;
  altLabel: string;
  homeUrl: string;
  homeLabel: string;
  bookingUrl: string;
  bookingLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  statsTitle: string;
  statsNote: string;
  stats: Stat[];
  aboutTitle: string;
  about: string[];
  formatsTitle: string;
  formats: { title: string; text: string }[];
  packageTitle: string;
  packageLead: string;
  packageHead: [string, string, string];
  deliverables: Deliverable[];
  termsTitle: string;
  terms: string[];
  contactTitle: string;
  contactText: string;
  igCta: string;
  tiktokCta: string;
};

const IG = "https://www.instagram.com/sharky_paul_edu";
const TIKTOK = "https://www.tiktok.com/@sharkypaul.real";

export default function MediaKitPage({ c }: { c: MediaKitContent }) {
  return (
    <div lang={c.lang}>
      <header>
        <a href={c.homeUrl} className="word" style={{ textDecoration: "none" }}>
          SHARKY PAUL
        </a>
        <nav style={{ display: "flex", gap: 18 }}>
          <a href={c.homeUrl}>{c.homeLabel}</a>
          <a href={c.bookingUrl}>{c.bookingLabel}</a>
          <a href={c.altUrl}>{c.altLabel}</a>
        </nav>
      </header>

      <main className="article">
        <div className="eyebrow-sm">{c.eyebrow}</div>
        <h1>{c.title}</h1>
        <p className="article-lead">{c.lead}</p>

        <section className="mk-section">
          <h2>{c.statsTitle}</h2>
          <div className="mk-stats">
            {c.stats.map((s, i) => (
              <div key={i} className="mk-stat">
                <div className="mk-stat-value">{s.value}</div>
                <div className="mk-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="mk-note">{c.statsNote}</p>
        </section>

        <section className="works">
          <h2>{c.aboutTitle}</h2>
          <ul>
            {c.about.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>

        <section className="mk-section">
        <h2>{c.formatsTitle}</h2>
        <ol className="myth-list">
          {c.formats.map((o, i) => (
            <li key={i} className="myth-item">
              <div className="myth-num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="myth-q">{o.title}</h3>
                <p className="myth-a">{o.text}</p>
              </div>
            </li>
          ))}
        </ol>
        </section>

        <section className="mk-section">
          <h2>{c.packageTitle}</h2>
          <p>{c.packageLead}</p>
          <div className="mk-table-wrap">
            <table className="mk-table">
              <thead>
                <tr>
                  {c.packageHead.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.deliverables.map((d, i) => (
                  <tr key={i}>
                    <td>{d.item}</td>
                    <td>{d.hotel}</td>
                    <td>{d.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="works">
          <h2>{c.termsTitle}</h2>
          <ul>
            {c.terms.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>

        <section className="article-guide" id="kontakt">
          <h2>{c.contactTitle}</h2>
          <p>{c.contactText}</p>
          <div className="hero-cta">
            <a href={IG} target="_blank" rel="noopener noreferrer" className="btn solid">
              {c.igCta}
            </a>
            <a href={TIKTOK} target="_blank" rel="noopener noreferrer" className="btn">
              {c.tiktokCta}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="foot-word">SHARKY PAUL</div>
        <div className="foot-tag">Respect the locals — on land and at sea</div>
      </footer>
    </div>
  );
}
