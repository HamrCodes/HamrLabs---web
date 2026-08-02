"use client";

// Calendly scheduling page for the "call" branch. Themed to match the site.
// A plain iframe (no external Calendly script) keeps the static site free of
// third-party JS; Calendly handles the booking, confirmation e-mails and
// reminders itself.
const CALENDLY_URL =
  "https://calendly.com/tomas-hamernik/hamr-labs-konzultace" +
  "?hide_gdpr_banner=1" +
  "&background_color=0a0a0a" +
  "&text_color=f5f5f5" +
  "&primary_color=00f0ff";

interface Props {
  /** Fullscreen layout (call branch) vs. embedded inside the modal. */
  fullscreen?: boolean;
}

export function FunnelCalendly({ fullscreen = false }: Props) {
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
