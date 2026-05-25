"use client";

import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/lib/case-studies";

interface Props {
  caseStudy: CaseStudy;
  onClick: () => void;
}

export function CaseCard({ caseStudy, onClick }: Props) {
  return (
    <button type="button" onClick={onClick} className="case-card h-full">
      {/* Specular rim highlight */}
      <span className="case-card-rim" aria-hidden="true" />

      {/* Screenshot placeholder */}
      {/* TODO: replace with case-specific Meta Ads / dashboard screenshot */}
      <div className="case-card-screenshot">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
          Meta Ads screenshot
        </span>
      </div>

      <div className="case-card-content">
        <Badge>{caseStudy.tag}</Badge>
        <h3 className="font-mono font-medium text-2xl tracking-[-0.02em] text-fg leading-tight">
          {caseStudy.client}
        </h3>
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-fg-muted">
          {caseStudy.industry}
        </span>
        <p className="font-sans text-[15px] text-fg leading-relaxed flex-1">
          {caseStudy.body}
        </p>
        <div className="case-card-metric-row">
          <div className="flex flex-col gap-1">
            <span className="case-card-metric-value">
              {caseStudy.metricValue}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-muted">
              {caseStudy.metricLabel}
            </span>
          </div>
          <span className="case-card-detail-arrow">Detail →</span>
        </div>
      </div>
    </button>
  );
}
