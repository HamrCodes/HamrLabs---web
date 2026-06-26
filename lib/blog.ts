export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  tag: string;
  readingMinutes: number;
}

// Newest first. Body lives in content/blog/{slug}.mdx
export const blogPosts: BlogPost[] = [
  {
    slug: "kolik-stoji-lead-z-meta-ads",
    title: "Kolik stojí lead z Meta Ads v roce 2026",
    excerpt:
      "Cena za poptávku se liší obor od oboru. Reálná čísla z kampaní napříč službami, řemesly i financemi a co cenu posouvá nahoru a dolů.",
    date: "2026-06-12",
    tag: "Lead Generation",
    readingMinutes: 4,
  },
  {
    slug: "boostovani-prispevku-neni-reklama",
    title: "Proč boostování příspěvků není reklama",
    excerpt:
      "Tlačítko Boostovat příspěvek utratí rozpočet za lajky a dosah. Lead gen kampaň utratí stejné peníze za měřitelné poptávky. Rozdíl je v systému, ne v částce.",
    date: "2026-06-10",
    tag: "Meta Ads",
    readingMinutes: 3,
  },
  {
    slug: "conversions-api-a-pixel",
    title: "Conversions API a Pixel: proč na nich stojí výkon kampaní",
    excerpt:
      "Bez čistého trackingu algoritmus optimalizuje naslepo. Jak Pixel a Conversions API spolupracují a co se stane, když chybí.",
    date: "2026-06-08",
    tag: "Tracking",
    readingMinutes: 4,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
