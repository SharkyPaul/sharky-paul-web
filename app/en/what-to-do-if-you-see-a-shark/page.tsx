import type { Metadata } from "next";
import StepArticle from "../../components/StepArticle";
import { encounterEn } from "../../content/encounter";

const URL = "https://www.sharkypaul.com/en/what-to-do-if-you-see-a-shark";

export const metadata: Metadata = {
  title: "What to Do If You See a Shark: 7 Steps for Divers and Snorkelers",
  description:
    "Met a shark while diving or snorkelling? Stay calm, keep watching it and leave the water smoothly. Step by step, based on Florida Museum and NSW SharkSmart advice.",
  alternates: {
    canonical: "/en/what-to-do-if-you-see-a-shark",
    languages: { en: "/en/what-to-do-if-you-see-a-shark", cs: "/co-delat-kdyz-potkas-zraloka" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "en_US",
    title: "What to Do If You See a Shark – Step by Step",
    description: "Calm, distance, your buddy and a smooth exit. What expert sources recommend when a shark shows up.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={encounterEn} />;
}
