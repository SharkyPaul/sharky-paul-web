import type { StepContent } from "../components/StepArticle";

// Článek „Žralok bílý“ (CZ). Fakta jen z uvedených zdrojů:
// NOAA Fisheries, Florida Museum (ISAF), National Geographic, Ocean Conservancy, Cabrillo Marine Aquarium (Los Angeles). Nic nepřidávat bez ověření.

const SOURCES_CS = [
  { name: "NOAA Fisheries – White Shark", url: "https://www.fisheries.noaa.gov/species/white-shark" },
  { name: "Florida Museum – White Shark (Carcharodon carcharias)", url: "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/white-shark/" },
  { name: "National Geographic – Great white shark", url: "https://www.nationalgeographic.com/animals/fish/facts/great-white-shark" },
  { name: "National Geographic – Great white shark (fakta z IUCN a Journal of Zoology)", url: "https://www.nationalgeographic.com/animals/fish/g/great-white-shark/" },
  { name: "Ocean Conservancy – Great White Shark", url: "https://oceanconservancy.org/?p=22066" },
  { name: "Cabrillo Marine Aquarium (Los Angeles) – Great white shark", url: "https://cma.recreation.parks.lacity.gov/marine-life/southern-california-species/fish/great-white-shark" },
];

export const zralokBilyCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/zralok-bily",
  altUrl: "/en",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Žraloci · Druhy",
  title: "Žralok bílý: velikost, potrava, věk a ohrožení",
  lead: "Žralok bílý je nejznámější žralok na světě, a přitom se o jeho životě ví překvapivě málo. Tady jsou ověřená fakta: jak je velký, čím se živí, jak dlouho žije, kde se vyskytuje a proč je ohrožený.",
  datePublished: "2026-11-07",
  steps: [
    {
      title: "Co je žralok bílý",
      text: "Žralok bílý (Carcharodon carcharias, anglicky great white shark) je velký, hodně se pohybující druh. NOAA Fisheries uvádí, že žije v mírných a subtropických mořích po celém světě. Florida Museum zdůrazňuje, že je to jeden z nejznámějších žraloků, ale jeho biologie je zatím poznaná jen málo.",
    },
    {
      title: "Odkud se bere jméno",
      text: "Podle Florida Museum se jmenuje podle vzhledu uloveného zvířete, které leželo břichem vzhůru na palubě s bílým břichem navrch. Vědecký název znamená podle Ocean Conservancy „zubatý“ nebo „rozeklaný zub“: z řeckého carcharos (rozeklaný) a odon (zub).",
    },
    {
      title: "Jak je velký",
      text: "National Geographic uvádí délku až 21 stop, tedy asi 6,4 metru, a hmotnost až 4 500 liber, tedy zhruba 2 tuny. Ocean Conservancy píše, že mohou přesáhnout 20 stop a vážit víc než 2,5 tuny. Zdroje se v číslech mírně liší, takže jde o odhady, ne přesné měření.",
    },
    {
      title: "Čím se živí",
      text: "Je to masožravec. Podle Cabrillo Marine Aquarium v Los Angeles se mladí žraloci živí různými rybami a dospělí hlavně mořskými savci. Dospělí žijí spíš na otevřeném moři, mláďata u pobřeží.",
    },
    {
      title: "Jak dlouho žije",
      text: "National Geographic uvádí průměrný věk přes 70 let.",
    },
    {
      title: "Mláďata",
      text: "Mladý žralok bílý měří při narození už asi 6 stop, tedy kolem 1,8 metru (zdroj: IUCN, uvádí National Geographic). Samice rodí až 17 mláďat najednou.",
    },
    {
      title: "Jaký má skus",
      text: "Podle studie v Journal of Zoology, kterou cituje National Geographic, je skus žraloka bílého více než dvacetkrát silnější než lidský.",
    },
    {
      title: "Je ohrožený",
      text: "IUCN ho vede jako zranitelný druh (Vulnerable). Florida Museum upozorňuje, že celosvětový počet není znám a regionální odhady jsou nespolehlivé. Ocean Conservancy uvádí, že kvůli cílenému lovu a vedlejším úlovkům jejich počet v některých oblastech za posledních čtyřicet let klesl až o 90 %.",
    },
    {
      title: "Je nebezpečný pro lidi",
      text: "Florida Museum uvádí, že žralok bílý má na svědomí víc smrtelných útoků na lidi než kterýkoli jiný žralok, především kvůli své velikosti, síle a způsobu lovu.",
    },
  ],
  signsTitle: "Rychlé shrnutí",
  signs: [
    "Latinský název: Carcharodon carcharias, anglicky great white shark.",
    "Délka až asi 6,4 metru, hmotnost až kolem 2 tun.",
    "Žije v mírných a subtropických mořích po celém světě.",
    "Dospělí jedinci loví hlavně mořské savce, mladí ryby.",
    "V průměru žije přes 70 let a samice rodí až 17 mláďat najednou.",
    "Podle IUCN zranitelný druh, celkový počet není znám.",
  ],
  worksTitle: "Mýty o žralokovi bílém",
  works: [
    "„Žralok bílý loví lidi.“ Podle zdrojů se dospělí žraloci živí hlavně mořskými savci.",
    "„Je jich všude plno.“ Opak je pravda: podle IUCN je zranitelný a v některých oblastech jejich počet klesl až o 90 %.",
    "„O žralokovi bílém už víme všechno.“ Florida Museum uvádí opak: jeho biologie je poznaná jen málo.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Jak velký je žralok bílý?",
      a: "Podle National Geographic měří až asi 6,4 metru (21 stop) a váží až kolem 2 tun. Ocean Conservancy uvádí, že největší jedinci mohou přesáhnout 20 stop a 2,5 tuny.",
    },
    {
      q: "Jak dlouho žije žralok bílý?",
      a: "Podle National Geographic průměrně přes 70 let.",
    },
    {
      q: "Čím se živí žralok bílý?",
      a: "Je to masožravec. Mladí žraloci jedí různé ryby, dospělí hlavně mořské savce.",
    },
    {
      q: "Je žralok bílý ohrožený?",
      a: "Ano, IUCN ho vede jako zranitelný druh. Celkový počet není znám a podle Ocean Conservancy klesl v některých oblastech až o 90 %.",
    },
    {
      q: "Kolik mláďat má žralok bílý?",
      a: "Samice rodí až 17 mláďat najednou. Mládě je při narození dlouhé asi 1,8 metru.",
    },
  ],
  guideTitle: "Celá příručka Prevence zdarma",
  guideText: "Chování žraloků, krizové situace, vybavení a kontrolní seznam před ponorem v jednom PDF. Ulož si ji před cestou k moři.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  relatedTitle: "Přečti si také",
  related: [
    { label: "Žralok megalodon: kdy žil a proč vyhynul", url: "/zralok-megalodon" },
    { label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" },
    { label: "Žraloci v Egyptě: jak velké je riziko", url: "/zraloci-v-egypte" },
    { label: "Co dělat, když potkáš žraloka – krok za krokem", url: "/co-delat-kdyz-potkas-zraloka" },
  ],
  shareText: "Žralok bílý: kolik měří, jak dlouho žije a kolik jich zbývá 🦈 ověřená fakta",
  sourcesTitle: "Zdroje",
  sources: SOURCES_CS,
  disclaimer:
    "Obecné informace ze zdrojů uvedených níže, k listopadu 2026. Údaje o velikosti a počtech se v jednotlivých zdrojích liší.",
};
