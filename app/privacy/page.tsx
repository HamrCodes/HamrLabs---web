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
          zaslané přes formuláře na tomto webu (jméno, e-mail, telefon,
          případně firma a text zprávy) zpracovává za účelem domluvení
          konzultace, zodpovězení dotazu a případného navázání obchodního
          vztahu.
        </p>
        <p className="font-sans text-base text-fg-muted leading-relaxed mb-6">
          Údaje z formulářů ukládám do svého systému pro správu obchodních
          kontaktů, se kterým pracuje můj tým. Když vyplníte kontakt před
          výběrem termínu a termín nakonec nevyberete, můžeme Vám zavolat
          a termín nabídnout. Rezervaci termínu zajišťuje služba Calendly,
          zprávy z formuláře dostávám také e-mailem. Údaje uchovávám po dobu
          nutnou k vyřízení poptávky a obchodní komunikace.
        </p>
        <p className="font-sans text-base text-fg-muted leading-relaxed mb-6">
          Pokud jste přijali marketingové cookies, předávám společnosti Meta
          zahashovaný e-mail, telefon a jméno (nevratně převedené na kód), aby
          bylo možné měřit výsledky reklam. Jinak údaje nesdílím s dalšími
          třetími stranami kromě služeb, které zajišťují provoz (hosting,
          e-mail, kalendář). Pokud chcete data smazat, napište na{" "}
          <a
            className="text-accent underline underline-offset-4"
            href="mailto:tomas.hammernik@gmail.com"
          >
            tomas.hammernik@gmail.com
          </a>
          .
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-fg-subtle mt-12">
          Poslední aktualizace: 5. října 2026
        </p>
      </main>
      <Footer />
    </>
  );
}
