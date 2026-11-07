export type Lang = "cs" | "en";

export const SOCIALS = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@sharkypaul.real",
    path: "M16.6 5.82c-1.03-.9-1.6-2.2-1.6-3.6h-3.03v13.66c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.3 0 .58.05.85.13V9.9a6 6 0 0 0-.85-.06 6 6 0 1 0 6 6V9.6c1.24.88 2.75 1.4 4.38 1.4V8a4.9 4.9 0 0 1-2.85-1.18z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sharky_paul_edu",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.73 3.73 0 0 1-1.38-.9 3.73 3.73 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.15c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.71 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@SharkyPaulOfficial",
    path: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/2GHTzhhq2NyBqjfnpyXTme",
    path: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14C9.6 9.9 15 10.56 18.72 12.84c.36.18.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z",
  },
];

export const EMAIL = "info@sharkypaul.com";

type NavText = {
  home: string;
  links: { href: string; label: string }[];
  menu: string;
  close: string;
  langHref: string;
  langLabel: string;
  langName: string;
  skip: string;
  depth: string;
  depthTitle: string;
  gaugeHelp: { label: string; title: string; items: { b: string; t: string }[]; close: string };
  foot: {
    tag: string;
    exploreTitle: string;
    explore: { href: string; label: string }[];
    workTitle: string;
    work: { href: string; label: string }[];
    followTitle: string;
    contactTitle: string;
    contactText: string;
    depthNote: string;
    rights: string;
  };
};

export const NAV: Record<Lang, NavText> = {
  cs: {
    home: "/",
    links: [
      { href: "/#prirucka", label: "Žraloci" },
      { href: "/#expedice", label: "Expedice" },
      { href: "/#music", label: "Hudba" },
      { href: "/#partneri", label: "Spolupráce" },
      { href: "/#kolekce", label: "Kolekce" },
      { href: "/aplikace", label: "Aplikace" },
    ],
    menu: "Menu",
    close: "Zavřít",
    langHref: "/en",
    langLabel: "EN",
    langName: "English version",
    skip: "Přeskočit na obsah",
    depth: "Hloubka",
    depthTitle: "Hloubka, absolutní tlak a barvy, které v čisté vodě ještě uvidíš",
    gaugeHelp: {
      label: "Co ukazuje hloubkoměr?",
      title: "Co ukazuje hloubkoměr?",
      items: [
        { b: "Hloubka", t: "Stránka je jako ponor. Nahoře jsi u hladiny, dole ve 30 metrech, kam smí potápěč s kurzem PADI Advanced Open Water." },
        { b: "Tlak v barech", t: "Na hladině na tebe tlačí vzduch silou 1 baru. Každých 10 metrů vody přidá další bar, takže v 10 m je tlak dvakrát větší než nahoře. Proto tě při klesání tlačí v uších a musíš je vyrovnávat." },
        { b: "PSI", t: "Stejný tlak v amerických jednotkách, jak ho ukazují některé potápěčské přístroje. 1 bar je asi 14,5 PSI." },
        { b: "Barevné tečky", t: "Voda pohlcuje sluneční světlo. V čisté vodě nejdřív zmizí červená (kolem 6 m), pak oranžová (kolem 15 m) a žlutá (kolem 30 m). Proto je pod vodou všechno modrozelené. Svítilna barvy vrátí." },
      ],
      close: "Zavřít",
    },
    foot: {
      tag: "Respect the Locals – na souši i v moři.",
      exploreTitle: "Oceán",
      explore: [
        { href: "/prirucka", label: "Příručka Prevence zdarma" },
        { href: "/zraloci-v-egypte", label: "Žraloci v Egyptě" },
        { href: "/nebezpecna-morska-zvirata-egypt", label: "Na co v Egyptě šlapeš" },
        { href: "/co-delat-kdyz-potkas-zraloka", label: "Co dělat, když potkáš žraloka" },
        { href: "/myty-o-zralocich", label: "9 mýtů o žralocích" },
        { href: "/zralok-bily", label: "Žralok bílý" },
        { href: "/zralok-megalodon", label: "Žralok megalodon" },
        { href: "/aplikace", label: "Aplikace Sharky Paul" },
      ],
      workTitle: "Spolupráce",
      work: [
        { href: "/booking", label: "Booking: DJ a Shark Night" },
        { href: "/media-kit", label: "Media kit" },
        { href: "/kit", label: "Prémiový media kit (EN)" },
        { href: "/#kolekce", label: "Kolekce" },
      ],
      followTitle: "Sleduj",
      contactTitle: "Kontakt",
      contactText: "Hotely, cestovky, potápěčská centra i fanoušci:",
      depthNote: "Hloubkoměr vpravo ukazuje hloubku, absolutní tlak a barvy: každých 10 m přidá zhruba 1 bar a v čisté vodě mizí červená kolem 6 m, oranžová kolem 15 m a žlutá kolem 30 m. Dole je 30 metrů, hranice pro potápěče PADI Advanced Open Water.",
      rights: "Sharky Paul",
    },
  },
  en: {
    home: "/en",
    links: [
      { href: "/en#prirucka", label: "Sharks" },
      { href: "/en#expedice", label: "Expeditions" },
      { href: "/en#music", label: "Music" },
      { href: "/en#partneri", label: "Work with me" },
      { href: "/en#kolekce", label: "Collection" },
      { href: "/en/app", label: "App" },
    ],
    menu: "Menu",
    close: "Close",
    langHref: "/",
    langLabel: "CZ",
    langName: "Česká verze",
    skip: "Skip to content",
    depth: "Depth",
    depthTitle: "Depth, absolute pressure and the colours you still see in clear water",
    gaugeHelp: {
      label: "What does the depth gauge show?",
      title: "What does the depth gauge show?",
      items: [
        { b: "Depth", t: "The page is a dive. At the top you are at the surface, at the bottom you are at 30 metres, the limit for PADI Advanced Open Water divers." },
        { b: "Pressure in bar", t: "At the surface the air presses on you with 1 bar. Every 10 metres of water adds another bar, so at 10 m the pressure is twice as high as at the top. That is why your ears hurt on the way down and you need to equalise." },
        { b: "PSI", t: "The same pressure in US units, as some dive computers show it. 1 bar is about 14.5 PSI." },
        { b: "Colour dots", t: "Water absorbs sunlight. In clear water red goes first (around 6 m), then orange (around 15 m) and yellow (around 30 m). That is why everything looks blue-green underwater. A dive torch brings the colours back." },
      ],
      close: "Close",
    },
    foot: {
      tag: "Respect the Locals – on land and at sea.",
      exploreTitle: "Ocean",
      explore: [
        { href: "/en/dangerous-marine-animals-egypt", label: "Dangerous animals in Egypt" },
        { href: "/en/what-to-do-if-you-see-a-shark", label: "What to do if you see a shark" },
        { href: "/en/shark-myths", label: "Shark myths" },
        { href: "/en/app", label: "Sharky Paul app" },
        { href: "/prirucka", label: "Free safety guide (Czech PDF)" },
      ],
      workTitle: "Work with me",
      work: [
        { href: "/en/booking", label: "Booking: DJ and Shark Night" },
        { href: "/kit", label: "Premium media kit" },
        { href: "/en/media-kit", label: "Media kit" },
        { href: "/en#kolekce", label: "Collection" },
      ],
      followTitle: "Follow",
      contactTitle: "Contact",
      contactText: "Hotels, travel brands, dive centres and fans:",
      depthNote: "The depth gauge on the right shows depth, absolute pressure and colour: every 10 m adds roughly 1 bar, and in clear water red fades by about 6 m, orange by about 15 m and yellow by about 30 m. The bottom is 30 metres, the depth limit for PADI Advanced Open Water divers.",
      rights: "Sharky Paul",
    },
  },
};
