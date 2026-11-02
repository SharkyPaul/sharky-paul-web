import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/aplikace",
    name: "Sharky Paul – Respect the Locals",
    short_name: "Sharky Paul",
    description: "Co dělat, když potkáš žraloka, kontrolní seznam před ponorem a příručka Prevence. Funguje i offline.",
    start_url: "/aplikace?zdroj=aplikace",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#061f2c",
    theme_color: "#0f4656",
    lang: "cs",
    categories: ["education", "travel", "sports"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Když potkáš žraloka", short_name: "Setkání", url: "/aplikace#setkani", icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }] },
      { name: "Kontrolní seznam", short_name: "Seznam", url: "/aplikace#checklist", icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }] },
      { name: "9 mýtů o žralocích", short_name: "Mýty", url: "/myty-o-zralocich", icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }] },
    ],
  };
}
