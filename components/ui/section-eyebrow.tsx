import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface Props {
  number?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function SectionEyebrow({ number, children, className, style }: Props) {
  return (
    <div
      style={style}
      className={cn(
        "inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted",
        className,
      )}
    >
      {number && (
        <>
          <span className="text-fg-subtle">{number}</span>
          <span aria-hidden className="w-6 h-px bg-rule" />
        </>
      )}
      <span>{children}</span>
    </div>
  );
}
