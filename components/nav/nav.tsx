"use client";

import { cn } from "@/lib/utils";
import { useScroll } from "@/components/ui/use-scroll";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Služby", href: "#sluzby" },
  { label: "Moje výsledky", href: "#moje-vysledky" },
  { label: "Proces", href: "#proces" },
  { label: "O mně", href: "#o-mne" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn("nav-pill", scrolled && "nav-pill--scrolled")}
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
          <span className="font-display text-base text-fg leading-none">
            Hamr Labs
          </span>
        </a>

        {/* CENTER: Links (desktop only) */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* RIGHT: KONTAKT (desktop) */}
        <a href="#kontakt" className="hidden md:inline-flex">
          <Button variant="primary" className="px-5 py-2.5 text-xs">
            Kontakt
          </Button>
        </a>
      </nav>
    </header>
  );
}
