/**
 * Standard Meta pixel events used on this site, in one place.
 *
 * Meta only understands the parameters it documents for each standard event.
 * Anything nested or renamed is dropped on their side, so every call site
 * builds its payload through the helpers here instead of inlining objects.
 *
 * Events in use: ViewContent, Lead, Schedule, Contact, PageView.
 * They are also allow-listed in the CAPI relay (hamr-capi/api/track.js);
 * adding an event here means adding it there too, or the server copy is
 * rejected and Meta only ever sees the browser half.
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

/** Any completed funnel submission, whichever branch it took. */
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

/** A booked call on top of the Lead. */
export function scheduleParams() {
  return withValue(
    { content_name: "Nezávazná konzultace", content_category: "Poptávka" },
    "call",
  );
}

/** A written message on top of the Lead. */
export function contactParams() {
  return withValue(
    { content_name: "Napsat zprávu", content_category: "Poptávka" },
    "message",
  );
}
