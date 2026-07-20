"use client";

import { useEffect, useState } from "react";
import { readConsent, saveConsent, type Consent } from "@/lib/cookie-consent";

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
          Používám cookies, abych věděl, jak web funguje a jestli reklamy dávají
          smysl. Analytické a marketingové cookies se zapnou jen s Vaším
          souhlasem.{" "}
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
