import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sharky Paul – Respect the Locals",
    short_name: "Sharky Paul",
    description: "Oceán, potápění, žraloci a hudba. Respect the Locals.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "cs",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
