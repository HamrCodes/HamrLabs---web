"use client";

import { ServiceItem } from "./service-item";
import { services } from "./services-data";
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";

export function ServicesSection() {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      id="sluzby"
      aria-labelledby="sluzby-heading"
      className="services-section"
    >
      <div className="services-spotlight-bg" aria-hidden />

      <div className="container-ultra">
        {/* The visible "Co dělám" label is the SectionDivider above this
            section (app/page.tsx). This heading exists so the section has a
            real h2 for screen readers and SEO, without showing it twice. */}
        <h2 id="sluzby-heading" className="sr-only">
          Co dělám
        </h2>
        <div ref={ref} className="services-grid">
          {services.map((service, idx) => (
            <ServiceItem key={service.title} {...service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
