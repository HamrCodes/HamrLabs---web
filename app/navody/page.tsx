import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { JsonLd } from "@/components/seo/json-ld";
import {
  GUIDES_EMAIL,
  guideCategories,
  guidesCountLabel,
  guidesInCategory,
} from "@/lib/guides";
import { SITE_URL, breadcrumbNode, graph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Návody pro klienty",
  description:
    "Návody pro klienty Hamr Labs: jak založit Business Manager, přidat stránku, Instagram a reklamní účet a nasdílet mi přístup. Krok za krokem, za pár minut.",
  alternates: { canonical: "/navody/" },
};

export default function GuidesIndexPage() {
  const jsonLd = graph([
    breadcrumbNode([
      { name: "Domů", url: SITE_URL },
      { name: "Návody pro klienty", url: `${SITE_URL}/navody/` },
    ]),
  ]);

  // .container-ultra sets its own max-width, so max-w-* on it is ignored.
  // The column width therefore lives on the inner wrapper.
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main id="main" className="container-ultra pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <nav
            aria-label="Drobečková navigace"
            className="font-mono text-xs uppercase tracking-[0.12em] text-fg-muted flex items-center gap-2 flex-wrap mb-10"
          >
            <a href="/" className="hover:text-accent transition-colors">
              Domů
            </a>
            <span aria-hidden className="text-fg-subtle">
              /
            </span>
            <span className="text-fg-subtle" aria-current="page">
              Návody pro klienty
            </span>
          </nav>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle mb-4">
            Pro klienty
          </p>
          <h1 className="font-display leading-[1.1] tracking-[-0.02em] text-[clamp(36px,5vw,64px)] text-fg mb-6 text-balance">
            Návody pro klienty
          </h1>
          <p className="font-sans text-lg text-fg-muted leading-relaxed mb-14 max-w-2xl text-pretty">
            Na začátku spolupráce potřebuji přístup k Vaší firemní stránce a
            reklamnímu účtu. Sepsal jsem návody, podle kterých to nastavíte sami
            za pár minut. Účty přitom zůstávají Vaše.
          </p>

          <div className="border-b border-rule">
            {guideCategories.map((category, i) => {
              const items = guidesInCategory(category.id);
              if (items.length === 0) return null;
              return (
                <details
                  key={category.id}
                  open={i === 0}
                  className="group border-t border-rule"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
                    <h2 className="font-mono text-sm md:text-base uppercase tracking-[0.15em] text-fg">
                      {category.label}
                    </h2>
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-xs tabular-nums text-fg-muted">
                        {guidesCountLabel(items.length)}
                      </span>
                      <ChevronRight
                        aria-hidden
                        className="h-5 w-5 text-fg-muted transition-transform duration-200 group-open:rotate-90 motion-reduce:transition-none"
                        strokeWidth={1.5}
                      />
                    </span>
                  </summary>

                  <ul className="flex flex-col gap-3 pb-6">
                    {items.map((guide) => (
                      <li key={guide.slug}>
                        <a
                          href={`/navody/${guide.slug}/`}
                          className="group/card flex items-start justify-between gap-6 rounded-2xl border border-rule bg-bg-elevated p-6 md:p-7 transition-colors hover:border-accent"
                        >
                          <span className="flex min-w-0 flex-col gap-2">
                            <span className="font-mono font-medium text-lg md:text-xl tracking-[-0.02em] text-fg leading-snug transition-colors group-hover/card:text-accent">
                              {guide.title}
                            </span>
                            <span className="font-sans text-[15px] text-fg-muted leading-relaxed text-pretty">
                              {guide.excerpt}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
                              {guide.minutes} minut
                              {guide.video ? " · s videem" : ""}
                            </span>
                          </span>
                          <ChevronRight
                            aria-hidden
                            className="mt-1 h-5 w-5 shrink-0 text-fg-subtle transition-colors group-hover/card:text-accent"
                            strokeWidth={1.5}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              );
            })}
          </div>

          <p className="mt-10 font-sans text-[15px] text-fg-muted leading-relaxed max-w-2xl text-pretty">
            Nevíte si rady? Pošlete mi screenshot na{" "}
            <a
              href={`mailto:${GUIDES_EMAIL}`}
              className="text-accent underline underline-offset-4 hover:opacity-80"
            >
              {GUIDES_EMAIL}
            </a>
            . Ozvu se Vám do 24 hodin.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
