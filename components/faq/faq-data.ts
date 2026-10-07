import { Clock, Wallet, BarChart3, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { formatCzk, getPlan } from "@/lib/pricing";

// Budgets come from the price list (lib/pricing.ts), so the FAQ never
// contradicts the cards.
const startBudget = formatCzk(getPlan("start").budgetMinCzk);
const rustBudget = formatCzk(getPlan("rust").budgetMinCzk);

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
    question: "Jak rychle uvidím výsledky?",
    answer:
      "První poptávky obvykle do 7 až 14 dnů od spuštění. Stabilní čísla a rozumnou cenu za poptávku doladíme během prvního až druhého měsíce.",
  },
  {
    type: "screenshot",
    metricValue: "582",
    metricLabel: "získaných kandidátů za 2 měsíce",
    caption: "GDR Work · Nábor",
    image: "/faq-gdrwork.png",
  },
  {
    type: "faq",
    icon: Wallet,
    question: "Kolik do reklamy musím dát?",
    answer: `Podle balíčku: Start počítá s reklamou od ${startBudget} měsíčně, Růst od ${rustBudget}. S menší částkou trvá déle, než se reklama rozjede a než jde poznat, co funguje.`,
  },
  {
    type: "screenshot",
    metricValue: "2M+",
    metricLabel: "zobrazení reklam",
    caption: "Namontuj si · Služby",
    image: "/faq-namontujsi.png",
  },
  // Row 2: SHOT → FAQ → SHOT → FAQ
  {
    type: "screenshot",
    metricValue: "165",
    metricLabel: "poptávek po 165 Kč",
    caption: "Service Estate · Reality",
    image: "/faq-serviceestate.png",
  },
  {
    type: "faq",
    icon: BarChart3,
    question: "Jak se dozvím, co reklama dělá?",
    answer:
      "Podle balíčku Vám jednou za měsíc, za 2 týdny nebo každý týden pošlu zprávu s výsledky. Čísla navíc vidíte kdykoliv v reklamním účtu.",
  },
  {
    type: "screenshot",
    metricValue: "265",
    metricLabel: "poptávek za 14 dní",
    caption: "Bez dluhů · Finance",
    image: "/faq-bezdluhu.png",
  },
  {
    type: "faq",
    icon: Sparkles,
    question: "Musím si dělat fotky a videa sám?",
    answer:
      "Ne. Bannery a texty do reklam vytvořím já, od Vás potřebuju jen podklady. V balíčku Premium přidám natáčení u Vás a 4 videa měsíčně.",
  },
];
