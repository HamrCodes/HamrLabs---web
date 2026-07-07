import type { Metadata } from "next";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Zásady cookies",
  description: "Jaké cookies web Hamr Labs používá a proč.",
};

const cookieGroups = [
  {
    heading: "Nezbytné cookies",
    body: "Zajišťují základní fungování webu: zapamatování Vaší volby v cookie liště a technický chod stránky. Tyto cookies nelze vypnout, protože bez nich web nefunguje. Neukládají žádné osobní údaje pro marketingové účely.",
    items: ["hamr-cookie-consent: uložení Vaší volby souhlasu (platnost 12 měsíců)"],
  },
  {
    heading: "Analytické cookies",
    body: "Pomáhají pochopit, jak návštěvníci web používají: které stránky čtou, odkud přichází a kde web opouští. Data jsou anonymizovaná a slouží výhradně ke zlepšování webu. Nasazujeme je jen s Vaším souhlasem.",
    items: ["[DOPLNIT: Vercel Analytics / Plausible po nasazení]"],
  },
  {
    heading: "Marketingové cookies",
    body: "Umožňují měřit výkon reklamních kampaní a zobrazovat relevantní reklamy na platformách Meta. Nasazujeme je jen s Vaším souhlasem: pokud zvolíte „Jen nezbytné“, nic z tohoto se nenačte ani neodešle.",
    items: [
      "Meta Pixel: měření výkonu reklamních kampaní na Facebooku a Instagramu",
      "Meta Conversions API: doplňkové server-side měření klíčových akcí (odeslání formuláře, domluvení hovoru), odolnější vůči blokování cookies",
    ],
  },
];

export default function CookiesPage() {
  return (
    <>
      <Nav />
      <main
        id="main"
        className="container-ultra pt-32 pb-24 md:pt-40 md:pb-32 max-w-3xl"
      >
        <h1 className="font-display leading-[1.15] tracking-[-0.02em] text-[clamp(36px,5vw,64px)] text-fg mb-10">
          Zásady cookies
        </h1>

        <p className="font-sans text-lg text-fg leading-relaxed mb-12">
          Cookies jsou malé textové soubory, které web ukládá do Vašeho
          prohlížeče. Tady je přehled, které používáme a proč. Svou volbu
          můžete kdykoliv změnit smazáním cookies v prohlížeči.
        </p>

        {cookieGroups.map((g) => (
          <section key={g.heading} className="mb-10">
            <h2 className="font-mono font-medium text-xl text-fg mb-3">
              {g.heading}
            </h2>
            <p className="font-sans text-base text-fg-muted leading-relaxed mb-4">
              {g.body}
            </p>
            <ul className="flex flex-col gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-sm text-fg-subtle border border-rule rounded-lg px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="font-sans text-sm text-fg-subtle leading-relaxed mt-16 border-t border-rule pt-8">
          Dotazy ke cookies a osobním údajům:{" "}
          <a
            className="text-accent underline underline-offset-4"
            href="mailto:tomas.hammernik@gmail.com"
          >
            tomas.hammernik@gmail.com
          </a>
          . Více v{" "}
          <a
            className="text-accent underline underline-offset-4"
            href="/privacy"
          >
            zásadách ochrany osobních údajů
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
