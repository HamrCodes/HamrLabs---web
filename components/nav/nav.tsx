"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/ui/use-scroll";
import { ButtonLink } from "@/components/ui/button";

// Anchors are absolute (/#id) so they work from sub-pages (blog, legal) too.
// Six links do not fit next to the logo and CTA on a tablet, so the desktop
// menu starts at lg (1024 px); below that the hamburger drawer is used.
const DESKTOP_MIN_WIDTH = 1024;
const links = [
  { label: "Co dělám", id: "sluzby" },
  { label: "Výsledky", id: "moje-vysledky" },
  { label: "O mně", id: "o-mne" },
  { label: "Jak to probíhá", id: "proces" },
  { label: "Ceník", id: "cenik" },
  { label: "Otázky", id: "faq" },
];

export function Nav() {
  const scrolled = useScroll(10);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  // Lock body scroll when drawer open. The class lets CSS move the cookie
  // bar out of the way, it would otherwise cover the drawer's last links.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("nav-drawer-open");
    return () => {
      document.body.style.overflow = prev;
      document.documentElement.classList.remove("nav-drawer-open");
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
      if (window.innerWidth >= DESKTOP_MIN_WIDTH) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Live-track active section via IntersectionObserver (homepage only)
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
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
        setActiveId(bestRatio > 0 ? bestId : "");
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
          {/* LEFT: Logo — always returns to homepage */}
          <a href="/" className="nav-logo" aria-label="Hamr Labs domů">
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
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                className={cn(
                  "nav-link",
                  activeId === link.id && "nav-link--active",
                )}
                aria-current={activeId === link.id ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* RIGHT: KONTAKT (desktop) */}
          <ButtonLink
            href="/#konzultace"
            variant="primary"
            className="hidden lg:inline-flex px-5 py-2.5 text-xs"
          >
            Chci konzultaci
          </ButtonLink>

          {/* RIGHT: Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="nav-hamburger lg:hidden"
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

      {/* Mobile drawer. Closed it is inert: its links are invisible, so they
          must not take Tab stops (CSS adds visibility: hidden as a fallback). */}
      <div
        id="mobile-drawer"
        className={cn(
          "nav-drawer lg:hidden",
          open ? "nav-drawer--open" : "nav-drawer--closed",
        )}
        inert={!open}
      >
        <div className="nav-drawer__inner">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "nav-drawer-link",
                  activeId === link.id && "nav-drawer-link--active",
                )}
                aria-current={activeId === link.id ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-drawer-cta">
            <ButtonLink
              href="/#konzultace"
              onClick={() => setOpen(false)}
              variant="primary"
              className="w-full py-4 text-sm"
            >
              Chci konzultaci
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
