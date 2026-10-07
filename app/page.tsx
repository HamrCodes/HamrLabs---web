import { Nav } from "@/components/nav/nav";
import { Hero } from "@/components/hero/hero";
import { SectionDivider } from "@/components/dividers/section-divider";
import { ServicesSection } from "@/components/services/services-section";
import { CaseStudiesSection } from "@/components/case-studies/case-studies-section";
import { AboutSection } from "@/components/about/about-section";
import { ProcessSection } from "@/components/process/process-section";
import { PricingSection } from "@/components/pricing/pricing-section";
import { FaqSection } from "@/components/faq/faq-section";
import { Footer } from "@/components/footer/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { assertPricingConsistent, plans } from "@/lib/pricing";
import { graph, pricingCatalogNode } from "@/lib/seo";

export default function HomePage() {
  // Runs during `next build`: a price that does not add up fails the build.
  assertPricingConsistent();

  return (
    <>
      {/* The price list is visible on this page, so its offers are too. */}
      <JsonLd data={graph([pricingCatalogNode(plans)])} />
      <Nav />
      <main id="main">
        <Hero />
        <SectionDivider label="Co dělám" />
        <ServicesSection />
        <CaseStudiesSection />
        <AboutSection />
        <SectionDivider label="Jak pracuji" />
        <ProcessSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
