import type { Metadata } from "next";
import StepArticle from "../components/StepArticle";
import { indianapolisCs } from "../content/indianapolis";

const URL = "https://www.sharkypaul.com/uss-indianapolis";

export const metadata: Metadata = {
  title: "USS Indianapolis: loď s bombou na Hirošimu a 4 dny mezi žraloky",
  description:
    "Skutečný příběh USS Indianapolis: náklad pro bombu Little Boy, potopení za 12 minut, 4 dny ve vodě a žraloci longimanus. Co je pravda a co mýtus, s dobovými fotkami a zdroji.",
  alternates: {
    canonical: "/uss-indianapolis",
    languages: { cs: "/uss-indianapolis", en: "/en/uss-indianapolis" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "USS Indianapolis: loď, která vezla bombu na Hirošimu, a čtyři dny mezi žraloky",
    description: "Potopení za 12 minut, 4 dny ve vodě, žraloci a kapitán, kterého odsoudili. Skutečný příběh s dobovými fotkami.",
    images: [{ url: "/images/indianapolis/indianapolis-mare-island-1945.jpg", width: 1200, height: 818 }],
  },
};

export default function Page() {
  return <StepArticle c={indianapolisCs} />;
}
