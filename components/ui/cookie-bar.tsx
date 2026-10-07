"use client";

import { useEffect, useRef, useState } from "react";
import { readConsent, saveConsent, type Consent } from "@/lib/cookie-consent";

export function CookieBar() {
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (readConsent() === null) setVisible(true);
  }, []);

  // While the bar is shown, tell the page how much of the bottom it covers
  // (--cookie-bar-space, used in globals.css for scroll-padding-bottom and the
  // body's bottom padding), so it never hides the focused element.
  useEffect(() => {
    const el = barRef.current;
    if (!visible || !el) return;
    const root = document.documentElement;
    const update = () => {
      const space = Math.ceil(window.innerHeight - el.getBoundingClientRect().top);
      root.style.setProperty("--cookie-bar-space", `${Math.max(space, 0)}px`);
    };
    update();
    const observer =
      typeof ResizeObserver === "undefined" ? null : new ResizeObserver(update);
    observer?.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", update);
      root.style.removeProperty("--cookie-bar-space");
    };
  }, [visible]);

  const handle = (value: Consent) => {
    saveConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      ref={barRef}
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
