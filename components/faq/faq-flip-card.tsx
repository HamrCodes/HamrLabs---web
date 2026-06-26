"use client";

import { useState, type KeyboardEvent } from "react";
import { ArrowLeftRight, RotateCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  icon: LucideIcon;
  question: string;
  answer: string;
  index: number;
}

export function FaqFlipCard({
  icon: Icon,
  question,
  answer,
  index,
}: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped((v) => !v);
  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div
      className="faq-flip-card-wrapper reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isFlipped}
        aria-label={`Otázka: ${question}. Stiskněte pro zobrazení odpovědi.`}
        onClick={handleFlip}
        onKeyDown={handleKey}
        className={cn("faq-flip-card", isFlipped && "is-flipped")}
      >
        <div className="faq-flip-card-inner">
          {/* FRONT */}
          <div className="faq-flip-card-face faq-flip-card-face--front">
            <span className="faq-flip-badge" aria-hidden="true">
              <RotateCw className="w-3.5 h-3.5" strokeWidth={2} />
            </span>
            <div className="faq-card-icon-wrapper">
              <Icon
                className="faq-card-icon"
                strokeWidth={1.5}
                aria-hidden="true"
                focusable={false}
              />
            </div>

            <h3 className="faq-card-question">{question}</h3>

            <div className="faq-card-flip-hint">
              <span>Klikněte pro odpověď</span>
              <ArrowLeftRight
                className="w-3 h-3"
                strokeWidth={1.5}
                aria-hidden="true"
                focusable={false}
              />
            </div>
          </div>

          {/* BACK */}
          <div className="faq-flip-card-face faq-flip-card-face--back">
            <span className="faq-flip-badge" aria-hidden="true">
              <RotateCw className="w-3.5 h-3.5" strokeWidth={2} />
            </span>
            <span className="faq-card-back-label">Odpověď</span>
            <p className="faq-card-answer">{answer}</p>
            <div className="faq-card-flip-hint">
              <ArrowLeftRight
                className="w-3 h-3"
                strokeWidth={1.5}
                aria-hidden="true"
                focusable={false}
              />
              <span>Zpět</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
