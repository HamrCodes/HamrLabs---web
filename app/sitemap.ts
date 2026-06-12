import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://hamrlabs.cz", lastModified: now, priority: 1.0 },
    ...caseStudies.map((cs) => ({
      url: `https://hamrlabs.cz/pripadovky/${cs.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    {
      url: "https://hamrlabs.cz/privacy",
      lastModified: now,
      priority: 0.3,
    },
    {
      url: "https://hamrlabs.cz/obchodni-podminky",
      lastModified: now,
      priority: 0.3,
    },
    {
      url: "https://hamrlabs.cz/cookies",
      lastModified: now,
      priority: 0.3,
    },
  ];
}
