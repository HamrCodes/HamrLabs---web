import type { ReactNode } from "react";
import { PlayCircle } from "lucide-react";
import type { GuideVideo as GuideVideoData } from "@/lib/guides";

/** Odstavec v těle návodu. */
export function P({ children }: { children: ReactNode }) {
  return (
    <p className="font-sans text-base md:text-lg text-fg leading-relaxed mb-4 last:mb-0 max-w-prose">
      {children}
    </p>
  );
}

/** Odkaz ven (Meta), otevírá se v novém panelu. */
export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent underline underline-offset-4 hover:opacity-80"
    >
      {children}
    </a>
  );
}

/** Odkaz na jiný krok téhož návodu. */
export function StepLink({ n, children }: { n: number; children: ReactNode }) {
  return (
    <a href={`#krok-${n}`} className="text-accent underline underline-offset-4 hover:opacity-80">
      {children}
    </a>
  );
}

/** Tip nebo varování vedle kroku. */
export function Tip({ label = "Tip", children }: { label?: string; children: ReactNode }) {
  return (
    <div
      role="note"
      className="my-5 max-w-prose rounded-r-xl border-l-[3px] border-accent bg-bg-elevated px-5 py-4"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-1.5">
        {label}
      </p>
      <p className="font-sans text-[15px] text-fg-muted leading-relaxed">{children}</p>
    </div>
  );
}

/**
 * Místo pro videonávod. Dokud Tomáš video nenatočí, drží prostor 16:9,
 * aby se stránka po doplnění videa neposunula.
 */
export function GuideVideo({ video, title }: { video?: GuideVideoData; title: string }) {
  if (video) {
    return (
      <video
        src={video.src}
        poster={video.poster}
        controls
        preload="metadata"
        playsInline
        aria-label={`Videonávod: ${title}`}
        className="aspect-video w-full rounded-2xl border border-rule bg-bg-elevated"
      >
        {video.captions ? (
          <track kind="captions" src={video.captions} srcLang="cs" label="Čeština" default />
        ) : null}
      </video>
    );
  }

  return (
    // TODO: nahradit videonávodem od Tomáše (stačí vyplnit `video` v lib/guides.ts)
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-rule bg-bg-elevated p-6 text-center">
      <PlayCircle aria-hidden className="h-12 w-12 text-fg-subtle" strokeWidth={1.5} />
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
        Videonávod připravuji
      </p>
      <p className="max-w-xs font-sans text-sm text-fg-subtle">
        Do té doby Vás provede postup níže.
      </p>
    </div>
  );
}
