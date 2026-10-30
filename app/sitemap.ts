import type { MetadataRoute } from "next";

const SITE = "https://www.sharkypaul.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1, alternates: { languages: { cs: `${SITE}/`, en: `${SITE}/en` } } },
    { url: `${SITE}/en`, lastModified: now, changeFrequency: "weekly", priority: 0.9, alternates: { languages: { cs: `${SITE}/`, en: `${SITE}/en` } } },
    { url: `${SITE}/myty-o-zralocich`, lastModified: now, changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/myty-o-zralocich`, en: `${SITE}/en/shark-myths` } } },
    { url: `${SITE}/en/shark-myths`, lastModified: now, changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/myty-o-zralocich`, en: `${SITE}/en/shark-myths` } } },
    { url: `${SITE}/co-delat-kdyz-potkas-zraloka`, lastModified: now, changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/co-delat-kdyz-potkas-zraloka`, en: `${SITE}/en/what-to-do-if-you-see-a-shark` } } },
    { url: `${SITE}/en/what-to-do-if-you-see-a-shark`, lastModified: now, changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/co-delat-kdyz-potkas-zraloka`, en: `${SITE}/en/what-to-do-if-you-see-a-shark` } } },
    { url: `${SITE}/downloads/sharky-paul-prevence-zraloci.pdf`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
