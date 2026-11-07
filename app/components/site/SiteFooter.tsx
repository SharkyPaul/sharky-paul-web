import { EMAIL, NAV, SOCIALS, type Lang } from "./nav";
import Signature from "./Signature";

export default function SiteFooter({ lang }: { lang: Lang }) {
  const t = NAV[lang].foot;
  return (
    <footer className="site-foot" id="kontakt">
      <img
        className="foot-logo"
        src="/images/brand/respect-the-locals-logo.webp"
        alt="Respect the Locals – logo Sharky Paul"
        width={768}
        height={679}
        loading="lazy"
      />
      <Signature label={lang === "cs" ? "Podpis Sharky Paul" : "Sharky Paul signature"} />
      <p className="chart foot-tag">{t.tag}</p>

      <div className="foot-cols">
        <div>
          <h2>{t.exploreTitle}</h2>
          <ul>
            {t.explore.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{t.workTitle}</h2>
          <ul>
            {t.work.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{t.followTitle}</h2>
          <ul>
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{t.contactTitle}</h2>
          <ul>
            <li style={{ color: "var(--mist)", fontSize: 15.5 }}>{t.contactText}</li>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot-base">
        <span>
          © {new Date().getFullYear()} {t.rights}
        </span>
        <span>{t.depthNote}</span>
      </div>
    </footer>
  );
}
