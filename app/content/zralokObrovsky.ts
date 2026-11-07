import type { StepContent } from "../components/StepArticle";

// Článek „Žralok obrovský“ (CZ, český název žralok veliký, Cetorhinus maximus). Fakta jen z uvedených zdrojů:
// Marine Conservation Society, National Geographic, Oceana Canada, CMS (OSN), časopis Živa (AV ČR). Nic nepřidávat bez ověření.

const SOURCES_CS = [
  { name: "Marine Conservation Society – Basking shark", url: "https://www.mcsuk.org/30species/basking-shark" },
  { name: "Marine Conservation Society – Basking shark (wildlife A–Z)", url: "https://www.mcsuk.org/ocean-learning/wildlife-a-z/basking-shark/" },
  { name: "National Geographic – Basking shark", url: "https://www.nationalgeographic.com/animals/fish/facts/basking-sharks" },
  { name: "Oceana Canada – Basking shark", url: "https://oceana.ca/en/marine-life/basking-shark/" },
  { name: "CMS (Úmluva o stěhovavých druzích, OSN) – Basking Shark", url: "https://sharks.cms.int/fr/taxonomy/term/5636" },
  { name: "Živa (Akademie věd ČR) – Žralok veliký u pobřeží chorvatské Istrie", url: "https://www.ziva.avcr.cz/2004-3/zralok-veliky-u-pobrezi-chorvatske-istrie.html" },
];

export const zralokObrovskyCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/zralok-obrovsky",
  altUrl: "/en",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Žraloci · Druhy",
  title: "Žralok obrovský: druhý největší žralok, který žere jen plankton",
  lead: "Žralok obrovský je obr, který pro lidi není nebezpečný. Odborně se jmenuje Cetorhinus maximus a česky se mu říká žralok veliký, často ho lidé hledají i jako žralok obrovský. Tady je, jak je velký, čím se živí, jak dlouho žije a proč je ohrožený.",
  datePublished: "2026-11-07",
  steps: [
    {
      title: "Co je žralok obrovský",
      text: "Je to druhý největší žijící žralok a druhá největší ryba na světě, hned za žralokem velrybím. Oceana Canada uvádí, že žije ve vodách od teplých po chladné mírné šířky a že se nevyskytuje v tropech ani v polárních oblastech. Český název v odborném textu časopisu Živa je žralok veliký.",
    },
    {
      title: "Jak je velký",
      text: "National Geographic uvádí délku až 33 stop, tedy asi 10 metrů, a hmotnost až 4,5 tuny. Marine Conservation Society udává délku 12 metrů a hmotnost 4 500 kilogramů. Časopis Živa píše, že dorůstá až 14 metrů. Čísla se tedy liší podle zdroje, jde o odhady největších jedinců.",
    },
    {
      title: "Čím se živí",
      text: "Žere jen plankton. National Geographic ho řadí mezi tři druhy žraloků, které se živí filtrováním drobných organismů, konkrétně zooplanktonu. Marine Conservation Society připomíná, že přes velikost a mnoho zubů má jednoduchý jídelníček z planktonu.",
    },
    {
      title: "Jak filtruje vodu",
      text: "Podle CMS (úmluva OSN o stěhovavých druzích) plave s otevřenou tlamou a voda sama protéká přes žábry, které zachytí potravu. Marine Conservation Society uvádí, že při krmení spolkne za hodinu objem vody odpovídající dvěma olympijským bazénům.",
    },
    {
      title: "Jak rychle plave",
      text: "Pomalu. Marine Conservation Society uvádí rychlost kolem 2 mil za hodinu, tedy asi 3 kilometry za hodinu. Proto se mu říká mírný obr.",
    },
    {
      title: "Jak dlouho žije",
      text: "National Geographic uvádí průměrný věk kolem 50 let. Marine Conservation Society píše, že někteří vědci odhadují až 100 let.",
    },
    {
      title: "Je nebezpečný",
      text: "Ne. National Geographic o něm píše, že je pro lidi zcela neškodný. Přesto je dobré se řídit zásadami pro setkání s velkými zvířaty: nesahat na ně, nehonit je a držet odstup.",
    },
    {
      title: "Je ohrožený",
      text: "IUCN ho vede jako ohrožený druh (Endangered). CMS uvádí, že byl po staletí loven kvůli oleji z jater, kůži a masu, protože je pomalý, nenapadá a je velký.",
    },
  ],
  signsTitle: "Rychlé shrnutí",
  signs: [
    "Latinský název: Cetorhinus maximus, česky žralok veliký.",
    "Druhý největší žralok a ryba, délka podle zdrojů 10 až 14 metrů.",
    "Živí se výhradně planktonem, který filtruje z vody.",
    "Plave pomalu, asi 3 kilometry za hodinu.",
    "Průměrný věk kolem 50 let.",
    "Pro člověka neškodný, podle IUCN ohrožený.",
  ],
  worksTitle: "Mýty o žralokovi obrovském",
  works: [
    "„Je to nejnebezpečnější žralok, protože je největší.“ Naopak: žere jen plankton a je pro lidi neškodný.",
    "„Má zuby jako dravec, tak se musí bát.“ Zuby sice má, ale podle Marine Conservation Society z nich při krmení nic nepoužívá.",
    "„Je jich pořád dost.“ IUCN ho vede jako ohrožený druh.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Jaký je rozdíl mezi žralokem obrovským a velikým?",
      a: "Je to tentýž druh, Cetorhinus maximus. Odborný český název je žralok veliký, lidé ho často hledají jako žralok obrovský. Anglicky se jmenuje basking shark.",
    },
    {
      q: "Jak velký je žralok obrovský?",
      a: "Podle zdrojů asi 10 až 14 metrů a až 4,5 tuny. National Geographic uvádí 33 stop (asi 10 m), Marine Conservation Society 12 metrů, časopis Živa až 14 metrů.",
    },
    {
      q: "Je žralok obrovský nebezpečný pro lidi?",
      a: "Ne. Živí se jen planktonem a National Geographic ho označuje za zcela neškodného.",
    },
    {
      q: "Čím se živí žralok obrovský?",
      a: "Zooplanktonem, který filtruje z vody, když plave s otevřenou tlamou.",
    },
    {
      q: "Jak dlouho žije žralok obrovský?",
      a: "V průměru kolem 50 let, někteří vědci odhadují až 100 let.",
    },
  ],
  guideTitle: "Celá příručka Prevence zdarma",
  guideText: "Chování žraloků, krizové situace, vybavení a kontrolní seznam před ponorem v jednom PDF. Ulož si ji před cestou k moři.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  relatedTitle: "Přečti si také",
  related: [
    { label: "Žralok bílý: velikost, potrava, věk a ohrožení", url: "/zralok-bily" },
    { label: "Žralok megalodon: kdy žil a proč vyhynul", url: "/zralok-megalodon" },
    { label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" },
    { label: "Žraloci v Egyptě: jak velké je riziko", url: "/zraloci-v-egypte" },
  ],
  shareText: "Žralok obrovský: druhý největší žralok na světě žere jen plankton 🦈 a pro lidi je neškodný",
  sourcesTitle: "Zdroje",
  sources: SOURCES_CS,
  disclaimer:
    "Obecné informace ze zdrojů uvedených níže, k listopadu 2026. Údaje o velikosti se v jednotlivých zdrojích liší.",
};
