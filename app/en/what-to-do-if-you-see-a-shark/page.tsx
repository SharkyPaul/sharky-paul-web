import type { Metadata } from "next";
import StepArticle, { type StepContent } from "../../components/StepArticle";

const URL = "https://www.sharkypaul.com/en/what-to-do-if-you-see-a-shark";

export const metadata: Metadata = {
  title: "What to Do If You See a Shark: 7 Steps for Divers and Snorkelers",
  description:
    "Met a shark while diving or snorkelling? Stay calm, keep watching it and leave the water smoothly. Step by step, based on Florida Museum and NSW SharkSmart advice.",
  alternates: {
    canonical: "/en/what-to-do-if-you-see-a-shark",
    languages: { en: "/en/what-to-do-if-you-see-a-shark", cs: "/co-delat-kdyz-potkas-zraloka" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "en_US",
    title: "What to Do If You See a Shark – Step by Step",
    description: "Calm, distance, your buddy and a smooth exit. What expert sources recommend when a shark shows up.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

const SOURCES = [
  { name: "Florida Museum / ISAF – advice to divers", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/divers/" },
  { name: "Florida Museum / ISAF – advice to swimmers", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/swimmers/" },
  { name: "Florida Museum / ISAF – quick tips", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/quick-tips/" },
  { name: "NSW SharkSmart – Staying safe", url: "https://www.sharksmart.nsw.gov.au/staying-safe" },
  { name: "Queensland SharkSmart – tips", url: "https://www.daf.qld.gov.au/news-media/campaigns/sharksmart/education/tips" },
];

const c: StepContent = {
  lang: "en",
  url: URL,
  altUrl: "/co-delat-kdyz-potkas-zraloka",
  altLabel: "Česky",
  homeUrl: "/en",
  homeLabel: "Home",
  eyebrow: "Sharky Paul · Respect the Locals",
  title: "What to Do If You See a Shark",
  lead: "Most shark encounters end with the shark checking you out and swimming away. What matters is how you react. Here is a step-by-step approach based on advice from the Florida Museum (ISAF) and Australia's SharkSmart programme.",
  datePublished: "2026-10-30",
  steps: [
    {
      title: "Stay calm and hold your position",
      text: "The Florida Museum advises staying calm and holding your position as quietly as possible when you see a shark. In their view most sharks are simply curious and leave on their own. Sudden movements and splashing don't help.",
    },
    {
      title: "Keep the shark in sight",
      text: "Watch where the shark is and what it is doing. This is not 'magic' eye contact that guarantees safety – it's about knowing where it is coming from so you can react in time.",
    },
    {
      title: "Stick with your buddy",
      text: "Find your dive buddy and stay close. In open water the Florida Museum suggests going back-to-back and gradually rising to your boat. Above all, a buddy makes rescue far more likely.",
    },
    {
      title: "Put a reef or the bottom behind you",
      text: "If the shark seems agitated, back up against a reef, rock or piling to reduce the angles it can approach from. On a shore dive, the Florida Museum suggests gradually descending to the bottom to find cover.",
    },
    {
      title: "Don't chase, touch or feed",
      text: "NSW SharkSmart explicitly says: don't chase, grab, corner, spear or touch a shark, and don't feed it. Never attach speared fish to your body – keep them on a float and line.",
    },
    {
      title: "If it keeps coming back: leave the water smoothly",
      text: "If a shark repeatedly approaches or acts erratically, end the dive. Swim smoothly with minimal splashing and noise, keep watching the shark and keep your buddy close. On a patrolled beach, tell a lifeguard.",
    },
    {
      title: "If it makes contact: fight back – then get out",
      text: "According to the Florida Museum, 'playing dead' does not work. They suggest putting an object (camera, fin, pole) between you and the shark and aiming for the tip of the snout, or the eyes and gill openings. No defence is guaranteed and its effectiveness is not backed by studies – the goal is to buy a moment and leave the water as fast as possible.",
    },
  ],
  signsTitle: "Signs a shark is agitated",
  signs: [
    "Rushing towards you.",
    "A hunched back and lowered pectoral fins.",
    "Rapid zigzag swimming or quick up-and-down movements (sometimes rubbing its belly on the bottom).",
    "Fish suddenly diving for cover or acting nervous – a shark may be nearby.",
    "These descriptions come from Florida Museum and NSW SharkSmart guidance. They are not a guaranteed way to read sharks – if in doubt, get out.",
  ],
  worksTitle: "How to avoid an encounter",
  works: [
    "Swim and dive with a buddy and agree on signals and an exit plan beforehand.",
    "Avoid areas where people are fishing or using bait, and schools of fish or diving seabirds.",
    "Take extra care in murky water, near river mouths, and at dawn, dusk or night – the shark can see you, you can't see it.",
    "Don't enter the water with a bleeding wound.",
    "Dolphins nearby do not mean there are no sharks.",
    "Respect warnings and beach closures.",
  ],
  faqTitle: "FAQ",
  faq: [
    {
      q: "Should I swim away from a shark fast?",
      a: "Not in a panic. Sources agree on a smooth exit with minimal splashing and noise, watching the shark and keeping your buddy close. Frantic thrashing doesn't help.",
    },
    {
      q: "Does eye contact keep me safe?",
      a: "No. Watching the shark is useful so you know where it is. There is no evidence that eye contact by itself prevents a bite.",
    },
    {
      q: "Is hitting the gills a reliable defence?",
      a: "No. The Florida Museum recommends fighting back during an attack and aiming at the snout, eyes or gills, but it is a last resort with no guarantee. Protect your head and torso and get out of the water.",
    },
    {
      q: "What if someone is bitten?",
      a: "Get the injured person out of the water, call emergency services immediately (112 in the EU) and stop the bleeding with firm direct pressure. See the free Prevention guide for first steps.",
    },
  ],
  guideTitle: "Get the free Prevention guide",
  guideText: "Emergency situations, shark behaviour, gear, a pre-dive checklist and first steps after an incident – in one PDF (Czech).",
  guideCta: "Download the free guide",
  guideUrl: "/prirucka",
  relatedTitle: "Also read",
  related: [{ label: "9 shark myths people still believe", url: "/en/shark-myths" }],
  shareText: "What to do if you see a shark 🦈 Step by step – send it to a friend heading to the sea",
  sourcesTitle: "Sources",
  sources: SOURCES,
  disclaimer: "General information. Not a substitute for dive training, a first-aid course or instructions from local authorities.",
};

export default function Page() {
  return <StepArticle c={c} />;
}
