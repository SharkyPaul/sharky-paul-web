import type { Metadata } from "next";
import MythArticle, { type MythContent } from "../../components/MythArticle";

const URL = "https://www.sharkypaul.com/en/shark-myths";

export const metadata: Metadata = {
  title: "9 Shark Myths People Still Believe – and What's Actually True",
  description:
    "Can a shark smell a drop of blood miles away? Does eye contact or punching the gills keep you safe? Evidence-based answers from Sharky Paul, diver and shark educator.",
  alternates: { canonical: "/en/shark-myths", languages: { en: "/en/shark-myths", cs: "/myty-o-zralocich" } },
  openGraph: {
    type: "article",
    url: URL,
    locale: "en_US",
    title: "9 Shark Myths People Still Believe",
    description: "A drop of blood miles away, eye contact, punching the gills… What does the evidence say?",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

const SOURCES = [
  { name: "Florida Museum / ISAF – advice for divers", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/divers/" },
  { name: "ISAF – menstruation and sharks", url: "https://floridamuseum.ufl.edu/fish/isaf/reducing-risk/menstruation" },
  { name: "NSW SharkSmart", url: "https://www.sharksmart.nsw.gov.au/" },
  { name: "Huveneers et al. (2018), PeerJ", url: "https://peerj.com/articles/5554" },
  { name: "Egeberg et al. (2019), PLoS ONE", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6411110/" },
  { name: "Australian National University – first aid", url: "https://www.anu.edu.au/news/all-news/new-life-saving-technique-for-shark-attack-victims" },
];

const c: MythContent = {
  lang: "en",
  url: URL,
  altUrl: "/myty-o-zralocich",
  altLabel: "Česky",
  homeUrl: "/en",
  homeLabel: "Home",
  eyebrow: "Sharky Paul · Respect the Locals",
  title: "9 Shark Myths People Still Believe",
  lead: "Movies and viral clips turned sharks into killing machines with superpowers. Reality is different – and far more interesting. Here's what the evidence actually says.",
  mythLabel: "Myth:",
  factLabel: "Fact:",
  myths: [
    { myth: "A shark can smell a drop of blood miles away.", fact: "Sharks have a sensitive sense of smell for certain substances, such as amino acids. But the claim about a single drop of blood detected miles away is not supported by direct measurement." },
    { myth: "A shark can sense your heartbeat from far away.", fact: "The ampullae of Lorenzini detect weak electric fields, but measured ranges are short – in the order of tens of centimetres. Detecting a human heartbeat at a distance has not been measured." },
    { myth: "Eye contact keeps you safe.", fact: "There isn't enough evidence for this rule. What makes sense is keeping track of where the shark is and keeping your distance." },
    { myth: "Punching the eyes or gills is the most reliable defence.", fact: "It isn't proven as a universal method. The priority is to protect your head and torso and get out of the water as fast as possible." },
    { myth: "Jewellery and colourful clothing attract sharks.", fact: "There is no evidence that jewellery or clothing colour on its own increases risk. Many sharks also have a limited ability to distinguish colours." },
    { myth: "Menstruation significantly increases the risk of an attack.", fact: "Blood and menstruation are not proven risk factors. Still, it is sensible to postpone a dive if you have an open wound." },
    { myth: "Magnetic bracelets reliably repel sharks.", fact: "An independent test of a Sharkbanz-type device found no measurable effect. Don't rely on it for protection." },
    { myth: "A tough suit, cage or repellent guarantees protection.", fact: "They may reduce the risk or the severity of an injury, but no equipment guarantees protection. Results vary by device and species." },
    { myth: "Sharks won't show up if you're in a group.", fact: "A buddy or group helps a lot with rescue, but it is not proven to reduce the chance of an encounter on its own." },
  ],
  worksTitle: "What actually makes sense",
  works: [
    "Avoid fishing, bait and places where sharks are fed – provoked bites, especially during spearfishing, are among the best-documented risk situations.",
    "Respect local warnings and closed beaches.",
    "Dive with a buddy and agree on a plan for getting back.",
    "If you meet a shark, stay calm, don't touch it, don't chase it and don't block its path. Move steadily towards the boat or the shore.",
    "Don't wait for things to escalate – if a shark keeps approaching, end the activity and leave the water.",
  ],
  guideTitle: "Free prevention guide (PDF, in Czech)",
  guideText: "Prevention, shark behaviour, critical situations, equipment, a checklist and first steps after an incident – all in one PDF. English edition coming soon.",
  guideCta: "Download the free guide",
  guideUrl: "/prirucka",
  shareText: "9 shark myths people still believe 🦈 What's true?",
  sourcesTitle: "Sources",
  sources: SOURCES,
  disclaimer: "General information. Not a substitute for dive training, a first-aid course or instructions from local authorities.",
};

export default function Page() {
  return <MythArticle c={c} />;
}
