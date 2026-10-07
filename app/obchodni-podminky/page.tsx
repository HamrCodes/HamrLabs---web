import type { Metadata } from "next";
import { ChevronDown, FileDown } from "lucide-react";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { VopText, vopAnchor } from "@/components/legal/vop-text";
import {
  VOP_PDF,
  VOP_PLATNOST_OD,
  VOP_PODTITUL,
  VOP_PREAMBULE,
  vopClanky,
  type VopClanek,
} from "@/content/legal/vop";
import { SITE_URL, breadcrumbNode, graph } from "@/lib/seo";

const PATH = "/obchodni-podminky/";
const TITLE = "Všeobecné obchodní podmínky";
const DESCRIPTION =
  "Všeobecné obchodní podmínky Hamr Labs s.r.o. pro marketingové služby: uzavření smlouvy, doba trvání a výpověď, cena, platby, mlčenlivost a licence k reklamám.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  // openGraph and twitter replace the layout's objects as a whole, so the
  // image has to be repeated here.
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: `${SITE_URL}${PATH}`,
    siteName: "Hamr Labs",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hamr Labs. Přivedu Vám zákazníky, ne jen lajky.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

function TocList({ clanky }: { clanky: VopClanek[] }) {
  return (
    <ol className="flex flex-col gap-2.5">
      {clanky.map((a) => (
        <li key={a.cislo}>
          <a
            href={`#${vopAnchor(String(a.cislo))}`}
            className="group/toc-link grid grid-cols-[1.75rem_minmax(0,1fr)] font-sans text-[15px] text-fg-muted leading-snug transition-colors hover:text-accent"
          >
            <span className="font-mono tabular-nums text-fg-subtle transition-colors group-hover/toc-link:text-accent">
              {a.cislo}.
            </span>
            <span>{a.nadpis}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function TermsPage() {
  const jsonLd = graph([
    breadcrumbNode([
      { name: "Domů", url: SITE_URL },
      { name: "Obchodní podmínky", url: `${SITE_URL}${PATH}` },
    ]),
  ]);

  // .container-ultra sets its own max-width, so max-w-* on it is ignored.
  // Column widths therefore live on the inner wrappers.
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main id="main" className="container-ultra pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-6xl">
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
              Obchodní podmínky
            </span>
          </nav>

          <header className="max-w-3xl mb-12 md:mb-16">
            <h1 className="font-display leading-[1.15] tracking-[-0.02em] text-[clamp(36px,5vw,64px)] text-fg mb-5 text-balance">
              {TITLE}
            </h1>
            <p className="font-sans text-lg text-fg-muted leading-relaxed text-pretty">
              {VOP_PODTITUL} {VOP_PREAMBULE}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                Platné od{" "}
                <time dateTime={VOP_PLATNOST_OD}>12. června 2026</time>
              </p>
              <a
                href={VOP_PDF}
                download
                type="application/pdf"
                className="inline-flex items-center gap-2 rounded-full border border-rule-strong px-5 py-2.5 font-mono font-semibold text-xs uppercase tracking-wider text-fg transition-colors hover:border-accent hover:text-accent"
              >
                <FileDown aria-hidden className="h-4 w-4" strokeWidth={1.5} />
                Stáhnout PDF
              </a>
            </div>
          </header>

          <div className="lg:grid lg:grid-cols-[15rem_minmax(0,46rem)] lg:gap-16 lg:items-start">
            <nav
              aria-labelledby="vop-obsah"
              className="hidden lg:block lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto"
            >
              <h2
                id="vop-obsah"
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted mb-4"
              >
                Obsah
              </h2>
              <TocList clanky={vopClanky} />
            </nav>

            <div className="min-w-0">
              <details className="group/toc lg:hidden mb-12 rounded-2xl border border-rule">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg">
                    Obsah ({vopClanky.length} článků)
                  </span>
                  <ChevronDown
                    aria-hidden
                    className="h-4 w-4 shrink-0 text-fg-muted transition-transform group-open/toc:rotate-180"
                    strokeWidth={1.5}
                  />
                </summary>
                <div className="border-t border-rule px-5 py-5">
                  <TocList clanky={vopClanky} />
                </div>
              </details>

              {vopClanky.map((a) => (
                <section
                  key={a.cislo}
                  id={`cl-${a.cislo}`}
                  aria-labelledby={`cl-${a.cislo}-nadpis`}
                  className="scroll-mt-28 border-t border-rule pt-10 mt-10 first-of-type:border-t-0 first-of-type:pt-0 first-of-type:mt-0"
                >
                  <h2
                    id={`cl-${a.cislo}-nadpis`}
                    className="font-mono font-medium text-xl text-fg mb-6 text-pretty"
                  >
                    <span className="tabular-nums text-fg-subtle">
                      {a.cislo}.
                    </span>{" "}
                    {a.nadpis}
                  </h2>

                  <div className="flex flex-col gap-4">
                    {a.odstavce.map((p) => {
                      const id = vopAnchor(p.cislo) ?? undefined;
                      return (
                        <div
                          key={p.cislo}
                          id={id}
                          className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3 scroll-mt-28"
                        >
                          <a
                            href={`#${id}`}
                            className="font-mono text-sm leading-[1.625rem] tabular-nums text-fg-subtle transition-colors hover:text-accent"
                          >
                            {p.cislo}
                          </a>
                          <div className="min-w-0 font-sans text-base text-fg-muted leading-relaxed [overflow-wrap:break-word]">
                            <p>
                              <VopText text={p.text} />
                            </p>
                            {p.body ? (
                              <ol className="mt-3 flex flex-col gap-2">
                                {p.body.map((b) => (
                                  <li
                                    key={b.pismeno}
                                    className="grid grid-cols-[1.75rem_minmax(0,1fr)]"
                                  >
                                    <span className="font-mono text-sm leading-[1.625rem] text-fg-subtle">
                                      {b.pismeno})
                                    </span>
                                    <span>
                                      <VopText text={b.text} />
                                    </span>
                                  </li>
                                ))}
                              </ol>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}

              <p className="font-sans text-sm text-fg-subtle leading-relaxed mt-16 border-t border-rule pt-8">
                Máte dotaz k podmínkám? Napište na{" "}
                <a
                  className="text-accent underline underline-offset-4"
                  href="mailto:tomas.hammernik@gmail.com"
                >
                  tomas.hammernik@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
