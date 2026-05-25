"use client";

import { useEffect, useRef, type RefObject } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Triggers a "is-revealed" class on the ref'd element AND any descendants
 * that have the `.reveal` class. Use inline `transitionDelay` style on each
 * child to control stagger order.
 *
 * Respects `prefers-reduced-motion: reduce` by revealing instantly.
 *
 * Pair with CSS:
 *   .reveal { opacity: 0; transform: translateY(20px); transition: ... }
 *   .reveal.is-revealed { opacity: 1; transform: translateY(0); }
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.25,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: Options = {}): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.classList.add("is-revealed");
      el.querySelectorAll<HTMLElement>(".reveal").forEach((child) => {
        child.classList.add("is-revealed");
      });
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            if (once) observer.disconnect();
          } else if (!once) {
            el.classList.remove("is-revealed");
            el.querySelectorAll<HTMLElement>(".reveal").forEach((child) => {
              child.classList.remove("is-revealed");
            });
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
