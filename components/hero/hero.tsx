import { SocialSidebar } from "./social-sidebar";
import { LiveResultsCard } from "./live-results-card";
import { HeroLeft } from "./hero-left";

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background layers (order: aurora-top → spotlight → grid → giant text) */}
      <div className="hero-bg-layers">
        <div className="hero-aurora-top" />
        <div className="hero-spotlight" />
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div
          aria-hidden
          className="bg-text-giant absolute bottom-[-6vw] right-[-2vw] select-none"
        >
          HAMR
        </div>
      </div>

      {/* Social sidebar (absolute, spans hero height) */}
      <SocialSidebar />

      {/* Hero content */}
      <div className="container-ultra hero-content">
        <div className="hero-grid">
          <HeroLeft />
          <LiveResultsCard />
        </div>
      </div>
    </section>
  );
}
