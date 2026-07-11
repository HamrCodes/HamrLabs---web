"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { hasMarketingConsent, onConsentChange } from "@/lib/cookie-consent";

const CLARITY_ID = "xj9qy5kl1u";

/**
 * Microsoft Clarity (heatmaps + session recordings). Loads only after the
 * visitor accepts "all" cookies — same consent gate as the Meta Pixel.
 * "Jen nezbytné" keeps it out entirely. Reacts to consent changes so
 * accepting mid-session loads it without a reload.
 */
export function Clarity() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(hasMarketingConsent());
    return onConsentChange(() => setEnabled(hasMarketingConsent()));
  }, []);

  if (!enabled) return null;

  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `}
    </Script>
  );
}
