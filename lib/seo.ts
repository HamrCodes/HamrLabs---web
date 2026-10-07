// Single source of truth for site-wide SEO identity + Schema.org node builders.
// Site-wide entities (Organization, WebSite, Person) are emitted once in the
// root layout's @graph; per-page nodes (BlogPosting, BreadcrumbList, FAQPage)
// reference them by @id, so Google links the whole graph across script tags.

import { formatBudgetMin, plainSpaces, type PricingPlan } from "./pricing";

export const SITE_URL = "https://hamrlabs.cz";
export const SITE_NAME = "Hamr Labs";
export const AUTHOR_NAME = "Tomáš Hamerník";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PERSON_ID = `${SITE_URL}/#tomas-hamernik`;

// Real, publicly-linked brand profiles (also in the footer). LinkedIn is not
// yet known — intentionally omitted rather than invented (see SEO-README TODO).
const ORG_SAME_AS = [
  "https://instagram.com/hamrlabs",
  "https://facebook.com/HamrLabs",
];

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: "Hamr Labs s.r.o.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
    image: `${SITE_URL}/og.png`,
    areaServed: "CZ",
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ICO",
      value: "29675855",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kaprova 42/14",
      addressLocality: "Praha",
      postalCode: "110 00",
      addressCountry: "CZ",
    },
    founder: { "@id": PERSON_ID },
    sameAs: ORG_SAME_AS,
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "cs-CZ",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: AUTHOR_NAME,
    jobTitle: "Specialista na reklamu na sociálních sítích",
    url: SITE_URL,
    worksFor: { "@id": ORGANIZATION_ID },
  };
}

// Hero showreel. Invisible structured data (no visual change) that makes the
// video eligible for Google's video results. Values match the actual file in
// /public: hero.mp4 (1:54, published 2026-08-06) + hero-poster.jpg thumbnail.
export function videoObjectNode() {
  return {
    "@type": "VideoObject",
    name: "Hamr Labs — reklama, která nosí poptávky",
    description:
      "Krátké video, ve kterém Tomáš Hamerník vysvětluje, jak reklama na Facebooku a Instagramu přivádí firmám poptávky a kandidáty.",
    thumbnailUrl: [`${SITE_URL}/hero-poster.jpg`],
    uploadDate: "2026-08-06",
    contentUrl: `${SITE_URL}/hero.mp4`,
    duration: "PT1M55S",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbNode(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export function faqPageNode(faqs: FaqEntry[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

interface BlogPostingInput {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  section: string;
  keywords: string[];
  imageUrl: string;
  wordCount?: number;
}

export function blogPostingNode(post: BlogPostingInput) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    // headline capped at 110 chars per Google's guidance
    headline: post.title.slice(0, 110),
    description: post.description,
    image: post.imageUrl,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: url,
    url,
    articleSection: post.section,
    keywords: post.keywords.join(", "),
    inLanguage: "cs-CZ",
    ...(post.wordCount ? { wordCount: post.wordCount } : {}),
  };
}

// Business customers only: the VOP (1.3) cover B2B contracts, not consumers.
const ELIGIBLE_BUSINESS = "http://purl.org/goodrelations/v1#Business";

/**
 * The price list as an OfferCatalog with one Offer per plan, built from
 * lib/pricing.ts so it always matches the visible cards. Emitted only on the
 * pages that show the price list (home page and /cenik/), never site-wide.
 *
 * price is the monthly fee for the work, the only amount Hamr Labs invoices.
 * The ad budget goes in the description: the client pays it to Meta.
 * valueAddedTaxIncluded is left out on purpose (not a VAT payer, VOP 6.1).
 */
export function pricingCatalogNode(list: readonly PricingPlan[]) {
  return {
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/#cenik`,
    name: "Ceník Hamr Labs",
    url: `${SITE_URL}/cenik/`,
    itemListElement: list.map((plan) => ({
      "@type": "Offer",
      "@id": `${SITE_URL}/#cenik-${plan.id}`,
      name: `Balíček ${plan.name}`,
      // Plain spaces in structured data; the NBSPs are for on-page layout.
      description: plainSpaces(
        [
          plan.tagline,
          `${plan.includesFrom ? plan.includesFrom.label : "Obsahuje:"} ${plan.features.join("; ")}.`,
          `Reklamní rozpočet ${formatBudgetMin(plan)} měsíčně platí klient přímo společnosti Meta.`,
        ].join(" "),
      ),
      price: plan.feeCzk,
      priceCurrency: "CZK",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.feeCzk,
        priceCurrency: "CZK",
        unitCode: "MON",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON",
        },
      },
      eligibleCustomerType: ELIGIBLE_BUSINESS,
      areaServed: "CZ",
      seller: { "@id": ORGANIZATION_ID },
      itemOffered: {
        "@type": "Service",
        name: `Reklama na Facebooku a Instagramu: balíček ${plan.name}`,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: "CZ",
      },
    })),
  };
}

/** Wraps nodes in a single @graph document. */
export function graph(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
