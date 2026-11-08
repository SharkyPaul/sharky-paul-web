import type { StepContent } from "../components/StepArticle";

// Článek „Piráti z Karibiku doopravdy“ (CZ). Fakta jen z uvedených zdrojů:
// Britannica, National Park Service, Royal Museums Greenwich, National Geographic, World History Encyclopedia,
// Jamaica Port Royal, Canada's History, Wikipedia (zemětřesení 1692, Tortuga). Nic nepřidávat bez ověření.

const SOURCES_CS = [
  { name: "Britannica – Blackbeard", url: "https://www.britannica.com/biography/Blackbeard" },
  { name: "National Park Service – Blackbeard (Edward Teach)", url: "https://www.nps.gov/caha/learn/historyculture/blackbeard-edward-teach.htm" },
  { name: "Royal Museums Greenwich – Blackbeard", url: "https://www.rmg.co.uk/discover/explore/blackbeard-edward-teach" },
  { name: "Royal Museums Greenwich – Anne Bonny a Mary Read", url: "https://www.rmg.co.uk/stories/maritime-history/real-pirates-anne-bonny-mary-read" },
  { name: "World History Encyclopedia – Anne Bonny", url: "https://worldhistory.org/Anne_Bonny" },
  { name: "EBSCO – Anne Bonny", url: "https://www.ebsco.com/research-starters/womens-studies-and-feminism/anne-bonny" },
  { name: "National Geographic – Port Royal, „nejničemnější město na Zemi“", url: "https://www.nationalgeographic.com/history/history-magazine/article/how-the-wickedest-city-on-earth-was-sunk-by-an-earthquake" },
  { name: "Wikipedia – Zemětřesení na Jamajce 1692", url: "https://www.wikipedia.com/wiki/Port_Royal_earthquake" },
  { name: "Jamaica Port Royal – Sir Henry Morgan", url: "https://jamaicaportroyal.com/pirates-pt2.html" },
  { name: "World History US – Henry Morgan", url: "https://worldhistory.us/?p=840" },
  { name: "247 Wall St. – Nejproslulejší piráti v historii", url: "https://247wallst.com/special-report/2023/07/22/the-most-infamous-pirates-in-history-3/6/" },
  { name: "Wikipedia – Anne Bonny", url: "https://www.wikipedia.com/wiki/Anne_Bonny" },
  { name: "Britannica – Tortue Island", url: "https://www.britannica.com/place/Tortue-Island" },
  { name: "World History Encyclopedia – Buccaneer", url: "https://www.worldhistory.org/Buccaneer/" },
  { name: "Canada's History – Pirate Havens", url: "https://www.canadashistory.ca/explore/politics-law/pirate-havens" },
];

export const piratiZKaribikuCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/pirati-z-karibiku",
  altUrl: "/en",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Moře · Historie",
  title: "Piráti z Karibiku doopravdy: Černovous, Bonny a Read, Morgan a Tortuga",
  lead: "Filmoví piráti se od skutečných dost liší. Tady je, co o Černovousovi, dvou ženách na pirátské lodi, Henrym Morganovi, městě Port Royal a ostrově Tortuga říkají historické zdroje.",
  datePublished: "2026-11-07",
  steps: [
    {
      title: "Černovous: nejslavnější pirát",
      text: "Edward Teach (též Thatch) se narodil kolem roku 1680, pravděpodobně v Bristolu. V listopadu 1717 zajal francouzskou loď La Concorde a přejmenoval ji na Queen Anne's Revenge. Podle National Park Service měla zhruba 300 mužů posádky a 40 děl. Jeho vlajka podle téhož zdroje zobrazovala krvácející srdce a kostlivce s přesýpacími hodinami a kopím a sloužila jen k zastrašování.",
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Edward_Teach_Commonly_Call%27d_Black_Beard_(1734).jpg?width=900",
        alt: "Rytina Edwarda Teache, zvaného Černovous, z roku 1734",
        width: 900,
        height: 1328,
        credit: "Rytina Edwarda Teache (1734), volné dílo, Wikimedia Commons",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Edward_Teach_Commonly_Call%27d_Black_Beard_(1734).jpg",
      },
    },
    {
      title: "Jak Černovous skončil",
      text: "V červnu 1718 se Queen Anne's Revenge najela na mělčinu u Beaufort Inletu v Severní Karolíně. Royal Museums Greenwich uvádí, že vrak byl objeven v roce 1996 a dosud z něj vyzvedli přes 400 000 předmětů. Černovous zemřel 22. listopadu 1718 u ostrova Ocracoke v boji s námořníky poručíka Roberta Maynarda. Jeho hlavu pak vystavili na přídi Maynardovy lodi. Třináct členů jeho posádky bylo oběšeno ve Williamsburgu.",
    },
    {
      title: "Anne Bonny a Mary Read: dvě ženy na pirátské lodi",
      text: "Obě plavaly na lodi Johna „Calico Jacka“ Rackhama. Mary Read se vydávala za muže, Bonny i Rackham ji podle Wikipedie považovali za muže. V říjnu 1720 loď zajal kapitán Jonathan Barnet a posádku odvezl na Jamajku.",
    },
    {
      title: "Soud a konec",
      text: "Rackham byl souzen 16. listopadu 1720 a oběšen 18. listopadu v Port Royalu. Bonny a Read soudili 28. listopadu ve Spanish Townu a odsoudili k smrti, ale obě uvedly, že jsou těhotné, a poprava se odložila. Read podle Royal Museums Greenwich zemřela v žaláři na horečku v dubnu 1721. Osud Anne Bonny není znám. Podle kapitána Johnsona řekla Rackhamovi, že kdyby bojoval jako muž, nemusel by viset jako pes.",
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/General_History_of_the_Pyrates_-_Ann_Bonny_and_Mary_Read.jpg?width=900",
        alt: "Rytina Anne Bonny a Mary Read odsouzených za pirátství v roce 1720, Benjamin Cole, kolem roku 1724",
        width: 900,
        height: 505,
        credit: "Rytina Benjamina Colea (kolem 1724), volné dílo, Wikimedia Commons",
        creditUrl: "https://commons.wikimedia.org/wiki/File:General_History_of_the_Pyrates_-_Ann_Bonny_and_Mary_Read.jpg",
      },
    },
    {
      title: "Henry Morgan: pirát, který se stal guvernérem",
      text: "Velšan Henry Morgan se narodil kolem roku 1635 a podle zdrojů vyplenil a vypálil Panama City. Po zatčení a cestě do Anglie ho král Karel II. povýšil do šlechtického stavu a Morgan se stal místoguvernérem Jamajky. Zemřel v srpnu 1688 ve své posteli.",
    },
    {
      title: "Port Royal: město, které se potopilo",
      text: "National Geographic ho nazývá nejničemnějším městem na Zemi a karibským pirátským útočištěm. Dne 7. června 1692 ho zasáhlo zemětřesení o síle asi 7,5 a velká část města se propadla do moře. Wikipedie uvádí zhruba 5 000 obětí. Pod mořem skončil i hřbitov, a s ním Morganův hrob.",
    },
    {
      title: "Tortuga: ostrov bukanýrů",
      text: "Tortuga leží u severního pobřeží Haiti, má asi 180 km² a Britannica ji označuje za pevnost kaperů a pirátů v 17. století. Bukanýři byli podle Britanniky dobrodruzi různých národností, které spojoval odpor proti Španělsku. Francouzský inženýr Jean Le Vasseur postavil v roce 1642 na ostrově pevnost s více než 40 děly. Podle Canada's History později Anglie bukanýry z Tortugy odlákala tím, že založila Port Royal.",
    },
  ],
  signsTitle: "Rychlé shrnutí",
  signs: [
    "Černovous: Queen Anne's Revenge (40 děl, asi 300 mužů), zemřel 22. 11. 1718 u Ocracoke, vrak nalezen 1996.",
    "Bonny a Read: odsouzeny 28. 11. 1720, obě unikly oprávnění těhotenstvím, Read zemřela ve vězení, Bonny zmizela ze záznamů.",
    "Morgan: pirát, který se stal místoguvernérem Jamajky a zemřel v roce 1688 v posteli.",
    "Port Royal: 7. 6. 1692 ho zničilo zemětřesení o síle asi 7,5.",
    "Tortuga: ostrov u Haiti, 17. století, pevnost Jeana Le Vasseura z roku 1642.",
  ],
  worksTitle: "Co lidé o pirátech věří špatně",
  works: [
    "„Všichni piráti skončili na šibenici.“ Morgan se stal místoguvernérem Jamajky a zemřel v posteli. Obě ženy z Rackhamovy lodi unikly šibenici těhotenstvím.",
    "„Černovousova loď se ztratila navždy.“ Vrak, o kterém se věří, že je Queen Anne's Revenge, byl objeven v roce 1996 a vyzvedli z něj přes 400 000 předmětů.",
    "„Morganův hrob se dá navštívit.“ Při zemětřesení v roce 1692 se hřbitov propadl do moře a Morganův hrob s ním.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Kdo byl nejslavnější pirát?",
      a: "Seznamy nejslavnějších pirátů se shodují na Černovousovi (Edward Teach). Často následují Bartholomew Roberts, Henry Morgan, Anne Bonny a Calico Jack.",
    },
    {
      q: "Byla ženská pirátka?",
      a: "Ano. Anne Bonny a Mary Read plavaly na lodi Calico Jacka Rackhama a v roce 1720 je odsoudili k smrti. Obě se zachránily tím, že byly těhotné.",
    },
    {
      q: "Co se stalo s městem Port Royal?",
      a: "Dne 7. června 1692 ho zničilo zemětřesení o síle asi 7,5 a velká část města se propadla do moře.",
    },
    {
      q: "Kde leží Tortuga?",
      a: "U severního pobřeží Haiti. Ostrov má asi 180 km² a v 17. století byl pevností kaperů a pirátů.",
    },
    {
      q: "Našli někdy vrak Černovousovy lodi?",
      a: "Ano. Royal Museums Greenwich uvádí, že vrak byl objeven v roce 1996 u pobřeží Severní Karolíny.",
    },
  ],
  guideTitle: "Celá příručka Prevence zdarma",
  guideText: "Chování žraloků, krizové situace, vybavení a kontrolní seznam před ponorem v jednom PDF. Ulož si ji před cestou k moři.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  relatedTitle: "Přečti si také",
  related: [
    { label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" },
    { label: "Žraloci v Egyptě: jak velké je riziko", url: "/zraloci-v-egypte" },
    { label: "Žralok megalodon: kdy žil a jak velký byl", url: "/zralok-megalodon" },
  ],
  shareText: "Piráti z Karibiku doopravdy 🏴‍☠️ Černovous, dvě pirátky, Morgan a potopené město Port Royal",
  sourcesTitle: "Zdroje",
  sources: SOURCES_CS,
  disclaimer:
    "Historické informace ze zdrojů uvedených níže, k listopadu 2026. Data a podrobnosti se u pirátů v pramenech někdy liší.",
};
