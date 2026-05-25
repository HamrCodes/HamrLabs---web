import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { Badge } from "@/components/ui/badge";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Button } from "@/components/ui/button";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies
    .filter((cs) => !cs.isPlaceholder)
    .map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.client} — případovka`,
    description: cs.body,
    openGraph: {
      title: `${cs.client} — případovka`,
      description: cs.body,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs || cs.isPlaceholder) notFound();

  // dynamic MDX import
  const { default: MDX } = await import(`@/content/case-studies/${slug}.mdx`);

  return (
    <>
      <Nav />
      <main id="main" className="relative">
        {/* Hero header */}
        <section
          id="hero"
          className="relative pt-32 pb-20 md:pt-40 md:pb-32 border-b border-rule overflow-hidden"
        >
          <div className="absolute inset-0 aurora-bg opacity-60 pointer-events-none" />
          <div className="container-ultra relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <SectionEyebrow>Case {cs.caseNumber}</SectionEyebrow>
              <h1 className="font-display leading-[1.1] tracking-[-0.02em] text-[clamp(40px,6vw,88px)] text-fg">
                {cs.client}
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge>{cs.tag}</Badge>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-fg-muted">
                  {cs.industry}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-3 gap-4 border-t border-rule pt-8">
              {cs.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-mono font-medium text-2xl md:text-3xl text-accent tabular-nums leading-none">
                    {s.value}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-muted">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MDX body */}
        <article className="container-ultra py-20 md:py-32 max-w-3xl">
          <MDX />
        </article>

        {/* CTA */}
        <section className="border-t border-rule py-20 md:py-32">
          <div className="container-ultra flex flex-col gap-8 items-start max-w-3xl">
            <h2 className="font-display leading-[1.15] tracking-[-0.02em] text-[clamp(28px,3.5vw,52px)] text-fg">
              Mám podobný case?
            </h2>
            <p className="font-sans text-lg text-fg-muted leading-relaxed max-w-lg">
              Pošlete stručný brief: firma, rozpočet, co řešíte. Vrátím se s
              návrhem, jak na to bych šel já.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#kontakt">
                <Button variant="primary">Chci výsledky →</Button>
              </a>
              <a href="/#moje-vysledky">
                <Button variant="secondary">← Zpět na výsledky</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
