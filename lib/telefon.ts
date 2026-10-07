import {
  ParseError,
  parsePhoneNumberWithError,
  type CountryCode,
  type MetadataJson,
  type PhoneNumber,
} from "libphonenumber-js/core";
import telefonMetadata from "./telefon-metadata.json";

// Phone check shared by both contact forms ("Nezávazná konzultace" before
// Calendly and "Napsat zprávu"). Czech numbers may be typed without +420,
// other numbers need their calling code.
//
// The metadata is a cut of libphonenumber-js "max" for five countries
// (scripts/telefon-metadata.mjs, runs as prebuild). The library's default
// "min" metadata only checks length and lets "+420 600 000 000" through,
// which Calendly then refuses ("This phone number format is not recognized").
// The relay hamr-capi runs the same check with the full "max" metadata.

const metadata = telefonMetadata as unknown as MetadataJson;

const ZEME: ReadonlySet<CountryCode> = new Set<CountryCode>(["CZ", "SK", "DE", "PL", "AT"]);

const CHYBA_PRAZDNE = "Vyplňte telefon, ať se Vám můžu ozvat.";
const CHYBA_ZEME = "Volám jen na čísla z Česka, Slovenska, Německa, Polska a Rakouska.";
const CHYBA_NEPLATNE =
  "Číslo nevypadá platně. Zkontrolujte ho, zahraniční číslo zadejte s předvolbou (třeba +421).";

export type Telefon =
  | {
      ok: true;
      /** E.164 for the relay, the System and Meta: "+420774964919". */
      e164: string;
      /** Calendly prefill (a1): "+420 774964919". */
      calendly: string;
      /** What the field shows after blur: "+420 774 964 919". */
      hezky: string;
    }
  | { ok: false; chyba: string };

export function overTelefon(vstup: string): Telefon {
  const text = vstup.trim();
  const kompaktni = text.replace(/[\s().\-/]/g, "");
  // Nothing typed, or only the calling code the field starts with ("+420 ").
  if (!/\d/.test(kompaktni) || /^(?:\+|00)\d{1,3}$/.test(kompaktni)) {
    return { ok: false, chyba: CHYBA_PRAZDNE };
  }

  let cislo: PhoneNumber;
  try {
    // extract: false = the whole field must be a phone number, not a text
    // that merely contains one.
    cislo = parsePhoneNumberWithError(text, { defaultCountry: "CZ", extract: false }, metadata);
  } catch (error) {
    if (error instanceof ParseError && error.message === "INVALID_COUNTRY") {
      return { ok: false, chyba: CHYBA_ZEME };
    }
    return { ok: false, chyba: CHYBA_NEPLATNE };
  }

  if (!cislo.isValid() || cislo.ext) return { ok: false, chyba: CHYBA_NEPLATNE };
  // The metadata only knows the five countries; this guards a future cut.
  if (!cislo.country || !ZEME.has(cislo.country)) return { ok: false, chyba: CHYBA_ZEME };

  return {
    ok: true,
    e164: cislo.number,
    calendly: `+${cislo.countryCallingCode} ${cislo.nationalNumber}`,
    hezky: cislo.formatInternational(),
  };
}
