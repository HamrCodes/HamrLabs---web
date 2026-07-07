"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { hasMarketingConsent, onConsentChange } from "@/lib/cookie-consent";
import { META_PIXEL_ID as PIXEL_ID } from "@/lib/meta-pixel-config";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[] };
  }
}

/**
 * Only loads after the user accepts "all" cookies (marketing consent).
 * "Jen nezbytné" keeps this out entirely. Since consent can change
 * mid-session (bar dismissed after accept), we watch for that event
 * instead of gating once at first paint.
 */
export function MetaPixel() {
  const [enabled, setEnabled] = useState(false);
  const pathname = usePathname();
  const isFirstPathname = useRef(true);

  useEffect(() => {
    setEnabled(hasMarketingConsent());
    return onConsentChange(() => setEnabled(hasMarketingConsent()));
  }, []);

  // Track client-side route changes (App Router doesn't reload the pixel
  // script on navigation, so subsequent page views need an explicit fire).
  // The inline script below already tracks the very first page view.
  useEffect(() => {
    if (!enabled) return;
    if (isFirstPathname.current) {
      isFirstPathname.current = false;
      return;
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, enabled]);

  if (!enabled) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}
