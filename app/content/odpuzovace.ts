import type { StepContent } from "../components/StepArticle";

// Článek „Odpuzovače žraloků: co funguje a co ne“ (CZ). Fakta jen z otevřených zdrojů (28. 11. 2026):
// Flinders University (2018, 2022), Hakai Magazine (2018, o studii Huveneers a kol., PeerJ 2018), NSW SharkSmart.
// Žádné číslo nepřidávat bez ověření. Nikdy netvrdit, že odpuzovač zaručí ochranu.

const SOURCES_CS = [
  { name: "Huveneers a kol. (2018): Effectiveness of five personal shark-bite deterrents for surfers, PeerJ 6:e5554", url: "https://peerj.com/articles/5554/" },
  { name: "Flinders University – Seeking a ‘great’ shark deterrent (2018)", url: "https://news.flinders.edu.au/blog/2018/05/24/finding-a-great-shark-deterrent/" },
  { name: "Flinders University – New tests on shark deterrents (2022)", url: "https://news.flinders.edu.au/blog/2022/11/20/new-tests-on-shark-deterrents/" },
  { name: "Hakai Magazine – Many Shark Repellents Don’t Work (2018)", url: "https://hakaimagazine.com/news/many-shark-repellents-dont-work/" },
  { name: "NSW SharkSmart – Personal deterrents", url: "https://www.sharksmart.nsw.gov.au/technology-trials-and-research/personal-deterrents" },
];

export const odpuzovaceCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/odpuzovace-zraloku",
  altUrl: "/en",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Žraloci · Bezpečnost",
  title: "Odpuzovače žraloků: co funguje a co ne",
  lead: "Magnetický náramek, elektrický odpuzovač, speciální vosk na prkno. Vědci z Flinders University v Austrálii otestovali pět osobních odpuzovačů na žralocích bílých v otevřeném moři. Měřitelně pomohl jen jeden. A ani ten nezaručí, že tě žralok nekousne.",
  datePublished: "2026-11-28",
  steps: [
    {
      title: "Jak test probíhal",
      text: "Tým Charlieho Huveneerse z Flinders University testoval odpuzovače u Neptunových ostrovů v jižní Austrálii. Na repliky surfových prken dali návnadu a sledovali, jak se k ní žraloci bílí chovají se zapnutým zařízením a bez něj. Podle univerzity zaznamenali víc než 1 400 interakcí od 44 různých žraloků bílých. Studie vyšla v roce 2018 v časopise PeerJ.",
    },
    {
      title: "Co se testovalo",
      text: "Pět výrobků, které si může koupit každý: elektrický odpuzovač Freedom+ Surf, elektrický Rpela, magnetický náramek Sharkbanz, magnetické lanko Sharkbanz a vosk na prkno Chillax.",
    },
    {
      title: "Co fungovalo: Freedom+ Surf",
      text: "Elektrický odpuzovač Freedom+ Surf snížil podíl případů, kdy žralok návnadu sebral, z 96 % na 40 %. Pomohl tedy výrazně, ale ne vždy. Výrobce část terénní práce finančně podpořil, podle univerzity ale na výsledky neměl vliv.",
    },
    {
      title: "Co nefungovalo: magnety a vosk",
      text: "Podle Hakai Magazine měly ostatní výrobky na chování žraloků bílých malý nebo žádný měřitelný vliv. Týká se to i obou výrobků Sharkbanz, které mají magnety přehltit smyslové orgány žraloka na elektrické pole. Výrobce vosku Chillax s metodou testu nesouhlasí.",
    },
    {
      title: "Velký odpuzovač na loď chrání jen kousek",
      text: "V roce 2022 tým otestoval elektrické zařízení Ocean Guardian BOAT01, které má chránit větší prostor kolem lodi. Ve 116 pokusech se 43 žraloky bílými snížilo podíl sebraných návnad nejvýš o 48 %. Žraloci se ale i se zapnutým zařízením drželi v průměru 2 až 3 metry od návnady. Podle autorů tak chrání jen okolí zhruba do 3 metrů. Studie vyšla v ICES Journal of Marine Science.",
    },
    {
      title: "Žádný odpuzovač nic nezaručí",
      text: "Žádný zdroj netvrdí, že by nějaký odpuzovač ochranu zaručil. Hakai Magazine cituje Sarah Waries: neexistuje odpuzovač, který zaručí, že žraloka nepotkáš. Huveneers varuje, že nepodložená tvrzení výrobců můžou dávat falešný pocit bezpečí. Nejlepší ochrana je pořád chování: kde a kdy jdeš do vody a co děláš, když žraloka uvidíš.",
    },
  ],
  signsTitle: "Rychlé shrnutí",
  signs: [
    "Testováno 5 osobních odpuzovačů na žralocích bílých (Huveneers a kol., PeerJ 2018).",
    "Freedom+ Surf: návnadu žraloci sebrali ve 40 % případů místo 96 %.",
    "Magnetický náramek a lanko Sharkbanz: malý nebo žádný měřitelný vliv.",
    "Vosk Chillax a odpuzovač Rpela: malý nebo žádný měřitelný vliv.",
    "Odpuzovač na loď (BOAT01): chrání zhruba do 3 metrů.",
    "Žádný odpuzovač nezaručí, že tě žralok nekousne.",
  ],
  worksTitle: "Mýty o odpuzovačích",
  works: [
    "„Magnetický náramek žraloky odežene.“ V testu Flinders University měly výrobky Sharkbanz malý nebo žádný měřitelný vliv.",
    "„S odpuzovačem se mi nic nestane.“ I nejlepší testovaný přístroj snížil podíl sebraných návnad na 40 %, ne na nulu.",
    "„Jedno zařízení ochrání celou loď nebo pláž.“ Odpuzovač BOAT01 chránil zhruba jen do 3 metrů.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Fungují odpuzovače žraloků?",
      a: "Některé částečně. V testu pěti osobních odpuzovačů měřitelně pomohl jen elektrický Freedom+ Surf. Ochranu nezaručí žádný.",
    },
    {
      q: "Funguje magnetický náramek Sharkbanz?",
      a: "V testu na žralocích bílých (Huveneers a kol., PeerJ 2018) měl náramek i lanko Sharkbanz malý nebo žádný měřitelný vliv.",
    },
    {
      q: "Jak moc pomáhá elektrický odpuzovač?",
      a: "Freedom+ Surf snížil podíl případů, kdy žralok sebral návnadu z prkna, z 96 % na 40 %.",
    },
    {
      q: "Potřebuju odpuzovač na dovolenou v Egyptě?",
      a: "Testy proběhly se žraloky bílými v Austrálii, ne v Rudém moři. Na šnorchlování a potápění u útesu je důležitější dodržovat pravidla a pokyny místního průvodce. Co dělat při setkání se žralokem, najdeš v příručce zdarma.",
    },
  ],
  guideTitle: "Celá příručka Prevence zdarma",
  guideText: "Chování žraloků, krizové situace, vybavení a kontrolní seznam před ponorem v jednom PDF. Ulož si ji před cestou k moři.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  relatedTitle: "Přečti si také",
  related: [
    { label: "Co dělat, když potkáš žraloka (krok za krokem)", url: "/co-delat-kdyz-potkas-zraloka" },
    { label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" },
    { label: "Žraloci v Egyptě: jak velké je riziko", url: "/zraloci-v-egypte" },
    { label: "Žralok bílý: velikost, potrava, věk a ohrožení", url: "/zralok-bily" },
  ],
  shareText: "Fungují odpuzovače žraloků? Vědci otestovali 5 výrobků, měřitelně pomohl jeden 🦈",
  sourcesTitle: "Zdroje",
  sources: SOURCES_CS,
  disclaimer:
    "Obecné informace ze zdrojů uvedených níže, k listopadu 2026. Nejde o doporučení konkrétního výrobku. Testy proběhly se žraloky bílými v Austrálii, výsledky u jiných druhů se můžou lišit.",
};
