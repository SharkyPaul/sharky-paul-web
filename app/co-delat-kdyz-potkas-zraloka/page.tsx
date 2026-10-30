import type { Metadata } from "next";
import StepArticle, { type StepContent } from "../components/StepArticle";

const URL = "https://www.sharkypaul.com/co-delat-kdyz-potkas-zraloka";

export const metadata: Metadata = {
  title: "Co dělat, když potkáš žraloka: 7 kroků pro potápěče a šnorchlaře",
  description:
    "Žralok při potápění nebo šnorchlování? Zachovej klid, sleduj ho a plynule opusť vodu. Krok za krokem podle Florida Museum a NSW SharkSmart: znaky vzrušení, obrana, první kroky.",
  alternates: {
    canonical: "/co-delat-kdyz-potkas-zraloka",
    languages: { cs: "/co-delat-kdyz-potkas-zraloka", en: "/en/what-to-do-if-you-see-a-shark" },
  },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "Co dělat, když potkáš žraloka – krok za krokem",
    description: "Klid, odstup, parťák a plynulý návrat. Co doporučují odborné zdroje, když se ve vodě objeví žralok.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

const SOURCES = [
  { name: "Florida Museum / ISAF – doporučení pro potápěče", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/divers/" },
  { name: "Florida Museum / ISAF – doporučení pro plavce", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/swimmers/" },
  { name: "Florida Museum / ISAF – rychlé tipy", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/quick-tips/" },
  { name: "NSW SharkSmart – Staying safe", url: "https://www.sharksmart.nsw.gov.au/staying-safe" },
  { name: "Queensland SharkSmart – tipy", url: "https://www.daf.qld.gov.au/news-media/campaigns/sharksmart/education/tips" },
];

const c: StepContent = {
  lang: "cs",
  url: URL,
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
  related: [{ label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" }],
  shareText: "Co dělat, když potkáš žraloka 🦈 Krok za krokem – pošli kámošovi, co jede k moři",
  sourcesTitle: "Odborné zdroje",
  sources: SOURCES,
  disclaimer: "Obecná informace. Nenahrazuje potápěčský výcvik, kurz první pomoci ani pokyny místních autorit.",
};

export default function Page() {
  return <StepArticle c={c} />;
}
