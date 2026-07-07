const CONSENT_KEY = "hamr-cookie-consent";
const CONSENT_CHANGED_EVENT = "hamr-consent-changed";

export type Consent = "all" | "necessary";

interface StoredConsent {
  value: Consent;
  expires: number;
}

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (Date.now() > parsed.expires) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return parsed.value;
  } catch {
    return null;
  }
}

export function saveConsent(value: Consent) {
  try {
    // 12 months validity
    const expires = Date.now() + 365 * 24 * 60 * 60 * 1000;
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ value, expires }));
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
}

/** Marketing pixels (Meta Pixel, etc.) only fire when the user accepted "all". */
export function hasMarketingConsent(): boolean {
  return readConsent() === "all";
}

export function onConsentChange(handler: () => void): () => void {
  window.addEventListener(CONSENT_CHANGED_EVENT, handler);
  return () => window.removeEventListener(CONSENT_CHANGED_EVENT, handler);
}
