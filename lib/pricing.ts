/**
 * Ceník: the single source of truth for the three monthly plans.
 *
 * Everything that shows a price reads it from here: the pricing cards
 * (components/pricing), the OfferCatalog JSON-LD (lib/seo.ts), the /cenik/
 * metadata and the FAQ answer about the ad budget. Change a number here and
 * it changes everywhere, so prices can never drift apart.
 *
 * Amounts are CZK per month, without VAT (Hamr Labs is not a VAT payer,
 * VOP 6.1). feeCzk is what Hamr Labs invoices for the work. The ad budget is
 * paid by the client straight to Meta from their own card (VOP 6.2), so it
 * is never part of the invoiced price.
 */

export type PlanId = "start" | "rust" | "premium";

export interface PricingPlan {
  id: PlanId;
  name: string;
  /** One line under the plan name: who the plan is for. */
  tagline: string;
  /** Monthly fee for the work (what Hamr Labs invoices). */
  feeCzk: number;
  /** Minimum monthly ad budget, paid by the client directly to Meta. */
  budgetMinCzk: number;
  /** How the minimum reads on the card: "min. 10 000 Kč" or "od 30 000 Kč". */
  budgetPrefix: "min." | "od";
  /** Rounded daily budget shown as "cca … Kč denně" (as on the price sheet). */
  budgetDailyApproxCzk: number;
  /** Fee plus minimum budget. Stored, then checked by assertPricingConsistent. */
  totalFromCzk: number;
  /** "Vše ze Start, plus:" line above the features of the higher plans. */
  includesFrom: { id: PlanId; label: string } | null;
  features: readonly string[];
  /** The one plan with the accent border and the badge. */
  highlighted: boolean;
  badge: string | null;
}

export const plans: readonly PricingPlan[] = [
  {
    id: "start",
    name: "Start",
    tagline: "Pro firmy, které začínají s Meta reklamou.",
    feeCzk: 18000,
    budgetMinCzk: 10000,
    budgetPrefix: "min.",
    budgetDailyApproxCzk: 330,
    totalFromCzk: 28000,
    includesFrom: null,
    features: [
      "Business Manager, reklamní účet, platební metoda",
      "Reklamní bannery",
      "Tvorba kampaně",
      "Optimalizace a sledování",
      "Měsíční reporting",
      "Automatické propisování leadů do tabulky",
    ],
    highlighted: false,
    badge: null,
  },
  {
    id: "rust",
    name: "Růst",
    tagline: "Pro firmy, které chtějí mít leady pod kontrolou.",
    feeCzk: 28000,
    budgetMinCzk: 20000,
    budgetPrefix: "min.",
    budgetDailyApproxCzk: 650,
    totalFromCzk: 48000,
    includesFrom: { id: "start", label: "Vše ze Start, plus:" },
    features: [
      "Vlastní přístup do Hamr Labs CRM",
      "Leady v systému v reálném čase",
      "Pipeline: od poptávky po zakázku",
      "Okamžitá notifikace o novém leadu",
      "Automatická SMS a e-mail odpověď zájemci",
      "Kvalifikační otázky ve formuláři",
      "Retargeting kampaně",
      "Reporting každé 2 týdny",
    ],
    highlighted: true,
    // Matyáš's decision (2026-10-07): the label from his price sheet, kept
    // although CLAUDE.md 3.1 otherwise bans superlatives.
    badge: "Nejoblíbenější",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Pro firmy, které chtějí vyčnívat obsahem.",
    feeCzk: 48000,
    budgetMinCzk: 30000,
    budgetPrefix: "od",
    budgetDailyApproxCzk: 1000,
    totalFromCzk: 78000,
    includesFrom: { id: "rust", label: "Vše z Růst, plus:" },
    features: [
      "Profesionální natáčení u Vás 1× za čtvrtletí",
      "4 sestříhaná reklamní videa měsíčně",
      "Formáty pro Reels, Stories i feed",
      "AI obsah a varianty kreativ",
      "Více kampaní pro různé služby či regiony",
      "Týdenní reporting",
      "Měsíční strategický call",
      "Prioritní podpora",
    ],
    highlighted: false,
    badge: null,
  },
];

export function getPlan(id: PlanId): PricingPlan {
  const plan = plans.find((p) => p.id === id);
  if (!plan) throw new Error(`Unknown pricing plan: ${id}`);
  return plan;
}

/** Non-breaking space: an amount and its "Kč" never wrap apart. */
const NBSP = "\u00A0";

/**
 * 18000 -> "18 000" with a non-breaking space between thousands.
 * Hand-rolled on purpose: Intl.NumberFormat may group differently in Node
 * (build) and in the browser, which breaks hydration (React #418).
 */
export function formatAmount(value: number): string {
  const digits = String(Math.round(Math.abs(value)));
  const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
  return value < 0 ? `−${grouped}` : grouped;
}

/** 18000 -> "18 000 Kč" (non-breaking spaces, never wraps). */
export function formatCzk(value: number): string {
  return `${formatAmount(value)}${NBSP}Kč`;
}

/** "min. 10 000 Kč" / "od 30 000 Kč" */
export function formatBudgetMin(plan: PricingPlan): string {
  return `${plan.budgetPrefix}${NBSP}${formatCzk(plan.budgetMinCzk)}`;
}

/** The same text with ordinary spaces, for metadata and structured data. */
export function plainSpaces(text: string): string {
  return text.replace(/\u00A0/g, " ");
}

/** Average days in a month, used only to sanity-check the daily figures. */
const DAYS_PER_MONTH = 30.4;

/**
 * Build-time guard, called from the pages that render the price list
 * (server components, so it runs during `next build`). A typo in a price
 * fails the build instead of reaching the live site.
 */
export function assertPricingConsistent(list: readonly PricingPlan[] = plans): void {
  const problems: string[] = [];
  for (const p of list) {
    if (p.feeCzk + p.budgetMinCzk !== p.totalFromCzk) {
      problems.push(
        `${p.name}: ${p.feeCzk} + ${p.budgetMinCzk} != celkem ${p.totalFromCzk}`,
      );
    }
    const daily = p.budgetMinCzk / DAYS_PER_MONTH;
    if (Math.abs(daily - p.budgetDailyApproxCzk) / daily > 0.05) {
      problems.push(
        `${p.name}: cca ${p.budgetDailyApproxCzk} Kč denně neodpovídá ${p.budgetMinCzk} Kč měsíčně`,
      );
    }
  }
  if (list.filter((p) => p.highlighted).length > 1) {
    problems.push("Zvýrazněný může být nejvýš jeden balíček.");
  }
  if (problems.length > 0) {
    throw new Error(`Ceník nesedí (lib/pricing.ts):\n${problems.join("\n")}`);
  }
}
