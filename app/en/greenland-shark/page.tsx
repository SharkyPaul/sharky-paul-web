import type { Metadata } from "next";
import StepArticle from "../../components/StepArticle";
import { gronskyZralokEn } from "../../content/gronskyZralok";

const URL = "https://www.sharkypaul.com/en/greenland-shark";

export const metadata: Metadata = {
  title: "Greenland Shark Lifespan: The Longest-Living Vertebrate",
  description:
    "How long do Greenland sharks live? At least 272 years; the oldest female was 392 ± 120. How scientists dated them, why they grow 1 cm a year and whether they are blind. Fact-checked, with sources.",
  alternates: {
    canonical: "/en/greenland-shark",
    languages: { en: "/en/greenland-shark", cs: "/gronsky-zralok" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "en_US",
    title: "Greenland Shark: The Longest-Living Vertebrate on Earth",
    description: "A shark that may be older than the USA. Aged 392 ± 120 years, growing under 1 cm a year, with eyes built to last centuries.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={gronskyZralokEn} />;
}
