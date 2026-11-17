import type { StepContent } from "../components/StepArticle";

// Článek „USS Indianapolis“ (CZ + EN). Fakta jen z uvedených zdrojů (NHHC, Smithsonian, National Geographic,
// Atomic Heritage Foundation, National Archives, HistoryNet, Live Science, Britannica, History.com, Navy CNIC).
// Počty se ve zdrojích liší o jednoho člověka (1 195 / 1 196 na palubě, 316 / 317 přeživších) – uvádět „asi“.
// Počet obětí žraloků nikdo nezná – jen rozpětí odhadů. Druh žraloků: „nejspíš“ longimanus, možná i tygří.
// Fotky: U.S. Navy / vláda USA, volné dílo (public domain), staženo z Wikimedia Commons.

const C = "https://commons.wikimedia.org/wiki/";

const IMG = {
  ship: {
    src: "/images/indianapolis/indianapolis-mare-island-1945.jpg",
    width: 1200,
    height: 818,
    creditUrl: `${C}File:USS_Indianapolis_(CA-35)_off_the_Mare_Island_Naval_Shipyard_on_10_July_1945_(19-N-86911).jpg`,
  },
  bomb: {
    src: "/images/indianapolis/little-boy-tinian-1945.jpg",
    width: 1200,
    height: 922,
    creditUrl: `${C}File:Atombombe_Little_Boy.jpg`,
  },
  sub: {
    src: "/images/indianapolis/ponorka-i-58-kure-1945.jpg",
    width: 1200,
    height: 943,
    creditUrl: `${C}File:80-G-351895_I-58_(Japanese_Submarine,_1944-1946)_I-53_(Japanese_Submarine,_1943-1946).jpg`,
  },
  chart: {
    src: "/images/indianapolis/trasa-posledni-plavby.jpg",
    width: 580,
    height: 736,
    creditUrl: `${C}File:USS_Indianapolis-last_voyage_chart.jpg`,
  },
  survivors: {
    src: "/images/indianapolis/prezivsi-guam-1945.jpg",
    width: 740,
    height: 584,
    creditUrl: `${C}File:USS_Indianapolis-survivors_on_Guam.jpg`,
  },
};

const SOURCES = [
  { name: "Naval History and Heritage Command (U.S. Navy) – USS Indianapolis (CA-35)", url: "https://www.history.navy.mil/browse-by-topic/ships/modern-ships/indianapolis.html" },
  { name: "Smithsonian Magazine – The Sinking of the USS Indianapolis Triggered the Worst Shark Attack in History", url: "https://www.smithsonianmag.com/history/sinking-uss-indianapolis-triggered-worst-shark-attack-history-25715092/" },
  { name: "National Geographic – USS Indianapolis: the true story behind the shark attack in Jaws", url: "https://www.nationalgeographic.com/history/article/uss-indianapolis-shark-attack-jaws" },
  { name: "Atomic Heritage Foundation (National Museum of Nuclear Science & History) – USS Indianapolis", url: "https://ahf.nuclearmuseum.org/ahf/history/uss-indianapolis/" },
  { name: "National Archives (Prologue blog) – 75. výročí potopení USS Indianapolis", url: "https://prologue.blogs.archives.gov/?p=31979" },
  { name: "HistoryNet – SOS Indianapolis: behind the sinking of the heavy cruiser", url: "https://historynet.com/sos-indianapolis-behind-the-sinking-of-the-heavy-cruiser/" },
  { name: "Live Science – What is the deadliest shark attack ever recorded?", url: "https://www.livescience.com/animals/sharks/what-is-the-deadliest-shark-attack-ever-recorded" },
  { name: "Britannica – USS Indianapolis", url: "https://www.britannica.com/topic/USS-Indianapolis" },
  { name: "History.com – After 72 years, wreckage of U.S. Navy's biggest tragedy is found", url: "https://www.history.com/articles/after-72-years-wreckage-of-u-s-navys-biggest-tragedy-is-found" },
  { name: "U.S. Navy (CNIC) – The sinking of the USS Indianapolis", url: "https://cnrk.cnic.navy.mil/News/Article/1992314/the-sinking-of-the-uss-indianapolis" },
  { name: "Wikimedia Commons – dobové fotografie U.S. Navy (volné dílo)", url: "https://commons.wikimedia.org/wiki/Category:USS_Indianapolis_(CA-35)" },
];

const CREDIT_CS = "Foto: U.S. Navy, volné dílo (Wikimedia Commons)";
const CREDIT_EN = "Photo: U.S. Navy, public domain (Wikimedia Commons)";

export const indianapolisCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/uss-indianapolis",
  altUrl: "/en/uss-indianapolis",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Příběhy moře · 1945",
  title: "USS Indianapolis: loď, která vezla bombu na Hirošimu, a čtyři dny mezi žraloky",
  lead: "V červenci 1945 dovezl americký křižník Indianapolis tajný náklad pro atomovou bombu. O čtyři dny později ho potopila japonská ponorka. Z asi 1 195 mužů na palubě jich přežilo 316. Tohle je skutečný příběh, ze kterého se stala legenda o největším útoku žraloků v historii, a co v něm je a není pravda.",
  heroImage: { ...IMG.ship, alt: "Americký těžký křižník USS Indianapolis u loděnice Mare Island 10. července 1945", credit: `USS Indianapolis u Mare Island, 10. 7. 1945. ${CREDIT_CS}` },
  datePublished: "2026-11-17",
  steps: [
    {
      title: "Tajný náklad: srdce bomby Little Boy",
      text: "16. července 1945 vyplul křižník z San Franciska s nákladem, o kterém posádka nic nevěděla. Podle Atomic Heritage Foundation vezl bednu s mechanismem pumy Little Boy a kanystr s uranem, zhruba polovinu tehdejších amerických zásob. Náklad dovezl 26. července na ostrov Tinian. Odtud 6. srpna odstartoval bombardér Enola Gay s bombou na Hirošimu.",
      image: { ...IMG.bomb, alt: "Montáž atomové bomby Little Boy na ostrově Tinian v roce 1945", credit: `Montáž bomby Little Boy na Tinianu, 1945. Foto: vláda USA, volné dílo (Wikimedia Commons)` },
    },
    {
      title: "Sama a bez doprovodu",
      text: "Po vyložení nákladu pokračovala loď přes Guam k ostrovu Leyte na Filipínách. Plula sama, bez doprovodných lodí. Podle Britannicy námořnictvo vědělo, že v oblasti operují japonské ponorky, ale kapitán Charles McVay varování nedostal.",
      image: { ...IMG.chart, alt: "Mapa plánované trasy USS Indianapolis z Guamu na Filipíny", credit: `Plánovaná trasa z Guamu na Filipíny. ${CREDIT_CS}` },
    },
    {
      title: "30. července, krátce po půlnoci: 12 minut",
      text: "Japonská ponorka I-58 pod velením Močicury Hašimota vypálila torpéda a dvě zasáhla pravý bok lodi. Křižník se potopil asi za 12 minut. Podle Smithsonian Magazine se z lodi do vody dostalo asi 900 mužů, zhruba 300 zůstalo uvnitř. Mnoho z nich nemělo záchrannou vestu ani člun.",
      image: { ...IMG.sub, alt: "Japonská ponorka I-58 vedle ponorky I-53 v přístavu Kure po válce, 1945", credit: `Ponorka I-58 (vpravo) a I-53 v Kure, 1945. ${CREDIT_CS}` },
    },
    {
      title: "Nikdo nepřišel",
      text: "Loď měla dorazit do cíle, ale její zmizení dlouho nikdo neřešil. Trosečníci byli ve vodě čtyři dny a čtyři noci. Většinu z nich podle National Geographic nezabili žraloci, ale žízeň, vyčerpání, slunce, chlad v noci, zranění a pití mořské vody, po které někteří blouznili.",
    },
    {
      title: "Žraloci: co víme a co je mýtus",
      text: "Žraloci se objevili už první ráno. Odborníci se podle Smithsonian Magazine shodují, že šlo hlavně o žraloky dlouhoploutvé (longimanus), možná i tygří. Longimanus žije na otevřeném oceánu blízko hladiny a často jako první dorazí k trosečníkům. Kolik lidí žraloci zabili, nikdo neví. Odhady se pohybují od několika desítek po víc než 150.",
    },
    {
      title: "Náhoda, která zachránila 316 mužů",
      text: "2. srpna dopoledne si poručík Wilbur Gwinn při běžném hlídkovém letu všiml olejové skvrny a lidí ve vodě. Pilot hydroplánu Catalina Adrian Marks pak přistál na rozbouřeném moři, ačkoli to předpisy zakazovaly. Jeho posádka vytáhla z vody 56 mužů a některé přivázala k křídlům. V noci dorazila loď Cecil J. Doyle a další lodě. Zachránit se podařilo 316 mužů.",
      image: { ...IMG.survivors, alt: "Přeživší z USS Indianapolis převážení do nemocnice na Guamu v srpnu 1945", credit: `Přeživší na Guamu, srpen 1945. ${CREDIT_CS}` },
    },
    {
      title: "Kapitán, kterého odsoudili",
      text: "Kapitán McVay přežil. V únoru 1946 ho vojenský soud uznal vinným, že loď neplula kličkovaným kurzem. Podle History.com byl jediným americkým kapitánem ve druhé světové válce, kterého postavili před soud za ztrátu lodi potopené nepřítelem. Na jeho obhajobu svědčil i japonský velitel Hašimoto. Kongres USA ho očistil v říjnu 2000 a námořnictvo vymazalo vinu z jeho záznamů v červenci 2001.",
    },
    {
      title: "Vrak nalezený po 72 letech",
      text: "18. srpna 2017 našla výprava Paula Allena z výzkumné lodi Petrel vrak v hloubce asi 5 500 metrů ve Filipínském moři. Vrak zůstává válečným hrobem a nikdo do něj nesmí zasahovat.",
    },
    {
      title: "Proč mě ten příběh nepouští",
      text: "Longimana jsem viděl na vlastní oči u útesu Elphinstone v Rudém moři, asi pět metrů od lodi. Klidné, zvědavé zvíře, ne monstrum. Příběh Indianapolis neříká, že žraloci jsou zlí. Říká, že moře nikomu nic nedluží. Muži z Indianapolis neumírali kvůli tomu, že by byli slabí, ale protože je nikdo nehledal.",
    },
  ],
  signsTitle: "Rychlé shrnutí",
  signs: [
    "Loď dovezla na Tinian součásti bomby Little Boy, která 6. 8. 1945 dopadla na Hirošimu.",
    "Potopila ji ponorka I-58 30. 7. 1945, loď šla ke dnu asi za 12 minut.",
    "Na palubě bylo asi 1 195 mužů, zachránili 316.",
    "Trosečníci byli ve vodě čtyři dny, než si jich někdo náhodou všiml.",
    "Kolik obětí měli na svědomí žraloci, nikdo neví. Většina zemřela na žízeň, vyčerpání a zranění.",
  ],
  worksTitle: "Co si z toho vzít, když jedeš k moři ty",
  works: [
    "Vždy někomu na pevnině řekni, kam jedeš a kdy se vrátíš. Trosečníky z Indianapolis nikdo nehledal, protože nikdo nečekal, že chybí.",
    "Na lodi a výletech na otevřené moře měj vestu nebo plovací prostředek na dosah a pozorně poslouchej bezpečnostní instruktáž.",
    "Mořskou vodu nikdy nepij. Žízeň a pití slané vody zabily víc mužů z Indianapolis než žraloci.",
    "Když skončíš ve vodě se skupinou, držte se pohromadě. Větší skupina je vidět z dálky a lidé se navzájem udrží nad hladinou.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Vezla USS Indianapolis celou atomovou bombu?",
      a: "Ne. Vezla součásti bomby Little Boy, tedy mechanismus pumy a uran. Bomba se smontovala až na ostrově Tinian.",
    },
    {
      q: "Kolik lidí zabili žraloci?",
      a: "Přesné číslo neexistuje. Odhady historiků se pohybují od několika desítek po víc než 150. Většina mužů zemřela na žízeň, vyčerpání, podchlazení a zranění.",
    },
    {
      q: "Jací žraloci útočili na trosečníky?",
      a: "Nejspíš hlavně žraloci dlouhoploutví (longimanus), kteří žijí na otevřeném oceánu blízko hladiny. Možná i žraloci tygří. Jistě to určit nejde.",
    },
    {
      q: "Je příběh z filmu Čelisti pravdivý?",
      a: "Monolog kapitána Quinta vychází ze skutečné události, ale podle National Geographic obsahuje chyby. Neplatí například, že všechny mrtvé zabili žraloci.",
    },
    {
      q: "Kde leží vrak USS Indianapolis?",
      a: "Ve Filipínském moři v hloubce asi 5 500 metrů. Našla ho v roce 2017 výprava Paula Allena. Je to válečný hrob.",
    },
  ],
  guideTitle: "Celá příručka Prevence zdarma",
  guideText: "Chování žraloků, krizové situace, vybavení a kontrolní seznam před ponorem v jednom PDF. Ulož si ji před cestou k moři.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  relatedTitle: "Přečti si také",
  related: [
    { label: "Co dělat, když potkáš žraloka – krok za krokem", url: "/co-delat-kdyz-potkas-zraloka" },
    { label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" },
    { label: "Žralok tygří: velikost, potrava, věk", url: "/zralok-tygri" },
    { label: "Žraloci v Egyptě", url: "/zraloci-v-egypte" },
  ],
  shareText: "Loď, která vezla bombu na Hirošimu, a 4 dny mezi žraloky 🦈 Skutečný příběh USS Indianapolis – co je pravda a co mýtus",
  sourcesTitle: "Zdroje",
  sources: SOURCES,
  disclaimer:
    "Historický článek. Údaje ze zdrojů uvedených výše, k listopadu 2026. Počty lidí na palubě a přeživších se ve zdrojích liší o jednoho člověka a počet obětí žraloků je jen odhad. Dobové fotografie jsou volná díla U.S. Navy a vlády USA.",
};

export const indianapolisEn: StepContent = {
  lang: "en",
  url: "https://www.sharkypaul.com/en/uss-indianapolis",
  altUrl: "/uss-indianapolis",
  altLabel: "Česky",
  homeUrl: "/en",
  homeLabel: "Home",
  eyebrow: "Sharky Paul · Sea stories · 1945",
  title: "USS Indianapolis: the ship that carried the Hiroshima bomb and four days among sharks",
  lead: "In July 1945 the US cruiser Indianapolis delivered secret cargo for the atomic bomb. Four days later a Japanese submarine sank her. Of about 1,195 men aboard, 316 survived. This is the real story behind the legend of the worst shark attack in history, and what is and isn't true.",
  heroImage: { ...IMG.ship, alt: "US heavy cruiser USS Indianapolis off Mare Island Navy Yard on 10 July 1945", credit: `USS Indianapolis off Mare Island, 10 July 1945. ${CREDIT_EN}` },
  datePublished: "2026-11-17",
  steps: [
    {
      title: "Secret cargo: the heart of Little Boy",
      text: "On 16 July 1945 the cruiser left San Francisco with cargo her crew knew nothing about. According to the Atomic Heritage Foundation, she carried a crate with the gun mechanism of the Little Boy bomb and a canister of uranium, about half of the US supply at the time. She delivered it to Tinian on 26 July. From there the Enola Gay took off with the Hiroshima bomb on 6 August.",
      image: { ...IMG.bomb, alt: "Little Boy atomic bomb being assembled on Tinian in 1945", credit: "Little Boy being assembled on Tinian, 1945. Photo: US government, public domain (Wikimedia Commons)" },
    },
    {
      title: "Alone and unescorted",
      text: "After unloading, the ship sailed via Guam towards Leyte in the Philippines, alone and without escorts. According to Britannica, the Navy knew Japanese submarines were operating in the area, but Captain Charles McVay was not warned.",
      image: { ...IMG.chart, alt: "Map of the intended route of USS Indianapolis from Guam to the Philippines", credit: `Intended route from Guam to the Philippines. ${CREDIT_EN}` },
    },
    {
      title: "30 July, just after midnight: 12 minutes",
      text: "The Japanese submarine I-58, commanded by Mochitsura Hashimoto, fired torpedoes and two hit the starboard side. The cruiser sank in about 12 minutes. According to Smithsonian Magazine, about 900 men made it into the water and about 300 went down with the ship. Many had no life jacket or raft.",
      image: { ...IMG.sub, alt: "Japanese submarine I-58 alongside I-53 at Kure after the war, 1945", credit: `I-58 (right) and I-53 at Kure, 1945. ${CREDIT_EN}` },
    },
    {
      title: "Nobody came",
      text: "The ship was due to arrive, but nobody acted on her absence for days. The survivors spent four days and four nights in the water. According to National Geographic, most were killed not by sharks but by thirst, exhaustion, sun, cold nights, injuries and drinking seawater, which drove some to delirium.",
    },
    {
      title: "Sharks: what we know and what is myth",
      text: "Sharks arrived on the first morning. According to Smithsonian Magazine, experts generally agree they were mainly oceanic whitetips (longimanus), possibly also tiger sharks. Longimanus lives in the open ocean near the surface and is often first on the scene of sea disasters. Nobody knows how many men sharks killed. Estimates range from a few dozen to more than 150.",
    },
    {
      title: "The chance sighting that saved 316 men",
      text: "On the morning of 2 August, Lieutenant Wilbur Gwinn spotted an oil slick and men in the water during a routine patrol. Catalina pilot Adrian Marks then landed on the open sea against standing orders. His crew pulled 56 men from the water, tying some to the wings. That night USS Cecil J. Doyle and other ships arrived. In total, 316 men were rescued.",
      image: { ...IMG.survivors, alt: "USS Indianapolis survivors being taken to hospital on Guam in August 1945", credit: `Survivors on Guam, August 1945. ${CREDIT_EN}` },
    },
    {
      title: "The captain who was convicted",
      text: "Captain McVay survived. In February 1946 a court-martial found him guilty of failing to zigzag. According to History.com, he was the only US captain in World War II court-martialed for losing a ship to enemy action. Even Hashimoto testified in his defence. Congress exonerated him in October 2000 and the Navy cleared his record in July 2001.",
    },
    {
      title: "The wreck found after 72 years",
      text: "On 18 August 2017 Paul Allen's expedition aboard the research vessel Petrel found the wreck about 5,500 metres down in the Philippine Sea. It remains a war grave and must not be disturbed.",
    },
    {
      title: "Why this story stays with me",
      text: "I have seen a longimanus with my own eyes at Elphinstone Reef in the Red Sea, about five metres from the boat. A calm, curious animal, not a monster. The Indianapolis story doesn't say sharks are evil. It says the sea owes nobody anything. The men of the Indianapolis didn't die because they were weak, but because nobody was looking for them.",
    },
  ],
  signsTitle: "Quick summary",
  signs: [
    "The ship delivered parts of Little Boy, the bomb dropped on Hiroshima on 6 August 1945, to Tinian.",
    "Submarine I-58 sank her on 30 July 1945, in about 12 minutes.",
    "About 1,195 men were aboard; 316 were rescued.",
    "The survivors were in the water for four days before being spotted by chance.",
    "Nobody knows how many died from sharks. Most died of thirst, exhaustion and injuries.",
  ],
  worksTitle: "What to take from it when you go to the sea",
  works: [
    "Always tell someone on land where you are going and when you will be back. Nobody searched for the Indianapolis survivors because nobody knew they were missing.",
    "On boats and open-sea trips, keep a life jacket within reach and listen to the safety briefing.",
    "Never drink seawater. Thirst and drinking seawater killed more Indianapolis men than sharks did.",
    "If you end up in the water as a group, stay together. A group is easier to spot and people keep each other afloat.",
  ],
  faqTitle: "FAQ",
  faq: [
    { q: "Did USS Indianapolis carry the whole atomic bomb?", a: "No. She carried components of Little Boy, the gun mechanism and the uranium. The bomb was assembled on Tinian." },
    { q: "How many men did sharks kill?", a: "There is no exact figure. Historians' estimates range from a few dozen to more than 150. Most men died of thirst, exhaustion, exposure and injuries." },
    { q: "Which sharks attacked the survivors?", a: "Most likely mainly oceanic whitetips (longimanus), which live in the open ocean near the surface, possibly also tiger sharks. It cannot be determined with certainty." },
    { q: "Is the story in Jaws true?", a: "Quint's monologue is based on the real event, but according to National Geographic it contains errors. For example, it is not true that all the dead were killed by sharks." },
    { q: "Where is the wreck of USS Indianapolis?", a: "In the Philippine Sea, about 5,500 metres deep. Paul Allen's expedition found it in 2017. It is a war grave." },
  ],
  guideTitle: "Free shark safety guide",
  guideText: "Shark behaviour, emergencies, gear and a pre-dive checklist in one PDF. Save it before your trip to the sea.",
  guideCta: "Download the free guide",
  guideUrl: "/prirucka",
  relatedTitle: "Read next",
  related: [
    { label: "What to do if you see a shark – step by step", url: "/en/what-to-do-if-you-see-a-shark" },
    { label: "Shark myths people still believe", url: "/en/shark-myths" },
    { label: "Dangerous marine animals in Egypt", url: "/en/dangerous-marine-animals-egypt" },
  ],
  shareText: "The ship that carried the Hiroshima bomb and 4 days among sharks 🦈 The true story of USS Indianapolis – fact vs myth",
  sourcesTitle: "Sources",
  sources: SOURCES,
  disclaimer:
    "Historical article. Data from the sources listed above, as of November 2026. Figures for men aboard and survivors differ by one between sources, and shark deaths are only an estimate. Period photographs are public-domain works of the US Navy and US government.",
};
