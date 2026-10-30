import type { Metadata } from "next";
import MythArticle, { type MythContent } from "../components/MythArticle";

const URL = "https://www.sharkypaul.com/myty-o-zralocich";

export const metadata: Metadata = {
  title: "9 mýtů o žralocích, kterým lidé věří – a co je pravda",
  description:
    "Ucítí žralok kapku krve na kilometry? Pomůže oční kontakt nebo úder do žaber? Fakta podle odborných zdrojů. Sharky Paul vyvrací nejčastější mýty o žralocích.",
  alternates: { canonical: "/myty-o-zralocich", languages: { cs: "/myty-o-zralocich", en: "/en/shark-myths" } },
  openGraph: {
    type: "article",
    url: URL,
    locale: "cs_CZ",
    title: "9 mýtů o žralocích, kterým lidé věří",
    description: "Kapka krve na kilometry, oční kontakt, úder do žaber… Co je pravda podle odborných zdrojů?",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

const SOURCES = [
  { name: "Florida Museum / ISAF – doporučení pro potápěče", url: "https://www.floridamuseum.ufl.edu/shark-attacks/reduce-risk/divers/" },
  { name: "ISAF – menstruace a žraloci", url: "https://floridamuseum.ufl.edu/fish/isaf/reducing-risk/menstruation" },
  { name: "NSW SharkSmart", url: "https://www.sharksmart.nsw.gov.au/" },
  { name: "Huveneers et al. (2018), PeerJ", url: "https://peerj.com/articles/5554" },
  { name: "Egeberg et al. (2019), PLoS ONE", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6411110/" },
  { name: "Australian National University – první pomoc", url: "https://www.anu.edu.au/news/all-news/new-life-saving-technique-for-shark-attack-victims" },
];

const c: MythContent = {
  lang: "cs",
  url: URL,
  altUrl: "/en/shark-myths",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Respect the Locals",
  title: "9 mýtů o žralocích, kterým lidé věří",
  lead: "Filmy a virální videa z žraloků udělaly stroje na zabíjení s nadpřirozenými smysly. Realita je jiná – a mnohem zajímavější. Tady je, co tvrdí odborné zdroje.",
  mythLabel: "Mýtus:",
  factLabel: "Fakt:",
  myths: [
    { myth: "Žralok ucítí kapku krve na kilometry.", fact: "Žraločí čich je citlivý na některé látky, například aminokyseliny. Tvrzení o jediné kapce krve „na kilometry“ ale není podloženo přímým měřením." },
    { myth: "Žralok na dálku vycítí tvůj tep.", fact: "Lorenziniho ampule zachytí slabá elektrická pole, ale měřené dosahy jsou krátké – řádově desítky centimetrů. Detekce lidského tepu na dálku nebyla změřena." },
    { myth: "Oční kontakt ti zaručí bezpečí.", fact: "Pro takové pravidlo není dostatek důkazů. Rozumné je sledovat, kde žralok je, a udržovat odstup." },
    { myth: "Úder do očí nebo žaber je nejspolehlivější obrana.", fact: "Účinnost není doložena jako univerzální postup. Prioritou je chránit hlavu a trup a co nejrychleji opustit vodu." },
    { myth: "Šperky a barevné oblečení žraloky lákají.", fact: "Není doloženo, že by šperky nebo barva oblečení samy o sobě zvyšovaly riziko. Řada žraloků má navíc omezenou schopnost rozlišovat barvy." },
    { myth: "Menstruace výrazně zvyšuje riziko útoku.", fact: "Krev a menstruace nejsou prokázanými rizikovými faktory. S otevřenou ranou je ale rozumné ponor odložit." },
    { myth: "Magnetický náramek žraloky spolehlivě odpuzuje.", fact: "Nezávislý test zařízení typu Sharkbanz nezjistil měřitelný účinek. Nespoléhej na něj jako na ochranu." },
    { myth: "Odolný oblek, klec nebo odpuzovač zaručí ochranu.", fact: "Mohou snížit riziko nebo závažnost zranění, ale žádné vybavení ochranu nezaručí. Výsledky se liší podle zařízení a druhu." },
    { myth: "Ve skupině se žralok neobjeví.", fact: "Parťák nebo skupina výrazně pomáhá při záchraně, ale není prokázáno, že sama o sobě snižuje pravděpodobnost setkání." },
  ],
  worksTitle: "Co opravdu dává smysl",
  works: [
    "Vyhýbej se rybolovu, návnadám a místům, kde se žraloci krmí – provokovaná kousnutí, zejména při spearfishingu, patří mezi nejlépe doložené rizikové situace.",
    "Respektuj místní varování a uzavřené pláže.",
    "Potápěj se s parťákem a měj domluvený plán návratu.",
    "Při setkání zachovej klid, nedotýkej se, nehoň a neblokuj žralokovi cestu. Plynule se vzdaluj k lodi nebo na břeh.",
    "Nečekej, až se situace vyhrotí – když se žralok opakovaně přibližuje, ukonči aktivitu a opusť vodu.",
  ],
  guideTitle: "Celá příručka Prevence zdarma",
  guideText: "Prevence, chování žraloků, krizové situace, vybavení, kontrolní seznam a první kroky po incidentu – v jednom PDF.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  shareText: "9 mýtů o žralocích, kterým lidé věří 🦈 Co je pravda?",
  sourcesTitle: "Odborné zdroje",
  sources: SOURCES,
  disclaimer: "Obecná informace. Nenahrazuje potápěčský výcvik, kurz první pomoci ani pokyny místních autorit.",
};

export default function Page() {
  return <MythArticle c={c} />;
}
