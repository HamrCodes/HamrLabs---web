import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { blogPosts } from "@/lib/blog";

// Required for `output: "export"` — bakes the sitemap once at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://hamrlabs.cz", lastModified: now, priority: 1.0 },
    { url: "https://hamrlabs.cz/blog", lastModified: now, priority: 0.7 },
    ...caseStudies.map((cs) => ({
      url: `https://hamrlabs.cz/pripadovky/${cs.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...blogPosts.map((p) => ({
      url: `https://hamrlabs.cz/blog/${p.slug}`,
      lastModified: new Date(p.date),
      priority: 0.6,
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
