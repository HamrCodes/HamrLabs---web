"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function Stat({
  value,
  label,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1200,
  className,
  valueClassName,
  labelClassName,
}: StatProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // ease-out-expo
              const eased =
                progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              setDisplay(value * eased);
              if (progress < 1) requestAnimationFrame(animate);
              else setDisplay(value);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  const formatted = decimals > 0
    ? display.toFixed(decimals).replace(".", ",")
    : Math.round(display).toString();

  return (
    <div ref={ref} className={cn("flex flex-col gap-1", className)}>
      <span
        className={cn(
          "font-mono font-medium tabular-nums tracking-[-0.02em] text-[clamp(36px,4vw,56px)] leading-none",
          valueClassName,
        )}
      >
        {prefix}
        {formatted}
        {suffix}
      </span>
      <span
        className={cn(
          "font-mono text-xs uppercase tracking-[0.15em] text-fg-muted",
          labelClassName,
        )}
      >
        {label}
      </span>
    </div>
  );
}
