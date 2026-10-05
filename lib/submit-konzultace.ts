"use client";

import { hasMarketingConsent } from "./cookie-consent";
import { metaCookies } from "./meta-track-client";

// Relay hamr-capi (the site is a static export with no server of its own).
const RELAY = "https://hamr-capi.vercel.app/api";

export type KonzultaceKontakt = { name: string; email: string; phone: string };

function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/**
 * Kontakt vyplněný před kalendářem. Relay ho zapíše do HamrLabs System jako
 * nedokončenou rezervaci, aby navolávači mohli obvolat i ty, kdo termín
 * nakonec nevyberou. Výsledek říká, jestli kontakt v Systému je.
 */
export async function submitKonzultace(kontakt: KonzultaceKontakt): Promise<{ ok: boolean }> {
  try {
    const res = await fetch(`${RELAY}/konzultace`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: newId(), ...kontakt, consent: true }),
    });
    const data = await res.json().catch(() => ({ ok: false }));
    if (!data.ok) console.error("[konzultace] relay rejected contact", data);
    return { ok: Boolean(data.ok) };
  } catch (err) {
    console.error("[konzultace] relay request error", err);
    return { ok: false };
  }
}

/**
 * Dokončená rezervace z Calendly. Relay ji ověří přes Systém (ten se zeptá
 * Calendly), přepne kontakt na domluvenou schůzku a s marketingovým
 * souhlasem pošle Metě Lead se stejným event_id jako Pixel v prohlížeči
 * (adresa pozvaného). Zápis do Systému na souhlasu nezávisí.
 */
export function reportBooking(inviteeUri: string, customData: Record<string, unknown>) {
  try {
    const consent = hasMarketingConsent();
    fetch(`${RELAY}/rezervace`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inviteeUri,
        consent,
        eventSourceUrl: window.location.href,
        customData,
        ...(consent ? metaCookies() : {}),
      }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // ignore: the booking itself is in Calendly and the System syncs it anyway
  }
}
