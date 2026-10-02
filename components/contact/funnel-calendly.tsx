"use client";

import { useEffect } from "react";
import { trackMetaEvent } from "@/lib/meta-track-client";
import { leadParams, scheduleParams } from "@/lib/meta-events";

// Calendly scheduling page for the "call" branch. Themed to match the site.
// A plain iframe (no external Calendly script) keeps the static site free of
// third-party JS; Calendly handles the booking, confirmation e-mails and
// reminders itself.
//
// embed_domain + embed_type are what Calendly's own embed script adds. With
// them the scheduling page posts its events to this window, so the site can
// tell a finished booking from someone who only opened the calendar.
const CALENDLY_URL =
  "https://calendly.com/tomas-hamernik/hamr-labs-konzultace" +
  "?hide_gdpr_banner=1" +
  "&background_color=0a0a0a" +
  "&text_color=f5f5f5" +
  "&primary_color=00f0ff" +
  "&embed_domain=hamrlabs.cz" +
  "&embed_type=Inline";

const CALENDLY_ORIGIN = "https://calendly.com";

// Bookings already reported to Meta, so a repeated message can't count twice.
const trackedBookings = new Set<string>();

type CalendlyMessage = {
  event?: unknown;
  payload?: { event?: { uri?: unknown } };
};

/**
 * Meta Lead + Schedule only once Calendly confirms the booking. Opening the
 * calendar is not a lead: most people look at the slots and leave.
 */
function useCalendlyBookingTracking() {
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== CALENDLY_ORIGIN) return;
      const data = e.data as CalendlyMessage | null;
      if (!data || data.event !== "calendly.event_scheduled") return;
      const uri = data.payload?.event?.uri;
      const key = typeof uri === "string" && uri ? uri : "unknown";
      if (trackedBookings.has(key)) return;
      trackedBookings.add(key);
      trackMetaEvent("Lead", leadParams("call"));
      trackMetaEvent("Schedule", scheduleParams());
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);
}

interface Props {
  /** Fullscreen layout (call branch) vs. embedded inside the modal. */
  fullscreen?: boolean;
}

export function FunnelCalendly({ fullscreen = false }: Props) {
  useCalendlyBookingTracking();

  if (fullscreen) {
    return (
      <iframe
        src={CALENDLY_URL}
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
          src={CALENDLY_URL}
          title="Rezervace konzultace"
          loading="lazy"
          className="funnel-calendly-iframe"
        />
      </div>
    </div>
  );
}
