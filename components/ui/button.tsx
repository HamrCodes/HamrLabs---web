import { cn } from "@/lib/utils";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "glass-secondary" | "tertiary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-mono font-semibold text-sm uppercase tracking-wider transition-all duration-200 ease-out";

// Note: primary uses cyan accent fill. This is an intentional override of the
// CLAUDE.md 5.2 "no cyan fill on buttons" rule per user direction (2026-05-31).
// All primary CTAs across the site share this look for consistency.
const styles: Record<Variant, string> = {
  primary:
    "btn-primary-cyan rounded-full px-7 py-3.5",
  secondary:
    "bg-transparent text-fg border border-rule-strong rounded-full px-7 py-3.5 hover:border-accent hover:text-accent",
  "glass-secondary":
    "liquid-glass text-fg rounded-full px-7 py-3.5 hover:text-accent",
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
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

/**
 * A link that looks like a button. Use it instead of wrapping <Button> in
 * <a>: a button inside a link is two Tab stops and is announced twice.
 */
export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: LinkProps) {
  return (
    <a className={cn(base, styles[variant], className)} {...props}>
      {children}
    </a>
  );
}
