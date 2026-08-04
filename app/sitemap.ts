import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

// Required for `output: "export"` — bakes the sitemap once at build time.
export const dynamic = "force-static";

// The site runs with trailingSlash: true, so every non-root page lives at a
// URL ending in "/". List those exact URLs here — otherwise each sitemap entry
// 301-redirects and Search Console flags the sitemap as containing redirects.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...caseStudies.map((cs) => ({
      url: `${SITE_URL}/pripadovky/${cs.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}/`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      // Pillar article ranks above the cluster.
      priority: p.pillar ? 0.9 : 0.8,
    })),
    ...["privacy", "obchodni-podminky", "cookies"].map((slug) => ({
      url: `${SITE_URL}/${slug}/`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
