import type { Lang } from "../components/site/nav";
import { typoDeep } from "./typo";

export type HomeContent = {
  lang: Lang;
  hero: {
    srTitle: string;
    lead: string;
    ctaGuide: string;
    ctaGuideHref: string;
    ctaExp: string;
    proof: string;
    caption: string;
    imgAlt: string;
  };
  story: {
    title: string;
    lede: string;
    paras: string[];
    creds: string[];
    signoff: string;
    imgAlt: string;
    caption: string;
  };
  exp: {
    title: string;
    paras: string[];
    partnerTitle: string;
    partnerText: string;
    partnerLink: string;
    imgAlt: string;
    caption: string;
    videoTitle: string;
    videoPlay: string;
    videoCaption: string;
  };
  sharks: {
    title: string;
    intro: string;
    guideTitle: string;
    guideText: string;
    guideMeta: string;
    guideCta: string;
    guideAlt: string;
    inApp: string;
    shareText: string;
    reads: { href: string; title: string; text: string; go: string }[];
  };
  music: {
    title: string;
    lede: string;
    paras: string[];
    sets: { time: string; text: string }[];
    lineupLabel: string;
    lineup: string;
    spotifyCta: string;
    bookingCta: string;
    imgAlt: string;
    imgAlt2: string;
  };
  coll: {
    title: string;
    intro: string;
    gear: { state: string; title: string; text: string; alt1: string; alt2: string };
    bomber: { state: string; title: string; text: string; cta: string; alt: string };
    cargoTitle: string;
    cargoText: string;
    cargo: { name: string; desc: string; state: string }[];
    cargoCta: string;
  };
  partners: {
    title: string;
    text: string;
    kit: string;
    kitPdf: string;
    booking: string;
    bookingHref: string;
    mediaKitHref: string;
  };
};

const csRaw: HomeContent = {
  lang: "cs",
  hero: {
    srTitle: "Sharky Paul – potápění, žraloci a oceán. ",
    lead: "Jsem Pavel – potápěč, popularizátor žraloků a DJ. Ukazuju oceán takový, jaký opravdu je: bez mýtů, bez strachu a s respektem k těm, kdo v něm žijí.",
    ctaGuide: "Stáhnout příručku zdarma",
    ctaGuideHref: "/prirucka",
    ctaExp: "Expedice v Rudém moři",
    proof: "3,6 milionu zhlédnutí na TikToku. 96 % diváků je z Česka a Slovenska.",
    caption: "Na palubě před ponorem v kleci",
    imgAlt: "Sharky Paul pod vodou s mořskou želvou u Abu Dabbab, Rudé moře",
  },
  story: {
    title: "Oceán není aquapark.",
    lede: "Je to jejich svět. My jsme tam jen hosté.",
    paras: [
      "Poprvé jsem se potápěl v létě 2010 na chorvatském ostrově Brač: vraky ve 28 metrech, jeskyně a první noční ponor. Od té doby končí každá moje dovolená v moři.",
      "Všechno změnila Marsa Alam v Egyptě. Můj první žralok, žralok dlouhoploutvý. Žádné monstrum, ale klidné a zvědavé zvíře ve svém domově. Z toho setkání vznikl Sharky Paul.",
      "Dnes točím krátká videa, která nahrazují mýty o žralocích ověřenými fakty, a radím, jak si bezpečně užít dovolenou u Rudého moře. Píšu příručky zdarma, mluvím k hostům hotelů a dělám vlastní hudbu.",
      "Respect the Locals pro mě znamená respekt k mořským živočichům i k lidem, kteří u moře žijí.",
    ],
    creds: [
      "PADI Advanced Open Water Diver",
      "SDI Open Water Diver",
      "Kurz taktické první pomoci (THOR Tactical)",
      "Autor dvou příruček o oceánu",
    ],
    signoff: "Pavel",
    imgAlt: "Portrét Sharky Paula v egyptské poušti",
    caption: "Egyptská poušť",
  },
  exp: {
    title: "Expedice v malé skupině",
    paras: [
      "Žádná masová turistika. Na expedice beru malé skupiny lidí, kterým na moři záleží stejně jako mně.",
      "Ukážu ti moře svýma očima: kde hledat želvy a dugongy, jak se chovat u útesu a co dělat, když potkáš žraloka.",
    ],
    partnerTitle: "DiveZen Retreats a Hamada",
    partnerText:
      "Expedice v Rudém moři pořádám s DiveZen Retreats a PADI instruktorem Hamadou. Týden na jachtě u útesu Sataya, kde se dá plavat s divokými delfíny. U Hamady jsem dělal i kurz PADI Advanced Open Water.",
    partnerLink: "divezenretreats.com",
    imgAlt: "Sharky Paul pod vodou se dvěma želvami na písčitém dně",
    caption: "Karety obrovské u Abu Dabbab, Rudé moře",
    videoTitle: "Sharky Paul – dokument",
    videoPlay: "Pustit dokument",
    videoCaption: "Krátký dokument o tom, jak natáčím a potápím se",
  },
  sharks: {
    title: "Žraloci bez mýtů",
    intro: "Strach ze žraloků většinou pramení z filmů. Fakta beru od Florida Museum (International Shark Attack File) a programu SharkSmart.",
    guideTitle: "Příručka Prevence",
    guideText:
      "Jak se chovat bezpečně v přítomnosti žraloků. Praktický průvodce pro potápěče, šnorchlaře a všechny, kdo jedou k moři: chování žraloků, krizové situace, vybavení, kontrolní seznam a mýty, které je dobré opravit.",
    guideMeta: "PDF, 9 stran A4, 7 MB",
    guideCta: "Stáhnout zdarma",
    guideAlt: "Obálka příručky Prevence – jak se chovat bezpečně v přítomnosti žraloků",
    inApp:
      "Jsi v aplikaci TikTok nebo Instagram? Ta často neumí stahovat soubory. Klepni na tři tečky vpravo nahoře, zvol Otevřít v prohlížeči a příručku stáhni tam.",
    shareText: "Příručka zdarma: Jak se chovat bezpečně v přítomnosti žraloků 🦈",
    reads: [
      {
        href: "/co-delat-kdyz-potkas-zraloka",
        title: "Co dělat, když potkáš žraloka",
        text: "Sedm kroků pro potápěče a šnorchlaře, krok za krokem.",
        go: "Číst postup",
      },
      {
        href: "/myty-o-zralocich",
        title: "9 mýtů o žralocích",
        text: "Čemu lidé věří a co o žralocích skutečně víme.",
        go: "Číst mýty",
      },
      {
        href: "/aplikace",
        title: "Aplikace Sharky Paul",
        text: "Postup při setkání se žralokem a příručka i bez signálu na lodi.",
        go: "Otevřít aplikaci",
      },
    ],
  },
  music: {
    title: "Afro Tribal Bounce",
    lede: "Africké a kmenové rytmy propojené s moderní elektronickou hudbou.",
    paras: [
      "Za DJ pulty stojím od roku 1999, dřív pod jménem Kristian Calderon. Hrál jsem v top českých klubech a stojím za značkou akcí Pure Electra events. Od roku 2010 produkuju vlastní tracky v Ableton Live.",
      "Hudba nese stejnou myšlenku jako moje videa: respekt k oceánu a k jeho predátorům.",
    ],
    sets: [
      { time: "Den", text: "Sety u bazénu a na pláži, deep a chill Afro." },
      { time: "Západ slunce", text: "Sunset sessions na pláži nebo na střeše." },
      { time: "Noc", text: "Energický Afro Tribal Bounce pro večerní publikum." },
    ],
    lineupLabel: "Hrál jsem v line-upech s",
    lineup: "Nicky Romero, W&W, Nari & Milani a Get Far",
    spotifyCta: "Poslechnout na Spotify",
    bookingCta: "Objednat DJ set",
    imgAlt: "Sharky Paul – portrét na modrém podmořském pozadí",
    imgAlt2: "Sharky Paul za DJ pultem",
  },
  coll: {
    title: "Kolekce",
    intro: "Oblečení, ve kterém se potápím a ve kterém chodím po přístavu. Vlastní design, malé série.",
    gear: {
      state: "Připravujeme",
      title: "Ocean Gear, Core Collection",
      text: "Pánský rashguard UPF 50+, plavky (board shorts), dámský jednodílný rashguard UPF 50+ a bikiny. Spuštění oznámím na TikToku a Instagramu.",
      alt1: "Sharky Paul Ocean Gear – pánský rashguard UPF 50+ s logem Respect the Locals",
      alt2: "Sharky Paul Ocean Gear Core Collection – rashguard, dámský jednodílný rashguard, plavky a bikiny",
    },
    bomber: {
      state: "Na zakázku, limitovaná edice",
      title: "Luxury Bomber, Captain of the Harbor",
      text: "Černý bomber s červenou prošívanou podšívkou a vyšívanými nášivkami. Na zádech Captain of the Harbor – legenda o obřím kladivounovi z Floridy, o kterém natočil díl i Shark Week.",
      cta: "Poptat bundu",
      alt: "Sharky Paul Luxury Bomber – limitovaná edice na zakázku s nášivkami Respect the Locals, Shark Educator a Captain of the Harbor",
    },
    cargoTitle: "Vzácný náklad",
    cargoText: "Těžko dostupné komodity přímo od zdroje – z Egypta, Bali, Madagaskaru a dalších míst, kam mě zavedou cesty. Limitované série, ruční výběr.",
    cargo: [
      { name: "Egyptské byliny", desc: "Sušené byliny a koření z oáz a trhů Horního Egypta.", state: "Skladem" },
      { name: "Jasmínový olej z Egypta", desc: "100% přírodní jasmínový olej a mentolové krystaly z egyptských trhů.", state: "Skladem" },
      { name: "Signature parfém", desc: "Oceánsko-orientální vůně podle vlastní receptury.", state: "Limitovaně" },
      { name: "Ebook: Šnorchlování", desc: "Český průvodce šnorchlováním u Rudého moře.", state: "Ke stažení" },
      { name: "Dřevo a nábytek z Bali", desc: "Ručně vyráběný nábytek a dekorace z tropického dřeva.", state: "Připravujeme" },
      { name: "Vanilka z Madagaskaru", desc: "Pravé vanilkové lusky přímo od pěstitelů.", state: "Připravujeme" },
      { name: "Šafrán z Maroka", desc: "Ruční sklizeň v malých šaržích z marockých polí.", state: "Připravujeme" },
    ],
    cargoCta: "Napsat o dostupnost",
  },
  partners: {
    title: "Pro hotely, cestovky a potápěčská centra",
    text: "Přivezu vašim hostům oceán: večer o žralocích, DJ set u bazénu a videa pro české a slovenské cestovatele.",
    kit: "Media kit",
    kitPdf: "Media kit v PDF",
    booking: "Booking",
    bookingHref: "/booking",
    mediaKitHref: "/kit",
  },
};

export const cs: HomeContent = typoDeep(csRaw);

export const en: HomeContent = {
  lang: "en",
  hero: {
    srTitle: "Sharky Paul – diving, sharks and the ocean. ",
    lead: "I’m Pavel – a diver, shark educator and DJ. I show the ocean as it really is: no myths, no fear, and respect for the ones who live there.",
    ctaGuide: "What to do if you see a shark",
    ctaGuideHref: "/en/what-to-do-if-you-see-a-shark",
    ctaExp: "Red Sea expeditions",
    proof: "3.6 million views on TikTok. 96% of my audience is from Czechia and Slovakia.",
    caption: "On deck before a cage dive",
    imgAlt: "Sharky Paul diving with a sea turtle at Abu Dabbab, Red Sea",
  },
  story: {
    title: "The ocean is not a water park.",
    lede: "It is their world. We are only guests there.",
    paras: [
      "My first dives were in the summer of 2010 on the island of Brač, Croatia: wrecks at 28 metres, a cave and my first night dive. Since then, every holiday I have has ended up in the ocean.",
      "The moment that changed everything was in Marsa Alam, Egypt: my first shark, an oceanic whitetip. Not a monster – a calm, curious animal in its own home. That encounter became Sharky Paul.",
      "Today I create short videos that replace shark myths with verified facts and give holidaymakers practical safety advice for the Red Sea. I write free guides, speak to hotel guests and produce my own music.",
      "To me, Respect the Locals means respect for marine life and for the people who live by the sea.",
    ],
    creds: [
      "PADI Advanced Open Water Diver",
      "SDI Open Water Diver",
      "Tactical first-aid course (THOR Tactical)",
      "Author of two ocean guides",
    ],
    signoff: "Pavel",
    imgAlt: "Portrait of Sharky Paul in the Egyptian desert",
    caption: "Egyptian desert",
  },
  exp: {
    title: "Expeditions in small groups",
    paras: [
      "No mass tourism. I take small groups of people who care about the sea as much as I do.",
      "I’ll show you the sea through my eyes: where to look for turtles and dugongs, how to behave on the reef and what to do if you meet a shark.",
    ],
    partnerTitle: "DiveZen Retreats and Hamada",
    partnerText:
      "My Red Sea expeditions run with DiveZen Retreats and PADI instructor Hamada. A week on a yacht at Sataya Reef, where you can swim with wild dolphins. Hamada was also my instructor for PADI Advanced Open Water.",
    partnerLink: "divezenretreats.com",
    imgAlt: "Sharky Paul underwater with two turtles on a sandy seabed",
    caption: "Green turtles at Abu Dabbab, Red Sea",
    videoTitle: "Sharky Paul – documentary",
    videoPlay: "Play the documentary",
    videoCaption: "A short documentary about how I dive and film",
  },
  sharks: {
    title: "Sharks without the myths",
    intro: "Most fear of sharks comes from films. My facts come from the Florida Museum (International Shark Attack File) and the SharkSmart programme.",
    guideTitle: "Prevention guide",
    guideText:
      "How to stay safe around sharks: behaviour, emergencies, equipment, a checklist and the myths worth correcting. The guide is in Czech; the English articles below cover the essentials.",
    guideMeta: "PDF in Czech, 9 A4 pages, 7 MB",
    guideCta: "Download the guide",
    guideAlt: "Cover of the Prevention guide – how to stay safe around sharks",
    inApp:
      "Are you inside the TikTok or Instagram app? It often can’t download files. Tap the three dots in the top corner, choose Open in browser and download the guide there.",
    shareText: "Free shark safety guide 🦈",
    reads: [
      {
        href: "/en/what-to-do-if-you-see-a-shark",
        title: "What to do if you see a shark",
        text: "Seven steps for divers and snorkellers.",
        go: "Read the steps",
      },
      {
        href: "/en/shark-myths",
        title: "Shark myths",
        text: "What people believe and what we actually know.",
        go: "Read the myths",
      },
      {
        href: "/en/app",
        title: "Sharky Paul app",
        text: "The shark encounter steps on your phone, even without signal on the boat.",
        go: "Open the app",
      },
    ],
  },
  music: {
    title: "Afro Tribal Bounce",
    lede: "African and tribal rhythms fused with modern electronic music.",
    paras: [
      "I’ve been behind the decks since 1999, formerly as Kristian Calderon: top Czech clubs and my own event brand, Pure Electra events. Since 2010 I’ve produced my own tracks in Ableton Live.",
      "The music carries the same message as my videos: respect for the ocean and its predators.",
    ],
    sets: [
      { time: "Day", text: "Pool and beach sets, deep and chill Afro." },
      { time: "Sunset", text: "Sunset sessions on the beach or a rooftop." },
      { time: "Night", text: "Energetic Afro Tribal Bounce for the evening crowd." },
    ],
    lineupLabel: "Played alongside",
    lineup: "Nicky Romero, W&W, Nari & Milani and Get Far",
    spotifyCta: "Listen on Spotify",
    bookingCta: "Book a DJ set",
    imgAlt: "Sharky Paul – portrait against a blue underwater background",
    imgAlt2: "Sharky Paul at the DJ decks",
  },
  coll: {
    title: "Collection",
    intro: "What I dive in and what I wear around the harbour. My own design, small runs.",
    gear: {
      state: "Coming soon",
      title: "Ocean Gear, Core Collection",
      text: "Men’s UPF 50+ rashguard, board shorts, women’s one-piece UPF 50+ rashguard and bikini. The launch will be announced on TikTok and Instagram.",
      alt1: "Sharky Paul Ocean Gear – men’s UPF 50+ rashguard with the Respect the Locals logo",
      alt2: "Sharky Paul Ocean Gear Core Collection – rashguard, women’s one-piece rashguard, board shorts and bikini",
    },
    bomber: {
      state: "Made to order, limited edition",
      title: "Luxury Bomber, Captain of the Harbor",
      text: "Black bomber with a red quilted lining and embroidered patches. On the back: Captain of the Harbor – the legend of a giant hammerhead off Florida that even got its own Shark Week episode.",
      cta: "Enquire about the bomber",
      alt: "Sharky Paul Luxury Bomber – made-to-order limited edition with Respect the Locals, Shark Educator and Captain of the Harbor patches",
    },
    cargoTitle: "Rare cargo",
    cargoText: "Hard-to-find goods straight from the source – from Egypt, Bali, Madagascar and wherever my travels take me. Limited runs, hand-picked.",
    cargo: [
      { name: "Egyptian herbs", desc: "Dried herbs and spices from the oases and markets of Upper Egypt.", state: "In stock" },
      { name: "Egyptian jasmine oil", desc: "100% natural jasmine oil and menthol crystals from Egyptian markets.", state: "In stock" },
      { name: "Signature perfume", desc: "An oceanic-oriental fragrance made to my own formula.", state: "Limited" },
      { name: "Ebook: Snorkelling", desc: "A Czech snorkelling guide for the Red Sea.", state: "Download" },
      { name: "Wood and furniture from Bali", desc: "Handmade furniture and decor from tropical wood.", state: "Coming soon" },
      { name: "Madagascar vanilla", desc: "Genuine vanilla pods straight from the growers.", state: "Coming soon" },
      { name: "Moroccan saffron", desc: "Hand-harvested in small batches from Moroccan fields.", state: "Coming soon" },
    ],
    cargoCta: "Ask about availability",
  },
  partners: {
    title: "For hotels, travel brands and dive centres",
    text: "I bring the ocean to your guests: a shark talk in the evening, a DJ set by the pool and videos for Czech and Slovak travellers.",
    kit: "Media kit",
    kitPdf: "Media kit PDF",
    booking: "Booking",
    bookingHref: "/en/booking",
    mediaKitHref: "/kit",
  },
};
