import type { Lang } from "../components/site/nav";
import { encounterCs, encounterEn } from "./encounter";
import { typoDeep } from "./typo";

// Texty aplikace Sharky Paul. Kroky jsou zkrácené verze článku „Co dělat, když potkáš žraloka“
// (zdroje: Florida Museum / ISAF, SharkSmart). Tísňová čísla Egypta: GOV.UK, Egypt – getting help.

export type AppText = {
  lang: Lang;
  eyebrow: string;
  title: string;
  lead: string;
  install: string;
  installed: string;
  iosHint: string;
  otherHint: string;
  offlineReady: string;
  offlinePending: string;
  sosTitle: string;
  sosIntro: string;
  sos: { b: string; s: string }[];
  sosMore: string;
  sosMoreHref: string;
  signsTitle: string;
  signs: string[];
  checkTitle: string;
  checkIntro: string;
  check: string[];
  checkReset: string;
  helpTitle: string;
  helpText: string;
  calls: { label: string; tel: string }[];
  callsNote: string;
  guideTitle: string;
  guideText: string;
  guideSave: string;
  guideSaved: string;
  guideSaving: string;
  guideOpen: string;
  guidePdf: string;
  moreTitle: string;
  tiles: { href: string; b: string; s: string }[];
  sourcesTitle: string;
  sources: { name: string; url: string }[];
  disclaimer: string;
};

const GOVUK = { name: "GOV.UK – Egypt travel advice: getting help", url: "https://www.gov.uk/foreign-travel-advice/egypt/getting-help" };

export const appCs: AppText = typoDeep<AppText>({
  lang: "cs",
  eyebrow: "Aplikace Sharky Paul",
  title: "Oceán v kapse.",
  lead: "Postup při setkání se žralokem, kontrolní seznam před vstupem do vody a příručka Prevence. Ulož si ji na plochu a funguje i bez signálu na lodi.",
  install: "Přidat na plochu",
  installed: "Aplikace je nainstalovaná.",
  iosHint: "iPhone: v Safari klepni na Sdílet a pak na „Přidat na plochu“.",
  otherHint: "V prohlížeči otevři menu a zvol „Přidat na plochu“ nebo „Instalovat aplikaci“.",
  offlineReady: "Připraveno offline – funguje i bez signálu.",
  offlinePending: "Při prvním otevření se aplikace ukládá pro režim offline.",
  sosTitle: "Když potkáš žraloka",
  sosIntro: "Většina setkání skončí tím, že si tě žralok prohlédne a odpluje. Rozhoduje, jak se zachováš ty.",
  sos: [
    { b: "Zachovej klid a zůstaň na místě", s: "Bez prudkých pohybů a cákání. Většina žraloků je jen zvědavá a odpluje." },
    { b: "Neztrácej žraloka z očí", s: "Sleduj, odkud se blíží, abys mohl včas reagovat." },
    { b: "Drž se u parťáka", s: "V otevřené vodě zády k sobě a postupně k lodi." },
    { b: "Kryj si záda útesem nebo dnem", s: "Žralok se k tobě pak může přiblížit z méně směrů." },
    { b: "Nehoň, nedotýkej se, nekrm", s: "Ulovené ryby drž daleko od těla." },
    { b: "Vrací se? Plynule pryč z vody", s: "Ukonči ponor, plav bez cákání a parťáka měj u sebe." },
    { b: "Při kontaktu se braň a uteč", s: "Předmět mezi sebe a žraloka, miř na čenich, oči nebo žábry. Pak co nejrychleji z vody." },
  ],
  sosMore: "Celý postup se zdroji",
  sosMoreHref: "/co-delat-kdyz-potkas-zraloka",
  signsTitle: encounterCs.signsTitle,
  signs: encounterCs.signs.slice(0, 4),
  checkTitle: "Před vstupem do vody",
  checkIntro: "Odškrtej si to na lodi. Seznam zůstane uložený v telefonu.",
  check: encounterCs.works,
  checkReset: "Začít znovu",
  helpTitle: "Když se něco stane",
  helpText: "Dostaň zraněného z vody, okamžitě volej záchrannou službu a silným přímým tlakem zastav krvácení.",
  calls: [
    { label: "Tísňová linka EU 112", tel: "112" },
    { label: "Egypt: záchranka 123", tel: "123" },
    { label: "Egypt: turistická policie 126", tel: "126" },
  ],
  callsNote: "Mimo EU a Egypt si místní tísňové číslo zjisti ještě před cestou.",
  guideTitle: "Příručka Prevence",
  guideText: "Krizové situace, chování žraloků, vybavení, kontrolní seznam a první kroky po incidentu. Ulož si ji do telefonu a otevřeš ji i bez internetu.",
  guideSave: "Uložit příručku do telefonu",
  guideSaved: "Příručka je uložená v telefonu.",
  guideSaving: "Ukládám…",
  guideOpen: "Otevřít příručku",
  guidePdf: "/downloads/sharky-paul-prevence-zraloci.pdf",
  moreTitle: "Další čtení",
  tiles: [
    { href: "/myty-o-zralocich", b: "9 mýtů o žralocích", s: "Čemu lidé věří a co víme." },
    { href: "/co-delat-kdyz-potkas-zraloka", b: "Celý postup", s: "Sedm kroků se zdroji a otázkami." },
    { href: "/#expedice", b: "Expedice", s: "Rudé moře v malé skupině." },
  ],
  sourcesTitle: "Zdroje",
  sources: [...encounterCs.sources, GOVUK],
  disclaimer: encounterCs.disclaimer,
});

export const appEn: AppText = {
  lang: "en",
  eyebrow: "Sharky Paul app",
  title: "The ocean in your pocket.",
  lead: "What to do when you meet a shark, a checklist before you get in the water and a safety guide. Add it to your home screen and it works without signal on the boat.",
  install: "Add to home screen",
  installed: "The app is installed.",
  iosHint: "iPhone: in Safari tap Share, then “Add to Home Screen”.",
  otherHint: "Open your browser menu and choose “Add to Home screen” or “Install app”.",
  offlineReady: "Ready offline – works without signal.",
  offlinePending: "On first visit the app saves itself for offline use.",
  sosTitle: "If you meet a shark",
  sosIntro: "Most encounters end with the shark taking a look and swimming away. What matters is how you react.",
  sos: [
    { b: "Stay calm and hold your position", s: "No sudden moves, no splashing. Most sharks are just curious and leave." },
    { b: "Keep the shark in sight", s: "Watch where it comes from so you can react in time." },
    { b: "Stay with your buddy", s: "In open water go back to back and ascend to the boat." },
    { b: "Cover your back with reef or seabed", s: "The shark can then approach you from fewer directions." },
    { b: "Don't chase, touch or feed", s: "Keep any caught fish well away from your body." },
    { b: "It keeps coming back? Leave smoothly", s: "End the dive, swim without splashing and keep your buddy close." },
    { b: "If it makes contact, fight back and get out", s: "Put an object between you, aim for the snout, eyes or gills. Then leave the water fast." },
  ],
  sosMore: "Full guide with sources",
  sosMoreHref: "/en/what-to-do-if-you-see-a-shark",
  signsTitle: encounterEn.signsTitle,
  signs: encounterEn.signs.slice(0, 4),
  checkTitle: "Before you get in",
  checkIntro: "Tick it off on the boat. The list stays saved on your phone.",
  check: encounterEn.works,
  checkReset: "Start again",
  helpTitle: "If something happens",
  helpText: "Get the injured person out of the water, call emergency services immediately and stop the bleeding with strong direct pressure.",
  calls: [
    { label: "EU emergency 112", tel: "112" },
    { label: "Egypt: ambulance 123", tel: "123" },
    { label: "Egypt: tourist police 126", tel: "126" },
  ],
  callsNote: "Outside the EU and Egypt, look up the local emergency number before you travel.",
  guideTitle: "Prevention guide",
  guideText: "Critical situations, shark behaviour, gear, a checklist and first steps after an incident (PDF in Czech). Save it to your phone and open it offline.",
  guideSave: "Save the guide to my phone",
  guideSaved: "The guide is saved on your phone.",
  guideSaving: "Saving…",
  guideOpen: "Open the guide",
  guidePdf: "/downloads/sharky-paul-prevence-zraloci.pdf",
  moreTitle: "Read more",
  tiles: [
    { href: "/en/shark-myths", b: "Shark myths", s: "What people believe and what we know." },
    { href: "/en/what-to-do-if-you-see-a-shark", b: "Full guide", s: "Seven steps with sources and FAQ." },
    { href: "/en#expedice", b: "Expeditions", s: "The Red Sea in a small group." },
  ],
  sourcesTitle: "Sources",
  sources: [...encounterEn.sources, GOVUK],
  disclaimer: encounterEn.disclaimer,
};
