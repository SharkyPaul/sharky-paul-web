import type { MetadataRoute } from "next";

const SITE = "https://www.sharkypaul.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/downloads/sharky-paul-prevence-zraloci.pdf`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
