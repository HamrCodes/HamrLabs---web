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
    title: "Seznámení",
    description:
      "Projdeme Váš byznys, cíle a čísla. Nastavíme přístupy a měření, ať od prvního dne víme, co se děje.",
    icon: Handshake,
  },
  {
    title: "Průzkum",
    description:
      "Podívám se, co jste v reklamě dělali doposud a co dělá konkurence. Spočítám, kolik si můžete dovolit zaplatit za poptávku. Z toho vznikne plán.",
    icon: ScanSearch,
  },
  {
    title: "Příprava",
    description:
      "Vytvořím vizuály, videa a texty. Nastavím kampaně i měření výsledků. Všechno Vám ukážu ještě před spuštěním.",
    icon: Settings,
  },
  {
    title: "Výsledky",
    description:
      "Reklamy běží. Každý týden krátký hovor, průběžné ladění a víc peněz jen do toho, co skutečně nosí poptávky.",
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
            <SectionEyebrow>Jak to probíhá</SectionEyebrow>
            <h2 id="proces-heading" className="process-h2">
              Jak spolupráce vypadá
            </h2>
            <p className="process-lead">
              Čtyři týdny od domluvy k běžícím reklamám. Žádné schůzky navíc,
              žádné prezentace o ničem.
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
