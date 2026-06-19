import type { Metadata } from "next";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Obchodní podmínky",
  description: "Obchodní podmínky spolupráce s Hamr Labs.",
};

const sections = [
  {
    heading: "1. Základní ustanovení",
    body: "Tyto obchodní podmínky upravují vztah mezi poskytovatelem služeb, společností Hamr Labs s.r.o., IČO 29675855, se sídlem Kaprova 42/14, Staré Město, 110 00 Praha 1, zapsanou v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka 450163, zastoupenou jednatelem Tomášem Hamerníkem, dále jen „poskytovatel“, a objednatelem služeb, dále jen „klient“.",
  },
  {
    heading: "2. Předmět služeb",
    body: "Poskytovatel nabízí služby v oblasti výkonnostního marketingu: správu reklamních kampaní na platformách Meta (Facebook, Instagram), lead generation, tvorbu reklamního obsahu s podporou AI a audit reklamních účtů. Konkrétní rozsah služeb je vždy specifikován v individuální nabídce nebo smlouvě.",
  },
  {
    heading: "3. Cena a platební podmínky",
    body: "Cena služeb se sjednává individuálně podle rozsahu spolupráce a výše spravovaného mediálního rozpočtu. Faktury jsou splatné do 14 dní od vystavení. Mediální rozpočet (platby reklamním platformám) hradí klient přímo, není součástí odměny poskytovatele.",
  },
  {
    heading: "4. Práva a povinnosti",
    body: "Poskytovatel se zavazuje vykonávat služby s odbornou péčí a pravidelně reportovat výsledky. Klient se zavazuje poskytnout přístupy a podklady nezbytné pro výkon služeb (přístup do Business Manageru, brand podklady, produktové informace). Poskytovatel negarantuje konkrétní obchodní výsledky, protože výkon kampaní ovlivňují faktory mimo jeho kontrolu.",
  },
  {
    heading: "5. Trvání a ukončení spolupráce",
    body: "Spolupráce se sjednává na dobu neurčitou, pokud není dohodnuto jinak. Bez výpovědní lhůty: kterákoliv strana může spolupráci ukončit písemně ke konci kalendářního měsíce. Práva a povinnosti vzniklé do dne ukončení tím nejsou dotčeny.",
  },
  {
    heading: "6. Důvěrnost",
    body: "Obě strany se zavazují zachovávat mlčenlivost o důvěrných informacích druhé strany, zejména o obchodních datech, výsledcích kampaní a interních procesech. Poskytovatel může anonymizované výsledky použít jako referenci, pokud klient nevysloví nesouhlas.",
  },
  {
    heading: "7. Závěrečná ustanovení",
    body: "Právní vztahy neupravené těmito podmínkami se řídí právním řádem České republiky, zejména občanským zákoníkem. Tyto podmínky nabývají účinnosti dnem 12. června 2026.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main
        id="main"
        className="container-ultra pt-32 pb-24 md:pt-40 md:pb-32 max-w-3xl"
      >
        <h1 className="font-display leading-[1.15] tracking-[-0.02em] text-[clamp(36px,5vw,64px)] text-fg mb-4">
          Obchodní podmínky
        </h1>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle mb-12">
          Platné od 12. června 2026
        </p>

        {sections.map((s) => (
          <section key={s.heading} className="mb-10">
            <h2 className="font-mono font-medium text-xl text-fg mb-3">
              {s.heading}
            </h2>
            <p className="font-sans text-base text-fg-muted leading-relaxed">
              {s.body}
            </p>
          </section>
        ))}

        <p className="font-sans text-sm text-fg-subtle leading-relaxed mt-16 border-t border-rule pt-8">
          Máte dotaz k podmínkám? Napište na{" "}
          <a
            className="text-accent underline underline-offset-4"
            href="mailto:tomas.hammernik@gmail.com"
          >
            tomas.hammernik@gmail.com
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
