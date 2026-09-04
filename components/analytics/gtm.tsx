"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { hasMarketingConsent, onConsentChange } from "@/lib/cookie-consent";
import { GTM_ID } from "@/lib/gtm-config";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Google Tag Manager.
 *
 * Loads only after the visitor accepts "all" cookies. That is stricter than
 * Google's own recommendation (they suggest loading the container always and
 * holding tags back with Consent Mode), but our cookie policy promises that
 * with "Jen nezbytné" nothing loads at all, and the page has to keep that
 * promise.
 *
 * Consent Mode v2 signals are still pushed, in the documented order (default
 * denied, then update), so tags added inside GTM behave correctly and Google
 * can model conversions.
 *
 * The <noscript> iframe from Google's install snippet is deliberately left
 * out: it would fire the container for visitors without JavaScript, who never
 * saw the cookie bar and so never consented. Without JavaScript no GTM tag
 * would run anyway, so nothing is lost.
 */
export function GoogleTagManager() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(hasMarketingConsent());
    return onConsentChange(() => setEnabled(hasMarketingConsent()));
  }, []);

  if (!enabled) return null;

  return (
    <Script id="gtm" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'granted',
          security_storage: 'granted'
        });
        gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          analytics_storage: 'granted'
        });
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
  );
}
