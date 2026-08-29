import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kushrishi.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://kushrishi.com/research/model-regression-forensics",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
