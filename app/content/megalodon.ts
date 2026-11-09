import type { StepContent } from "../components/StepArticle";

// Článek „Žralok megalodon“ (CZ). Fakta jen z uvedených zdrojů:
// Natural History Museum (Londýn), BBC Science Focus, CNN a ScienceDaily (studie PNAS o teplokrevnosti). Nic nepřidávat bez ověření.

const SOURCES_CS = [
  { name: "Natural History Museum – Is megalodon still alive?", url: "https://www.nhm.ac.uk/discover/is-megalodon-still-alive.html" },
  { name: "Natural History Museum – Megalodon: the truth about the largest shark that ever lived", url: "https://www.nhm.ac.uk/discover/megalodon--the-truth-about-the-largest-shark-that-ever-lived.html" },
  { name: "BBC Science Focus – Megalodons were warm-blooded, and it may have led to their demise", url: "https://www.sciencefocus.com/news/megalodons-warm-blooded-demise" },
  { name: "CNN – Scientists find new clue in what led to megalodon's demise", url: "https://krdo.com/?p=988878" },
  { name: "ScienceDaily – Griffiths et al. (2023), PNAS: megalodon was warm-blooded", url: "https://www.sciencedaily.com/releases/2023/06/230626164144.htm" },
];

export const megalodonCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/zralok-megalodon",
  altUrl: "/en/megalodon-shark",
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
      text: "Kompletní kostra megalodona se nikdy nenašla, protože žraločí kostra je z chrupavky a zkamení jen výjimečně. Velikost se proto odhaduje podle zubů. Natural History Museum uvádí, že starší odhady podle zubů dávaly maximální délku 15 až 18 metrů a studie z roku 2025 odhaduje až 24,3 metru. Odhady se tedy hodně liší. Studie z roku 2022 navíc naznačuje, že megalodoni v chladnější vodě vyrostli větší.",
    },
    {
      title: "Zuby a skus",
      text: "Zuby megalodona měřily až 18 centimetrů. Natural History Museum uvádí odhad síly skusu mezi 108 514 a 182 201 newtonů. Žraloci ztrácejí zuby celý život a podle muzea jich za život mohou vystřídat až 40 000. Proto zůstalo na mořském dně obrovské množství megalodoních zubů, které se dnes sbírají jako fosilie.",
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
    "Délka podle odhadů 15 až 18 metrů, novější studie až 24,3 metru.",
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
      a: "Odhady se liší, protože se nikdy nenašla celá kostra. Natural History Museum uvádí starší odhady 15 až 18 metrů a novější studie až 24,3 metru. Jeho zuby měřily až 18 centimetrů.",
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
    { label: "Žralok bílý: velikost, potrava, věk a ohrožení", url: "/zralok-bily" },
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

const SOURCES_EN = SOURCES_CS;

export const megalodonEn: StepContent = {
  lang: "en",
  url: "https://www.sharkypaul.com/en/megalodon-shark",
  altUrl: "/zralok-megalodon",
  altLabel: "Česky",
  homeUrl: "/en",
  homeLabel: "Home",
  eyebrow: "Sharky Paul · Sharks · Prehistory",
  title: "Megalodon: Is It Still Alive? When It Lived, How Big It Was and Why It Died Out",
  lead: "Megalodon is the largest shark that ever lived, and the internet keeps claiming it still swims somewhere in the deep. Here is what we actually know: when it lived, how big it was, why it disappeared and why it cannot be hiding in the Mariana Trench.",
  datePublished: "2026-11-09",
  steps: [
    {
      title: "What megalodon was",
      text: "Otodus megalodon was a giant prehistoric shark. According to the Natural History Museum in London, its teeth are found only in marine rocks between 20 and 3.6 million years old, and it went extinct 3.6 million years ago. The name means 'big tooth'.",
    },
    {
      title: "How big it was",
      text: "No complete megalodon skeleton has ever been found, because a shark skeleton is made of cartilage and fossilises only rarely. Its size is therefore estimated mainly from its teeth. The Natural History Museum says earlier tooth-based estimates gave a maximum length of 15 to 18 metres, while a 2025 study suggests up to 24.3 metres, so estimates vary a lot. A 2022 study also suggests that megalodons living in colder water grew larger.",
    },
    {
      title: "Teeth and bite",
      text: "Megalodon teeth were serrated and up to 18 centimetres long. The Natural History Museum gives a bite force estimate of between 108,514 and 182,201 newtons. Sharks shed teeth throughout their lives – according to the museum they can get through up to 40,000 in a lifetime – which is why the seabed holds so many megalodon teeth that are collected as fossils today.",
    },
    {
      title: "Where it lived",
      text: "The Natural History Museum notes that megalodon teeth are found only in rocks that formed in warm water, so warm tropical and subtropical seas were its preferred habitat. Its teeth have been found on every continent except Antarctica, and young megalodons were probably born close to the coast.",
    },
    {
      title: "Why it went extinct",
      text: "There is no single certain answer. The Natural History Museum points to a combination of a cooling climate, declining prey and competition, including from prehistoric great white sharks. A study in the journal PNAS also showed that megalodon was partly warm-blooded: based on its tooth enamel, its body was about 7 °C warmer than the surrounding water. Keeping that temperature up required a huge amount of food.",
    },
    {
      title: "Can megalodon live in the Mariana Trench?",
      text: "No. The Natural History Museum points out that Challenger Deep, the deepest point of the Mariana Trench, lies 10,984 metres below the surface – deeper than Mount Everest is tall. Megalodon was adapted to warm seas, and no tooth younger than 3.6 million years has ever been found, fossil or freshly shed. If it were alive, we would find teeth and signs of hunting.",
    },
    {
      title: "Where the 'surviving megalodon' myth comes from",
      text: "A 1959 study claimed that some teeth collected by the Challenger expedition were only tens of thousands of years old, so megalodon could have survived until recently. The Natural History Museum states that the study's findings and method were completely disproven in the 1970s.",
    },
  ],
  signsTitle: "Quick summary",
  signs: [
    "Scientific name: Otodus megalodon, meaning 'big tooth'.",
    "Lived roughly 20 to 3.6 million years ago.",
    "Estimated length 15 to 18 metres, with a newer study suggesting up to 24.3 metres.",
    "Serrated teeth up to 18 centimetres long.",
    "Adapted to warm seas; teeth found on every continent except Antarctica.",
    "Extinct – there is no evidence of any survivors.",
  ],
  worksTitle: "Megalodon myths",
  works: [
    "'Megalodon lives in the Mariana Trench.' There is no evidence, and the youngest teeth are at least 3.6 million years old.",
    "'Megalodon was just a bigger great white.' According to the Natural History Museum it belonged to a different shark lineage, of which it was the last member.",
    "'Megalodon teeth are only hundreds of years old.' Fossil teeth are millions of years old. The 1959 study that claimed otherwise was disproven.",
    "'They found a complete skeleton.' A complete skeleton has never been found; size is worked out mainly from teeth.",
  ],
  faqTitle: "FAQ",
  faq: [
    {
      q: "Is megalodon still alive?",
      a: "No. According to the Natural History Museum it went extinct 3.6 million years ago. No tooth younger than that has ever been found and there is no evidence that any megalodon survived.",
    },
    {
      q: "How big was megalodon?",
      a: "Estimates vary because a complete skeleton has never been found. The Natural History Museum cites earlier estimates of 15 to 18 metres and a newer study of up to 24.3 metres. Its teeth were up to 18 centimetres long.",
    },
    {
      q: "When and why did megalodon go extinct?",
      a: "About 3.6 million years ago. A cooling ocean, declining prey and competition with prehistoric great white sharks all played a part. Its partly warm-blooded body also needed a lot of food.",
    },
    {
      q: "Could megalodon live in the Mariana Trench?",
      a: "No. Megalodon was adapted to warm seas, and the deepest point of the trench is 10,984 metres down. No teeth or signs of hunting younger than 3.6 million years have been found.",
    },
  ],
  guideTitle: "Free shark safety guide",
  guideText: "Shark behaviour, emergencies, equipment and a pre-dive checklist in one PDF (in Czech). Save it before your next trip to the sea.",
  guideCta: "Get the free guide",
  guideUrl: "/prirucka",
  relatedTitle: "Also read",
  related: [
    { label: "Video: Megalodon in the Mariana Trench – fact or fiction?", url: "https://youtu.be/TBKEMZPfgyw" },
    { label: "9 shark myths people still believe", url: "/en/shark-myths" },
    { label: "What to do if you see a shark – step by step", url: "/en/what-to-do-if-you-see-a-shark" },
    { label: "Dangerous marine animals on Egypt's beaches", url: "/en/dangerous-marine-animals-egypt" },
  ],
  shareText: "Is megalodon still alive? 🦈 When it lived, how big it was and why it died out – send this to someone who thinks it's hiding in the Mariana Trench",
  sourcesTitle: "Sources",
  sources: SOURCES_EN,
  disclaimer:
    "General information from the sources listed, as of November 2026. Estimates of size and causes of extinction differ between studies.",
};
