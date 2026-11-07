import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { piratiZKaribikuCs } from "../content/piratiZKaribiku";

const URL = "https://www.sharkypaul.com/pirati-z-karibiku";

export const metadata: Metadata = {
  title: "Piráti z Karibiku doopravdy",
  description:
    "Černovous, Anne Bonny a Mary Read, Henry Morgan, Port Royal a Tortuga: co o skutečných pirátech říkají historické zdroje.",
  alternates: { canonical: "/pirati-z-karibiku" },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "Piráti z Karibiku doopravdy: Černovous, Bonny a Read, Morgan a Tortuga",
    description: "Skutečný příběh Černovousa, dvou pirátek, Morgana, potopeného Port Royalu a ostrova Tortuga.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={piratiZKaribikuCs} />;
}
