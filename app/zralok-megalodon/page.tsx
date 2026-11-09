import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { megalodonCs } from "../content/megalodon";

const URL = "https://www.sharkypaul.com/zralok-megalodon";

export const metadata: Metadata = {
  title: "Žralok megalodon: kdy žil a proč vyhynul",
  description:
    "Žije megalodon ještě? Kdy žil, jak velký byl, proč vyhynul a proč nemůže žít v Mariánském příkopu. Fakta z Natural History Museum.",
  alternates: {
    canonical: "/zralok-megalodon",
    languages: { cs: "/zralok-megalodon", en: "/en/megalodon-shark" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "Žralok megalodon: kdy žil, jak velký byl a proč vyhynul",
    description: "Největší žralok všech dob: fakta, mýty a odpověď, jestli žije v Mariánském příkopu.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={megalodonCs} />;
}
