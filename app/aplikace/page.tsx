import type { Metadata } from "next";
import AppPage from "../components/site/AppPage";
import { appCs } from "../content/app";

export const metadata: Metadata = {
  title: "Aplikace: co dělat při setkání se žralokem",
  description:
    "Postup při setkání se žralokem, kontrolní seznam před vstupem do vody, tísňová čísla a příručka Prevence. Ulož si aplikaci na plochu, funguje i bez signálu.",
  alternates: { canonical: "/aplikace", languages: { cs: "/aplikace", en: "/en/app" } },
  openGraph: {
    type: "website",
    url: "https://www.sharkypaul.com/aplikace",
    locale: "cs_CZ",
    title: "Aplikace Sharky Paul – oceán v kapse",
    description: "Co dělat, když potkáš žraloka, kontrolní seznam a příručka Prevence. Funguje i offline.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <AppPage t={appCs} altHref="/en/app" />;
}
