import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPost } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${Number(d)}. ${Number(m)}. ${y}`;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const { default: MDX } = await import(`@/content/blog/${slug}.mdx`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: "Tomáš Hamerník" },
    publisher: { "@type": "Organization", name: "Hamr Labs" },
    mainEntityOfPage: `https://hamrlabs.cz/blog/${post.slug}`,
  };

  return (
    <>
      <Nav />
      <main id="main" className="relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Header */}
        <section
          id="hero"
          className="relative pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule overflow-hidden"
        >
          <div className="absolute inset-0 aurora-bg opacity-60 pointer-events-none" />
          <div className="container-ultra relative max-w-3xl flex flex-col gap-6">
            <a
              href="/blog"
              className="font-mono text-xs uppercase tracking-[0.15em] text-fg-muted hover:text-accent transition-colors w-fit"
            >
              ← Blog
            </a>
            <div className="flex items-center gap-3 flex-wrap">
              <Badge>{post.tag}</Badge>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
                {formatDate(post.date)} · {post.readingMinutes} min čtení
              </span>
            </div>
            <h1 className="font-display leading-[1.1] tracking-[-0.02em] text-[clamp(32px,5vw,64px)] text-fg">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Body */}
        <article className="container-ultra py-16 md:py-24 max-w-3xl">
          <MDX />
        </article>

        {/* CTA */}
        <section className="border-t border-rule py-20 md:py-28">
          <div className="container-ultra flex flex-col gap-6 items-start max-w-3xl">
            <h2 className="font-display leading-[1.15] tracking-[-0.02em] text-[clamp(28px,3.5vw,48px)] text-fg">
              Chcete to samé pro svůj byznys?
            </h2>
            <p className="font-sans text-lg text-fg-muted leading-relaxed max-w-lg">
              Pošlete stručný brief: firma, rozpočet, co řešíte. Vrátím se s
              návrhem, jak na to bych šel já.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#kontakt">
                <Button variant="primary">Nezávazná konzultace →</Button>
              </a>
              <a href="/blog">
                <Button variant="secondary">← Zpět na blog</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
