/**
 * Standard Meta pixel events used on this site, in one place.
 *
 * Meta only understands the parameters it documents for each standard event.
 * Anything nested or renamed is dropped on their side, so every call site
 * builds its payload through the helpers here instead of inlining objects.
 *
 * Events in use: ViewContent, Lead, Contact, PageView and our own
 * KonzultaceFormular. Lead means only a booked call or a delivered message.
 * Server copies go through the CAPI relay (hamr-capi/api/track.js allow-list,
 * the booked-call Lead through hamr-capi/api/rezervace.js); adding an event
 * here means adding it there too, or Meta only ever sees the browser half.
 */

export const CURRENCY = "CZK";

/**
 * What one conversion is worth. Meta uses this to optimise for value rather
 * than raw count, so a wrong number is worse than none: while a value is null
 * the parameter is left out entirely and Meta optimises for volume.
 *
 * Fill these in with what a booked call and a written enquiry are actually
 * worth on average (expected deal size times close rate).
 */
export const CONVERSION_VALUE: Record<"call" | "message", number | null> = {
  call: null,
  message: null,
};

export interface StandardParams extends Record<string, unknown> {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
}

/** Drops empty keys; Meta counts a null parameter as a malformed event. */
function clean(params: StandardParams): StandardParams {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, v]) => v !== undefined && v !== null && v !== "",
    ),
  );
}

function withValue(
  params: StandardParams,
  branch: "call" | "message",
): StandardParams {
  const value = CONVERSION_VALUE[branch];
  if (value === null) return clean(params);
  return clean({ ...params, value, currency: CURRENCY });
}

/** Someone opened a case study. */
export function caseStudyViewParams(slug: string, client: string) {
  return clean({
    content_name: client,
    content_category: "Případová studie",
    content_ids: [slug],
  });
}

/** Someone opened a blog article. */
export function articleViewParams(slug: string, title: string) {
  return clean({
    content_name: title,
    content_category: "Článek",
    content_ids: [slug],
  });
}

/**
 * Someone saw the price list (the #cenik section or the /cenik/ page).
 * Fired once per page load; clicking a plan's CTA is not a lead.
 */
export function pricingViewParams() {
  return clean({
    content_name: "Ceník",
    content_category: "Ceník",
    content_ids: ["cenik"],
  });
}

/**
 * A real lead: a call booked in Calendly or a message that reached us.
 * Opening the calendar or clicking a button is not one.
 */
export function leadParams(branch: "call" | "message") {
  return withValue(
    {
      content_name:
        branch === "call" ? "Nezávazná konzultace" : "Napsat zprávu",
      content_category: "Poptávka",
    },
    branch,
  );
}

/**
 * Our own event KonzultaceFormular: contact filled in before the calendar.
 * Not a lead yet (the slot may never be picked), but it carries the contact,
 * so it is the fallback optimisation goal if bookings stay too few.
 */
export function konzultaceParams() {
  return clean({ content_name: "Nezávazná konzultace", content_category: "Kontakt před kalendářem" });
}

/** A written message on top of the Lead. */
export function contactParams() {
  return withValue(
    { content_name: "Napsat zprávu", content_category: "Poptávka" },
    "message",
  );
}
