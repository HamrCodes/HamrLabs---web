"use client";

import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Badge } from "@/components/ui/badge";
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
                Performance marketing konzultant. Pracuji s českými e-shopy,
                službami a místními firmami. AI a data používám k zjednodušení
                cesty klienta, ne k nahrazení lidské práce. Bez balíčků, bez
                sklepových reportů, bez slibů, které nejdou splnit.
              </p>
              <p
                className="reveal"
                style={{ transitionDelay: "220ms" }}
              >
                Specializuji se na Meta Ads, lead generation a tvorbu kreativ.
                Každá kampaň má jasné KPI a měřitelný výsledek. Reportuju přes
                Business Manager a custom dashboard, ke kterému máte přístup
                24/7.
              </p>
              <p
                className="reveal"
                style={{ transitionDelay: "280ms" }}
              >
                V práci preferuju přímost před zdvořilým mlčením. Když něco
                nefunguje, řeknu to první. Když naopak funguje, mluví za mě
                čísla. Klient nepotřebuje konzultanta, který zaobaluje výsledky
                do prezentací, potřebuje partnera, který drží směr.
              </p>
              <p
                className="reveal"
                style={{ transitionDelay: "340ms" }}
              >
                Stavím systémy, ne jednorázové kampaně. Cílem není odpracovat
                hodiny, ale postavit performance engine, kterému klient rozumí a
                který škáluje s jeho byznysem. Marketing není magie, je to
                řemeslo s metrikami.
              </p>
            </div>

            <AboutStatsGrid />

            <div className="about-badges">
              <span className="reveal" style={{ transitionDelay: "560ms" }}>
                <span className="meta-partner-badge" aria-label="Meta Business Partner">
                  <img
                    src="/meta-partner.png"
                    alt="Meta Business Partner"
                    width={120}
                    height={60}
                  />
                </span>
              </span>
              <span className="reveal" style={{ transitionDelay: "620ms" }}>
                <Badge variant="pill">AI-Powered</Badge>
              </span>
              <span className="reveal" style={{ transitionDelay: "680ms" }}>
                <Badge variant="pill">Czech Republic</Badge>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
