import type { ReactNode } from "react";

/**
 * Návody pro klienty (/navody). Seznam a metadata žijí tady, text každého
 * návodu v content/guides/{slug}.tsx, aby stránka, obsah kroků i JSON-LD
 * četly jeden zdroj.
 */

/** ID firemního portfolia Hamr Labs. Klienti s ním sdílí svá aktiva. */
export const HAMR_LABS_BUSINESS_ID = "507324741841692";

export const GUIDES_EMAIL = "tomas.hammernik@gmail.com";

export interface GuideCategory {
  id: string;
  label: string;
}

export interface GuideVideo {
  /** Soubor v /public, třeba /navody/business-manager.mp4. */
  src: string;
  poster?: string;
  /** Titulky ve formátu WebVTT, třeba /navody/business-manager.vtt. */
  captions?: string;
}

export interface Guide {
  slug: string;
  category: string;
  title: string;
  /** Krátký název do drobečkové navigace. */
  shortTitle: string;
  excerpt: string;
  /** Meta description, 155 až 160 znaků. */
  description: string;
  minutes: number;
  /** Kdy byl postup naposledy ověřený proti rozhraní Mety (YYYY-MM-DD). */
  updated: string;
  /**
   * Videonávod. Jen vlastní soubor v /public: vložené YouTube by načítalo
   * obsah třetí strany bez souhlasu, což /cookies výslovně vylučuje.
   */
  video?: GuideVideo;
}

export interface GuideStep {
  title: string;
  body: ReactNode;
}

export interface GuideContent {
  lead: ReactNode;
  needs: string[];
  steps: GuideStep[];
  faq: { q: string; a: string }[];
}

export const guideCategories: GuideCategory[] = [
  { id: "meta", label: "Facebook a Instagram" },
];

export const guides: Guide[] = [
  {
    slug: "business-manager",
    category: "meta",
    title: "Jak založit Business Manager pro začátek spolupráce",
    shortTitle: "Business Manager",
    excerpt:
      "Založíte firemní portfolio, přidáte do něj stránku, Instagram, reklamní účet a kartu. Pak mi nasdílíte přístup.",
    description:
      "Jak založit Business Manager (firemní portfolio Meta), přidat stránku, Instagram, reklamní účet a kartu a nasdílet přístup partnerovi. Návod na 10 minut.",
    minutes: 10,
    updated: "2026-09-30",
    // TODO: doplnit videonávod od Tomáše (soubor do /public/navody/)
    video: undefined,
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function guidesInCategory(categoryId: string): Guide[] {
  return guides.filter((g) => g.category === categoryId);
}

/** 1 návod, 2 návody, 5 návodů. */
export function guidesCountLabel(n: number): string {
  if (n === 1) return "1 návod";
  if (n >= 2 && n <= 4) return `${n} návody`;
  return `${n} návodů`;
}

const guideDateFormat = new Intl.DateTimeFormat("cs-CZ", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  timeZone: "Europe/Prague",
});

/** 2026-09-30 → 30. 9. 2026 (poledne UTC, ať datum neposune časové pásmo). */
export function formatGuideDate(iso: string): string {
  return guideDateFormat.format(new Date(`${iso}T12:00:00Z`));
}
