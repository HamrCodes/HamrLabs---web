"use client";

import { useState } from "react";
import { Instagram, Facebook, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Badge } from "@/components/ui/badge";
import { ContactFunnel } from "@/components/contact/contact-funnel";

type Branch = "call" | "message";

const navLinks = [
  { href: "#sluzby", label: "Služby" },
  { href: "#moje-vysledky", label: "Moje výsledky" },
  { href: "#proces", label: "Proces" },
  { href: "#faq", label: "FAQ" },
];

const socialLinks = [
  {
    href: "https://instagram.com/hamrlabs",
    label: "Instagram @hamrlabs",
    Icon: Instagram,
  },
  {
    href: "https://facebook.com/HamrLabs",
    label: "Facebook /HamrLabs",
    Icon: Facebook,
  },
  {
    href: "mailto:tomas.hammernik@gmail.com",
    label: "tomas.hammernik@gmail.com",
    Icon: Mail,
  },
];

export function Footer() {
  const [funnelOpen, setFunnelOpen] = useState(false);
  const [branch, setBranch] = useState<Branch>("call");

  const openFunnel = (b: Branch) => {
    setBranch(b);
    setFunnelOpen(true);
  };

  return (
    <>
      <footer
        id="kontakt"
        className="relative w-full overflow-hidden border-t border-rule"
      >
        {/* CTA section */}
        <div className="relative">
          <div className="absolute inset-0 aurora-bg opacity-60 pointer-events-none" />
          <div className="container-ultra relative py-24 md:py-32 flex flex-col items-center text-center gap-10">
            <h2 className="font-display leading-[1.15] tracking-[-0.02em] text-[clamp(40px,6vw,72px)] max-w-3xl">
              Připraven začít?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                as="button"
                onClick={() => openFunnel("call")}
                className="btn-primary-cyan rounded-full px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wider"
              >
                Domluvit hovor →
              </MagneticButton>
              <MagneticButton
                as="button"
                onClick={() => openFunnel("message")}
                className="glass rounded-full px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wider text-fg"
              >
                Napsat zprávu
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Brand block */}
        <div className="container-ultra grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-t border-rule">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="inline-flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Hamr Labs"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="font-display text-xl text-accent leading-none">
                Hamr Labs
              </span>
            </div>
            <p className="font-sans text-sm text-fg-muted max-w-xs leading-relaxed">
              AI marketing. Meta reklamy, lead generation a AI obsah pro firmy,
              které měří všechno.
            </p>
            {/* Company info — TODO: replace placeholders with real data */}
            <div className="flex flex-col gap-1 font-mono text-xs text-fg-subtle">
              <span>Tomáš Hamerník · Hamr Labs</span>
              <span>IČO: [DOPLNIT IČO]</span>
              <span>Sídlo: [DOPLNIT ADRESU]</span>
            </div>
            {/* TODO: replace with official Meta Business Partner badge */}
            <Badge variant="pill" className="w-fit bg-bg-elevated">
              Meta Business Partner
            </Badge>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h5 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
              Navigace
            </h5>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-mono text-sm text-fg-muted hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => openFunnel("call")}
                  className="font-mono text-sm text-fg-muted hover:text-accent transition-colors text-left bg-transparent border-0 p-0 cursor-pointer"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h5 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
              Social
            </h5>
            <ul className="flex flex-col gap-2">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-3 font-mono text-sm text-fg-muted hover:text-accent transition-colors"
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://matyastpn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-mono text-xs uppercase tracking-widest text-fg-subtle hover:text-accent transition-colors"
            >
              Made by matyastpn
            </a>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="border-t border-rule">
          <div className="container-ultra py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-xs uppercase tracking-widest text-fg-subtle">
            <span>© 2026 Hamr Labs · Česká republika</span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href="/privacy"
                className="hover:text-accent transition-colors"
              >
                Ochrana údajů
              </a>
              <a
                href="/obchodni-podminky"
                className="hover:text-accent transition-colors"
              >
                Obchodní podmínky
              </a>
              <a
                href="/cookies"
                className="hover:text-accent transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ContactFunnel
        isOpen={funnelOpen}
        initialBranch={branch}
        onClose={() => setFunnelOpen(false)}
      />
    </>
  );
}
