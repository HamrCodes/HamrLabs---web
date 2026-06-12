"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";
import { CaseCard } from "./case-card";
import { CaseStudyModal } from "./case-study-modal";

export function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const handleKey = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isTyping =
        activeEl?.tagName === "INPUT" ||
        activeEl?.tagName === "TEXTAREA" ||
        (activeEl as HTMLElement | null)?.isContentEditable;
      if (isTyping) return;

      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };

    const sectionEl = document.getElementById("moje-vysledky");
    sectionEl?.addEventListener("keydown", handleKey);
    return () => sectionEl?.removeEventListener("keydown", handleKey);
  }, [emblaApi, scrollPrev, scrollNext]);

  return (
    <>
      <section
        id="moje-vysledky"
        aria-labelledby="moje-vysledky-heading"
        className="section-pad case-studies-section"
        tabIndex={-1}
      >
        <div className="container-ultra">
          <div className="case-studies-header">
            <div className="case-studies-header-text">
              <h2 id="moje-vysledky-heading" className="case-studies-h2">
                Moje výsledky
              </h2>
              <p className="case-studies-lead">
                Sedm projektů. Bez vybarvených grafů a fiktivních metrik,
                všechno z Business Manageru.
              </p>
            </div>

            <div
              className="case-studies-arrows"
              role="group"
              aria-label="Navigace případových studií"
            >
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Předchozí případ"
                className="carousel-arrow"
              >
                <ChevronLeft
                  className="w-5 h-5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Další případ"
                className="carousel-arrow"
              >
                <ChevronRight
                  className="w-5 h-5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          <div className="carousel-wrapper">
            <div className="carousel-viewport" ref={emblaRef}>
              <div className="carousel-container">
                {caseStudies.map((cs) => (
                  <div key={cs.slug} className="carousel-slide">
                    <CaseCard
                      caseStudy={cs}
                      onClick={() => setSelectedCase(cs)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    </>
  );
}
