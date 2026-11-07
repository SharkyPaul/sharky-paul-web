import type { StepContent } from "../components/StepArticle";

// Článek „Žraloci v Egyptě“ (CZ). Fakta jen z uvedených zdrojů:
// ISAF / University of Florida (statistika 2025), Al Jazeera (Hurghada 2023), ANSA a The New Arab (Marsa Alam 2024),
// Florida Museum a NSW SharkSmart (chování). Nic nepřidávat bez ověření.

const SOURCES_CS = [
  { name: "University of Florida / ISAF – shark bites worldwide in 2025", url: "https://news.ufl.edu/2026/02/shark-bites/" },
  { name: "Al Jazeera – smrtelný útok tygřího žraloka u Hurghady (červen 2023)", url: "https://www.aljazeera.com/news/2023/6/8/russian-man-killed-in-shark-attack-off-egypts-red-sea-resort" },
  { name: "ANSA – tygří žralok u Marsa Alamu (prosinec 2024)", url: "https://ansa.it/english/news/2024/12/30/tiger-shark-killed-italian-tourist-says-egypt_8d40d5cd-68ba-4226-b2ca-464112d69175.html" },
  { name: "The New Arab – útok mimo vyznačenou zónu pro koupání (prosinec 2024)", url: "https://www.newarab.com/news/shark-attack-egypts-red-sea-kills-tourist-injures-another" },
  { name: "Florida Museum / ISAF – doporučení pro plavce", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/swimmers/" },
  { name: "NSW SharkSmart – Staying safe", url: "https://www.sharksmart.nsw.gov.au/staying-safe" },
  { name: "GOV.UK – Egypt: getting help (tísňová čísla)", url: "https://www.gov.uk/foreign-travel-advice/egypt/getting-help" },
];

export const sharksEgyptCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/zraloci-v-egypte",
  altUrl: "/en/what-to-do-if-you-see-a-shark",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Egypt · Žraloci",
  title: "Žraloci v Egyptě: jak velké je riziko a jak se chovat u moře",
  lead: "Letíš do Hurghady nebo do Marsa Alamu a v hlavě máš videa ze zpráv? Žraloci v Rudém moři žijí a smrtelné útoky se tu v posledních letech staly. Zároveň jsou vzácné a většině rizika předejdeš jednoduchými pravidly. Tady je, co se opravdu stalo, jak velké riziko to je a jak se u moře chovat.",
  datePublished: "2026-11-02",
  steps: [
    {
      title: "Jak velké riziko to je",
      text: "Podle International Shark Attack File (Florida Museum, University of Florida) bylo v roce 2025 na celém světě 65 nevyprovokovaných kousnutí žralokem a 9 z nich skončilo smrtí. Desetiletý průměr je 72 kousnutí a 6 úmrtí ročně – na celou planetu a miliony lidí ve vodě. Riziko není nulové, ale je velmi malé.",
    },
    {
      title: "Co se v Egyptě stalo v posledních letech",
      text: "V červnu 2023 zabil u Hurghady tygří žralok mladého ruského muže, který v Egyptě žil. V prosinci 2024 napadl tygří žralok u Marsa Alamu dva italské turisty: jeden zemřel, druhý byl lehce zraněn. Egyptské ministerstvo životního prostředí uvedlo, že k útoku došlo v hluboké vodě mimo vyznačenou zónu pro koupání.",
    },
    {
      title: "Úřady po útoku zavírají pláže",
      text: "Po útoku u Hurghady v roce 2023 zakázaly egyptské úřady koupání, šnorchlování a vodní sporty na 74 kilometrech pobřeží. Po útoku u Marsa Alamu v roce 2024 zavřely dotčený úsek moře na dva dny. Když hotel nebo pláž vyhlásí zákaz vstupu do vody, platí to i pro tebe – i když ostatní plavou.",
    },
    {
      title: "Plav tam, kde je to povolené",
      text: "Drž se vyznačené zóny pro koupání a hotelového vstupu na útes. Nevyplouvej daleko do hluboké vody za bójky a za hranu útesu, pokud nejsi na organizovaném ponoru s průvodcem. U smrtelného útoku z roku 2024 úřady výslovně uvedly, že se stal mimo vyznačenou zónu.",
    },
    {
      title: "Nekrm ryby a na nic nesahej",
      text: "NSW SharkSmart radí žraloka nikdy nekrmit, nehonit, nezahánět do kouta a nedotýkat se ho. Totéž platí pro ryby: krmení u útesu přitahuje dravce. Ulovené ryby ani zbytky jídla ve vodě nemají co dělat.",
    },
    {
      title: "Nikdy sám",
      text: "Šnorchluj a plav s parťákem. Florida Museum zdůrazňuje, že parťák hlavně výrazně zvyšuje šanci na rychlou pomoc, když se něco stane – a to platí u žraloka stejně jako u křeče nebo proudu.",
    },
    {
      title: "Když žraloka uvidíš",
      text: "Zůstaň v klidu, necákej a nespouštěj ho z očí. Florida Museum uvádí, že většina žraloků je jen zvědavá a odpluje sama. Klidně a bez prudkých pohybů se vrať k břehu nebo k lodi a dej vědět ostatním. Celý postup krok za krokem najdeš v článku Co dělat, když potkáš žraloka.",
    },
  ],
  signsTitle: "Kontrolní seznam před vstupem do vody",
  signs: [
    "Zeptej se na hotelové recepci nebo u potápěčského centra, jestli neplatí zákaz koupání.",
    "Plav a šnorchluj jen ve vyznačené zóně a s parťákem.",
    "Nevyplouvej do hluboké vody za bójky a za hranu útesu na vlastní pěst.",
    "Nekrm ryby a nenos do vody jídlo ani úlovky.",
    "Když uvidíš žraloka, zůstaň v klidu a pomalu se vrať ke břehu.",
    "Ulož si tísňové číslo záchranné služby v Egyptě: 123.",
  ],
  worksTitle: "Mýty, kterým nevěř",
  works: [
    "„Žralok ucítí kapku krve na kilometry.“ Takhle to doloženo není – víc v článku 9 mýtů o žralocích.",
    "„Magnetický náramek mě ochrání.“ Spolehlivá účinnost těchto pomůcek doložená není.",
    "„Úder do čenichu žraloka vždycky zažene.“ Florida Museum ho uvádí jen jako nouzové řešení bez záruky.",
    "„Žralok je monstrum, které loví lidi.“ Podle Florida Museum je většina žraloků při setkání jen zvědavá a odpluje sama.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Jsou v Egyptě žraloci?",
      a: "Ano. Žraloci jsou přirozenou součástí Rudého moře a pro potápěče jsou jedním z největších zážitků. Smrtelné útoky jsou vzácné, ale v posledních letech se staly – například u Hurghady v roce 2023 a u Marsa Alamu v roce 2024. V obou případech šlo podle úřadů o tygřího žraloka.",
    },
    {
      q: "Je bezpečné šnorchlovat v Egyptě?",
      a: "Pro většinu lidí ano, pokud dodržuješ základní pravidla: šnorchluj ve vyznačené zóně, s parťákem, nekrm ryby a respektuj zákazy koupání. U pláží tě mnohem častěji potrápí ježovky, ohnivý korál nebo zvířata na dně než žraloci.",
    },
    {
      q: "Zavírají v Egyptě pláže kvůli žralokům?",
      a: "Ano. Po útoku u Hurghady v roce 2023 úřady zakázaly vstup do vody na 74 kilometrech pobřeží, po útoku u Marsa Alamu v roce 2024 zavřely dotčený úsek na dva dny. Zákazy ber vážně.",
    },
    {
      q: "Co mám dělat, když uvidím žraloka?",
      a: "Zůstaň v klidu, necákej, sleduj ho a pomalu se vrať k břehu nebo k lodi. Většina žraloků je jen zvědavá a odpluje. Podrobný postup najdeš v článku Co dělat, když potkáš žraloka.",
    },
    {
      q: "Jaké je tísňové číslo v Egyptě?",
      a: "Záchranná služba má číslo 123. V hotelu se vyplatí znát i kontakt na hotelového lékaře.",
    },
  ],
  guideTitle: "Celá příručka Prevence zdarma",
  guideText: "Chování žraloků, krizové situace, vybavení a kontrolní seznam před ponorem v jednom PDF. Ulož si ji před cestou do Egypta.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  relatedTitle: "Přečti si také",
  related: [
    { label: "Co dělat, když potkáš žraloka – krok za krokem", url: "/co-delat-kdyz-potkas-zraloka" },
    { label: "Na co v Egyptě šlapeš – 7 nebezpečných zvířat u pláže", url: "/nebezpecna-morska-zvirata-egypt" },
    { label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" },
    { label: "Žralok megalodon: kdy žil a proč vyhynul", url: "/zralok-megalodon" },
  ],
  shareText: "Žraloci v Egyptě 🦈 Jak velké je riziko a jak se chovat u moře – pošli tomu, kdo letí do Hurghady nebo Marsa Alamu",
  sourcesTitle: "Zdroje",
  sources: SOURCES_CS,
  disclaimer:
    "Obecné informace pro rekreanty, ne návod pro krizové situace. Vždy se řiď pokyny místních úřadů, hotelu a potápěčského centra. Statistiky a případy odpovídají uvedeným zdrojům k listopadu 2026.",
};
