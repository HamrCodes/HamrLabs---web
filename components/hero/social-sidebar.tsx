import { Instagram, Facebook, ChevronDown } from "lucide-react";

export function SocialSidebar() {
  return (
    <aside className="hero-social-sidebar" aria-label="Social media links">
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://instagram.com/hamrlabs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-icon-link"
        >
          <Instagram className="w-5 h-5" strokeWidth={1.5} />
        </a>
        <a
          href="https://facebook.com/HamrLabs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="social-icon-link"
        >
          <Facebook className="w-5 h-5" strokeWidth={1.5} />
        </a>
      </div>

      <div className="flex flex-col items-center gap-2 mt-auto">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-subtle"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Scroll
        </span>
        <ChevronDown
          className="w-4 h-4 text-fg-subtle animate-scroll-bounce"
          strokeWidth={1.5}
          aria-hidden
        />
      </div>
    </aside>
  );
}
