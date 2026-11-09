import type { StepContent } from "../components/StepArticle";

// Obsah „Co dělat, když potkáš žraloka“ – sdílí ho článek (CZ/EN) i aplikace.
// Fakta jen z uvedených zdrojů (Florida Museum / ISAF, SharkSmart).

const SOURCES_ENCOUNTERCS = [
  { name: "Florida Museum / ISAF – doporučení pro potápěče", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/divers/" },
  { name: "Florida Museum / ISAF – doporučení pro plavce", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/swimmers/" },
  { name: "Florida Museum / ISAF – rychlé tipy", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/quick-tips/" },
  { name: "NSW SharkSmart – Staying safe", url: "https://www.sharksmart.nsw.gov.au/staying-safe" },
  { name: "Queensland SharkSmart – tipy", url: "https://www.daf.qld.gov.au/news-media/campaigns/sharksmart/education/tips" },
];

export const encounterCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/co-delat-kdyz-potkas-zraloka",
  altUrl: "/en/what-to-do-if-you-see-a-shark",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Respect the Locals",
  title: "Co dělat, když potkáš žraloka",
  lead: "Většina setkání se žralokem skončí tím, že si tě prohlédne a odpluje. Rozhoduje, jak se zachováš ty. Tady je postup krok za krokem podle doporučení Florida Museum (ISAF) a australského programu SharkSmart.",
  datePublished: "2026-10-30",
  steps: [
    {
      title: "Zachovej klid a zůstaň na místě",
      text: "Florida Museum radí při spatření žraloka zůstat v klidu a držet pozici co nejtišeji. Podle nich je většina žraloků jen zvědavá a odpluje sama. Prudké pohyby a cákání nepomáhají.",
    },
    {
      title: "Neztrácej žraloka z očí",
      text: "Sleduj, kde žralok je a co dělá. Nejde o „magický“ oční kontakt, který by zaručil bezpečí – jde o to, abys věděl, odkud se blíží, a mohl včas reagovat.",
    },
    {
      title: "Drž se u parťáka",
      text: "Najdi svého parťáka a zůstaňte blízko sebe. V otevřené vodě doporučuje Florida Museum postavit se zády k sobě a postupně stoupat k lodi. Skupina hlavně výrazně pomáhá při záchraně.",
    },
    {
      title: "Kryj si záda útesem nebo dnem",
      text: "Pokud se žralok chová vzrušeně, opři se zády o útes, skálu nebo pilíř – žralok se pak k tobě může přiblížit z méně směrů. Při ponoru od břehu je podle Florida Museum vhodné postupně klesnout ke dnu a hledat úkryt.",
    },
    {
      title: "Nehoň, nedotýkej se, nekrm",
      text: "NSW SharkSmart výslovně radí žraloka nehonit, nechytat, nezahánět do kouta, nestřílet harpunou a nedotýkat se ho. Nekrm ho a neměj u sebe ulovené ryby – plováček s rybou drž na šňůře daleko od těla.",
    },
    {
      title: "Když se vrací nebo přibližuje: plynule pryč z vody",
      text: "Když se žralok opakovaně přibližuje nebo je neklidný, ukonči ponor. Plav plynule, bez cákání a hluku, žraloka sleduj a parťáka měj u sebe. Na hlídané pláži řekni o žralokovi plavčíkovi.",
    },
    {
      title: "Při kontaktu se aktivně braň – a uteč",
      text: "„Hrát mrtvého“ podle Florida Museum nefunguje. Doporučují dát mezi sebe a žraloka předmět (fotoaparát, ploutev, tyč) a mířit na špičku čenichu, případně na oči a žaberní štěrbiny. Žádná obrana ale není zaručená a její účinnost není doložena studiemi – cílem je získat okamžik a co nejrychleji opustit vodu.",
    },
  ],
  signsTitle: "Znaky, že je žralok neklidný",
  signs: [
    "Prudké výpady směrem k tobě.",
    "Prohnutý hřbet a spuštěné prsní ploutve.",
    "Rychlé klikaté plavání nebo prudké pohyby nahoru a dolů (někdy otírání břichem o dno).",
    "Náhle zneklidněné ryby, které se schovávají – žralok může být poblíž.",
    "Popis chování vychází z doporučení Florida Museum a NSW SharkSmart. Nejde o jistý „návod ke čtení“ žraloků – při pochybnostech vodu opusť.",
  ],
  worksTitle: "Jak setkání předejít",
  works: [
    "Plav a potápěj se s parťákem a předem si domluvte signály a plán návratu.",
    "Vyhýbej se místům, kde se loví ryby, používá návnada, a hejnům ryb nebo potápějícím se ptákům.",
    "Opatrně v kalné vodě, u ústí řek a za soumraku, úsvitu nebo v noci – ty žraloka nevidíš, on tebe ano.",
    "S krvácející ranou do vody nelez.",
    "Přítomnost delfínů neznamená, že v okolí nejsou žraloci.",
    "Respektuj varování a uzavřené pláže.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Mám před žralokem plavat rychle pryč?",
      a: "Ne panicky. Zdroje se shodují na plynulém návratu bez cákání a hluku, kdy žraloka sleduješ a parťáka máš u sebe. Zběsilé plácání ve vodě nepomáhá.",
    },
    {
      q: "Zaručí mi oční kontakt bezpečí?",
      a: "Ne. Sledovat žraloka je užitečné, abys věděl, kde je. Že by pohled do očí sám o sobě zabránil útoku, není doloženo.",
    },
    {
      q: "Je úder do žaber spolehlivá obrana?",
      a: "Není. Florida Museum doporučuje při útoku bránit se a mířit na čenich, oči nebo žábry, ale jde o nouzové řešení bez záruky. Prioritou je chránit si hlavu a trup a dostat se z vody.",
    },
    {
      q: "Co dělat, když někoho žralok kousne?",
      a: "Dostaň zraněného z vody, okamžitě volej záchrannou službu (v EU 112) a silným přímým tlakem zastav krvácení. Podrobné první kroky najdeš v příručce Prevence.",
    },
  ],
  guideTitle: "Celá příručka Prevence zdarma",
  guideText: "Krizové situace, chování žraloků, vybavení, kontrolní seznam před ponorem a první kroky po incidentu – v jednom PDF.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  relatedTitle: "Přečti si také",
  related: [
    { label: "Žralok megalodon: žije ještě? Fakta a mýty", url: "/zralok-megalodon" },
    { label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" },
    { label: "Na co v Egyptě šlapeš: 7 nebezpečných zvířat u pláže", url: "/nebezpecna-morska-zvirata-egypt" },
  ],
  shareText: "Co dělat, když potkáš žraloka 🦈 Krok za krokem – pošli kámošovi, co jede k moři",
  sourcesTitle: "Odborné zdroje",
  sources: SOURCES_ENCOUNTERCS,
  disclaimer: "Obecná informace. Nenahrazuje potápěčský výcvik, kurz první pomoci ani pokyny místních autorit.",
};

const SOURCES_ENCOUNTEREN = [
  { name: "Florida Museum / ISAF – advice to divers", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/divers/" },
  { name: "Florida Museum / ISAF – advice to swimmers", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/swimmers/" },
  { name: "Florida Museum / ISAF – quick tips", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/quick-tips/" },
  { name: "NSW SharkSmart – Staying safe", url: "https://www.sharksmart.nsw.gov.au/staying-safe" },
  { name: "Queensland SharkSmart – tips", url: "https://www.daf.qld.gov.au/news-media/campaigns/sharksmart/education/tips" },
];

export const encounterEn: StepContent = {
  lang: "en",
  url: "https://www.sharkypaul.com/en/what-to-do-if-you-see-a-shark",
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
  related: [
    { label: "Megalodon: is it still alive? Facts and myths", url: "/en/megalodon-shark" },
    { label: "9 shark myths people still believe", url: "/en/shark-myths" },
    { label: "Dangerous marine animals on Egypt's beaches", url: "/en/dangerous-marine-animals-egypt" },
  ],
  shareText: "What to do if you see a shark 🦈 Step by step – send it to a friend heading to the sea",
  sourcesTitle: "Sources",
  sources: SOURCES_ENCOUNTEREN,
  disclaimer: "General information. Not a substitute for dive training, a first-aid course or instructions from local authorities.",
};
