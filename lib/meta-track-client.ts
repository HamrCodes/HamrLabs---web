"use client";

import { hasMarketingConsent } from "./cookie-consent";

// Server-side Conversions API relay (separate Vercel function — the site itself
// is a static export on Active24 and has no server). The browser fires the
// Pixel event and POSTs the same event to the relay with a shared event_id;
// Meta deduplicates the two copies. Public endpoint, safe to ship in the bundle.
const CAPI_ENDPOINT = "https://hamr-capi.vercel.app/api/track";

type UserData = {
  email?: string;
  phone?: string;
};

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name + "=([^;]+)"),
  );
  return match ? decodeURIComponent(match[1]) : undefined;
}

function newEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/**
 * Fires a Meta event both in the browser (Pixel) and server-side (Conversions
 * API relay), tied together by a shared event_id so Meta deduplicates them.
 * No-ops entirely unless the visitor accepted "all" cookies — mirrors the
 * gating in components/analytics/meta-pixel.tsx.
 *
 * userData (email/phone) is sent raw to the relay over HTTPS; the relay hashes
 * it with SHA-256 before it ever reaches Meta. It is never hashed or stored in
 * the browser.
 */
export function trackMetaEvent(
  eventName: string,
  customData?: Record<string, unknown>,
  userData?: UserData,
) {
  if (typeof window === "undefined") return;
  if (!hasMarketingConsent()) return;

  const eventId = newEventId();

  // 1. Browser Pixel — pass eventID so Meta can dedupe with the server copy.
  if (typeof window.fbq === "function") {
    window.fbq("track", eventName, customData ?? {}, { eventID: eventId });
  }

  // 2. Server-side relay. Fire-and-forget; failures must never block the UI.
  try {
    const payload = {
      eventName,
      eventId,
      eventSourceUrl: window.location.href,
      email: userData?.email,
      phone: userData?.phone,
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
      customData,
    };
    const body = JSON.stringify(payload);
    // keepalive lets the request survive a page navigation right after submit.
    fetch(CAPI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // ignore — the Pixel event above already fired
  }
}
