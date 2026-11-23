import type { StepContent } from "../components/StepArticle";

// Článek „Grónský žralok: nejdéle žijící obratlovec“ (CZ + EN). Fakta jen z uvedených zdrojů:
// Nielsen a kol., Science 2016 (shrnutí VIMS), NOAA Ocean Service (aktualizováno 09/2026),
// tisková zpráva UC Irvine k článku v Nature Communications (5. 1. 2026).
// Věk je odhad s intervalem 272–512 let, ne přesné číslo. Nic nepřidávat bez ověření.

const SOURCES = [
  { name: "Nielsen a kol. (2016), Science – Eye lens radiocarbon reveals centuries of longevity in the Greenland shark (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/27516602/" },
  { name: "Virginia Institute of Marine Science – Old and cold: extreme longevity in Greenland sharks (2016)", url: "https://www.vims.edu/newsandevents/topstories/2016/greenland_sharks.php" },
  { name: "NOAA Ocean Service – How long do Greenland sharks live?", url: "https://oceanservice.noaa.gov/facts/greenland-shark.html" },
  { name: "UC Irvine (EurekAlert, 2026) – zrak grónského žraloka, Nature Communications", url: "https://www.eurekalert.org/news-releases/1111542" },
];

export const gronskyZralokCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/gronsky-zralok",
  altUrl: "/en/greenland-shark",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Žraloci · Giganti oceánu",
  title: "Grónský žralok: nejdéle žijící obratlovec na Zemi",
  lead: "Plave pomaleji než chodec, roste méně než centimetr za rok a nejstarší zkoumaná samice mohla být starší než Spojené státy. Co o grónském žralokovi skutečně víme, jak vědci určili jeho věk a co je jen přehnaná zkratka z internetu.",
  datePublished: "2026-11-23",
  steps: [
    {
      title: "Jak se určuje věk žraloka bez kostí",
      text: "Žraloci nemají kostěnou kostru, takže u grónského žraloka nejde spočítat letokruhy jako u jiných ryb. Tým Juliuse Nielsena proto v roce 2016 v časopise Science použil radiokarbonové datování čočky oka. Jádro čočky vzniká ještě před narozením a už se nemění, takže uchovává „časovou stopu“. Vědci tak určili věk 28 žraloků.",
    },
    {
      title: "Nejstarší samice: 392 ± 120 let",
      text: "Největší zkoumaný žralok, samice dlouhá asi 5 metrů, měla podle výpočtu 392 let s nejistotou plus minus 120 let. Skutečný věk tedy leží někde mezi 272 a 512 lety. Podle autorů se grónský žralok dožívá nejméně 272 let, a je tak nejdéle žijícím známým obratlovcem.",
    },
    {
      title: "Starší než USA? I podle nejnižšího odhadu ano",
      text: "Číslo 392 let je střed odhadu, ne přesný věk. I spodní hranice 272 let ale znamená, že se samice narodila dřív, než v roce 1776 vznikly Spojené státy. Proto je zkratka „starší než USA“ v pořádku. Tvrzení „je mu 512 let“ ale přehání, to je jen horní hranice intervalu.",
    },
    {
      title: "Dospívá až kolem 150 let",
      text: "Samice podle studie dospívají při délce přes 4 metry, což odpovídá věku nejméně 156 ± 22 let. NOAA uvádí, že grónští žraloci nejspíš dospívají až po stovce let. Mláďata tedy mají až zvířata, která přežila více než sto let.",
    },
    {
      title: "Roste méně než centimetr za rok",
      text: "Podle NOAA roste grónský žralok méně než 1 centimetr ročně a může dorůst přes 6 metrů. Shrnutí studie z VIMS uvádí, že největší jedinci přesahují 6 metrů a váží přes tunu.",
    },
    {
      title: "Nejpomalejší žralok v Arktidě",
      text: "NOAA uvádí nejvyšší rychlost pod 2,9 km/h, tedy pomaleji, než běžně chodí člověk. Je to jediný žralok, který snese studené vody Severního ledového oceánu po celý rok. Vědci ho pozorovali v hloubce 783 metrů a je známo, že se potápí až do 2 200 metrů.",
    },
    {
      title: "Co jí, když je tak pomalý",
      text: "Podle výzkumníků z VIMS se v jeho žaludcích našly čerstvé ryby a v jednom případě dokonce dva celí tuleni. Jak tak pomalé zvíře loví, zatím není jasně doloženo. Maso grónského žraloka je navíc považováno za jedovaté a jíst se dá až po zvláštní úpravě.",
    },
    {
      title: "Není slepý: oči vydrží staletí",
      text: "Na oku grónského žraloka často visí parazit, a proto se traduje, že je slepý. Studie Kalifornské univerzity v Irvine a Univerzity v Basileji z ledna 2026 (Nature Communications) ale na sítnici nenašla známky degenerace. Oči jsou přizpůsobené velmi slabému světlu a jejich zrakový pigment je naladěný na modré světlo. Podle autorů jim zrak pomáhá udržet mechanismus opravy DNA.",
    },
    {
      title: "Proč je tak zranitelný",
      text: "Druh, který roste méně než centimetr ročně a má mláďata až po více než sto letech, se po ztrátách obnovuje velmi pomalu. Každý dospělý jedinec je proto pro populaci mimořádně cenný. Respect the Locals platí i v Arktidě.",
    },
  ],
  signsTitle: "Rychlé shrnutí",
  signs: [
    "Nejdéle žijící známý obratlovec: nejméně 272 let.",
    "Nejstarší zkoumaná samice: 392 ± 120 let (272–512 let).",
    "Věk se určil radiokarbonovým datováním čočky oka (Science 2016).",
    "Roste méně než 1 cm za rok, dorůstá přes 6 metrů.",
    "Samice dospívají až při věku zhruba 156 ± 22 let.",
    "Plave pod 2,9 km/h, potápí se až do 2 200 metrů.",
  ],
  worksTitle: "Mýty o grónském žralokovi",
  works: [
    "„Je mu 500 let.“ Takový věk nikdo nenaměřil. 512 let je jen horní hranice odhadu, střed je 392 let.",
    "„Vědci znají jeho přesný věk.“ Nejistota je plus minus 120 let. Jde o odhad, ne datum narození.",
    "„Grónský žralok je slepý.“ Studie z roku 2026 ukázala zdravou sítnici přizpůsobenou tmě.",
    "„Grónský žralok je rychlý lovec jako bílý žralok.“ Podle NOAA plave pod 2,9 km/h. Jak přesně loví, zatím není doloženo.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Jak dlouho žije grónský žralok?",
      a: "Podle studie v Science (2016) nejméně 272 let. NOAA uvádí, že se může dožít i přes 500 let, to je ale horní hranice odhadu.",
    },
    {
      q: "Kolik let měl nejstarší grónský žralok?",
      a: "Nejstarší zkoumaná samice, dlouhá asi 5 metrů, měla odhadem 392 let s nejistotou plus minus 120 let.",
    },
    {
      q: "Jak vědci zjistili věk grónského žraloka?",
      a: "Radiokarbonovým datováním jádra oční čočky, které vzniká před narozením a během života se nemění.",
    },
    {
      q: "Jak velký je grónský žralok?",
      a: "Podle NOAA může dorůst přes 6 metrů. Roste přitom méně než 1 centimetr za rok.",
    },
    {
      q: "Je grónský žralok slepý?",
      a: "Není. Studie z roku 2026 v Nature Communications nenašla na sítnici známky degenerace, oči jsou přizpůsobené velmi slabému světlu.",
    },
    {
      q: "Kde grónský žralok žije?",
      a: "V chladných vodách severního Atlantiku a Arktidy. Je to jediný žralok, který snese Severní ledový oceán po celý rok, a potápí se až do 2 200 metrů.",
    },
  ],
  guideTitle: "Celá příručka Prevence zdarma",
  guideText: "Chování žraloků, krizové situace, vybavení a kontrolní seznam před ponorem v jednom PDF. Ulož si ji před cestou k moři.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  relatedTitle: "Přečti si také",
  related: [
    { label: "Největší bílí žraloci světa: Deep Blue a skutečné rekordy", url: "/nejvetsi-bili-zraloci" },
    { label: "Žralok megalodon: kdy žil a proč vyhynul", url: "/zralok-megalodon" },
    { label: "Žralok obrovský: druhý největší žralok, který žere jen plankton", url: "/zralok-obrovsky" },
    { label: "USS Indianapolis: 4 dny mezi žraloky a skutečný příběh za Čelistmi", url: "/uss-indianapolis" },
    { label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" },
    { label: "Co dělat, když potkáš žraloka – krok za krokem", url: "/co-delat-kdyz-potkas-zraloka" },
  ],
  shareText: "Žralok, který mohl být starší než USA 🦈 Grónský žralok žije nejméně 272 let – pošli tomu, kdo tomu neuvěří",
  sourcesTitle: "Zdroje",
  sources: SOURCES,
  disclaimer:
    "Obecná informace, nenahrazuje výcvik. Údaje ze zdrojů uvedených výše, k listopadu 2026. Věk grónských žraloků je vědecký odhad s velkou nejistotou.",
};

export const gronskyZralokEn: StepContent = {
  lang: "en",
  url: "https://www.sharkypaul.com/en/greenland-shark",
  altUrl: "/gronsky-zralok",
  altLabel: "Česky",
  homeUrl: "/en",
  homeLabel: "Home",
  eyebrow: "Sharky Paul · Sharks · Ocean giants",
  title: "Greenland Shark: The Longest-Living Vertebrate on Earth",
  lead: "It swims slower than you walk, grows less than a centimetre a year, and the oldest female studied may have been older than the United States. What we actually know about the Greenland shark, how scientists worked out its age, and which internet shortcuts go too far.",
  datePublished: "2026-11-23",
  steps: [
    {
      title: "How do you age a shark without bones?",
      text: "Sharks have no bony skeleton, so you can't count growth rings the way you can in many other fish. In 2016, Julius Nielsen's team, publishing in Science, used radiocarbon dating of the eye lens instead. The core of the lens forms before birth and never changes, so it keeps a 'time stamp'. That is how the team estimated the ages of 28 sharks.",
    },
    {
      title: "The oldest female: 392 ± 120 years",
      text: "The largest shark studied, a female about 5 metres long, came out at 392 years, with an uncertainty of plus or minus 120 years. Her real age lies somewhere between 272 and 512 years. According to the authors, Greenland sharks live at least 272 years, which makes them the longest-living vertebrate known.",
    },
    {
      title: "Older than the USA? Even the lowest estimate says yes",
      text: "392 is the middle of the estimate, not an exact age. But even the lower bound of 272 years means she was born before the United States was founded in 1776. So 'older than America' holds up. 'She is 512 years old' does not: that is only the top of the range.",
    },
    {
      title: "Mature at around 150",
      text: "According to the study, females mature at lengths over 4 metres, which corresponds to an age of at least 156 ± 22 years. NOAA says Greenland sharks probably don't reach sexual maturity until they are over a century old. Only animals that have survived more than a century get to have pups.",
    },
    {
      title: "Less than a centimetre of growth a year",
      text: "NOAA says Greenland sharks grow less than 1 centimetre a year and can reach over 6 metres. VIMS's summary of the study says the largest animals exceed 6 metres (20 ft) and weigh more than a tonne.",
    },
    {
      title: "The slowest shark in the Arctic",
      text: "NOAA puts its top speed under 2.9 km/h, slower than a normal human walk. It is the only shark that can withstand the cold waters of the Arctic Ocean year-round. It has been seen at 783 metres, and these sharks are known to dive as deep as 2,200 metres.",
    },
    {
      title: "What does such a slow shark eat?",
      text: "Researchers at VIMS found fresh fish in their stomachs and, in one case, two entire seals. How such a slow animal catches its prey is not yet clearly documented. Greenland shark meat is also considered poisonous and can only be eaten after special preparation.",
    },
    {
      title: "Not blind: eyes built to last centuries",
      text: "A parasite often hangs from the Greenland shark's eye, which is why people say it is blind. But a January 2026 study by the University of California, Irvine and the University of Basel (Nature Communications) found no signs of retinal degeneration. The eyes are adapted to very low light, and their visual pigment is tuned to blue light. The authors credit a DNA repair mechanism for keeping their vision working.",
    },
    {
      title: "Why it is so vulnerable",
      text: "A species that grows less than a centimetre a year and has pups only after more than a century recovers from losses very slowly. Every adult matters to the population. Respect the Locals applies in the Arctic too.",
    },
  ],
  signsTitle: "Quick summary",
  signs: [
    "Longest-living vertebrate known: at least 272 years.",
    "Oldest female studied: 392 ± 120 years (272–512).",
    "Age estimated by radiocarbon dating of the eye lens (Science, 2016).",
    "Grows less than 1 cm a year, reaches over 6 metres.",
    "Females mature at around 156 ± 22 years.",
    "Swims under 2.9 km/h, dives as deep as 2,200 metres.",
  ],
  worksTitle: "Greenland shark myths",
  works: [
    "'It is 500 years old.' Nobody measured that. 512 is only the top of the estimate; the midpoint is 392.",
    "'Scientists know its exact age.' The uncertainty is plus or minus 120 years. It is an estimate, not a birth date.",
    "'The Greenland shark is blind.' A 2026 study found healthy retinas adapted to darkness.",
    "'It is a fast hunter like the great white.' NOAA puts its top speed under 2.9 km/h. Exactly how it hunts is not yet documented.",
  ],
  faqTitle: "Frequently asked questions",
  faq: [
    {
      q: "How long do Greenland sharks live?",
      a: "At least 272 years, according to the 2016 study in Science. NOAA says they may live over 500 years, but that is the top of the estimate.",
    },
    {
      q: "How old was the oldest Greenland shark?",
      a: "The oldest female studied, about 5 metres long, was estimated at 392 years, plus or minus 120 years.",
    },
    {
      q: "How did scientists work out a Greenland shark's age?",
      a: "By radiocarbon dating the core of the eye lens, which forms before birth and does not change during life.",
    },
    {
      q: "How big is a Greenland shark?",
      a: "NOAA says it can reach over 6 metres, while growing less than 1 centimetre a year.",
    },
    {
      q: "Is the Greenland shark blind?",
      a: "No. A 2026 study in Nature Communications found no signs of retinal degeneration; the eyes are adapted to very low light.",
    },
    {
      q: "Where do Greenland sharks live?",
      a: "In the cold waters of the North Atlantic and the Arctic. It is the only shark that can stay in the Arctic Ocean year-round, and it dives as deep as 2,200 metres.",
    },
  ],
  guideTitle: "Free shark safety guide",
  guideText: "Shark behaviour, emergencies, equipment and a pre-dive checklist in one PDF (in Czech). Save it before your trip to the sea.",
  guideCta: "Get the free guide",
  guideUrl: "/prirucka",
  relatedTitle: "Also read",
  related: [
    { label: "The biggest great white sharks ever recorded: Deep Blue and the real records", url: "/en/biggest-great-white-sharks" },
    { label: "Megalodon shark: when it lived and why it went extinct", url: "/en/megalodon-shark" },
    { label: "USS Indianapolis: 4 days among sharks", url: "/en/uss-indianapolis" },
    { label: "9 shark myths people still believe", url: "/en/shark-myths" },
    { label: "What to do if you see a shark – step by step", url: "/en/what-to-do-if-you-see-a-shark" },
  ],
  shareText: "A shark that may be older than the USA 🦈 Greenland sharks live at least 272 years – send this to someone who won't believe it",
  sourcesTitle: "Sources",
  sources: SOURCES,
  disclaimer:
    "General information, not a substitute for training. Figures from the sources above, as of November 2026. Greenland shark ages are scientific estimates with wide uncertainty.",
};
