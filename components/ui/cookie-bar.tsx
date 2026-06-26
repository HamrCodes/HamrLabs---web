"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "hamr-cookie-consent";

type Consent = "all" | "necessary";

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { value: Consent; expires: number };
    if (Date.now() > parsed.expires) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return parsed.value;
  } catch {
    return null;
  }
}

function saveConsent(value: Consent) {
  try {
    // 12 months validity
    const expires = Date.now() + 365 * 24 * 60 * 60 * 1000;
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ value, expires }));
  } catch {
    /* ignore */
  }
}

export function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setVisible(true);
  }, []);

  const handle = (value: Consent) => {
    saveConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-bar"
      role="region"
      aria-label="Souhlas s cookies"
    >
      <div className="cookie-bar__inner">
        <img
          src="/cookie-neon.png"
          alt=""
          aria-hidden="true"
          className="cookie-bar__icon"
          width={44}
          height={44}
        />
        <p className="cookie-bar__text">
          Používáme sušenky pro lepší poskytování našich služeb.{" "}
          <a href="/cookies" className="cookie-bar__link">
            Více o cookies
          </a>
          .
        </p>
        <div className="cookie-bar__actions">
          <button
            type="button"
            onClick={() => handle("necessary")}
            className="cookie-bar__button cookie-bar__button--secondary"
          >
            Jen nezbytné
          </button>
          <button
            type="button"
            onClick={() => handle("all")}
            className="cookie-bar__button cookie-bar__button--primary"
          >
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}
