import { existsSync } from "fs";
import { join } from "path";
import { HeroShowreel } from "./hero-showreel";

// Resolved at build time: until hero.mp4 is dropped into /public we render the
// placeholder instead of an empty <video> that 404s.
const publicFile = (name: string) =>
  existsSync(join(process.cwd(), "public", name));

export function LiveResultsCard() {
  return (
    <div
      role="region"
      aria-label="Ukázkové video"
      className="liquid-glass live-results-card rounded-[24px] overflow-hidden flex flex-col"
    >
      <HeroShowreel
        hasVideo={publicFile("hero.mp4")}
        hasPoster={publicFile("hero-poster.jpg")}
      />
    </div>
  );
}
