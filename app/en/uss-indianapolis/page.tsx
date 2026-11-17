import type { Metadata } from "next";
import StepArticle from "../../components/StepArticle";
import { indianapolisEn } from "../../content/indianapolis";

const URL = "https://www.sharkypaul.com/en/uss-indianapolis";

export const metadata: Metadata = {
  title: "USS Indianapolis: The Hiroshima Bomb Ship and 4 Days Among Sharks",
  description:
    "The true story of USS Indianapolis: Little Boy cargo, sunk in 12 minutes, 4 days in the water and oceanic whitetip sharks. Fact vs myth, with period photos and sources.",
  alternates: {
    canonical: "/en/uss-indianapolis",
    languages: { en: "/en/uss-indianapolis", cs: "/uss-indianapolis" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "en_US",
    title: "USS Indianapolis: the ship that carried the Hiroshima bomb and four days among sharks",
    description: "Sunk in 12 minutes, 4 days in the water, sharks and a captain who was convicted. The true story with period photos.",
    images: [{ url: "/images/indianapolis/indianapolis-mare-island-1945.jpg", width: 1200, height: 818 }],
  },
};

export default function Page() {
  return <StepArticle c={indianapolisEn} />;
}
