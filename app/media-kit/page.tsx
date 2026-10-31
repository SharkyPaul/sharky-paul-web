import type { Metadata } from "next";
import MediaKitPage, { type MediaKitContent } from "../components/MediaKitPage";

export const metadata: Metadata = {
  title: "Media kit – Sharky Paul: dosah na TikToku a Instagramu, UGC a spolupráce",
  description:
    "Media kit Sharky Paula pro hotely, potápěčská centra a cestovní kanceláře: přes 2 miliony zhlédnutí na TikToku za rok, 37 tisíc sledujících na Instagramu, UGC videa, TikTok LIVE, Shark Night a DJ sety Afro Tribal Bounce.",
  alternates: { canonical: "/media-kit", languages: { cs: "/media-kit", en: "/en/media-kit" } },
  openGraph: {
    type: "website",
    url: "https://www.sharkypaul.com/media-kit",
    locale: "cs_CZ",
    title: "Sharky Paul – media kit",
    description: "Dosah, formáty a balíčky spolupráce pro hotely, potápěčská centra a cestovky.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

const c: MediaKitContent = {
  lang: "cs",
  altUrl: "/en/media-kit",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  bookingUrl: "/booking",
  bookingLabel: "Booking",
  eyebrow: "Media kit · Hotely · Potápěčská centra · Cestovky",
  title: "Sharky Paul – media kit",
  lead: "Potápěč (AOWD), popularizátor žraloků a DJ stylu Afro Tribal Bounce. Natáčím krátká videa o žralocích, potápění a oceánu pro české a slovenské publikum. S jedním pravidlem: Respect the Locals.",
  statsTitle: "Dosah",
  statsNote: "Údaje k říjnu 2026. Snímky statistik pošlu na vyžádání.",
  stats: [
    { value: "2M+", label: "zhlédnutí na TikToku za posledních 12 měsíců" },
    { value: "97K", label: "lajků na TikToku" },
    { value: "~500K", label: "zhlédnutí nejsilnějšího videa" },
    { value: "5", label: "dalších videí přes 200 tisíc zhlédnutí" },
    { value: "20–25K", label: "běžná zhlédnutí videí ze zahraničí" },
    { value: "37K", label: "sledujících na Instagramu" },
  ],
  aboutTitle: "Publikum a přístup",
  about: [
    "Čeští a slovenští cestovatelé, potápěči a šnorchlaři – lidé, kteří plánují cestu k moři.",
    "Hlavní kanál je TikTok (@sharkypaul.real) včetně pravidelných TikTok LIVE. Dále Instagram (@sharky_paul_edu) a YouTube (@SharkyPaulOfficial).",
    "Fakta o žralocích podle Florida Museum (International Shark Attack File) a NSW SharkSmart. Žádné mýty, žádné honění, sahání ani krmení.",
    "Expedice v Rudém moři ve spolupráci s DiveZen Red Sea a instruktorem Hamadou.",
  ],
  formatsTitle: "Co nabízím",
  formats: [
    { title: "UGC videa pro vaše použití", text: "Exkluzivní videa na výšku (9:16, 15–45 s, sestříhaná, s titulky) z hotelu, pláže, útesu nebo výletu – pro vaše sítě, web a reklamy." },
    { title: "TikTok LIVE z místa", text: "Živé vysílání z hotelu nebo pláže, třeba sunset DJ set, které diváci sledují v reálném čase." },
    { title: "Příspěvky na mých profilech", text: "TikToky, společné Instagram Reels a denní stories s označením vašeho hotelu nebo cestovky." },
    { title: "Shark Night", text: "Večerní program pro hosty: mýty vs. fakta o žralocích, bezpečné šnorchlování a potápění – česky, slovensky nebo anglicky." },
    { title: "DJ sety Afro Tribal Bounce", text: "Sunset sessions, pool a beach party s africkými a kmenovými rytmy propojenými s moderní elektronickou hudbou." },
  ],
  packageTitle: "Balíčky spolupráce",
  packageLead: "Barterová spolupráce za pobyt na minimálně 7 nocí pro 2 osoby. Delší pobyty po domluvě.",
  packageHead: ["Co dodám", "Hotel / resort", "Cestovní kancelář"],
  deliverables: [
    { item: "Exkluzivní UGC videa", hotel: "3", agency: "5" },
    { item: "Fotky a surové záběry", hotel: "15–20 fotek + surové klipy", agency: "20–30 fotek + surové klipy" },
    { item: "TikTok videa na mém profilu", hotel: "2", agency: "3" },
    { item: "Společné Instagram Reels", hotel: "1", agency: "2" },
    { item: "TikTok LIVE z místa", hotel: "1", agency: "2" },
    { item: "Stories s označením", hotel: "denně", agency: "denně + odkaz nebo slevový kód" },
    { item: "Program pro hosty", hotel: "Shark Night + DJ set", agency: "Shark Night pro vaše klienty" },
    { item: "Report dosahu", hotel: "do 7 dnů", agency: "do 7 dnů" },
  ],
  termsTitle: "Podmínky",
  terms: [
    "Hotely: pobyt all inclusive pro 2 osoby zdarma, minimálně 7 nocí. Dopravu si hradím sám.",
    "Cestovní kanceláře: kompletní zájezd pro 2 osoby včetně dopravy, minimálně 7 nocí.",
    "Použití UGC: neomezeně na vašich sítích a webu, v placené reklamě 6 měsíců.",
    "Dodání do 7 dnů po pobytu, jedno kolo úprav v ceně.",
    "Hudba: vlastní Afro Tribal Bounce nebo hudba bez licence, bezpečná pro reklamy.",
    "Příspěvky ze spolupráce jsou jasně označené jako placené partnerství.",
  ],
  contactTitle: "Pojďme spolupracovat",
  contactText: "Napište mi hotel nebo destinaci a termín, který vám vyhovuje. Ozvu se s dostupností a návrhem na míru.",
  igCta: "Napsat na Instagramu",
  tiktokCta: "Podívat se na TikTok",
};

export default function Page() {
  return <MediaKitPage c={c} />;
}
