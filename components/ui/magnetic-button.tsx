"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  as?: "a" | "button";
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  as = "button",
  strength = 0.4,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let raf = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const tx = x * strength;
        const ty = y * strength;
        const rx = (-y / rect.height) * 8;
        const ry = (x / rect.width) * 8;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(1.04)`;
        inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
    };

    const onMouseLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transition =
        "transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)";
      inner.style.transition =
        "transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)";
      el.style.transform = "translate3d(0, 0, 0) scale(1)";
      inner.style.transform = "rotateX(0deg) rotateY(0deg)";
      window.setTimeout(() => {
        if (el && inner) {
          el.style.transition = "";
          inner.style.transition = "";
        }
      }, 600);
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  const sharedClass = cn(
    "inline-flex items-center justify-center gap-2 will-change-transform",
    "transition-transform duration-200 ease-out",
    className,
  );

  if (as === "a" && href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={sharedClass}
        onClick={onClick}
        style={{ perspective: "600px" }}
      >
        <span ref={innerRef} className="inline-flex items-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={sharedClass}
      onClick={onClick}
      style={{ perspective: "600px" }}
    >
      <span ref={innerRef} className="inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
