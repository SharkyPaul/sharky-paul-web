import type { Metadata } from "next";
import MediaKitPage, { type MediaKitContent } from "../../components/MediaKitPage";

export const metadata: Metadata = {
  title: "Media Kit – Sharky Paul: TikTok & Instagram reach, UGC and partnerships",
  description:
    "Sharky Paul media kit for hotels, resorts, dive centres and travel agencies: 2M+ TikTok views in the past year, 37K Instagram followers, UGC videos, TikTok LIVE, Shark Night talks and Afro Tribal Bounce DJ sets.",
  alternates: { canonical: "/en/media-kit", languages: { en: "/en/media-kit", cs: "/media-kit" } },
  openGraph: {
    type: "website",
    url: "https://www.sharkypaul.com/en/media-kit",
    locale: "en_US",
    title: "Sharky Paul – Media Kit",
    description: "Reach, formats and partnership packages for hotels, dive centres and travel agencies.",
    images: [{ url: "/images/og-sharkypaul.jpg", width: 1200, height: 630 }],
  },
};

const c: MediaKitContent = {
  lang: "en",
  altUrl: "/media-kit",
  altLabel: "Česky",
  homeUrl: "/en",
  homeLabel: "Home",
  bookingUrl: "/en/booking",
  bookingLabel: "Booking",
  eyebrow: "Media kit · Hotels · Dive centres · Travel agencies",
  title: "Sharky Paul – Media Kit",
  lead: "Diver (AOWD), shark educator and DJ behind the Afro Tribal Bounce sound. I make short videos about sharks, diving and the ocean for a Czech and Slovak audience, with one rule: Respect the Locals.",
  statsTitle: "Reach",
  statsNote: "Figures as of October 2026. Analytics screenshots available on request.",
  stats: [
    { value: "2M+", label: "TikTok views in the past 12 months" },
    { value: "97K", label: "likes on TikTok" },
    { value: "~500K", label: "views on the top TikTok video" },
    { value: "5", label: "more videos with 200K+ views" },
    { value: "20–25K", label: "typical views for videos filmed abroad" },
    { value: "37K", label: "Instagram followers" },
  ],
  aboutTitle: "Audience and approach",
  about: [
    "Czech and Slovak travellers, divers and snorkellers – people planning a trip to the sea.",
    "Main channel: TikTok (@sharkypaul.real), including regular TikTok LIVE streams. Also Instagram (@sharky_paul_edu) and YouTube (@SharkyPaulOfficial).",
    "Shark facts follow the Florida Museum (International Shark Attack File) and NSW SharkSmart. No myths, no chasing, touching or feeding marine life.",
    "Red Sea expeditions in partnership with DiveZen Red Sea and instructor Hamada.",
  ],
  formatsTitle: "What I offer",
  formats: [
    { title: "UGC videos for your own use", text: "Exclusive vertical videos (9:16, 15–45 s, edited, with subtitles) of your hotel, beach, reef or excursion – for your social media, website and ads." },
    { title: "TikTok LIVE on location", text: "A live stream from your hotel or beach, e.g. a sunset DJ set, reaching viewers in real time." },
    { title: "Posts on my channels", text: "TikToks, Instagram collab Reels and daily stories that tag your property." },
    { title: "Shark Night", text: "An evening talk for guests about shark myths vs. facts, safe snorkelling and diving – in Czech, Slovak or English." },
    { title: "Afro Tribal Bounce DJ sets", text: "Sunset sessions, pool and beach parties with African and tribal rhythms blended with modern electronic dance music." },
  ],
  packageTitle: "Partnership packages",
  packageLead: "Barter partnerships for a stay of at least 7 nights for two people. Longer stays by agreement.",
  packageHead: ["Deliverable", "Hotel / resort", "Travel agency"],
  deliverables: [
    { item: "Exclusive UGC videos", hotel: "3", agency: "5" },
    { item: "Photos and raw footage", hotel: "15–20 photos + raw clips", agency: "20–30 photos + raw clips" },
    { item: "TikTok videos on my channel", hotel: "2", agency: "3" },
    { item: "Instagram collab Reels", hotel: "1", agency: "2" },
    { item: "TikTok LIVE on location", hotel: "1", agency: "2" },
    { item: "Stories with tag", hotel: "daily", agency: "daily + link or promo code" },
    { item: "Guest programme", hotel: "Shark Night + DJ set", agency: "Shark Night for your clients" },
    { item: "Reach report", hotel: "within 7 days", agency: "within 7 days" },
  ],
  termsTitle: "Terms",
  terms: [
    "Hotels: complimentary all-inclusive stay for two, minimum 7 nights. I cover my own travel.",
    "Travel agencies: complete package for two including flights, minimum 7 nights.",
    "UGC usage: unlimited organic use on your channels and website; paid ads for 6 months.",
    "Delivery within 7 days after the stay, one round of edits included.",
    "Music: my own Afro Tribal Bounce tracks or licence-free music, safe for ads.",
    "Partnership posts are clearly labelled as paid partnerships.",
  ],
  contactTitle: "Let's work together",
  contactText: "Send me your property, location and preferred dates. I'll reply with availability and a tailored proposal.",
  igCta: "Message on Instagram",
  tiktokCta: "See TikTok",
};

export default function Page() {
  return <MediaKitPage c={c} />;
}
