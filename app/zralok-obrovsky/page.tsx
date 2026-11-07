import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { zralokObrovskyCs } from "../content/zralokObrovsky";

const URL = "https://www.sharkypaul.com/zralok-obrovsky";

export const metadata: Metadata = {
  title: "Žralok obrovský: velikost a potrava",
  description:
    "Žralok obrovský (veliký) je druhý největší žralok světa a žere jen plankton. Velikost, věk, ohrožení a odpověď, jestli je nebezpečný.",
  alternates: { canonical: "/zralok-obrovsky" },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "Žralok obrovský: druhý největší žralok, který žere jen plankton",
    description: "Velikost, potrava, věk a ohrožení žraloka obrovského. Fakta z Marine Conservation Society a National Geographic.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={zralokObrovskyCs} />;
}
