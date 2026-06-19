import type { Metadata } from "next";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description: "Jak Hamr Labs pracuje s osobními údaji.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main" className="container-ultra pt-32 pb-24 md:pt-40 md:pb-32 max-w-3xl">
        <h1 className="font-display leading-[1.15] tracking-[-0.02em] text-[clamp(36px,5vw,64px)] text-fg mb-10">
          Ochrana osobních údajů
        </h1>
        <p className="font-sans text-lg text-fg leading-relaxed mb-6">
          Správcem osobních údajů je společnost Hamr Labs s.r.o., IČO 29675855,
          se sídlem Kaprova 42/14, Staré Město, 110 00 Praha 1. Osobní údaje
          zaslané přes kontaktní formulář zpracovává pouze za účelem zodpovězení
          dotazu a případného navázání obchodního vztahu.
        </p>
        <p className="font-sans text-base text-fg-muted leading-relaxed mb-6">
          Údaje neukládám do CRM bez Vašeho souhlasu a nesdílím je s třetími
          stranami. Pokud chcete data smazat, napište na{" "}
          <a
            className="text-accent underline underline-offset-4"
            href="mailto:tomas.hammernik@gmail.com"
          >
            tomas.hammernik@gmail.com
          </a>
          .
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-fg-subtle mt-12">
          Poslední aktualizace: 12. června 2026
        </p>
      </main>
      <Footer />
    </>
  );
}
