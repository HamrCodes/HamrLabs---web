import { Button } from "@/components/ui/button";

export function HeroLeft() {
  return (
    <div className="hero-text-col">
      <div className="hero-text-col-accent" aria-hidden="true" />
      <div className="hero-text-col-content">
        {/* Eyebrow */}
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
          Tomáš Hamerník · Marketing Specialist
        </p>

        {/* H1 — smaller, balanced */}
        <h1 className="hero-h1">
          <span className="block">Přivedu Vám zákazníky.</span>
          <span className="block hero-h1-accent">Ne jen lajky.</span>
        </h1>

        {/* Subhead */}
        <p className="font-sans text-base md:text-lg leading-relaxed text-fg-muted max-w-[480px]">
          Meta reklamy, lead generation a AI obsah pro firmy, které chtějí
          výsledky, ne omáčku.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a href="#kontakt">
            <Button variant="primary">Chci výsledky →</Button>
          </a>
          <a href="#moje-vysledky">
            <Button variant="glass-secondary">Ukázky práce</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
