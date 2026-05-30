"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/ui/use-scroll";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Služby", href: "#sluzby" },
  { label: "Moje výsledky", href: "#moje-vysledky" },
  { label: "O mně", href: "#o-mne" },
  { label: "Proces", href: "#proces" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const scrolled = useScroll(10);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");

  // Lock body scroll when drawer open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Live-track active section via IntersectionObserver
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // Track visibility ratio per section, pick the most visible
    const visibilityMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        }
        let bestId = "";
        let bestRatio = 0;
        for (const [id, ratio] of visibilityMap) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        setActiveHref(bestRatio > 0 ? `#${bestId}` : "");
      },
      {
        // Multiple thresholds so we get fine-grained ratio updates as user scrolls
        threshold: [0, 0.15, 0.3, 0.5, 0.7, 0.9, 1],
        rootMargin: "-72px 0px -40% 0px",
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "nav-pill",
          scrolled && "nav-pill--scrolled",
          open && "nav-pill--open",
        )}
        aria-label="Hlavní navigace"
      >
        <nav
          className={cn(
            "nav-pill__inner",
            scrolled && "nav-pill__inner--scrolled",
          )}
        >
          {/* LEFT: Logo */}
          <a href="#hero" className="nav-logo" aria-label="Hamr Labs domů">
            <img
              src="/logo.png"
              alt="Hamr Labs"
              className="nav-logo-img"
              width={40}
              height={40}
            />
            <span className="font-display text-base text-accent leading-none">
              Hamr Labs
            </span>
          </a>

          {/* CENTER: Links (desktop only) */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link",
                  activeHref === link.href && "nav-link--active",
                )}
                aria-current={activeHref === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* RIGHT: KONTAKT (desktop) */}
          <a href="#kontakt" className="hidden md:inline-flex">
            <Button variant="primary" className="px-5 py-2.5 text-xs">
              Připraven začít?
            </Button>
          </a>

          {/* RIGHT: Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="nav-hamburger md:hidden"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            {open ? (
              <X className="w-5 h-5" strokeWidth={1.5} aria-hidden />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.5} aria-hidden />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={cn(
          "nav-drawer md:hidden",
          open ? "nav-drawer--open" : "nav-drawer--closed",
        )}
        aria-hidden={!open}
      >
        <div className="nav-drawer__inner">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "nav-drawer-link",
                  activeHref === link.href && "nav-drawer-link--active",
                )}
                aria-current={activeHref === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="nav-drawer-cta"
          >
            <Button variant="primary" className="w-full py-4 text-sm">
              Připraven začít?
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
