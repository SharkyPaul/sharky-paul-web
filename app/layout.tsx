import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE = "https://www.sharkypaul.com";
const DESC =
  "Sharky Paul – potápěč, tvůrce obsahu a DJ. Oceán, žraloci a potápění v Rudém moři, expedice v malých skupinách, hudba Afro Tribal Bounce a příručka Prevence zdarma ke stažení. Respect the Locals.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Sharky Paul – Respect the Locals | Potápění, žraloci, Rudé moře",
    template: "%s | Sharky Paul",
  },
  description: DESC,
  keywords: [
    "Sharky Paul",
    "Respect the Locals",
    "žraloci",
    "potápění",
    "Rudé moře",
    "potápěčské expedice",
    "šnorchlování",
    "bezpečnost u žraloků",
    "příručka prevence",
    "Afro Tribal Bounce",
    "Egypt potápění",
  ],
  authors: [{ name: "Sharky Paul", url: SITE }],
  creator: "Sharky Paul",
  alternates: { canonical: "/", languages: { cs: "/", en: "/en", "x-default": "/" } },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Sharky Paul",
    locale: "cs_CZ",
    alternateLocale: ["en_US"],
    title: "Sharky Paul – Respect the Locals",
    description: DESC,
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630, alt: "Sharky Paul – Respect the Locals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharky Paul – Respect the Locals",
    description: DESC,
    images: ["/images/og-sharkypaul.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Sharky Paul",
      url: SITE,
      image: `${SITE}/images/og-sharkypaul.jpg`,
      jobTitle: "Potápěč, tvůrce obsahu a DJ",
      description: DESC,
      sameAs: [
        "https://www.instagram.com/sharky_paul_edu",
        "https://www.tiktok.com/@sharkypaul.real",
        "https://www.youtube.com/@SharkyPaulOfficial",
        "https://open.spotify.com/artist/2GHTzhhq2NyBqjfnpyXTme",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Sharky Paul",
      inLanguage: "cs-CZ",
      publisher: { "@id": `${SITE}/#person` },
    },
    {
      "@type": "DigitalDocument",
      name: "Prevence – Jak se chovat bezpečně v přítomnosti žraloků",
      description:
        "Praktický průvodce pro potápěče, šnorchlaře a milovníky oceánu: prevence, chování žraloků, krizové situace, vybavení, kontrolní seznam a mýty.",
      url: `${SITE}/downloads/sharky-paul-prevence-zraloci.pdf`,
      encodingFormat: "application/pdf",
      inLanguage: "cs-CZ",
      isAccessibleForFree: true,
      author: { "@id": `${SITE}/#person` },
      image: `${SITE}/images/prirucka-prevence.jpg`,
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Vercel Web Analytics – bez cookies, počítá návštěvy stránek */}
        <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
