import type { CSSProperties } from "react";
import { Check } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";
import {
  formatAmount,
  formatBudgetMin,
  formatCzk,
  type PricingPlan,
} from "@/lib/pricing";

interface Props {
  plan: PricingPlan;
  /** One level below the section heading: h3 on the home page, h2 on /cenik/. */
  headingLevel: "h2" | "h3";
  /** Stagger of the scroll reveal (.reveal), in ms. */
  revealDelayMs?: number;
}

/**
 * One plan of the price list. Flat card (CLAUDE.md 7.4, variant B); the
 * highlighted plan gets the accent border, a soft glow and a text badge,
 * never a cyan fill. Its five blocks sit on the rows of the parent grid
 * (subgrid on desktop), so prices, CTAs and lists line up across cards.
 */
export function PricingCard({
  plan,
  headingLevel: Heading,
  revealDelayMs = 0,
}: Props) {
  const headingId = `cenik-${plan.id}-nazev`;

  return (
    <article
      aria-labelledby={headingId}
      className={cn(
        "pricing-card reveal",
        plan.highlighted && "pricing-card--highlighted",
      )}
      // Only the reveal (opacity, transform) is staggered; hover stays instant.
      style={{ "--reveal-delay": `${revealDelayMs}ms` } as CSSProperties}
    >
      <div className="pricing-card__head">
        <div className="pricing-card__title-row">
          <Heading id={headingId} className="pricing-card__name">
            {plan.name}
          </Heading>
          {plan.badge && <p className="pricing-card__badge">{plan.badge}</p>}
        </div>
        <p className="pricing-card__tagline">{plan.tagline}</p>
      </div>

      <p className="pricing-card__price">
        <span className="pricing-card__amount">
          {formatAmount(plan.feeCzk)}
          <span className="pricing-card__currency">&nbsp;Kč</span>
        </span>
        <span className="pricing-card__unit">měsíčně za moji práci</span>
      </p>

      <dl className="pricing-card__breakdown">
        <div className="pricing-card__row">
          <dt>
            Reklama{" "}
            <span className="pricing-card__hint">(platíte Metě)</span>
          </dt>
          <dd>
            <span className="pricing-card__value">{formatBudgetMin(plan)}</span>
            <span className="pricing-card__daily">
              cca {formatCzk(plan.budgetDailyApproxCzk)} denně
            </span>
          </dd>
        </div>
        <div className="pricing-card__row pricing-card__row--total">
          <dt>Celkem měsíčně</dt>
          <dd>
            <span className="pricing-card__value">
              od {formatCzk(plan.totalFromCzk)}
            </span>
          </dd>
        </div>
      </dl>

      <div className="pricing-card__cta">
        {/* #konzultace opens the consultation funnel (handled in Footer). */}
        <MagneticButton
          as="a"
          href="#konzultace"
          strength={0.12}
          className={cn(
            "pricing-card__button rounded-full font-mono text-sm font-semibold uppercase tracking-wider",
            plan.highlighted
              ? "btn-primary-cyan"
              : "pricing-card__button--secondary",
          )}
        >
          Chci konzultaci
          <span className="sr-only"> k balíčku {plan.name}</span>
        </MagneticButton>
      </div>

      <div className="pricing-card__features">
        {plan.includesFrom && (
          <p className="pricing-card__includes">{plan.includesFrom.label}</p>
        )}
        <ul className="pricing-card__list">
          {plan.features.map((feature) => (
            <li key={feature} className="pricing-card__item">
              <Check
                className="pricing-card__check"
                strokeWidth={1.5}
                aria-hidden="true"
                focusable={false}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
