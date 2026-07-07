"use client";

import { hasMarketingConsent } from "./cookie-consent";

interface TrackParams {
  email?: string;
  phone?: string;
  customData?: Record<string, unknown>;
}

function makeEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/**
 * Fires a Meta event on both the browser Pixel and the server Conversions
 * API, sharing one event ID so Meta can deduplicate the pair. No-ops
 * entirely unless the visitor accepted "all" cookies — mirrors the gating
 * in components/analytics/meta-pixel.tsx.
 */
export function trackMetaEvent(eventName: string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;
  if (!hasMarketingConsent()) return;

  const eventId = makeEventId();

  if (typeof window.fbq === "function") {
    window.fbq("track", eventName, params.customData ?? {}, { eventID: eventId });
  }

  fetch("/api/meta-capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName,
      eventId,
      eventSourceUrl: window.location.href,
      email: params.email,
      phone: params.phone,
      customData: params.customData,
    }),
    keepalive: true,
  }).catch(() => {
    /* best-effort */
  });
}
