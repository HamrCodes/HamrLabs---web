import { Button } from "@/components/ui/button";

export function HeroLeft() {
  return (
    <div className="hero-text-col">
      <div className="hero-text-col-accent" aria-hidden="true" />
      <div className="hero-text-col-content">
        {/* Eyebrow */}
        <p className="hero-eyebrow font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
          Tomáš Hamerník · Reklama na sociálních sítích
        </p>

        {/* H1 — smaller, balanced */}
        {/* Line break is deliberate: "na Facebooku." keeps its own line so the
            brand name lands on the second row, not orphaned mid-sentence. */}
        {/* Desktop breaks after "jsou"; on phones the two halves flow back
            into a single line (see .hero-h1-a/.hero-h1-b in globals.css). */}
        <h1 className="hero-h1">
          <span className="block hero-h1-a">Vaši zákazníci jsou</span>{" "}
          <span className="block hero-h1-b">na Facebooku.</span>
          <span className="block hero-h1-accent">Přivedu je k Vám.</span>
        </h1>

        {/* Subhead */}
        <p className="hero-subhead font-sans text-base md:text-lg leading-relaxed text-fg-muted max-w-[480px]">
          Reklama na Facebooku a Instagramu pro stavební firmy, řemeslníky,
          výrobní podniky a nábor. Vy děláte svou práci. Poptávky chodí samy.
        </p>

        {/* CTAs */}
        <div className="hero-cta-row flex flex-wrap items-center gap-4">
          <a href="#kontakt">
            <Button variant="primary">Chci konzultaci</Button>
          </a>
          <a href="#moje-vysledky">
            <Button variant="glass-secondary">Podívat se na výsledky</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
