import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { gronskyZralokCs } from "../content/gronskyZralok";

const URL = "https://www.sharkypaul.com/gronsky-zralok";

export const metadata: Metadata = {
  title: "Grónský žralok: nejstarší žralok a nejdéle žijící obratlovec",
  description:
    "Jak dlouho žije grónský žralok? Nejméně 272 let, nejstarší samice 392 ± 120 let. Jak vědci určili věk, proč roste 1 cm za rok a jestli je slepý. Ověřená fakta se zdroji.",
  alternates: {
    canonical: "/gronsky-zralok",
    languages: { cs: "/gronsky-zralok", en: "/en/greenland-shark" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "Grónský žralok: nejdéle žijící obratlovec na Zemi",
    description: "Žralok, který mohl být starší než USA. Věk 392 ± 120 let, růst pod 1 cm ročně a oči, které vydrží staletí.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={gronskyZralokCs} />;
}
