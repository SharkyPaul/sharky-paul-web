import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { egyptChecklistCs } from "../content/egyptChecklist";

export const metadata: Metadata = {
  title: "Šnorchlování v Egyptě: co si zabalit (checklist zdarma)",
  description:
    "Checklist od Sharky Paula: jaká maska, šnorchl a ploutve do Rudého moře, jak zvládnout proud a paniku a kde v Egyptě šnorchlovat jako začátečník.",
  alternates: { canonical: "/egypt" },
  openGraph: {
    type: "article",
    url: "https://www.sharkypaul.com/egypt",
    locale: "cs_CZ",
    title: "Šnorchlování v Egyptě: checklist zdarma",
    description: "Co si zabalit na šnorchlování v Rudém moři a jak se nezranit.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={egyptChecklistCs} />;
}
