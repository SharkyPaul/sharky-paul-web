import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { nejvetsiBiliCs } from "../content/nejvetsiBili";

const URL = "https://www.sharkypaul.com/nejvetsi-bili-zraloci";

export const metadata: Metadata = {
  title: "Největší žralok bílý na světě: Deep Blue a skutečné rekordy",
  description:
    "Jak velký je největší žralok bílý? Deep Blue, rekord 6,1 m z Kanady a proč 10metroví bílí žraloci nejsou doloženi. Ověřená fakta s odkazy na zdroje.",
  alternates: {
    canonical: "/nejvetsi-bili-zraloci",
    languages: { cs: "/nejvetsi-bili-zraloci", en: "/en/biggest-great-white-sharks" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "Největší bílí žraloci světa: Deep Blue a skutečné rekordy",
    description: "Kolik měří největší žralok bílý? Rekordy, které obstojí, Deep Blue a přehnané legendy.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={nejvetsiBiliCs} />;
}
