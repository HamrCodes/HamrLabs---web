import { Nav } from "@/components/nav/nav";
import { Hero } from "@/components/hero/hero";
import { SectionDivider } from "@/components/dividers/section-divider";
import { ServicesSection } from "@/components/services/services-section";
import { CaseStudiesSection } from "@/components/case-studies/case-studies-section";
import { AboutSection } from "@/components/about/about-section";
import { ProcessSection } from "@/components/process/process-section";
import { FaqSection } from "@/components/faq/faq-section";
import { Footer } from "@/components/footer/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <SectionDivider label="Co dělám" />
        <ServicesSection />
        <CaseStudiesSection />
        <AboutSection />
        <SectionDivider label="Jak pracuji" />
        <ProcessSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
