import type { Metadata } from "next";
import StepArticle from "../../components/StepArticle";
import { egyptEn } from "../../content/egypt";

const URL = "https://www.sharkypaul.com/en/dangerous-marine-animals-egypt";

export const metadata: Metadata = {
  title: "Dangerous Marine Animals in Egypt: First Aid",
  description:
    "What you step on in Egypt: stonefish, lionfish, stingrays, sea urchins, fire coral, cone snails and moray eels.",
  alternates: {
    canonical: "/en/dangerous-marine-animals-egypt",
    languages: { en: "/en/dangerous-marine-animals-egypt", cs: "/nebezpecna-morska-zvirata-egypt" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "en_US",
    title: "What You Step On in Egypt: 7 Dangerous Beach Animals",
    description: "Worried about sharks? Stonefish, sea urchins and fire coral are far more common. How to avoid them and first aid.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={egyptEn} />;
}
