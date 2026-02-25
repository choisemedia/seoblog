import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://example-seo.agency",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
