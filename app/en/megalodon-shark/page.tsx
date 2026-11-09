import type { Metadata } from "next";
import StepArticle from "../../components/StepArticle";
import { megalodonEn } from "../../content/megalodon";

const URL = "https://www.sharkypaul.com/en/megalodon-shark";

export const metadata: Metadata = {
  title: "Megalodon Shark: Is It Still Alive? Size, Age and Extinction",
  description:
    "Is megalodon still alive? When the megalodon shark lived, how big it was, why it went extinct and why it can't hide in the Mariana Trench. Facts from the Natural History Museum.",
  alternates: {
    canonical: "/en/megalodon-shark",
    languages: { en: "/en/megalodon-shark", cs: "/zralok-megalodon" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "en_US",
    title: "Megalodon: When It Lived, How Big It Was and Why It Died Out",
    description: "The largest shark that ever lived: facts, myths and whether it really hides in the Mariana Trench.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <StepArticle c={megalodonEn} />;
}
