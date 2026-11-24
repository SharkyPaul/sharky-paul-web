import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { daryCs } from "../content/dary";

export const metadata: Metadata = {
  title: "10 Kč z každého e-booku na ochranu žraloků | Sharky Paul",
  description:
    "Transparentní přehled darů: z každého prodaného e-booku Sharky Paula jde 10 Kč na ochranu žraloků přes Be Sea. Každý dar zveřejněný s datem a částkou.",
  alternates: { canonical: "/dary" },
  openGraph: {
    type: "article",
    url: "https://www.sharkypaul.com/dary",
    locale: "cs_CZ",
    title: "10 Kč z každého e-booku na ochranu žraloků",
    description: "Každý dar zveřejněný s datem a částkou.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={daryCs} />;
}
