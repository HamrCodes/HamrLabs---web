import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { GuideVideo } from "@/components/guides/guide-parts";
import { guideContent } from "@/content/guides";
import {
  GUIDES_EMAIL,
  formatGuideDate,
  getGuide,
  guideCategories,
  guides,
} from "@/lib/guides";
import { SITE_URL, ORGANIZATION_ID, breadcrumbNode, graph } from "@/lib/seo";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const path = `/navody/${guide.slug}/`;
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url: `${SITE_URL}${path}`,
      siteName: "Hamr Labs",
      locale: "cs_CZ",
      modifiedTime: guide.updated,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const content = guideContent[slug];
  if (!guide || !content) notFound();

  const url = `${SITE_URL}/navody/${guide.slug}/`;
  const category = guideCategories.find((c) => c.id === guide.category);
  const mailto = `mailto:${GUIDES_EMAIL}?subject=${encodeURIComponent(
    `Návod: ${guide.shortTitle}`,
  )}`;

  const jsonLd = graph([
    {
      "@type": "HowTo",
      "@id": `${url}#navod`,
      name: guide.title,
      description: guide.description,
      totalTime: `PT${guide.minutes}M`,
      inLanguage: "cs-CZ",
      dateModified: guide.updated,
      publisher: { "@id": ORGANIZATION_ID },
      step: content.steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        url: `${url}#krok-${i + 1}`,
      })),
    },
    breadcrumbNode([
      { name: "Domů", url: SITE_URL },
      { name: "Návody pro klienty", url: `${SITE_URL}/navody/` },
      { name: guide.shortTitle, url },
    ]),
  ]);

  // .container-ultra sets its own max-width, so max-w-* on it is ignored.
  // Column widths therefore live on the inner wrappers.
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main id="main" className="relative">
        <header className="relative pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule overflow-hidden">
          <div className="absolute inset-0 aurora-bg opacity-60 pointer-events-none" />
          <div className="container-ultra relative">
            <div className="max-w-4xl flex flex-col gap-6">
              <nav
                aria-label="Drobečková navigace"
                className="font-mono text-xs uppercase tracking-[0.12em] text-fg-muted flex items-center gap-2 flex-wrap"
              >
                <a href="/" className="hover:text-accent transition-colors">
                  Domů
                </a>
                <span aria-hidden className="text-fg-subtle">
                  /
                </span>
                <a href="/navody/" className="hover:text-accent transition-colors">
                  Návody pro klienty
                </a>
                <span aria-hidden className="text-fg-subtle">
                  /
                </span>
                <span className="text-fg-subtle" aria-current="page">
                  {guide.shortTitle}
                </span>
              </nav>

              <div className="flex items-center gap-3 flex-wrap">
                {category ? <Badge>{category.label}</Badge> : null}
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
                  {guide.minutes} minut · aktualizováno{" "}
                  <time dateTime={guide.updated}>
                    {formatGuideDate(guide.updated)}
                  </time>
                </span>
              </div>
              <h1 className="font-display leading-[1.1] tracking-[-0.02em] text-[clamp(32px,5vw,60px)] text-fg max-w-3xl text-balance">
                {guide.title}
              </h1>
              <p className="font-sans text-lg text-fg-muted leading-relaxed max-w-2xl text-pretty">
                {content.lead}
              </p>
            </div>
          </div>
        </header>

        <div className="container-ultra py-12 md:py-16">
          <div className="max-w-4xl flex flex-col gap-10">
            <GuideVideo video={guide.video} title={guide.title} />

            <div className="grid gap-6 md:grid-cols-2">
              <section
                aria-labelledby="co-potrebujete"
                className="rounded-2xl border border-rule p-6"
              >
                <h2
                  id="co-potrebujete"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted mb-4"
                >
                  Co budete potřebovat
                </h2>
                <ul className="flex flex-col gap-3">
                  {content.needs.map((need) => (
                    <li
                      key={need}
                      className="flex gap-3 font-sans text-[15px] text-fg-muted leading-relaxed"
                    >
                      <Check
                        aria-hidden
                        className="mt-1 h-4 w-4 shrink-0 text-accent"
                        strokeWidth={1.5}
                      />
                      {need}
                    </li>
                  ))}
                </ul>
              </section>

              <nav
                aria-labelledby="postup"
                className="rounded-2xl border border-rule p-6"
              >
                <h2
                  id="postup"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted mb-4"
                >
                  Postup v {content.steps.length} krocích
                </h2>
                <ol className="flex flex-col gap-2.5">
                  {content.steps.map((step, i) => (
                    <li key={step.title}>
                      <a
                        href={`#krok-${i + 1}`}
                        className="group flex gap-3 font-sans text-[15px] text-fg-muted leading-relaxed transition-colors hover:text-accent"
                      >
                        <span className="font-mono tabular-nums text-fg-subtle transition-colors group-hover:text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            <p className="font-sans text-sm text-fg-subtle leading-relaxed max-w-prose text-pretty">
              Meta občas přejmenuje tlačítka nebo je přesune. Když něco
              nenajdete, pošlete mi screenshot a poradím.
            </p>

            <ol className="flex flex-col border-b border-rule">
              {content.steps.map((step, i) => (
                <li
                  key={step.title}
                  id={`krok-${i + 1}`}
                  className="grid grid-cols-1 md:grid-cols-[4rem_1fr] md:gap-x-6 border-t border-rule py-10 md:py-12 scroll-mt-28"
                >
                  <span
                    aria-hidden
                    className="mb-3 md:mb-0 md:pt-2 font-mono text-sm md:text-base tabular-nums tracking-[0.1em] text-accent"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-mono font-medium text-2xl md:text-3xl tracking-[-0.02em] text-fg leading-tight mb-5">
                      <span className="sr-only">Krok {i + 1}: </span>
                      {step.title}
                    </h2>
                    {step.body}
                  </div>
                </li>
              ))}
            </ol>

            <section aria-labelledby="caste-otazky" className="pt-4">
              <h2
                id="caste-otazky"
                className="font-mono font-medium text-2xl md:text-3xl tracking-[-0.02em] text-fg leading-tight mb-6"
              >
                Časté otázky
              </h2>
              <div className="border-b border-rule">
                {content.faq.map((item) => (
                  <div key={item.q} className="border-t border-rule py-6">
                    <h3 className="font-mono font-medium text-lg text-fg mb-2">
                      {item.q}
                    </h3>
                    <p className="font-sans text-base text-fg-muted leading-relaxed max-w-prose">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              aria-labelledby="zasekli-jste-se"
              className="rounded-2xl border border-rule bg-bg-elevated p-6 md:p-8 flex flex-col gap-5 items-start"
            >
              <h2
                id="zasekli-jste-se"
                className="font-display leading-[1.15] tracking-[-0.02em] text-[clamp(24px,3vw,36px)] text-fg"
              >
                Zasekli jste se?
              </h2>
              <p className="font-sans text-base md:text-lg text-fg-muted leading-relaxed max-w-lg text-pretty">
                Pošlete mi screenshot obrazovky na {GUIDES_EMAIL}. Projdu to a
                ozvu se Vám do 24 hodin.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={mailto}
                  className="btn-primary-cyan inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-mono font-semibold text-sm uppercase tracking-wider"
                >
                  Napsat e-mail
                </a>
                <a
                  href="/navody/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-rule-strong px-7 py-3.5 font-mono font-semibold text-sm uppercase tracking-wider text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  ← Všechny návody
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
