"use client";

import { useEffect } from "react";
import { trackPixelOnly } from "@/lib/meta-track-client";
import { leadParams } from "@/lib/meta-events";
import { reportBooking, type KonzultaceKontakt } from "@/lib/submit-konzultace";
import { overTelefon } from "@/lib/telefon";

// Calendly scheduling page for the "call" branch. Themed to match the site.
// A plain iframe (no external Calendly script) keeps the static site free of
// third-party JS; Calendly handles the booking, confirmation e-mails and
// reminders itself.
//
// embed_domain + embed_type are what Calendly's own embed script adds. With
// them the scheduling page posts its events to this window, so the site can
// tell a finished booking from someone who only opened the calendar.
const CALENDLY_BASE = "https://calendly.com/tomas-hamernik/hamr-labs-konzultace";
const CALENDLY_PARAMS: Record<string, string> = {
  hide_gdpr_banner: "1",
  background_color: "0a0a0a",
  text_color: "f5f5f5",
  primary_color: "00f0ff",
  embed_domain: "hamrlabs.cz",
  embed_type: "Inline",
};

const CALENDLY_ORIGIN = "https://calendly.com";

/**
 * The contact from the form before the calendar goes into Calendly's own
 * fields, so the visitor does not type it twice. a1 is the event type's
 * first question, "Telefon" (phone_number). It gets "+{calling code}
 * {national number}" built from the E.164 number the form checked
 * (lib/telefon): "+420 777123456" (the shape verified on production),
 * "+421 903000123", "+48 512000123", "+49 15120000123", "+43 6640000123".
 * The calling code is taken from the parsed number, not a fixed three
 * digits, so +48, +49 and +43 split correctly.
 */
export function calendlyUrl(kontakt?: KonzultaceKontakt): string {
  const params = new URLSearchParams(CALENDLY_PARAMS);
  if (kontakt) {
    params.set("name", kontakt.name);
    params.set("email", kontakt.email);
    const telefon = overTelefon(kontakt.phone);
    params.set("a1", telefon.ok ? telefon.calendly : kontakt.phone);
  }
  return `${CALENDLY_BASE}?${params.toString()}`;
}

// Bookings already reported, so a repeated message can't count twice.
const trackedBookings = new Set<string>();

type CalendlyMessage = {
  event?: unknown;
  payload?: { event?: { uri?: unknown }; invitee?: { uri?: unknown } };
};

/**
 * Lead only once Calendly confirms the booking. Opening the calendar is not
 * a lead: most people look at the slots and leave. The Pixel and the server
 * copy share the invitee URI as event_id, so Meta counts the booking once;
 * the relay also verifies the booking and marks the contact as booked.
 */
function useCalendlyBookingTracking() {
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== CALENDLY_ORIGIN) return;
      const data = e.data as CalendlyMessage | null;
      if (!data || data.event !== "calendly.event_scheduled") return;
      const invitee = data.payload?.invitee?.uri;
      if (typeof invitee !== "string" || !invitee) return;
      if (trackedBookings.has(invitee)) return;
      trackedBookings.add(invitee);
      const params = leadParams("call");
      trackPixelOnly("Lead", params, invitee);
      reportBooking(invitee, params);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);
}

interface Props {
  /** Fullscreen layout (call branch) vs. embedded inside the modal. */
  fullscreen?: boolean;
  /** Contact from the form before the calendar, prefilled into Calendly. */
  kontakt?: KonzultaceKontakt;
}

export function FunnelCalendly({ fullscreen = false, kontakt }: Props) {
  useCalendlyBookingTracking();
  const src = calendlyUrl(kontakt);

  if (fullscreen) {
    return (
      <iframe
        src={src}
        title="Rezervace konzultace"
        loading="lazy"
        className="funnel-calendly-iframe funnel-calendly-iframe--full"
      />
    );
  }

  return (
    <div className="funnel-calendly">
      <p className="funnel-calendly-intro">
        Vyberte si termín, který Vám sedí. Potvrzení a připomínku Vám pošlu
        e-mailem.
      </p>
      <div className="funnel-calendly-frame">
        <iframe
          src={src}
          title="Rezervace konzultace"
          loading="lazy"
          className="funnel-calendly-iframe"
        />
      </div>
    </div>
  );
}
