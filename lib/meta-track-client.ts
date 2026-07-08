"use client";

import { hasMarketingConsent } from "./cookie-consent";

/**
 * Fires a Meta Pixel event in the browser. No-ops entirely unless the
 * visitor accepted "all" cookies — mirrors the gating in
 * components/analytics/meta-pixel.tsx. Static hosting has no server-side
 * Conversions API relay, so this is Pixel-only.
 */
export function trackMetaEvent(
  eventName: string,
  customData?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  if (!hasMarketingConsent()) return;
  if (typeof window.fbq === "function") {
    window.fbq("track", eventName, customData ?? {});
  }
}
