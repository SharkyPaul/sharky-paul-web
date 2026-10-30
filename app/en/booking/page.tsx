import type { Metadata } from "next";
import BookingPage, { type BookingContent } from "../../components/BookingPage";

export const metadata: Metadata = {
  title: "Book Sharky Paul – DJ Sets, Shark Nights & Content for Hotels and Resorts",
  description:
    "Book Sharky Paul for your hotel, resort, beach club or dive centre: Afro Tribal Bounce DJ sets, family 'Shark Night' talks for Czech & Slovak guests, video content for the CZ/SK market and Red Sea dive expeditions.",
  alternates: { canonical: "/en/booking", languages: { en: "/en/booking", cs: "/booking" } },
  openGraph: {
    type: "website",
    url: "https://www.sharkypaul.com/en/booking",
    locale: "en_US",
    title: "Book Sharky Paul – DJ, diver, shark educator",
    description: "DJ sets, Shark Night talks and content partnerships for hotels, resorts and dive centres.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

const c: BookingContent = {
  lang: "en",
  url: "https://www.sharkypaul.com/en/booking",
  altUrl: "/booking",
  altLabel: "Česky",
  homeUrl: "/en",
  homeLabel: "Home",
  eyebrow: "Booking · Hotels · Resorts · Beach clubs · Dive centres",
  title: "Book Sharky Paul",
  lead: "Diver, shark educator and DJ behind the Afro Tribal Bounce sound. One guest, several experiences: music for your nights, ocean stories for your guests and content that reaches Czech and Slovak travellers.",
  offers: [
    {
      title: "DJ sets – Afro Tribal Bounce",
      text: "Sunset sessions, pool and beach parties, club nights. African and tribal rhythms meet modern electronic dance music – an energetic, travel-friendly sound for resort audiences.",
    },
    {
      title: "Shark Night for your guests",
      text: "A family-friendly evening programme in Czech or Slovak: shark myths vs facts, how to behave safely while snorkelling and diving, and the Respect the Locals approach to marine life. Based on Florida Museum (ISAF) and SharkSmart guidance.",
    },
    {
      title: "Content partnership for the CZ/SK market",
      text: "Short-form video for TikTok, Instagram Reels and YouTube Shorts featuring your resort, reef or dive centre – made for Czech and Slovak travellers, the audience Sharky Paul speaks to.",
    },
    {
      title: "Dive expeditions & group trips",
      text: "Small private groups to the Red Sea in cooperation with DiveZen Red Sea and instructor Hamada. Open to partnerships with hotels and dive centres in other destinations, including Cape Verde.",
    },
  ],
  whyTitle: "Why Sharky Paul",
  why: [
    "One booking, three formats: DJ set, guest programme and content.",
    "Speaks directly to Czech and Slovak travellers – a key market for the Red Sea.",
    "Evidence-based shark education that makes guests feel safer in the water.",
    "Respect the Locals: respect for marine life and for local communities.",
  ],
  contactTitle: "Get in touch",
  contactText: "Tell us your venue, dates and what you have in mind (DJ set, Shark Night, content or a combination). We reply with availability and a proposal.",
  emailCta: "Send an e-mail",
  igCta: "Message on Instagram",
  listenCta: "Listen on Spotify",
};

export default function Page() {
  return <BookingPage c={c} />;
}
