"use client";

import {
  Handshake,
  ScanSearch,
  Settings,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { ProcessJourney } from "./process-journey";
import { ProcessTrustBar } from "./process-trust-bar";

const steps = [
  {
    week: "Týden 1",
    title: "Onboarding",
    description:
      "Briefing, přístupy do Business Manageru, setup tracking stacku a sdílených dokumentů.",
    icon: Handshake,
  },
  {
    week: "Týden 2",
    title: "Průzkum",
    description:
      "Analýza posledních 12 měsíců účtu, konkurence a unit economics. Strategická mapa kampaní.",
    icon: ScanSearch,
  },
  {
    week: "Týden 3",
    title: "Setup",
    description:
      "Kreativy, kampaně, Pixel a Conversions API, custom reporting dashboard. Vše napojené.",
    icon: Settings,
  },
  {
    week: "Týden 4+",
    title: "Výsledky",
    description:
      "Weekly call, kontinuální optimalizace, škálování vítězných kreativ. Slack support v hodinách.",
    icon: TrendingUp,
  },
];

export function ProcessSection() {
  return (
    <section
      id="proces"
      aria-labelledby="proces-heading"
      className="process-section section-pad-compact"
    >
      <div className="process-bg-layers" aria-hidden="true">
        <div className="process-spotlight-top" />
        <div className="process-spotlight-bottom" />
        <div className="process-grid-bg" />
      </div>

      <div className="container-ultra process-content">
        <div className="process-grid">
          <div className="process-intro">
            <SectionEyebrow>Proces</SectionEyebrow>
            <h2 id="proces-heading" className="process-h2">
              Jak pracuji
            </h2>
            <p className="process-lead">
              Čtyři týdny od podpisu k prvním optimalizovaným kampaním. Žádný
              kouř, žádné PowerPointy navíc.
            </p>
            <a href="#kontakt" className="process-cta">
              <span>Domluvit úvodní hovor</span>
              <ArrowRight
                className="w-4 h-4"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>

          <ProcessJourney steps={steps} />
        </div>
      </div>

      {/* Full-bleed trust bar — spans the whole viewport width */}
      <ProcessTrustBar />
    </section>
  );
}
