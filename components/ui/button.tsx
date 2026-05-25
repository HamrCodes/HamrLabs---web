import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "glass-secondary" | "tertiary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-fg text-bg border border-fg rounded-full px-7 py-3.5 hover:scale-[1.02] hover:shadow-[0_0_40px_var(--accent-glow)]",
  secondary:
    "bg-transparent text-fg border border-rule-strong rounded-full px-7 py-3.5 hover:border-accent",
  "glass-secondary":
    "liquid-glass text-fg rounded-full px-7 py-3.5",
  tertiary:
    "bg-transparent text-fg underline underline-offset-4 hover:text-accent border-none rounded-none px-0 py-0",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-mono font-semibold text-sm uppercase tracking-wider transition-all duration-200 ease-out",
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
