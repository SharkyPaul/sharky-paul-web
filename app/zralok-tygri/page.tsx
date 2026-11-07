import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { zralokTygriCs } from "../content/zralokTygri";

const URL = "https://www.sharkypaul.com/zralok-tygri";

export const metadata: Metadata = {
  title: "Žralok tygří: velikost a potrava",
  description:
    "Žralok tygří: velikost, potrava, věk a ohrožení. Odpověď, jestli je nebezpečný pro lidi, podle National Geographic a Florida Museum.",
  alternates: { canonical: "/zralok-tygri" },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "Žralok tygří: velikost, potrava, věk a jestli je nebezpečný",
    description: "Velikost, potrava, věk a ohrožení žraloka tygřího. Fakta z National Geographic a Ocean Conservancy.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={zralokTygriCs} />;
}
