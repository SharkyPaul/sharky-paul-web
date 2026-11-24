import type { StepContent } from "../components/StepArticle";

// Checklist „Šnorchlování v Egyptě“ (CZ). Obsah převzatý z e-booku Sharky Paul –
// Průvodce šnorchlováním pro každého (kap. 04 Vybavení, 08 Destinace, 10 Krizové situace)
// a z ověřených zdrojů článku Žraloci v Egyptě. Nic nepřidávat bez ověření.

export const egyptChecklistCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/egypt",
  altUrl: "/en",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Egypt · Checklist zdarma",
  title: "Šnorchlování v Egyptě: co si zabalit a jak se nezranit",
  lead: "Rudé moře je pro Čechy a Slováky nejdostupnější světová třída pod vodou: průhlednost 20–40 metrů a korálové útesy přímo od pláže. Tady je můj checklist, co si vzít s sebou a na co si dát pozor, aby ti nic nepokazilo dovolenou.",
  datePublished: "2026-11-24",
  steps: [
    {
      title: "Maska s tvrzeným sklem, ne z tržiště",
      text: "Maska je tvoje okno do podmořského světa. Plastové zorníky z tržiště nezajistí jasné vidění. Test v obchodě: přilož masku na obličej bez pásku a lehce nasaj nosem. Když drží sama, sedí perfektně. Nosíš brýle? Hledej masku s možností korekčních skel.",
    },
    {
      title: "Šnorchl se suchým ventilem",
      text: "Suchý ventil nahoře nepustí vodu dovnitř, když se ponoříš. Výdechový ventil dole ti pomůže snadno vyfouknout vodu. Anatomický náustek méně unavuje čelisti.",
    },
    {
      title: "Ploutve",
      text: "Bez ploutví plaveš rukama, unavuješ se a zbytečně víříš vodu. Do teplého Rudého moře stačí lehké botičkové ploutve.",
    },
    {
      title: "Rashguard nebo tenký neopren",
      text: "Chrání před sluncem a před živočichy na útesu. Na šnorchlování v Egyptě je to základ, ne luxus.",
    },
    {
      title: "Plovací vesta pro začátečníky",
      text: "Pokud si ve vodě nejsi jistý, vesta je jednoduchá pojistka. Ušetří síly a pomůže, když tě překvapí vlna nebo proud.",
    },
    {
      title: "Nikdy sám",
      text: "Nejdůležitější pravidlo: vždy měj parťáka v dohledu. Když se něco stane (křeč, proud, panika), rychlá pomoc rozhoduje.",
    },
    {
      title: "Proud: neplav proti němu",
      text: "Výtokový proud tě táhne od břehu. Neplav proti němu, vyčerpáš se. Plav šikmo nebo rovnoběžně s břehem, dokud se z proudu nedostaneš. Před vstupem do vody se zeptej místních nebo průvodce na proudy.",
    },
    {
      title: "Panika: zastav a lehni na záda",
      text: "Když ti nateče do masky nebo zaplave šnorchl, zastav se, lehni na záda, obličej vzhůru, a zpomal dech. Teprve když se uklidníš, rozhodni se, co dál.",
    },
  ],
  signsTitle: "Před vstupem do vody",
  signs: [
    "Zeptej se na recepci nebo v potápěčském centru, jestli neplatí zákaz koupání.",
    "Drž se vyznačené zóny pro koupání a hotelového vstupu na útes.",
    "Nekrm ryby a na nic nesahej, ani na korály.",
    "Pij dost vody, dehydratace a únava způsobují křeče.",
  ],
  worksTitle: "Respect the Locals",
  works: [
    "Jsi host v jejich domově. Na korály nestoupej a nedotýkej se jich.",
    "Když vidíš turistu stát na korálech, upozorni ho klidně a s respektem.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Kde v Egyptě šnorchlovat jako začátečník?",
      a: "Pro začátečníky doporučuji Hurghadu nebo Sharm el-Sheikh, pro pokročilejší Dahab. Na šnorchlování si najmi místního průvodce s lodí.",
    },
    {
      q: "Jsou v Egyptě žraloci?",
      a: "Ano, žijí tu a útoky jsou vzácné. Většině rizika předejdeš jednoduchými pravidly. Podrobně v článku Žraloci v Egyptě.",
    },
  ],
  guideTitle: "Chceš víc? Příručka zdarma",
  guideText: "Stáhni si zdarma moji příručku Prevence: co dělat, když potkáš žraloka, a jak se u moře chovat bezpečně.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  relatedTitle: "Přečti si taky",
  related: [
    { label: "Žraloci v Egyptě: jak velké je riziko", url: "/zraloci-v-egypte" },
    { label: "Nebezpečná mořská zvířata v Egyptě", url: "/nebezpecna-morska-zvirata-egypt" },
    { label: "Co dělat, když potkáš žraloka", url: "/co-delat-kdyz-potkas-zraloka" },
  ],
  shareText: "Šnorchlování v Egyptě: checklist od Sharky Paula 🦈",
  sourcesTitle: "Zdroje",
  sources: [
    { name: "Florida Museum / ISAF – doporučení pro plavce", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/swimmers/" },
    { name: "NSW SharkSmart – Staying safe", url: "https://www.sharksmart.nsw.gov.au/staying-safe" },
  ],
  disclaimer: "Obecná informace, nenahrazuje výcvik ani pokyny místního průvodce.",
};
