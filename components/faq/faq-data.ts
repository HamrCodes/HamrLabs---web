import { Clock, Wallet, BarChart3, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FaqCard {
  type: "faq";
  icon: LucideIcon;
  question: string;
  answer: string;
}

export interface ScreenshotCard {
  type: "screenshot";
  metricValue: string;
  metricLabel: string;
  caption: string;
  /** Real screenshot asset (path in /public); placeholder shown when absent */
  image?: string;
}

export type FaqGridItem = FaqCard | ScreenshotCard;

export const faqItems: FaqGridItem[] = [
  // Row 1 (desktop 4-col): FAQ → SHOT → FAQ → SHOT
  {
    type: "faq",
    icon: Clock,
    question: "Jak rychle uvidíte výsledky?",
    answer:
      "První signály 7 až 14 dní po spuštění kampaní. Stabilní snížení CPL a růst ROAS v horizontu 30 až 60 dní.",
  },
  {
    type: "screenshot",
    metricValue: "582",
    metricLabel: "Získaných kandidátů během 2 měsíců",
    caption: "GDR Work · Nábor",
    image: "/faq-gdrwork.png",
  },
  {
    type: "faq",
    icon: Wallet,
    question: "S jakým rozpočtem pracujete?",
    answer:
      "Doporučený mediální rozpočet startuje na 30 000 Kč měsíčně, abychom měli statisticky relevantní data.",
  },
  {
    type: "screenshot",
    metricValue: "2M+",
    metricLabel: "Zobrazení",
    caption: "Namontuj si · Služby",
    image: "/faq-namontujsi.png",
  },
  // Row 2: SHOT → FAQ → SHOT → FAQ
  {
    type: "screenshot",
    metricValue: "165",
    metricLabel: "Poptávek za 165 Kč/ks",
    caption: "Service Estate · Reality",
    image: "/faq-serviceestate.png",
  },
  {
    type: "faq",
    icon: BarChart3,
    question: "Jak reportujete výsledky?",
    answer:
      "Týdenní krátký report v Loomu nebo Slacku plus měsíční dashboard s KPI, ke kterému máte přístup 24/7.",
  },
  {
    type: "screenshot",
    metricValue: "265",
    metricLabel: "Získaných poptávek za 14 dní",
    caption: "Bez dluhů · Finance",
    image: "/faq-bezdluhu.png",
  },
  {
    type: "faq",
    icon: Sparkles,
    question: "Zahrnuje to tvorbu obsahu?",
    answer:
      "Ano. Kreativy, vizuály, karusely i video formáty dělám in-house s podporou AI. Pracuji s Vaším brand voicem.",
  },
];
