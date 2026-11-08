import type { StepContent } from "../components/StepArticle";

// Článek „Žralok tygří“ (CZ, Galeocerdo cuvier). Fakta jen z uvedených zdrojů:
// National Geographic, Ocean Conservancy, Florida Museum, Florida FWC, Shark Bay (sharkbay.org), Save Our Seas Foundation.
// Nic nepřidávat bez ověření.

const SOURCES_CS = [
  { name: "National Geographic – Tiger shark", url: "https://www.nationalgeographic.com/animals/fish/facts/tiger-shark" },
  { name: "Ocean Conservancy – Tiger shark", url: "https://oceanconservancy.org/wildlife-factsheet/tiger-shark" },
  { name: "Florida Museum – Tiger shark (Galeocerdo cuvier)", url: "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/tiger-shark/" },
  { name: "Florida Fish and Wildlife (FWC) – Tiger shark", url: "https://myfwc.com/wildlifehabitats/profiles/saltwater/sharks/tiger-shark/" },
  { name: "Florida Fish and Wildlife (FWC) – Tiger shark (výzkum)", url: "https://myfwc.com/research/saltwater/sharks-rays/shark-species/tiger/" },
  { name: "Shark Bay – Tiger shark", url: "https://www.sharkbay.org/publications/fact-sheets-guides/tiger-shark/" },
  { name: "Save Our Seas Foundation – Tiger shark", url: "https://saveourseas.com/worldofsharks/species/tiger-shark" },
];

export const zralokTygriCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/zralok-tygri",
  altUrl: "/en",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Žraloci · Druhy",
  title: "Žralok tygří: velikost, potrava, věk a jestli je nebezpečný",
  lead: "Žralok tygří je jeden z největších žraloků na světě a po žralokovi bílém napadá lidi nejčastěji. Odborně se jmenuje Galeocerdo cuvier. Tady je, jak je velký, čím se živí, jak dlouho žije a proč je ohrožený.",
  heroImage: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/HIHWNMS_tiger_shark_(50199857407).jpg?width=900",
    alt: "Žralok tygří plave směrem ke kameře v chráněné oblasti Hawaiian Islands Humpback Whale National Marine Sanctuary",
    width: 900,
    height: 762,
    credit: "Foto: Ed Lyman / NOAA, volné dílo, Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:HIHWNMS_tiger_shark_(50199857407).jpg",
  },
  datePublished: "2026-11-07",
  steps: [
    {
      title: "Proč se jmenuje tygří",
      text: "National Geographic uvádí, že název má podle tmavých svislých pruhů, které mají hlavně mladí žraloci. S věkem pruhy blednou a téměř zmizí.",
    },
    {
      title: "Jak je velký",
      text: "National Geographic udává délku 10 až 14 stop, tedy asi 3 až 4,3 metru, a hmotnost 850 až 1 400 liber, tedy asi 385 až 635 kilogramů. Shark Bay uvádí délku 4 až 6,5 metru. Čísla se podle zdrojů liší, protože jde o odhady typických a největších jedinců.",
    },
    {
      title: "Čím se živí",
      text: "Shark Bay uvádí, že jeho kořist tvoří mořští hadi, mláďata dugonga a delfínů, kormoráni, želvy, menší žraloci a rejnoci. Florida Museum zmiňuje, že žere zelené mořské želvy.",
    },
    {
      title: "Kde žije",
      text: "Florida Fish and Wildlife uvádí, že se vyskytuje po celém světě v tropických a teplých mírných vodách. Najdete ho v ústích řek, mělkých zátokách i na otevřeném moři.",
    },
    {
      title: "Jak dlouho žije",
      text: "Přesně se neví. Ocean Conservancy uvádí odhady od 20 do 50 let.",
    },
    {
      title: "Jak se rozmnožuje",
      text: "Florida Fish and Wildlife píše, že rodí živá mláďata po zhruba 12 měsících březosti. Ve vrhu je 10 až 70 mláďat a při narození měří 27 až 34 palců, tedy asi 69 až 86 centimetrů.",
    },
    {
      title: "Je nebezpečný pro lidi",
      text: "Save Our Seas uvádí, že co do počtu kousnutí lidí je hned za žralokem bílým, přesto jsou útoky vzácné.",
    },
    {
      title: "Je ohrožený",
      text: "IUCN ho vede jako téměř ohrožený druh (Near Threatened). Ocean Conservancy uvádí, že ho zasáhl intenzivní lov kvůli ploutvím, kůži a játrům a že se pomalu rozmnožuje, takže se populace těžko obnovují. Save Our Seas píše o poklesu populací v řádu 30 % globálně.",
    },
  ],
  signsTitle: "Rychlé shrnutí",
  signs: [
    "Latinský název: Galeocerdo cuvier.",
    "Délka podle zdrojů asi 3 až 6,5 metru, hmotnost podle National Geographic 385 až 635 kg.",
    "Mladí mají tmavé svislé pruhy, které s věkem blednou.",
    "Žere mořské hady, želvy, menší žraloky, rejnoky, ptáky a mláďata delfínů a dugonga.",
    "Odhadovaný věk 20 až 50 let.",
    "Po žralokovi bílém nejvíc kousnutí lidí, ale útoky jsou vzácné. IUCN: téměř ohrožený.",
  ],
  worksTitle: "Mýty o žralokovi tygřím",
  works: [
    "„Žraloků tygřích je pořád dost.“ IUCN ho vede jako téměř ohrožený druh a Save Our Seas píše o poklesu populací kolem 30 %.",
    "„Útočí na lidi pořád.“ Save Our Seas uvádí, že jsou útoky navzdory druhému místu v počtu kousnutí vzácné.",
    "„Pruhy má celý život.“ National Geographic uvádí, že pruhy mají hlavně mladí a s věkem téměř zmizí.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Jak velký je žralok tygří?",
      a: "Podle National Geographic 10 až 14 stop (asi 3 až 4,3 m) a 850 až 1 400 liber (asi 385 až 635 kg). Shark Bay uvádí 4 až 6,5 m.",
    },
    {
      q: "Je žralok tygří nebezpečný?",
      a: "Save Our Seas ho řadí hned za žraloka bílého v počtu kousnutí lidí, útoky ale zůstávají vzácné.",
    },
    {
      q: "Čím se živí žralok tygří?",
      a: "Mořskými hady, želvami, ptáky, menšími žraloky, rejnoky a mláďaty delfínů a dugonga.",
    },
    {
      q: "Jak dlouho žije žralok tygří?",
      a: "Přesně se neví, odhady jsou 20 až 50 let.",
    },
    {
      q: "Je žralok tygří ohrožený?",
      a: "IUCN ho vede jako téměř ohrožený druh (Near Threatened).",
    },
  ],
  guideTitle: "Celá příručka Prevence zdarma",
  guideText: "Chování žraloků, krizové situace, vybavení a kontrolní seznam před ponorem v jednom PDF. Ulož si ji před cestou k moři.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  relatedTitle: "Přečti si také",
  related: [
    { label: "Žralok bílý: velikost, potrava, věk a ohrožení", url: "/zralok-bily" },
    { label: "Žralok obrovský: druhý největší žralok, který žere jen plankton", url: "/zralok-obrovsky" },
    { label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" },
    { label: "Žraloci v Egyptě: jak velké je riziko", url: "/zraloci-v-egypte" },
  ],
  shareText: "Žralok tygří: velikost, potrava a jestli je nebezpečný 🦈 po žralokovi bílém nejvíc kousnutí lidí",
  sourcesTitle: "Zdroje",
  sources: SOURCES_CS,
  disclaimer:
    "Obecné informace ze zdrojů uvedených níže, k listopadu 2026. Údaje o velikosti se v jednotlivých zdrojích liší.",
};
