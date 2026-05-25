"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/case-studies";

interface Props {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModal({ caseStudy, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const isOpen = caseStudy !== null;

  // ESC key closes
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus modal on open
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!caseStudy) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={cn(
        "case-modal-backdrop",
        isOpen && "case-modal-backdrop--open",
      )}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="case-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-modal-title"
        tabIndex={-1}
      >
        {/* Specular rim highlight (Apple signature) */}
        <div className="case-modal-rim" aria-hidden="true" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="case-modal-close"
          aria-label="Zavřít detail"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        <div className="case-modal-content">
          {/* Header */}
          <div className="case-modal-header">
            <span className="case-modal-label">CASE {caseStudy.caseNumber}</span>
            <h2 id="case-modal-title" className="case-modal-title">
              {caseStudy.client}
            </h2>
            <p className="case-modal-industry">{caseStudy.industry}</p>
          </div>

          <div className="case-modal-divider" />

          {/* Stats grid */}
          <div className="case-modal-stats">
            {caseStudy.stats.map((stat) => (
              <div key={stat.label} className="case-modal-stat">
                <span className="case-modal-stat-value">{stat.value}</span>
                <span className="case-modal-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Sections */}
          {caseStudy.isPlaceholder ? (
            <section className="case-modal-section">
              <h3 className="case-modal-section-heading">
                Detailní case study připravujeme
              </h3>
              <p className="case-modal-section-body">{caseStudy.context}</p>
            </section>
          ) : (
            <>
              <section className="case-modal-section">
                <h3 className="case-modal-section-heading">Kontext</h3>
                <p className="case-modal-section-body">{caseStudy.context}</p>
              </section>

              <section className="case-modal-section">
                <h3 className="case-modal-section-heading">Jak to fungovalo</h3>
                <p className="case-modal-section-body">
                  {caseStudy.howItWorked}
                </p>
                {caseStudy.bullets && caseStudy.bullets.length > 0 && (
                  <ul className="case-modal-bullets">
                    {caseStudy.bullets.map((bullet) => (
                      <li key={bullet} className="case-modal-bullet">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <section className="case-modal-section">
                <h3 className="case-modal-section-heading">Co to dokazuje</h3>
                <p className="case-modal-section-body">{caseStudy.proof}</p>
              </section>
            </>
          )}

          <div className="case-modal-divider" />

          {/* CTA */}
          <a href="#kontakt" onClick={onClose} className="case-modal-cta">
            Mám podobný case →
          </a>
        </div>
      </div>
    </div>
  );
}
