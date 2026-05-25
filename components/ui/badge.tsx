import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "tag" | "live" | "pill";

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

/**
 * Inline tag: informational badge inside content (rounded-sm).
 * Live: pill with pulsing dot, status signal (rounded-full).
 * Pill: standalone status indicator without dot (rounded-full).
 */
export function Badge({ children, variant = "tag", className }: BadgeProps) {
  if (variant === "live") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rule font-mono text-xs uppercase tracking-widest text-fg-muted",
          className,
        )}
      >
        <span
          aria-hidden
          className="w-2 h-2 rounded-full bg-accent animate-pulse-dot"
        />
        {children}
      </div>
    );
  }

  if (variant === "pill") {
    return (
      <span
        className={cn(
          "inline-block px-3 py-1.5 rounded-full border border-rule font-mono text-[10px] uppercase tracking-widest text-fg-muted",
          className,
        )}
      >
        {children}
      </span>
    );
  }

  // tag (default)
  return (
    <span
      className={cn(
        "inline-block px-2.5 py-1 rounded-sm border border-rule font-mono text-[10px] uppercase tracking-widest text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
