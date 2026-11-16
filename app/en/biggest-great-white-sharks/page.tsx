import type { Metadata } from "next";
import StepArticle from "../../components/StepArticle";
import { nejvetsiBiliEn } from "../../content/nejvetsiBili";

const URL = "https://www.sharkypaul.com/en/biggest-great-white-sharks";

export const metadata: Metadata = {
  title: "Biggest Great White Shark Ever Recorded: Deep Blue and Real Records",
  description:
    "How big is the biggest great white shark? Deep Blue, the 6.1 m Canadian record and why 10-metre great whites are not documented. Fact-checked, with sources.",
  alternates: {
    canonical: "/en/biggest-great-white-sharks",
    languages: { en: "/en/biggest-great-white-sharks", cs: "/nejvetsi-bili-zraloci" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "en_US",
    title: "The Biggest Great White Sharks Ever Recorded: Deep Blue and the Real Records",
    description: "How big do great whites really get? The records that hold up, Deep Blue and the exaggerated legends.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={nejvetsiBiliEn} />;
}
