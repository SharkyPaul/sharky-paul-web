import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { egyptCs } from "../content/egypt";

const URL = "https://www.sharkypaul.com/nebezpecna-morska-zvirata-egypt";

export const metadata: Metadata = {
  title: "Nebezpečná zvířata v moři v Egyptě: odranec, ježovky, rejnoci a první pomoc",
  description:
    "Na co v Egyptě šlapeš: odranec, perutýn, rejnok, ježovky, ohnivý korál, homolice a muréna. Jak se jim vyhnout u pláže v Rudém moři a první pomoc podle DAN. Hurghada, Marsa Alam, Sharm.",
  alternates: {
    canonical: "/nebezpecna-morska-zvirata-egypt",
    languages: { cs: "/nebezpecna-morska-zvirata-egypt", en: "/en/dangerous-marine-animals-egypt" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "Na co v Egyptě šlapeš: 7 nebezpečných zvířat u pláže",
    description: "Bojíš se žraloků? Řeš spíš odrance, ježovky a ohnivý korál. Jak se jim vyhnout a první pomoc.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={egyptCs} />;
}
