import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { sharksEgyptCs } from "../content/sharksEgypt";

const URL = "https://www.sharkypaul.com/zraloci-v-egypte";

export const metadata: Metadata = {
  title: "Žraloci v Egyptě: jak velké je riziko a jak se chovat (Hurghada, Marsa Alam)",
  description:
    "Jsou v Egyptě žraloci a je bezpečné se koupat a šnorchlovat? Co se stalo u Hurghady a Marsa Alamu, jak velké je riziko podle ISAF a 6 pravidel u moře.",
  alternates: { canonical: "/zraloci-v-egypte" },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "Žraloci v Egyptě: jak velké je riziko a jak se chovat",
    description: "Hurghada, Marsa Alam: co se opravdu stalo, jak velké je riziko a jak se u moře chovat.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={sharksEgyptCs} />;
}
