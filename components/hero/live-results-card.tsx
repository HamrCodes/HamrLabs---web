import { Activity, PlayCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function LiveResultsCard() {
  return (
    <div
      role="region"
      aria-label="Čísla z posledních kampaní"
      className="liquid-glass live-results-card rounded-[24px] overflow-hidden h-full min-h-[520px] flex flex-col"
    >
      {/* Top bar */}
      <div className="relative z-[3] flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Badge variant="live">Čísla z posledních kampaní · Q1 / 26</Badge>
        <Activity
          className="w-4 h-4 text-fg-muted"
          strokeWidth={1.5}
          aria-hidden
        />
      </div>

      {/* Video placeholder — fills available space */}
      {/* TODO: replace with autoplay muted loop talking-head video */}
      <div
        aria-label="Live výsledky video preview"
        className="relative z-[3] flex-1 flex items-center justify-center bg-black/20 min-h-[280px]"
      >
        <div className="flex flex-col items-center gap-3 text-fg-subtle">
          <PlayCircle className="w-14 h-14" strokeWidth={1.5} />
          <span className="font-mono text-xs uppercase tracking-widest">
            Video
          </span>
        </div>
      </div>

      {/* Metrics row */}
      <div className="relative z-[3] grid grid-cols-3 px-6 py-5 border-t border-b border-white/10">
        <Metric value="−64%" label="cena za poptávku" />
        <Metric value="3,2×" label="návratnost reklamy" />
        <Metric value="+184%" label="více poptávek" />
      </div>

      {/* CTA bottom */}
      <a
        href="#moje-vysledky"
        className="relative z-[3] w-full px-6 py-4 font-mono font-semibold text-sm uppercase tracking-wider text-fg flex items-center justify-center gap-2 hover:bg-white/5 hover:text-accent transition-colors"
      >
        Prozkoumat výsledky <ArrowRight className="w-4 h-4" strokeWidth={2} />
      </a>
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
