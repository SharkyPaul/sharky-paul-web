import type { StepContent } from "../components/StepArticle";

// Článek „Nebezpečná zvířata u pláží v Egyptě“ (CZ/EN).
// Fakta jen z uvedených zdrojů (DAN, NSW Agency for Clinical Innovation, GOV.UK).
// Nic nepřidávat bez ověření – první pomoc musí odpovídat zdrojům.

const SOURCES_CS = [
  { name: "DAN – Marine Envenomations: Vertebrates (rejnoci, perutýni, odranci)", url: "https://dan.org/alert-diver/article/marine-envenomations-vertebrates/" },
  { name: "DAN – Fire Coral (ohnivý korál)", url: "https://dan.org/health-medicine/health-resources/diseases-conditions/fire-coral/" },
  { name: "DAN – Sea Urchins (ježovky)", url: "https://dan.org/health-medicine/health-resources/diseases-conditions/sea-urchins/" },
  { name: "NSW Agency for Clinical Innovation – Venomous marine stings", url: "https://aci.health.nsw.gov.au/networks/eci/clinical/tools/venomous-marine-stings" },
  { name: "GOV.UK – Egypt: getting help (tísňová čísla)", url: "https://www.gov.uk/foreign-travel-advice/egypt/getting-help" },
];

const SOURCES_EN = [
  { name: "DAN – Marine Envenomations: Vertebrates (stingrays, lionfish, stonefish)", url: "https://dan.org/alert-diver/article/marine-envenomations-vertebrates/" },
  { name: "DAN – Fire Coral", url: "https://dan.org/health-medicine/health-resources/diseases-conditions/fire-coral/" },
  { name: "DAN – Sea Urchins", url: "https://dan.org/health-medicine/health-resources/diseases-conditions/sea-urchins/" },
  { name: "NSW Agency for Clinical Innovation – Venomous marine stings", url: "https://aci.health.nsw.gov.au/networks/eci/clinical/tools/venomous-marine-stings" },
  { name: "GOV.UK – Egypt: getting help (emergency numbers)", url: "https://www.gov.uk/foreign-travel-advice/egypt/getting-help" },
];

export const egyptCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/nebezpecna-morska-zvirata-egypt",
  altUrl: "/en/dangerous-marine-animals-egypt",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Egypt · Rudé moře",
  title: "Nebezpečná zvířata u pláží v Egyptě: na co šlapeš",
  lead: "Bojíš se v Egyptě žraloků? Mnohem častěji tě potrápí něco, na co šlápneš nebo na co sáhneš. Tady je 7 zvířat z mělčin Rudého moře, jak se jim vyhnout a jaká je první pomoc podle Divers Alert Network (DAN) a zdravotnických doporučení.",
  datePublished: "2026-11-02",
  steps: [
    {
      title: "Odranec pravý (stonefish)",
      text: "Leží nehybně na dně nebo mezi kameny a vypadá jako porostlý kámen (často se mu chybně říká ropušnice). Na hřbetě má jedovaté ostny. DAN uvádí, že odranec může způsobit i smrtelné bodnutí. Při bodnutí: ponoř místo do co nejteplejší snesitelné vody (asi 45 °C) až na 90 minut, odstraň viditelné úlomky a co nejdřív k lékaři – protijed se podává jen v nemocnici.",
    },
    {
      title: "Perutýn (lionfish)",
      text: "Krásná ryba s vějířem ploutví, často u útesu a mol. Jedovaté jsou ostny v ploutvích. Bodnutí je podle DAN velmi bolestivé, ale jen vzácně smrtelné. První pomoc je stejná jako u odrance: horká voda, vyčištění rány, lékař. Prevence je jednoduchá – nesahej na něj a nefoť ho z centimetrové vzdálenosti.",
    },
    {
      title: "Trnucha (rejnok) zahrabaná v písku",
      text: "Rejnoci se schovávají v písku na mělčině. DAN píše, že ke zraněním dochází hlavně tak, že na zahrabaného rejnoka člověk šlápne. Ve vodě proto šoupej nohama po dně místo dlouhých kroků. Při zásahu: horká voda (úleva až na 90 minut), vyčištění rány a lékař. Hluboko zabodnutý trn (hlavně v hrudi nebo břiše) nevytahuj – smí ho odstranit jen lékař.",
    },
    {
      title: "Ježovky",
      text: "Černé ježovky s dlouhými ostny bývají na kamenech a útesu u vstupu do vody. DAN doporučuje ponořit místo do horké vody (max. 45 °C) na 30–90 minut, povrchové ostny opatrně vytáhnout pinzetou a hluboko zapíchnuté nechat lékaři. Ránu nezalepuj páskou ani lepidlem a vždy ji nech zkontrolovat.",
    },
    {
      title: "Ohnivý korál",
      text: "Nenápadný žlutohnědý „korál“, který pálí po dotyku – stačí se o něj otřít. DAN radí opláchnout místo octem (stabilizuje ještě nevystřelené žahavé buňky), puchýře nepropichovat a otevřenou ránu nechat zkontrolovat lékařem. Potíže se podle DAN můžou po týdnu až dvou vrátit, to je normální.",
    },
    {
      title: "Homolice (plž s ulitou)",
      text: "Pěkná kuželovitá ulita v mělčině. Živý plž má jedovatý harpunovitý zub a bodnutí může být vážné. Proto ulity v moři nesbírej a nedávej do kapsy plavek. Při bodnutí doporučují zdravotnická pravidla (NSW) tlakový obvaz se znehybněním celé končetiny a okamžitě volat záchranku.",
    },
    {
      title: "Muréna",
      text: "Muréna se schovává ve škvírách útesu a otevírá tlamu kvůli dýchání, ne z agrese. Problém vzniká, když do škvír strkáš ruce nebo ji krmíš. Kousnutí vyčisti a nech ho ošetřit lékařem – i malá rána z moře se může zanítit.",
    },
  ],
  signsTitle: "Jak se tomu vyhnout: 6 pravidel na pláž",
  signs: [
    "Boty do vody, hlavně na kamenech, korálech a při vstupu z mola – odrance ani ježovku na dně často neuvidíš.",
    "V písčité mělčině šoupej nohama, nedělej dlouhé kroky (rejnoci).",
    "Na nic nesahej, nestoupej na útes a nekleč na korálech. Klečet jen na čistém písku.",
    "Ulity a „kameny“ ze dna nesbírej, nic nekrm a nestrkej ruce do škvír.",
    "Šnorchluj a plav s parťákem a vstupuj do vody tam, kde je vyznačený vstup.",
    "Před dovolenou si ulož tísňové číslo: v Egyptě záchranná služba 123 (podle GOV.UK), v hotelu kontakt na lékaře.",
  ],
  worksTitle: "Bodnutí jedovatou rybou: obecný postup",
  works: [
    "Vylez z vody a uklidni se, ať se jed nešíří zbytečnou námahou a nehrozí utonutí.",
    "Ponoř zasažené místo do co nejteplejší vody, kterou sneseš bez opaření (asi 45 °C), až na 90 minut. Teplotu zkoušej zdravou rukou – hlavně u dětí, bolest otupí cit.",
    "Odstraň jen viditelné úlomky ostnů. Hluboko zabodnuté nech lékaři.",
    "Při silné bolesti, otoku, potížích s dechem, slabosti nebo alergické reakci okamžitě volej 123 nebo hotelového lékaře.",
    "I když bolest odezní, nech ránu zkontrolovat – hrozí infekce a zbytky ostnů.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    {
      q: "Co je v Egyptě nebezpečnější než žraloci?",
      a: "Pro běžného rekreanta jsou mnohem častějším problémem zranění od zvířat na dně a na útesu: ježovky, ohnivý korál, rejnoci zahrabaní v písku, perutýni a odranci. Většině z nich předejdeš botami do vody a tím, že na nic nesaháš.",
    },
    {
      q: "Co dělat, když šlápnu na odrance?",
      a: "Vylez z vody, ponoř nohu do co nejteplejší snesitelné vody (asi 45 °C) až na 90 minut a co nejdřív vyhledej lékaře. DAN uvádí, že bodnutí odrance může být i smrtelné a protijed se podává jen v nemocnici.",
    },
    {
      q: "Pomáhá na ohnivý korál ocet?",
      a: "DAN doporučuje opláchnout místo octem, protože stabilizuje ještě nevystřelené žahavé buňky. Na jed, který už je v kůži, ocet nepůsobí. Puchýře nepropichuj.",
    },
    {
      q: "Jsou boty do vody opravdu potřeba?",
      a: "Na kamenitých a korálových vstupech ano. Chrání před ježovkami, ostrými korály a částečně i před bodnutím ryb na dně. Nezaručí ale stoprocentní ochranu – pořád platí dívat se pod nohy a na nic nesahat.",
    },
    {
      q: "Jaké je tísňové číslo v Egyptě?",
      a: "Záchranná služba má podle britského ministerstva zahraničí číslo 123. V hotelech se vyplatí znát i kontakt na hotelového lékaře.",
    },
  ],
  guideTitle: "Celá příručka Prevence zdarma",
  guideText: "Krizové situace, chování žraloků, vybavení, kontrolní seznam před ponorem a první kroky po incidentu – v jednom PDF. Ulož si ji před cestou k moři.",
  guideCta: "Stáhnout příručku zdarma",
  guideUrl: "/prirucka",
  relatedTitle: "Přečti si také",
  related: [
    { label: "Co dělat, když potkáš žraloka – krok za krokem", url: "/co-delat-kdyz-potkas-zraloka" },
    { label: "9 mýtů o žralocích, kterým lidé věří", url: "/myty-o-zralocich" },
  ],
  shareText: "Na co v Egyptě šlapeš 🐟⚠️ 7 nebezpečných zvířat u pláže a první pomoc – pošli tomu, kdo letí do Egypta",
  sourcesTitle: "Odborné zdroje",
  sources: SOURCES_CS,
  disclaimer: "Obecná informace. Nenahrazuje potápěčský výcvik, kurz první pomoci, lékaře ani pokyny místních autorit.",
};

export const egyptEn: StepContent = {
  lang: "en",
  url: "https://www.sharkypaul.com/en/dangerous-marine-animals-egypt",
  altUrl: "/nebezpecna-morska-zvirata-egypt",
  altLabel: "Česky",
  homeUrl: "/en",
  homeLabel: "Home",
  eyebrow: "Sharky Paul · Egypt · Red Sea",
  title: "Dangerous marine animals on Egypt's beaches: what you step on",
  lead: "Worried about sharks in Egypt? You're far more likely to get hurt by something you step on or touch. Here are 7 animals from the Red Sea shallows, how to avoid them and what first aid looks like according to Divers Alert Network (DAN) and medical guidance.",
  datePublished: "2026-11-02",
  steps: [
    {
      title: "Stonefish",
      text: "It lies motionless on the bottom or between rocks and looks like an overgrown stone. Its dorsal spines are venomous. DAN notes that a stonefish can deliver a fatal sting. If stung: immerse the area in the hottest water you can tolerate (about 45 °C) for up to 90 minutes, remove visible debris and get medical help fast – antivenom is given only in hospital.",
    },
    {
      title: "Lionfish",
      text: "A beautiful fish with fan-like fins, often near reefs and jetties. The fin spines are venomous. According to DAN the sting is very painful but rarely fatal. First aid is the same as for stonefish: hot water, clean the wound, see a doctor. Prevention is simple – don't touch it and don't push your camera into its face.",
    },
    {
      title: "Stingrays buried in the sand",
      text: "Rays hide in the sand in shallow water. DAN says most injuries happen when people step on a buried ray. So shuffle your feet along the bottom instead of taking long steps. If stung: hot water (relief for up to 90 minutes), clean the wound and see a doctor. Do not pull out a deeply embedded barb (especially in the chest or abdomen) – leave that to a hospital.",
    },
    {
      title: "Sea urchins",
      text: "Black long-spined urchins sit on rocks and reef at water entry points. DAN recommends immersing the area in hot water (no hotter than 45 °C) for 30–90 minutes, removing superficial spines with tweezers and leaving deeply embedded ones to medical professionals. Don't close the wound with tape or glue, and always get it checked.",
    },
    {
      title: "Fire coral",
      text: "An inconspicuous yellow-brown 'coral' that burns on contact – brushing against it is enough. DAN advises rinsing with vinegar (it stabilises unfired stinging cells), not popping blisters and having open wounds checked by a doctor. Symptoms can relapse after a week or two, which DAN says is normal.",
    },
    {
      title: "Cone snails",
      text: "A pretty cone-shaped shell in the shallows. The live snail has a venomous harpoon-like tooth and a sting can be serious. Don't collect shells in the sea or put them in your swimwear pocket. Medical guidance (NSW) recommends a pressure bandage with immobilisation of the whole limb and calling emergency services immediately.",
    },
    {
      title: "Moray eels",
      text: "Morays hide in reef crevices and open their mouths to breathe, not out of aggression. Trouble starts when you put your hands into holes or feed them. Clean any bite and have it treated by a doctor – even small wounds from the sea can get infected.",
    },
  ],
  signsTitle: "How to avoid it: 6 beach rules",
  signs: [
    "Wear water shoes, especially on rocks, coral and jetty entries – you often won't see a stonefish or urchin on the bottom.",
    "Shuffle your feet in sandy shallows instead of taking long steps (stingrays).",
    "Don't touch anything, don't stand on the reef and don't kneel on coral. Kneel only on clear sand.",
    "Don't pick up shells or 'stones', don't feed anything and keep your hands out of crevices.",
    "Swim and snorkel with a buddy and use marked water entry points.",
    "Save the emergency number before your trip: ambulance in Egypt is 123 (per GOV.UK), plus your hotel doctor's contact.",
  ],
  worksTitle: "Venomous fish sting: general steps",
  works: [
    "Get out of the water and stay calm to avoid drowning and unnecessary exertion.",
    "Immerse the area in the hottest water you can tolerate without scalding (about 45 °C) for up to 90 minutes. Test the temperature with an unaffected hand – pain dulls sensation, especially in children.",
    "Remove only visible spine fragments. Leave deeply embedded ones to a doctor.",
    "For severe pain, swelling, breathing difficulty, weakness or an allergic reaction call 123 or the hotel doctor immediately.",
    "Even if the pain fades, have the wound checked – infection and retained spines are a risk.",
  ],
  faqTitle: "FAQ",
  faq: [
    {
      q: "What is more dangerous than sharks in Egypt?",
      a: "For a typical holidaymaker, injuries from animals on the bottom and reef are far more common: sea urchins, fire coral, stingrays buried in sand, lionfish and stonefish. Water shoes and a strict no-touch rule prevent most of them.",
    },
    {
      q: "What should I do if I step on a stonefish?",
      a: "Get out of the water, immerse the foot in the hottest water you can tolerate (about 45 °C) for up to 90 minutes and seek medical help as soon as possible. DAN notes that a stonefish sting can be fatal and antivenom is given only in hospital.",
    },
    {
      q: "Does vinegar help with fire coral?",
      a: "DAN recommends rinsing with vinegar because it stabilises unfired stinging cells. It does nothing to venom already in the skin. Don't pop the blisters.",
    },
    {
      q: "Do I really need water shoes?",
      a: "On rocky and coral entries, yes. They protect against urchins, sharp coral and partly against fish spines on the bottom. They don't guarantee full protection – still watch where you step and touch nothing.",
    },
    {
      q: "What is the emergency number in Egypt?",
      a: "According to the UK Foreign Office, the ambulance number is 123. In hotels it's worth knowing the hotel doctor's contact too.",
    },
  ],
  guideTitle: "Get the free Prevention guide",
  guideText: "Emergency situations, shark behaviour, gear, a pre-dive checklist and first steps after an incident – in one PDF (Czech). Save it before your trip.",
  guideCta: "Download the free guide",
  guideUrl: "/prirucka",
  relatedTitle: "Also read",
  related: [
    { label: "What to do if you see a shark – step by step", url: "/en/what-to-do-if-you-see-a-shark" },
    { label: "9 shark myths people still believe", url: "/en/shark-myths" },
  ],
  shareText: "What you step on in Egypt 🐟⚠️ 7 dangerous beach animals and first aid – send it to a friend flying to Egypt",
  sourcesTitle: "Sources",
  sources: SOURCES_EN,
  disclaimer: "General information. Not a substitute for dive training, a first-aid course, a doctor or instructions from local authorities.",
};
