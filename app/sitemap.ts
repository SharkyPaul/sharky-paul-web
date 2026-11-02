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
    { url: `${SITE}/nebezpecna-morska-zvirata-egypt`, lastModified: now, changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/nebezpecna-morska-zvirata-egypt`, en: `${SITE}/en/dangerous-marine-animals-egypt` } } },
    { url: `${SITE}/en/dangerous-marine-animals-egypt`, lastModified: now, changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/nebezpecna-morska-zvirata-egypt`, en: `${SITE}/en/dangerous-marine-animals-egypt` } } },
    { url: `${SITE}/aplikace`, lastModified: now, changeFrequency: "monthly", priority: 0.8, alternates: { languages: { cs: `${SITE}/aplikace`, en: `${SITE}/en/app` } } },
    { url: `${SITE}/en/app`, lastModified: now, changeFrequency: "monthly", priority: 0.7, alternates: { languages: { cs: `${SITE}/aplikace`, en: `${SITE}/en/app` } } },
    { url: `${SITE}/booking`, lastModified: now, changeFrequency: "monthly", priority: 0.8, alternates: { languages: { cs: `${SITE}/booking`, en: `${SITE}/en/booking` } } },
    { url: `${SITE}/en/booking`, lastModified: now, changeFrequency: "monthly", priority: 0.8, alternates: { languages: { cs: `${SITE}/booking`, en: `${SITE}/en/booking` } } },
    { url: `${SITE}/kit`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/media-kit`, lastModified: now, changeFrequency: "monthly", priority: 0.7, alternates: { languages: { cs: `${SITE}/media-kit`, en: `${SITE}/en/media-kit` } } },
    { url: `${SITE}/en/media-kit`, lastModified: now, changeFrequency: "monthly", priority: 0.7, alternates: { languages: { cs: `${SITE}/media-kit`, en: `${SITE}/en/media-kit` } } },
    { url: `${SITE}/downloads/sharky-paul-prevence-zraloci.pdf`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
