"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { cn, keepShortWords } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Props {
  steps: Step[];
}

// Layout is driven by the width of the journey itself (container query on
// .process-journey-cq), not by the viewport:
//   < 600px  stacked glass cards
//   600-759  2x2 glass cards
//   >= 760   four columns, each step one column higher than the previous,
//            with the curve drawn behind them as decoration.
// Every step owns its column, so step texts can never overlap, whatever
// their length or the viewport width.
//
// The curve SVG spans from the centre of the highest dot (step 4, top edge)
// to the centre of the lowest one (step 1, bottom edge). Columns are equal
// quarters, so the dot centres are always at x = 12.5 / 37.5 / 62.5 / 87.5 %
// and y = 100 / 66.67 / 33.33 / 0 %. Control points keep the original gentle
// wave: flatter at each dot, steeper between them.
const pathData =
  "M 12.5,100 C 20.83,91.67 29.17,75 37.5,66.67 C 45.83,58.33 54.17,41.67 62.5,33.33 C 70.83,25 79.17,8.33 87.5,0";

export function ProcessJourney({ steps }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="process-journey-cq">
      <div ref={containerRef} className="process-journey">
        {/* Watermark numbers in background */}
        {steps.map((_, idx) => (
          <span
            key={`num-${idx}`}
            className="process-journey-number"
            style={{ "--i": idx } as CSSProperties}
            aria-hidden="true"
          >
            {idx + 1}
          </span>
        ))}

        {/* Curve: decoration only, revealed left to right by a clip */}
        <div
          className={cn(
            "process-journey-track",
            isVisible && "process-journey-track--visible",
          )}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="process-journey-svg"
            focusable="false"
          >
            {/* Glow halo (wider, semi-transparent) */}
            <path
              d={pathData}
              stroke="rgba(0, 240, 255, 0.3)"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              className={cn(
                "process-journey-path-glow",
                isVisible && "process-journey-path-glow--visible",
              )}
            />

            {/* Main path, solid cyan */}
            <path
              d={pathData}
              stroke="rgba(0, 240, 255, 0.9)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Steps: one grid cell each (dot on the curve, text below) */}
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className={cn(
                "process-journey-step",
                isVisible && "process-journey-step--visible",
              )}
              style={
                {
                  "--i": idx,
                  "--delay": `${1200 + idx * 200}ms`,
                } as CSSProperties
              }
            >
              <div className="process-journey-dot">
                <div className="process-journey-dot-glow" aria-hidden="true" />
                <div className="process-journey-dot-sphere">
                  <Icon
                    className="process-journey-dot-icon"
                    strokeWidth={1.5}
                    aria-hidden="true"
                    focusable={false}
                  />
                </div>
              </div>

              <div className="process-journey-content">
                <h3 className="process-journey-title">{step.title}</h3>
                <p className="process-journey-description">
                  {keepShortWords(step.description)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
