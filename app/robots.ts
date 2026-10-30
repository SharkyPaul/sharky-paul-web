import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/prirucka"] }],
    sitemap: "https://www.sharkypaul.com/sitemap.xml",
    host: "https://www.sharkypaul.com",
  };
}
