import type { Metadata } from "next";
import BookingPage, { type BookingContent } from "../components/BookingPage";

export const metadata: Metadata = {
  title: "Booking Sharky Paul – DJ, přednášky o žralocích a spolupráce",
  description:
    "Objednej si Sharky Paula: DJ sety Afro Tribal Bounce, večery „Shark Night“ o žralocích pro hosty hotelů, videoobsah pro český a slovenský trh a potápěčské expedice v Rudém moři.",
  alternates: { canonical: "/booking", languages: { cs: "/booking", en: "/en/booking" } },
  openGraph: {
    type: "website",
    url: "https://www.sharkypaul.com/booking",
    locale: "cs_CZ",
    title: "Booking Sharky Paul – DJ, potápěč, žraloci",
    description: "DJ sety, večery o žralocích a obsahové spolupráce pro hotely, cestovky a potápěčská centra.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

const c: BookingContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/booking",
  altUrl: "/en/booking",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Booking · Hotely · Cestovky · Kluby · Potápěčská centra",
  title: "Booking Sharky Paul",
  lead: "Potápěč, popularizátor žraloků a DJ stylu Afro Tribal Bounce. Jeden host, víc zážitků: hudba na večery, příběhy z oceánu pro hosty a obsah, který osloví české a slovenské cestovatele.",
  offers: [
    {
      title: "DJ sety – Afro Tribal Bounce",
      text: "Sunset sessions, pool a beach party, klubové noci. Africké a kmenové rytmy propojené s moderní elektronickou taneční hudbou.",
    },
    {
      title: "Shark Night pro hosty",
      text: "Večerní program pro rodiny i dospělé v češtině nebo slovenštině: mýty vs. fakta o žralocích, bezpečné šnorchlování a potápění a přístup Respect the Locals. Podle doporučení Florida Museum (ISAF) a SharkSmart.",
    },
    {
      title: "Obsahová spolupráce pro CZ/SK trh",
      text: "Krátká videa pro TikTok, Instagram Reels a YouTube Shorts s tvým hotelem, útesem nebo potápěčským centrem – pro české a slovenské cestovatele.",
    },
    {
      title: "Expedice a skupinové zájezdy",
      text: "Malé privátní skupiny v Rudém moři ve spolupráci s DiveZen Red Sea a instruktorem Hamadou. Otevřeno spolupráci s hotely a centry v dalších destinacích, např. na Kapverdách.",
    },
  ],
  whyTitle: "Proč Sharky Paul",
  why: [
    "Jedna objednávka, tři formáty: DJ set, program pro hosty a obsah.",
    "Mluví přímo k českým a slovenským cestovatelům.",
    "Vzdělávání o žralocích podložené odbornými zdroji – hosté se ve vodě cítí jistěji.",
    "Respect the Locals: respekt k mořskému životu i místním komunitám.",
  ],
  contactTitle: "Kontakt",
  contactText: "Napiš místo, termín a o co máš zájem (DJ set, Shark Night, obsah nebo kombinace). Ozveme se s dostupností a návrhem.",
  emailCta: "Napsat e-mail",
  igCta: "Napsat na Instagramu",
  listenCta: "Poslechnout na Spotify",
};

export default function Page() {
  return <BookingPage c={c} />;
}
