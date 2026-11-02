import type { Metadata } from "next";
import AppPage from "../../components/site/AppPage";
import { appEn } from "../../content/app";

export const metadata: Metadata = {
  title: "Sharky Paul app – what to do if you meet a shark, even offline",
  description:
    "What to do when you meet a shark, a checklist before you get in the water, emergency numbers and a safety guide. Add the app to your home screen and use it without signal.",
  alternates: { canonical: "/en/app", languages: { en: "/en/app", cs: "/aplikace" } },
  openGraph: {
    type: "website",
    url: "https://www.sharkypaul.com/en/app",
    locale: "en_US",
    title: "Sharky Paul app – the ocean in your pocket",
    description: "What to do if you meet a shark, a checklist and a safety guide. Works offline.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <AppPage t={appEn} altHref="/aplikace" />;
}
