import type { Metadata } from "next";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Praktické články o Meta Ads, lead generation a výkonnostním marketingu. Reálná čísla z kampaní, žádná teorie do šuplíku.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${Number(d)}. ${Number(m)}. ${y}`;
}

export default function BlogIndexPage() {
  return (
    <>
      <Nav />
      <main
        id="main"
        className="container-ultra pt-32 pb-24 md:pt-40 md:pb-32 max-w-3xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle mb-4">
          Blog
        </p>
        <h1 className="font-display leading-[1.1] tracking-[-0.02em] text-[clamp(36px,5vw,64px)] text-fg mb-6">
          Marketing v číslech
        </h1>
        <p className="font-sans text-lg text-fg-muted leading-relaxed mb-16 max-w-2xl">
          Praktické články o Meta Ads, lead generation a měření výkonu. Reálná
          čísla z kampaní, žádná teorie do šuplíku.
        </p>

        <div className="flex flex-col gap-4">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-rule bg-bg-elevated p-6 md:p-8 transition-colors hover:border-accent"
            >
              <div className="flex items-center gap-3 mb-3">
                <Badge>{post.tag}</Badge>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
                  {formatDate(post.date)} · {post.readingMinutes} min
                </span>
              </div>
              <h2 className="font-mono font-medium text-xl md:text-2xl tracking-[-0.02em] text-fg leading-tight mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="font-sans text-[15px] text-fg-muted leading-relaxed">
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
