import type { Metadata } from "next";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { PricingSection } from "@/components/pricing/pricing-section";
import { JsonLd } from "@/components/seo/json-ld";
import {
  assertPricingConsistent,
  formatCzk,
  plainSpaces,
  plans,
} from "@/lib/pricing";
import {
  SITE_URL,
  breadcrumbNode,
  graph,
  pricingCatalogNode,
} from "@/lib/seo";

// Built from lib/pricing.ts, so the snippet in search never shows an old price.
const planSummary = plainSpaces(
  plans.map((p) => `${p.name} ${formatCzk(p.feeCzk)}`).join(", "),
);

const description = `Ceník reklamy na Facebooku a Instagramu: ${planSummary} měsíčně za práci. Reklamu platíte přímo Metě. Ceny jsou bez DPH.`;

// A page-level openGraph replaces the layout's one, so it carries the image.
export const metadata: Metadata = {
  title: "Ceník",
  description,
  alternates: { canonical: "/cenik/" },
  openGraph: {
    type: "website",
    title: "Ceník | Hamr Labs",
    description,
    url: `${SITE_URL}/cenik/`,
    siteName: "Hamr Labs",
    locale: "cs_CZ",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hamr Labs" }],
  },
};

/**
 * Standalone price list, the link setters and CRM offers can send. Same
 * component as the #cenik section on the home page; the menu keeps pointing
 * to /#cenik. Footer is required: it opens the consultation funnel that the
 * cards' CTAs (#konzultace) ask for.
 */
export default function PricingPage() {
  // Runs during `next build`: a price that does not add up fails the build.
  assertPricingConsistent();

  const jsonLd = graph([
    breadcrumbNode([
      { name: "Domů", url: SITE_URL },
      { name: "Ceník", url: `${SITE_URL}/cenik/` },
    ]),
    pricingCatalogNode(plans),
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main id="main">
        <div className="container-ultra pt-24 md:pt-28">
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
            <span className="text-fg-muted" aria-current="page">
              Ceník
            </span>
          </nav>
        </div>
        <PricingSection headingLevel="h1" className="pricing-section--page" />
      </main>
      <Footer />
    </>
  );
}
