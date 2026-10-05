import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://kushrishi.com/projects/autonomy-simulation-lab", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://kushrishi.com/projects/prairiereach", changeFrequency: "monthly", priority: 0.7 },
    {
      url: "https://kushrishi.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://kushrishi.com/cv",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://kushrishi.com/research/model-regression-forensics",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://kushrishi.com/research/truemargin",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
