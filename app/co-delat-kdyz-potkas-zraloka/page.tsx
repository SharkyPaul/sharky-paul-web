import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { encounterCs } from "../content/encounter";

const URL = "https://www.sharkypaul.com/co-delat-kdyz-potkas-zraloka";

export const metadata: Metadata = {
  title: "Co dělat, když potkáš žraloka: 7 kroků pro potápěče a šnorchlaře",
  description:
    "Žralok při potápění nebo šnorchlování? Zachovej klid, sleduj ho a plynule opusť vodu. Krok za krokem podle Florida Museum a NSW SharkSmart: znaky vzrušení, obrana, první kroky.",
  alternates: {
    canonical: "/co-delat-kdyz-potkas-zraloka",
    languages: { cs: "/co-delat-kdyz-potkas-zraloka", en: "/en/what-to-do-if-you-see-a-shark" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "Co dělat, když potkáš žraloka – krok za krokem",
    description: "Klid, odstup, parťák a plynulý návrat. Co doporučují odborné zdroje, když se ve vodě objeví žralok.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={encounterCs} />;
}
