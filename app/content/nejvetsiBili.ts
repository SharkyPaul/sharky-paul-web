import type { StepContent } from "../components/StepArticle";

// Článek „Největší bílí žraloci světa“ (CZ + EN). Fakta jen z uvedených zdrojů:
// ReefQuest Centre for Shark Research (R. Aidan Martin), Oceana Canada, Wikipedia – Great white shark size
// (přehled s odkazy na odbornou literaturu: Randall, Cappo 1988, Mollet a kol. 1996, Tricas & McCosker 1984),
// AP (Boston.com), NPR (KPBS), CBS News. Deep Blue: všechny údaje jsou vizuální odhady, ne měření.
// Nic nepřidávat bez ověření. Neuvádět váhu Deep Blue (žádný spolehlivý údaj).

const SOURCES = [
  { name: "ReefQuest Centre for Shark Research – What is the largest shark ever?", url: "https://www.elasmo-research.org/education/topics/r_largest.htm" },
  { name: "Oceana Canada – Great white shark", url: "https://oceana.ca/en/marine-life/great-white-shark/" },
  { name: "Wikipedia – Great white shark size (přehled s odkazy na odbornou literaturu)", url: "https://en.wikipedia.org/wiki/Great_white_shark_size" },
  { name: "AP (Boston.com) – Divers swim with giant great white shark off Oahu's coast (2019)", url: "https://www.boston.com/news/animals/2019/01/18/giant-great-white-shark-ocean-ramsey-hawaii" },
  { name: "NPR (KPBS) – Video: Giant great white shark frolics with divers (2019)", url: "https://www.kpbs.org/news/2019/01/18/video-giant-great-white-shark-frolics-with-divers" },
  { name: "CBS News – Great white shark „Deep Blue“ seen off Hawaii (2019)", url: "https://www.cbsnews.com/news/deep-blue-great-white-shark-thought-to-be-worlds-biggest-seen-off-hawaii/" },
];

export const nejvetsiBiliCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/nejvetsi-bili-zraloci",
  altUrl: "/en/biggest-great-white-sharks",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Žraloci · Rekordy",
  title: "Největší bílí žraloci světa: Deep Blue a skutečné rekordy",
  lead: "Internet je plný „největších bílých žraloků všech dob“ s délkou sedm, devět i jedenáct metrů. Kolik z toho je změřeno a kolik je jen odhad? Tady jsou rekordy, které obstojí, slavná Deep Blue a příběhy, které se ukázaly jako přehnané.",
  datePublished: "2026-11-16",
  steps: [
    {
      title: "Proč jsou rekordy tak sporné",
      text: "Velkého žraloka je těžké pořádně změřit a délky se často přehánějí. ReefQuest Centre for Shark Research upozorňuje, že u dravých žraloků je oddělit skutečné měření od přehánění „mnohem, mnohem těžší“ než u jiných ryb. Přehled odborné literatury navíc uvádí, že žádný žralok bílý delší než 6,1 metru nebyl potvrzen. Údaje přes 10 metrů se dřív objevovaly běžně, dnes jsou zpochybněné.",
    },
    {
      title: "Samice jsou větší než samci",
      text: "Podle Oceana Canada měří dospělí samci průměrně 3 až 4 metry a samice 4 až 5 metrů. Proto jsou všichni slavní obři z rekordů samice. Velké samice podle Oceana váží v dospělosti 1 900 až 2 300 kilogramů.",
    },
    {
      title: "Rekord, který obstojí: samice od Ostrova prince Edwarda (1983)",
      text: "Oceana Canada uvádí jako největšího kdy zaznamenaného žraloka bílého samici o délce něco přes 6 metrů, chycenou v zálivu svatého Vavřince u Ostrova prince Edwarda v Kanadě. ReefQuest ji popisuje jako 6,1 metru dlouhou samici ze srpna 1983 a podle autora je to největší žralok bílý zaznamenaný ve vědecké literatuře.",
    },
    {
      title: "Ledge Point v Západní Austrálii: 5,94 metru",
      text: "Další často citovaný případ je žralok z Ledge Point v Západní Austrálii. Přehled literatury ho s odkazem na ichtyologa Johna Randalla uvádí jako největšího spolehlivě změřeného žraloka bílého s délkou 5,94 metru. I tady ale není jasné, jestli se měřilo se sklopenou, nebo přirozeně drženou ocasní ploutví, což výsledek mění.",
    },
    {
      title: "Kuba 1945: „6,4 metru a přes 3 tuny“",
      text: "Žralok chycený u Cojímaru na Kubě měl podle tehdejších zpráv měřit 6,4 metru a vážit asi 3 220 kilogramů. ReefQuest ale upozorňuje, že nikdy nebyl zvážen, jeho délka je zpochybňovaná a z fotografie vypadá spíš na zhruba 5 metrů. Některé pozdější analýzy podle přehledu literatury došly k podobnému závěru.",
    },
    {
      title: "Malta a Klokaní ostrov 1987: obři, které nikdo nezměřil",
      text: "V dubnu 1987 se objevily dva „sedmimetroví“ žraloci. U maltského žraloka podle ReefQuest délku přehnali asi o 25 %. Ze žraloka od Klokaního ostrova v Austrálii se zachovala jen hlava a prsní ploutve, takže jeho délku nejde ověřit. Odhady se pohybují zhruba od 5,8 do přes 6,9 metru. Rekordy to tedy být můžou, ale doložené nejsou.",
    },
    {
      title: "Deep Blue: nejslavnější obryně",
      text: "Deep Blue je přezdívka velké samice, kterou potápěči a výzkumníci natáčeli u ostrova Guadalupe v Mexiku. Světově proslavilo setkání v lednu 2019 u ostrova Oahu na Havaji, kde se krmila na mršině vorvaně. Potápěčka Ocean Ramsey podle agentury AP odhadla, že měřila přes 6 metrů a na šířku asi 2,4 metru. Podle NPR ale mořští biologové nepotvrdili, že šlo opravdu o Deep Blue, i když se kresba na těle podle odborníka Chrise Lowa shoduje.",
    },
    {
      title: "Je Deep Blue největší žralok bílý na světě?",
      text: "To nevíme. Její délka je odhad potápěčů pouhým okem, ne měření. Média uvádějí „téměř 6 metrů“, „přes 6 metrů“ i 7 metrů a zprávy, že je jí přes 50 let, nepopisují, jak byl věk určen. To není doloženo. Spolehlivý údaj o její hmotnosti neexistuje. Patří ale mezi největší žraloky bílé, jaké kdy kdo natočil.",
    },
    {
      title: "Co z toho plyne",
      text: "Největší žraloci bílí jsou staré samice. Podle Oceana Canada samice dospívají až ve 12 až 18 letech a předpokládá se, že se žraloci bílí dožívají 50 až 70 let i víc. Oceana Canada také uvádí, že se žralok bílý celosvětově považuje za zranitelný druh. Každá taková obryně je pro populaci cenná, a proto ji chráníme, místo abychom ji lovili kvůli rekordu. Respect the Locals.",
    },
  ],
  signsTitle: "Rychlé shrnutí",
  signs: [
    "Žádný žralok bílý delší než 6,1 metru nebyl spolehlivě potvrzen.",
    "Rekordní je samice od Ostrova prince Edwarda (1983), asi 6,1 metru.",
    "Ledge Point v Austrálii: 5,94 metru, jeden z nejlépe změřených.",
    "Samice jsou větší než samci: průměrně 4–5 m oproti 3–4 m.",
    "Deep Blue: odhad přes 6 metrů, měřená nebyla, věk ani hmotnost nejsou doloženy.",
    "Údaje o 9–11metrových bílých žralocích jsou zpochybněné.",
  ],
  worksTitle: "Mýty o obřích bílých žralocích",
  works: [
    "„Bílí žraloci dorůstají 9 nebo 10 metrů.“ Takové údaje nikdo nepotvrdil, starší zprávy jsou dnes zpochybněné.",
    "„Deep Blue byla změřena na 7 metrů.“ Nikdo ji neměřil. Všechna čísla jsou odhady z pozorování.",
    "„Kubánský žralok z roku 1945 vážil přes 3 tuny.“ Nikdy nebyl zvážen a podle fotografie byl nejspíš menší.",
    "„Největší žraloci jsou samci.“ Opak je pravda, samice jsou u žraloka bílého větší.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Jaký je největší žralok bílý, jaký byl kdy změřen?",
      a: "Podle Oceana Canada a ReefQuest samice dlouhá asi 6,1 metru, chycená v roce 1983 u Ostrova prince Edwarda v Kanadě. Žádný delší žralok bílý nebyl spolehlivě potvrzen.",
    },
    {
      q: "Jak velká je Deep Blue?",
      a: "Potápěči ji v roce 2019 u Havaje odhadli na přes 6 metrů. Je to odhad okem, ne měření, a spolehlivý údaj o hmotnosti neexistuje.",
    },
    {
      q: "Kolik je Deep Blue let?",
      a: "Média uvádějí přes 50 let, ale nepopisují, jak byl věk určen. Není to doloženo.",
    },
    {
      q: "Jsou větší samice, nebo samci žraloka bílého?",
      a: "Samice. Podle Oceana Canada měří průměrně 4 až 5 metrů, samci 3 až 4 metry.",
    },
    {
      q: "Může žralok bílý měřit 10 metrů?",
      a: "Neexistuje pro to žádný spolehlivý důkaz. Starší zprávy o 10 až 11 metrech jsou dnes zpochybněné a jedna z nich se možná týkala špatně určeného žraloka obrovského.",
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
    { label: "Žralok obrovský: druhý největší žralok, který žere jen plankton", url: "/zralok-obrovsky" },
    { label: "Žralok tygří: velikost, potrava, věk", url: "/zralok-tygri" },
    { label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" },
    { label: "Co dělat, když potkáš žraloka – krok za krokem", url: "/co-delat-kdyz-potkas-zraloka" },
  ],
  shareText: "Největší bílý žralok světa? 🦈 Deep Blue, rekordy a co je jen přehnaná legenda – pošli tomu, kdo věří na 10metrové bílé žraloky",
  sourcesTitle: "Zdroje",
  sources: SOURCES,
  disclaimer:
    "Obecná informace, nenahrazuje výcvik. Údaje ze zdrojů uvedených výše, k listopadu 2026. Délky rekordních žraloků se v jednotlivých zdrojích liší a u Deep Blue jde jen o odhady.",
};

export const nejvetsiBiliEn: StepContent = {
  lang: "en",
  url: "https://www.sharkypaul.com/en/biggest-great-white-sharks",
  altUrl: "/nejvetsi-bili-zraloci",
  altLabel: "Česky",
  homeUrl: "/en",
  homeLabel: "Home",
  eyebrow: "Sharky Paul · Sharks · Records",
  title: "The Biggest Great White Sharks Ever Recorded: Deep Blue and the Real Records",
  lead: "The internet is full of 'the biggest great white ever' at seven, nine or even eleven metres. How much of that was measured and how much is guesswork? Here are the records that hold up, the famous Deep Blue, and the stories that turned out to be exaggerated.",
  datePublished: "2026-11-16",
  steps: [
    {
      title: "Why the records are so disputed",
      text: "A big shark is hard to measure properly, and lengths are often exaggerated. The ReefQuest Centre for Shark Research notes that for predatory sharks, separating real measurements from exaggeration is 'much, much more difficult' than for other fish. A review of the scientific literature also states that no great white over 6.1 metres (20 ft) has been confirmed. Claims of over 10 metres used to be common but are now discredited.",
    },
    {
      title: "Females are bigger than males",
      text: "According to Oceana Canada, adult males average 3 to 4 metres and females 4 to 5 metres. That is why the famous giants in the record books are all females. Large mature females weigh between 1,900 and 2,300 kilograms, Oceana says.",
    },
    {
      title: "A record that holds up: the Prince Edward Island female (1983)",
      text: "Oceana Canada names the largest great white ever recorded as a female just over 6 metres long, caught in the Gulf of St Lawrence off Prince Edward Island, Canada. ReefQuest describes her as a 6.1-metre female from August 1983 and, to the author's knowledge, the largest great white recorded in the scientific literature.",
    },
    {
      title: "Ledge Point, Western Australia: 5.94 metres",
      text: "Another often-cited case is the shark from Ledge Point in Western Australia. Citing ichthyologist John Randall, the literature review lists it as the largest reliably measured great white at 5.94 metres. Even here it is unclear whether the tail fin was measured depressed or in its natural position, which changes the result.",
    },
    {
      title: "Cuba 1945: '6.4 metres and over 3 tonnes'",
      text: "A shark caught off Cojímar, Cuba, was reported at 6.4 metres and about 3,220 kilograms. ReefQuest points out that it was never weighed, its length has been questioned, and in the photo it looks closer to 5 metres. Some later analyses reached a similar conclusion, according to the literature review.",
    },
    {
      title: "Malta and Kangaroo Island 1987: giants nobody measured",
      text: "In April 1987 two 'seven-metre' sharks made headlines. ReefQuest says the Maltese shark's length was exaggerated by about 25%. Only the head and pectoral fins of the Kangaroo Island shark in Australia were kept, so its length cannot be verified. Estimates range from about 5.8 to over 6.9 metres. They might be records, but they are not proven.",
    },
    {
      title: "Deep Blue: the most famous giant",
      text: "Deep Blue is the nickname of a large female filmed by divers and researchers at Guadalupe Island, Mexico. She became world famous in January 2019, when divers met a huge great white feeding on a sperm whale carcass off Oahu, Hawaii. According to AP, diver Ocean Ramsey estimated the shark at more than 20 feet (6 metres) long and about 8 feet (2.4 metres) wide. NPR reported that marine biologists had not definitively identified her as Deep Blue, although shark expert Chris Lowe said the markings matched.",
    },
    {
      title: "Is Deep Blue the biggest great white in the world?",
      text: "We don't know. Her length is a divers' visual estimate, not a measurement. Media reports range from 'nearly 20 feet' to 'more than 20 feet' and even 23 feet, and claims that she is over 50 years old do not explain how her age was estimated – that is not documented. There is no reliable figure for her weight. She is, however, one of the largest great whites ever filmed.",
    },
    {
      title: "Why it matters",
      text: "The biggest great whites are old females. According to Oceana Canada, females mature only at 12 to 18 years, and great whites are believed to live 50 to 70 years or more. Oceana also notes the species is generally considered vulnerable to extinction worldwide, so every one of these giants matters for the population – which is why we protect them instead of hunting them for a record. Respect the Locals.",
    },
  ],
  signsTitle: "Quick summary",
  signs: [
    "No great white over 6.1 metres (20 ft) has been reliably confirmed.",
    "Record holder: the Prince Edward Island female (1983), about 6.1 metres.",
    "Ledge Point, Australia: 5.94 metres, one of the best-measured.",
    "Females are bigger: on average 4–5 m versus 3–4 m for males.",
    "Deep Blue: estimated at over 6 metres, never measured; age and weight are not documented.",
    "Claims of 9–11-metre great whites are discredited.",
  ],
  worksTitle: "Myths about giant great whites",
  works: [
    "'Great whites grow to 9 or 10 metres.' Nobody has confirmed this; older reports are now discredited.",
    "'Deep Blue was measured at 7 metres.' Nobody measured her. All figures are estimates from sightings.",
    "'The 1945 Cuban shark weighed over 3 tonnes.' It was never weighed and the photo suggests it was smaller.",
    "'The biggest sharks are males.' The opposite is true – female great whites are larger.",
  ],
  faqTitle: "FAQ",
  faq: [
    {
      q: "What is the biggest great white shark ever measured?",
      a: "According to Oceana Canada and ReefQuest, a female about 6.1 metres long caught in 1983 off Prince Edward Island, Canada. No longer great white has been reliably confirmed.",
    },
    {
      q: "How big is Deep Blue?",
      a: "Divers off Hawaii in 2019 estimated her at more than 6 metres (20 ft). That is a visual estimate, not a measurement, and there is no reliable weight figure.",
    },
    {
      q: "How old is Deep Blue?",
      a: "Media reports say over 50 years, but they do not explain how this was estimated. It is not documented.",
    },
    {
      q: "Are female or male great whites bigger?",
      a: "Females. According to Oceana Canada they average 4 to 5 metres, males 3 to 4 metres.",
    },
    {
      q: "Can a great white shark reach 10 metres?",
      a: "There is no reliable evidence for it. Older reports of 10 to 11 metres are now discredited, and one of them may have been a misidentified basking shark.",
    },
  ],
  guideTitle: "Free shark safety guide",
  guideText: "Shark behaviour, emergencies, equipment and a pre-dive checklist in one PDF (in Czech). Save it before your next trip to the sea.",
  guideCta: "Get the free guide",
  guideUrl: "/prirucka",
  relatedTitle: "Also read",
  related: [
    { label: "Megalodon: is it still alive? Size, age and extinction", url: "/en/megalodon-shark" },
    { label: "9 shark myths people still believe", url: "/en/shark-myths" },
    { label: "What to do if you see a shark – step by step", url: "/en/what-to-do-if-you-see-a-shark" },
    { label: "Dangerous marine animals on Egypt's beaches", url: "/en/dangerous-marine-animals-egypt" },
  ],
  shareText: "The biggest great white shark ever? 🦈 Deep Blue, the real records and the exaggerated legends – send this to someone who believes in 10-metre great whites",
  sourcesTitle: "Sources",
  sources: SOURCES,
  disclaimer:
    "General information, not a substitute for training. Data from the sources listed above, as of November 2026. Record lengths differ between sources, and Deep Blue's size is an estimate only.",
};
