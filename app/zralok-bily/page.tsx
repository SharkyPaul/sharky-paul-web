import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { zralokBilyCs } from "../content/zralokBily";

const URL = "https://www.sharkypaul.com/zralok-bily";

export const metadata: Metadata = {
  title: "Žralok bílý: velikost, věk a potrava",
  description:
    "Jak velký je žralok bílý, čím se živí, jak dlouho žije a proč je ohrožený. Ověřená fakta z NOAA, Florida Museum a National Geographic.",
  alternates: { canonical: "/zralok-bily" },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "Žralok bílý: velikost, potrava, věk a ohrožení",
    description: "Ověřená fakta o žralokovi bílém: velikost, potrava, věk, mláďata a počty.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={zralokBilyCs} />;
}
