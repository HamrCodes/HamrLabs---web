"use client";

import { useEffect } from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";
import { trackMetaEvent } from "@/lib/meta-track-client";
import { pricingViewParams } from "@/lib/meta-events";
import { plans } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import { PricingCard } from "./pricing-card";

interface Props {
  /**
   * "h2" on the home page (a section among others), "h1" on /cenik/ where the
   * price list is the page itself. The plan names sit one level below.
   */
  headingLevel?: "h1" | "h2";
  className?: string;
}

/**
 * Ceník: three monthly plans from lib/pricing.ts, the only place prices live.
 * Used on the home page (#cenik, between Proces and FAQ) and on /cenik/.
 *
 * Fires Meta ViewContent once per page load when the section comes into
 * view. Clicking a plan's CTA is not a lead: it only opens the consultation
 * funnel (#konzultace, handled in Footer).
 */
export function PricingSection({ headingLevel = "h2", className }: Props) {
  const ref = useScrollReveal<HTMLElement>({
    threshold: 0,
    rootMargin: "0px 0px 15% 0px",
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    let sent = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (sent || !entries.some((entry) => entry.isIntersecting)) return;
        sent = true;
        observer.disconnect();
        trackMetaEvent("ViewContent", pricingViewParams());
      },
      // The section is taller than the screen on phones, so a ratio threshold
      // could never be reached there. Instead: its top has to rise into the
      // upper two thirds of the viewport.
      { threshold: 0, rootMargin: "0px 0px -35% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  const Heading = headingLevel;
  const cardHeading = headingLevel === "h1" ? "h2" : "h3";

  return (
    <section
      id="cenik"
      ref={ref}
      aria-labelledby="cenik-heading"
      className={cn("pricing-section section-pad", className)}
    >
      <div className="container-ultra">
        <div className="pricing-header">
          <SectionEyebrow
            className="reveal"
            style={{ transitionDelay: "0ms" }}
          >
            Ceník
          </SectionEyebrow>
          <Heading
            id="cenik-heading"
            className="pricing-h2 reveal"
            style={{ transitionDelay: "80ms" }}
          >
            Kolik spolupráce stojí
          </Heading>
          <p className="pricing-lead reveal" style={{ transitionDelay: "160ms" }}>
            Platíte mi pevnou měsíční částku za práci. Reklamu platíte přímo
            Metě ze své karty, takže vidíte každou korunu.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              headingLevel={cardHeading}
              revealDelayMs={240 + i * 80}
            />
          ))}
        </div>

        <div className="pricing-notes reveal" style={{ transitionDelay: "480ms" }}>
          <p className="pricing-help">
            Nevíte, který balíček zvolit?{" "}
            <a href="#konzultace" className="pricing-link">
              Na konzultaci Vám ho doporučím
            </a>{" "}
            podle oboru a&nbsp;rozpočtu.
          </p>
          {/* Summary of the VOP (5.1 to 5.3, 6.1, 6.2); &nbsp; keeps Czech
              one-letter words and numbers off the end of a line. */}
          <p className="pricing-footnote">
            Reklamní rozpočet platíte přímo společnosti Meta ze své platební
            karty. Ceny jsou bez DPH. Spolupráce začíná na 3&nbsp;měsíce. Potom
            pokračuje na dobu neurčitou s&nbsp;výpovědní dobou 1&nbsp;měsíc.
            Podrobnosti najdete v&nbsp;
            <a href="/obchodni-podminky/" className="pricing-link">
              obchodních podmínkách
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
