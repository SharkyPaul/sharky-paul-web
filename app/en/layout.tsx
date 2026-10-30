import type { Metadata } from "next";

const DESC =
  "Sharky Paul – diver, content creator and DJ. Sharks, ocean education and Red Sea diving expeditions in small groups, Afro Tribal Bounce music and a free shark safety guide. Respect the Locals.";

export const metadata: Metadata = {
  title: { absolute: "Sharky Paul – Respect the Locals | Sharks, Diving, Red Sea" },
  description: DESC,
  alternates: { canonical: "/en", languages: { cs: "/", en: "/en", "x-default": "/" } },
  openGraph: {
    type: "website",
    url: "https://www.sharkypaul.com/en",
    siteName: "Sharky Paul",
    locale: "en_US",
    alternateLocale: ["cs_CZ"],
    title: "Sharky Paul – Respect the Locals",
    description: DESC,
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630, alt: "Sharky Paul – Respect the Locals" }],
  },
  twitter: { card: "summary_large_image", title: "Sharky Paul – Respect the Locals", description: DESC, images: ["/images/og-sharkypaul.jpg"] },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
