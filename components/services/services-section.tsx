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
        <h2 id="sluzby-heading" className="services-h2">
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
