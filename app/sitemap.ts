import type { MetadataRoute } from "next";

const SITE = "https://www.sharkypaul.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Datum poslední skutečné změny obsahu (z historie gitu). Při úpravě stránky datum aktualizuj.
  const d = (iso: string) => new Date(`${iso}T00:00:00Z`);
  return [
    { url: `${SITE}/`, lastModified: d("2026-11-09"), changeFrequency: "weekly", priority: 1, alternates: { languages: { cs: `${SITE}/`, en: `${SITE}/en` } } },
    { url: `${SITE}/en`, lastModified: d("2026-11-09"), changeFrequency: "weekly", priority: 0.9, alternates: { languages: { cs: `${SITE}/`, en: `${SITE}/en` } } },
    { url: `${SITE}/myty-o-zralocich`, lastModified: d("2026-11-09"), changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/myty-o-zralocich`, en: `${SITE}/en/shark-myths` } } },
    { url: `${SITE}/en/shark-myths`, lastModified: d("2026-11-09"), changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/myty-o-zralocich`, en: `${SITE}/en/shark-myths` } } },
    { url: `${SITE}/co-delat-kdyz-potkas-zraloka`, lastModified: d("2026-11-09"), changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/co-delat-kdyz-potkas-zraloka`, en: `${SITE}/en/what-to-do-if-you-see-a-shark` } } },
    { url: `${SITE}/en/what-to-do-if-you-see-a-shark`, lastModified: d("2026-11-09"), changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/co-delat-kdyz-potkas-zraloka`, en: `${SITE}/en/what-to-do-if-you-see-a-shark` } } },
    { url: `${SITE}/zralok-megalodon`, lastModified: d("2026-11-09"), changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/zralok-megalodon`, en: `${SITE}/en/megalodon-shark` } } },
    { url: `${SITE}/en/megalodon-shark`, lastModified: d("2026-11-09"), changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/zralok-megalodon`, en: `${SITE}/en/megalodon-shark` } } },
    { url: `${SITE}/zralok-bily`, lastModified: d("2026-11-09"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/zralok-obrovsky`, lastModified: d("2026-11-08"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/zralok-tygri`, lastModified: d("2026-11-08"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/pirati-z-karibiku`, lastModified: d("2026-11-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/zraloci-v-egypte`, lastModified: d("2026-11-07"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/nebezpecna-morska-zvirata-egypt`, lastModified: d("2026-11-09"), changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/nebezpecna-morska-zvirata-egypt`, en: `${SITE}/en/dangerous-marine-animals-egypt` } } },
    { url: `${SITE}/en/dangerous-marine-animals-egypt`, lastModified: d("2026-11-09"), changeFrequency: "monthly", priority: 0.9, alternates: { languages: { cs: `${SITE}/nebezpecna-morska-zvirata-egypt`, en: `${SITE}/en/dangerous-marine-animals-egypt` } } },
    { url: `${SITE}/aplikace`, lastModified: d("2026-11-07"), changeFrequency: "monthly", priority: 0.8, alternates: { languages: { cs: `${SITE}/aplikace`, en: `${SITE}/en/app` } } },
    { url: `${SITE}/en/app`, lastModified: d("2026-11-07"), changeFrequency: "monthly", priority: 0.7, alternates: { languages: { cs: `${SITE}/aplikace`, en: `${SITE}/en/app` } } },
    { url: `${SITE}/booking`, lastModified: d("2026-11-07"), changeFrequency: "monthly", priority: 0.8, alternates: { languages: { cs: `${SITE}/booking`, en: `${SITE}/en/booking` } } },
    { url: `${SITE}/en/booking`, lastModified: d("2026-11-07"), changeFrequency: "monthly", priority: 0.8, alternates: { languages: { cs: `${SITE}/booking`, en: `${SITE}/en/booking` } } },
    { url: `${SITE}/kit`, lastModified: d("2026-11-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/media-kit`, lastModified: d("2026-11-07"), changeFrequency: "monthly", priority: 0.7, alternates: { languages: { cs: `${SITE}/media-kit`, en: `${SITE}/en/media-kit` } } },
    { url: `${SITE}/en/media-kit`, lastModified: d("2026-11-07"), changeFrequency: "monthly", priority: 0.7, alternates: { languages: { cs: `${SITE}/media-kit`, en: `${SITE}/en/media-kit` } } },
    { url: `${SITE}/downloads/sharky-paul-prevence-zraloci.pdf`, lastModified: d("2026-10-29"), changeFrequency: "monthly", priority: 0.8 },
  ];
}
