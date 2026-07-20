"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Props {
  steps: Step[];
}

// Going-up trajectory: each step higher than previous (Y decreases).
// Compressed Y range (18→72 instead of 18→88) so bottom step content
// doesn't overflow into trust bar below.
const dotPositions = [
  { x: 10, y: 72 }, // Step 1 — bottom-left
  { x: 34, y: 56 }, // Step 2
  { x: 60, y: 36 }, // Step 3
  { x: 88, y: 18 }, // Step 4 — top-right
];

// Smooth cubic bezier curve through all 4 dots, gentle wave going up-right.
const pathData =
  "M 10,72 C 18,68 26,60 34,56 C 42,52 52,42 60,36 C 70,28 80,24 88,18";

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

  const drawClass = isVisible ? " process-journey-path-draw--visible" : "";
  const glowClass = isVisible ? " process-journey-path-glow--visible" : "";
  const stepClass = isVisible ? " process-journey-step--visible" : "";

  return (
    <div ref={containerRef} className="process-journey">
      {/* Watermark numbers in background */}
      {steps.map((_, idx) => {
        const pos = dotPositions[idx];
        return (
          <span
            key={`num-${idx}`}
            className="process-journey-number"
            style={{
              left: `${pos.x + 4}%`,
              top: `${pos.y - 4}%`,
            }}
            aria-hidden="true"
          >
            {idx + 1}
          </span>
        );
      })}

      {/* SVG curve */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="process-journey-svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Glow halo (wider, semi-transparent) */}
        <path
          d={pathData}
          stroke="rgba(0, 240, 255, 0.3)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`process-journey-path-glow${glowClass}`}
        />

        {/* Main path — solid cyan, pathLength=1 for safe drawing animation */}
        <path
          d={pathData}
          stroke="rgba(0, 240, 255, 0.9)"
          strokeWidth="0.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          className={`process-journey-path-draw${drawClass}`}
        />
      </svg>

      {/* Step blocks (dot + content positioned at each dot) */}
      {steps.map((step, idx) => {
        const Icon = step.icon;
        const pos = dotPositions[idx];
        return (
          <div
            key={step.title}
            className={`process-journey-step${stepClass}`}
            style={
              {
                left: `${pos.x}%`,
                top: `${pos.y}%`,
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
              <p className="process-journey-description">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
