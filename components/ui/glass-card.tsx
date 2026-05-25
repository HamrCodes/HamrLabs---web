import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function GlassCard({ className, children, ...props }: Props) {
  return (
    <div
      className={cn("glass rounded-2xl overflow-hidden", className)}
      {...props}
    >
      {children}
    </div>
  );
}
