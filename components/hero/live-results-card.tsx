import { existsSync } from "fs";
import { join } from "path";
import { Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HeroVideo } from "./hero-video";

// Resolved at build time: until hero.mp4 is dropped into /public we render the
// placeholder instead of an empty <video> that 404s.
const publicFile = (name: string) =>
  existsSync(join(process.cwd(), "public", name));

export function LiveResultsCard() {
  const hasVideo = publicFile("hero.mp4");
  const hasPoster = publicFile("hero-poster.jpg");
  return (
    <div
      role="region"
      aria-label="Čísla z posledních kampaní"
      className="liquid-glass live-results-card rounded-[24px] overflow-hidden flex flex-col"
    >
      {/* Top bar */}
      <div className="relative z-[3] flex items-center justify-between px-6 py-3 border-b border-white/10">
        <Badge variant="live">Čísla z posledních kampaní · Q1 / 26</Badge>
        <Activity
          className="w-4 h-4 text-fg-muted"
          strokeWidth={1.5}
          aria-hidden
        />
      </div>

      {/* Showreel — fixed 16:9 so the layout never shifts when the file loads */}
      <div className="relative z-[3] hero-video-frame">
        <HeroVideo hasVideo={hasVideo} hasPoster={hasPoster} />
      </div>

      {/* Metrics row */}
      <div className="relative z-[3] grid grid-cols-3 px-6 py-4 border-t border-white/10">
        <Metric value="−64%" label="cena za poptávku" />
        <Metric value="3,2×" label="návratnost reklamy" />
        <Metric value="+184%" label="více poptávek" />
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 px-1">
      <span className="font-mono font-medium text-2xl text-accent tabular-nums leading-none">
        {value}
      </span>
      {/* Plain-language labels wrap to 2 lines — keep them centered and tight */}
      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-fg-muted text-center leading-tight text-balance">
        {label}
      </span>
    </div>
  );
}
