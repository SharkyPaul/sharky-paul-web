import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Jost } from "next/font/google";
import Script from "next/script";
import SWRegister from "./components/site/SWRegister";
import "./globals.css";

const serif = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const SITE = "https://www.sharkypaul.com";
const DESC =
  "Sharky Paul – potápěč, tvůrce obsahu a DJ. Oceán, žraloci a potápění v Rudém moři, expedice v malých skupinách.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Sharky Paul – Respect the Locals | Žraloci, Rudé moře",
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
  appleWebApp: { capable: true, title: "Sharky Paul", statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  themeColor: "#0f4656",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Sharky Paul",
      givenName: "Pavel",
      alternateName: ["Pavel – Sharky Paul", "Kristian Calderon"],
      url: SITE,
      mainEntityOfPage: `${SITE}/`,
      image: { "@type": "ImageObject", url: `${SITE}/images/media/portrait.jpg`, width: 1000, height: 1000 },
      jobTitle: "Potápěč, popularizátor žraloků a DJ",
      knowsLanguage: ["cs", "en"],
      knowsAbout: [
        "žraloci",
        "potápění",
        "šnorchlování",
        "bezpečnost u moře",
        "Rudé moře",
        "Egypt",
        "ochrana oceánu",
        "Afro Tribal Bounce",
        "DJing",
        "shark safety",
        "scuba diving",
      ],
      brand: { "@id": `${SITE}/#brand` },
      email: "mailto:info@sharkypaul.com",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "PADI Advanced Open Water Diver",
          credentialCategory: "certification",
          recognizedBy: { "@type": "Organization", name: "PADI", url: "https://www.padi.com" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "SDI Open Water Diver",
          credentialCategory: "certification",
          recognizedBy: { "@type": "Organization", name: "SDI – Scuba Diving International", url: "https://www.tdisdi.com" },
        },
      ],
      description: DESC,
      sameAs: [
        "https://www.instagram.com/sharky_paul_edu",
        "https://www.tiktok.com/@sharkypaul.real",
        "https://www.youtube.com/@SharkyPaulOfficial",
        "https://open.spotify.com/artist/2GHTzhhq2NyBqjfnpyXTme",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#brand`,
      name: "Sharky Paul",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/images/brand/logo-512.png`, width: 512, height: 512 },
      email: "info@sharkypaul.com",
      founder: { "@id": `${SITE}/#person` },
      slogan: "Respect the Locals",
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
      inLanguage: ["cs-CZ", "en"],
      publisher: { "@id": `${SITE}/#brand` },
      author: { "@id": `${SITE}/#person` },
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
    <html lang="cs" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <SWRegister />
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
