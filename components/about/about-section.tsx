"use client";

import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { AboutStatsGrid } from "./about-stats-grid";
import { PhotoCollage } from "./photo-collage";
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";

export function AboutSection() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="o-mne"
      ref={ref}
      aria-labelledby="o-mne-heading"
      className="about-section"
    >
      <div className="container-ultra">
        <div className="about-grid">
          {/* LEFT: 3D photo collage */}
          <div className="about-photo-wrapper">
            <PhotoCollage />
          </div>

          {/* RIGHT: content */}
          <div className="about-content">
            <div className="about-header">
              <SectionEyebrow
                className="reveal"
                style={{ transitionDelay: "0ms" }}
              >
                O mně
              </SectionEyebrow>
              <h2
                id="o-mne-heading"
                className="about-h2 reveal"
                style={{ transitionDelay: "80ms" }}
              >
                Tomáš Hamerník
              </h2>
            </div>

            <div className="about-paragraphs">
              <p
                className="reveal"
                style={{ transitionDelay: "160ms" }}
              >
                Reklamě na sociálních sítích se věnuju přes pět let. Za tu dobu
                jsem spolupracoval s desítkami firem a vyzkoušel spoustu
                způsobů, jak dostat nabídku před správné lidi. Vím, co funguje.
                A hlavně vím, co ne.
              </p>
              <p
                className="reveal"
                style={{ transitionDelay: "220ms" }}
              >
                Zaměřuju se na stavební firmy, řemeslníky, výrobní podniky a
                nábor zaměstnanců. Rozumím tomu, jak Váš zákazník přemýšlí a kde
                tráví čas. Proto stavím reklamy tak, aby jim rozuměl on. Ne
                marketéři.
              </p>
              <p
                className="reveal"
                style={{ transitionDelay: "280ms" }}
              >
                V práci jsem přímý. Když něco nefunguje, řeknu Vám to jako
                první. Když to funguje, uvidíte to v číslech, ne v prezentaci.
                K výsledkům svých kampaní máte přístup kdykoliv, ne jednou
                měsíčně v PDF.
              </p>
              <p
                className="reveal"
                style={{ transitionDelay: "340ms" }}
              >
                Nestavím jednorázové kampaně. Stavím systém, který Vám přivádí
                zákazníky, i když zrovna spíte. A pokud chcete, zaškolím Váš
                tým, aby si část marketingu uměl dělat sám.
              </p>
            </div>

            <AboutStatsGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
