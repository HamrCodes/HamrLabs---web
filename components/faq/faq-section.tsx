"use client";

import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { FaqFlipCard } from "./faq-flip-card";
import { FaqScreenshotCard } from "./faq-screenshot-card";
import { faqItems } from "./faq-data";
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";

export function FaqSection() {
  // Trigger early: reveal as soon as the section approaches the viewport
  const ref = useScrollReveal<HTMLElement>({
    threshold: 0,
    rootMargin: "0px 0px 15% 0px",
  });

  return (
    <section
      id="faq"
      ref={ref}
      aria-labelledby="faq-heading"
      className="faq-section section-pad"
    >
      <div className="container-ultra">
        <div className="faq-header">
          <SectionEyebrow
            className="reveal"
            style={{ transitionDelay: "0ms" }}
          >
            FAQ
          </SectionEyebrow>
          <h2
            id="faq-heading"
            className="faq-h2 reveal"
            style={{ transitionDelay: "80ms" }}
          >
            Časté dotazy
          </h2>
          <p
            className="faq-lead reveal"
            style={{ transitionDelay: "160ms" }}
          >
            Čtyři otázky, na které se ptá většina klientů ještě před prvním
            callem. Vedle nich výsledky z Business Manageru.
          </p>
        </div>

        <div className="faq-grid">
          {faqItems.map((item, idx) =>
            item.type === "faq" ? (
              <FaqFlipCard
                key={`faq-${idx}`}
                icon={item.icon}
                question={item.question}
                answer={item.answer}
                index={idx}
              />
            ) : (
              <FaqScreenshotCard
                key={`shot-${idx}`}
                metricValue={item.metricValue}
                metricLabel={item.metricLabel}
                caption={item.caption}
                image={item.image}
                index={idx}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
