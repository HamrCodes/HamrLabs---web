"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Instagram, Facebook, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

// The funnel (with the phone metadata of libphonenumber) is not needed until
// someone opens it, so it stays out of the page's initial JS. It is fetched
// when the browser is idle, or on the first open at the latest; until then
// the dark backdrop shows that the click did something.
const loadFunnel = () => import("@/components/contact/contact-funnel");
const ContactFunnel = dynamic(() => loadFunnel().then((m) => m.ContactFunnel), {
  ssr: false,
  loading: () => <div className="funnel-backdrop" aria-hidden="true" />,
});

type Branch = "call" | "message";

// Blog is intentionally NOT linked here — it lives only at /blog (direct URL
// + sitemap for search engines), hidden from the site's visible navigation.
// Návody pro klienty are linked only here, like on agency sites: clients get
// the link from Tomáš, the top nav stays for prospects.
const navLinks = [
  { href: "/#sluzby", label: "Co dělám" },
  { href: "/#moje-vysledky", label: "Výsledky" },
  { href: "/#proces", label: "Jak to probíhá" },
  { href: "/#cenik", label: "Ceník" },
  { href: "/#faq", label: "Otázky" },
  { href: "/navody/", label: "Návody pro klienty" },
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
  // Mounted on the first open only, that is what loads its chunk.
  const [funnelMounted, setFunnelMounted] = useState(false);
  const [branch, setBranch] = useState<Branch>("call");

  const openFunnel = (b: Branch) => {
    setBranch(b);
    setFunnelMounted(true);
    setFunnelOpen(true);
  };

  // Warm the funnel's chunk once the page is idle, so the first click on
  // "Chci konzultaci" does not wait for the network. Skipped with Save-Data.
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    if (connection?.saveData) return;
    const warm = () => {
      loadFunnel().catch(() => {});
    };
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(warm, { timeout: 6000 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = window.setTimeout(warm, 3000);
    return () => window.clearTimeout(timer);
  }, []);

  // Every "Chci konzultaci" on the site links to #konzultace (also from the
  // blog and case studies, via /#konzultace). Opening the form here keeps
  // them plain links that work without extra wiring. The hash is cleared
  // right away so the same link opens the form again next time.
  useEffect(() => {
    const check = () => {
      if (window.location.hash !== "#konzultace") return;
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      setBranch("call");
      setFunnelMounted(true);
      setFunnelOpen(true);
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  return (
    <>
      <footer
        id="kontakt"
        className="relative w-full overflow-hidden border-t border-rule"
      >
        {/* CTA section */}
        <div className="relative">
          <div className="absolute inset-0 aurora-bg opacity-60 pointer-events-none" />
          <div className="container-ultra relative py-24 md:py-32 flex flex-col items-center text-center gap-8">
            <h2 className="font-display leading-[1.15] tracking-[-0.02em] text-[clamp(36px,6vw,72px)] max-w-4xl">
              Jste připraveni začít?
            </h2>
            <p className="font-sans text-base md:text-lg text-fg-muted leading-relaxed max-w-xl">
              Domluvme si krátký hovor. Projdu s Vámi Váš obor, řeknu Vám, co
              můžete reálně čekat, a Vy se rozhodnete. Nic Vás to nestojí a k
              ničemu se nezavazujete.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                as="button"
                onClick={() => openFunnel("call")}
                className="btn-primary-cyan rounded-full px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wider"
              >
                Chci konzultaci
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
              Reklama na Facebooku a Instagramu, která nosí poptávky. Pro firmy,
              které chtějí vidět čísla, ne sliby.
            </p>
            {/* Company info */}
            <div className="flex flex-col gap-1 font-mono text-xs text-fg-subtle">
              <span>Hamr Labs s.r.o.</span>
              <span>IČO: 29675855</span>
              <span>Kaprova 42/14, Staré Město, 110 00 Praha 1</span>
            </div>
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
          </div>
        </div>

        {/* Bottom rule */}
        <div className="border-t border-rule">
          <div className="container-ultra py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-xs uppercase tracking-widest text-fg-subtle">
            <span>© 2026 Hamr Labs · Česká republika</span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href="/privacy/"
                className="hover:text-accent transition-colors"
              >
                Ochrana údajů
              </a>
              <a
                href="/obchodni-podminky/"
                className="hover:text-accent transition-colors"
              >
                Obchodní podmínky
              </a>
              <a
                href="/cookies/"
                className="hover:text-accent transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      {funnelMounted && (
        <ContactFunnel
          isOpen={funnelOpen}
          initialBranch={branch}
          onClose={() => setFunnelOpen(false)}
        />
      )}
    </>
  );
}
