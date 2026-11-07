import type { StepContent } from "../components/StepArticle";

// Článek „Žralok megalodon“ (CZ). Fakta jen z uvedených zdrojů:
// Natural History Museum (Londýn), BBC Science Focus, CNN (studie PNAS o teplokrevnosti). Nic nepřidávat bez ověření.

const SOURCES_CS = [
  { name: "Natural History Museum – Is megalodon still alive?", url: "https://www.nhm.ac.uk/discover/is-megalodon-still-alive.html" },
  { name: "Natural History Museum – Megalodon: the truth about the largest shark that ever lived", url: "https://www.nhm.ac.uk/discover/megalodon--the-truth-about-the-largest-shark-that-ever-lived.html" },
  { name: "BBC Science Focus – Megalodons were warm-blooded, and it may have led to their demise", url: "https://www.sciencefocus.com/news/megalodons-warm-blooded-demise" },
  { name: "CNN – Scientists find new clue in what led to megalodon's demise", url: "https://krdo.com/?p=988878" },
];

export const megalodonCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/zralok-megalodon",
  altUrl: "/en",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Žraloci · Pravěk",
  title: "Žralok megalodon: kdy žil, jak velký byl a proč vyhynul",
  lead: "Megalodon je největší žralok, jaký kdy žil, a internet o něm šíří historky, že pořád plave někde v hlubinách. Tady je, co o něm opravdu víme: kdy žil, jak velký byl, proč zmizel a proč nemůže žít v Mariánském příkopu.",
  datePublished: "2026-11-07",
  steps: [
    {
      title: "Co byl megalodon",
      text: "Otodus megalodon, česky megalodon, byl obří pravěký žralok. Jeho nejstarší fosilie jsou staré asi 20 milionů let a Natural History Museum uvádí, že vyhynul před 3,6 miliony let. Jméno znamená „velký zub“.",
    },
    {
      title: "Jak byl velký",
      text: "Kompletní kostra megalodona se nikdy nenašla, protože žraločí kostra je z chrupavky a zkamení jen výjimečně. Velikost se proto odhaduje podle zubů. BBC Science Focus uvádí tělo dlouhé kolem 16 metrů a odhady se podle studií liší. Studie z roku 2022 navíc naznačuje, že megalodoni v chladnější vodě vyrostli větší.",
    },
    {
      title: "Zuby a skus",
      text: "Zuby megalodona měřily až 18 centimetrů. Natural History Museum uvádí odhad síly skusu mezi 108 514 a 182 201 newtonů. Při výměně zubů se zub z řady za ním posunul dopředu, a proto zůstalo na mořském dně obrovské množství zubů, které se dnes sbírají jako fosilie.",
    },
    {
      title: "Kde žil",
      text: "Megalodon byl podle Natural History Museum přizpůsobený teplým tropickým a subtropickým mořím. Žil tak široce, že se jeho zuby našly na všech kontinentech kromě Antarktidy. Mláďata se podle muzea pravděpodobně rodila blízko pobřeží.",
    },
    {
      title: "Proč vyhynul",
      text: "Vědci nemají jednu jistou odpověď. Natural History Museum uvádí, že přispělo globální ochlazování v pliocénu, úbytek kořisti a konkurence s pravěkými žraloky bílými. Studie ve vědeckém časopisu PNAS navíc ukázala, že megalodon byl částečně teplokrevný: jeho tělesná teplota byla podle zubní skloviny asi o 7 °C vyšší než teplota okolní vody. Udržet takovou teplotu vyžadovalo obrovské množství potravy.",
    },
    {
      title: "Může megalodon žít v Mariánském příkopu",
      text: "Ne. Natural History Museum připomíná, že nejhlubší místo Mariánského příkopu, Challenger Deep, je 10 984 metrů hluboko, tedy hlouběji, než je vysoká Mount Everest. Megalodon byl přizpůsobený teplým mořím a nikdo nikdy nenašel zub mladší než 3,6 milionu let, ani fosilní, ani čerstvě vypadlý. Kdyby žil, našli bychom zuby i stopy po lovu.",
    },
    {
      title: "Odkud se vzal mýtus o přeživším megalodonovi",
      text: "Studie z roku 1959 tvrdila, že některé zuby jsou staré jen desítky tisíc let, takže megalodon mohl přežít do dnešní doby. Natural History Museum uvádí, že ji v 70. letech zcela vyvrátily. Zuby pocházejí z doby, kdy megalodon žil.",
    },
  ],
  signsTitle: "Rychlé shrnutí",
  signs: [
    "Latinský název: Otodus megalodon, česky „velký zub“.",
    "Žil asi před 20 až 3,6 miliony let.",
    "Délka kolem 16 metrů podle odhadů z velikosti zubů.",
    "Zuby až 18 centimetrů dlouhé.",
    "Přizpůsobený teplým mořím, zuby se našly na všech kontinentech kromě Antarktidy.",
    "Vyhynul, žádný důkaz o přeživších neexistuje.",
  ],
  worksTitle: "Mýty o megalodonovi",
  works: [
    "„Megalodon žije v Mariánském příkopu.“ Důkazy žádné nejsou a nejmladší zuby mají nejméně 3,6 milionu let.",
    "„Megalodon byl jen větší bílý žralok.“ Natural History Museum uvádí, že patřil do jiné linie žraloků, jejímž byl posledním členem.",
    "„Zuby megalodona jsou stovky let staré.“ Fosilní zuby jsou staré miliony let. Studie z roku 1959, která tvrdila opak, byla vyvrácena.",
    "„Našli celou kostru.“ Celá kostra se nikdy nenašla, velikost se odvozuje hlavně ze zubů.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Žije megalodon ještě?",
      a: "Ne. Podle Natural History Museum vyhynul před 3,6 miliony let. Nikdy se nenašel zub mladší než tato doba a nejsou důkazy, že by nějaký megalodon přežil.",
    },
    {
      q: "Jak velký byl megalodon?",
      a: "Odhady se liší, protože se nikdy nenašla celá kostra. BBC Science Focus uvádí délku kolem 16 metrů, jeho zuby měřily až 18 centimetrů.",
    },
    {
      q: "Kdy a proč megalodon vyhynul?",
      a: "Asi před 3,6 miliony let. Přispělo ochlazování oceánů, úbytek kořisti a konkurence s pravěkými žraloky bílými. Teplokrevné tělo megalodona navíc vyžadovalo hodně potravy.",
    },
    {
      q: "Může megalodon žít v Mariánském příkopu?",
      a: "Ne. Megalodon byl přizpůsobený teplým mořím a nejhlubší místo příkopu je 10 984 metrů hluboko. Zuby ani stopy po lovu mladší než 3,6 milionu let se nenašly.",
    },
  ],
  guideTitle: "Celá příručka Prevence zdarma",
  guideText: "Chování žraloků, krizové situace, vybavení a kontrolní seznam před ponorem v jednom PDF. Ulož si ji před cestou k moři.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  relatedTitle: "Přečti si také",
  related: [
    { label: "Video: Megalodon v Mariánském příkopu, pravda, nebo fikce?", url: "https://youtu.be/TBKEMZPfgyw" },
    { label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" },
    { label: "Žraloci v Egyptě: jak velké je riziko", url: "/zraloci-v-egypte" },
    { label: "Co dělat, když potkáš žraloka – krok za krokem", url: "/co-delat-kdyz-potkas-zraloka" },
  ],
  shareText: "Žije megalodon ještě? 🦈 Kdy žil, jak velký byl a proč vyhynul – pošli tomu, kdo věří, že plave v Mariánském příkopu",
  sourcesTitle: "Zdroje",
  sources: SOURCES_CS,
  disclaimer:
    "Obecné informace ze zdrojů uvedených níže, k listopadu 2026. Odhady velikosti a příčin vyhynutí se v jednotlivých studiích liší.",
};
