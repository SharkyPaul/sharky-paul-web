import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { odpuzovaceCs } from "../content/odpuzovace";

const URL = "https://www.sharkypaul.com/odpuzovace-zraloku";

export const metadata: Metadata = {
  title: "Odpuzovače žraloků: co funguje a co ne",
  description:
    "Fungují odpuzovače žraloků a magnetický náramek Sharkbanz? Vědci otestovali 5 výrobků na žralocích bílých. Měřitelně pomohl jen jeden a ani ten nic nezaručí.",
  alternates: { canonical: "/odpuzovace-zraloku" },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "Odpuzovače žraloků: co funguje a co ne",
    description: "Test 5 odpuzovačů na žralocích bílých: elektrický Freedom+ Surf pomohl, magnety a vosk ne.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={odpuzovaceCs} />;
}
