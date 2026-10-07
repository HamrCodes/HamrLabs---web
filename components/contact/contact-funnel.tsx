"use client";

import { useEffect, useRef, useState } from "react";
import { X, ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { CHYBA_EMAIL, EMAIL_RE, messageBranchSteps } from "./funnel-data";
import { FunnelStep } from "./funnel-step";
import { FunnelCalendly } from "./funnel-calendly";
import { FunnelKonzultace } from "./funnel-konzultace";
import type { KonzultaceKontakt } from "@/lib/submit-konzultace";
import { submitFunnel } from "@/lib/submit-funnel";
import { trackMetaEvent } from "@/lib/meta-track-client";
import { contactParams, leadParams } from "@/lib/meta-events";
import { overTelefon } from "@/lib/telefon";

const BOOKED_KEY = "hamr-booked-slots";

function persistBookedSlot(slot: string) {
  if (typeof window === "undefined" || !slot) return;
  const [date, time] = slot.split("|");
  if (!date || !time) return;
  try {
    const raw = localStorage.getItem(BOOKED_KEY);
    const existing = raw ? JSON.parse(raw) : [];
    existing.push({ date, time });
    localStorage.setItem(BOOKED_KEY, JSON.stringify(existing));
  } catch {
    /* ignore */
  }
}

type Branch = "call" | "message";

/**
 * Makes everything outside `el` inert (siblings of `el` and of each of its
 * ancestors up to <body>), so Tab and screen readers stay in the dialog.
 * Elements that were inert already are left alone. Returns the undo.
 */
function inertOutside(el: HTMLElement): () => void {
  const changed: HTMLElement[] = [];
  let node: HTMLElement = el;
  while (node.parentElement && node !== document.body) {
    const parent: HTMLElement = node.parentElement;
    for (const sibling of Array.from(parent.children)) {
      if (sibling === node || !(sibling instanceof HTMLElement) || sibling.inert) continue;
      sibling.inert = true;
      changed.push(sibling);
    }
    node = parent;
  }
  return () => {
    for (const element of changed) element.inert = false;
  };
}

interface Props {
  isOpen: boolean;
  initialBranch: Branch;
  onClose: () => void;
}

export function ContactFunnel({ isOpen, initialBranch, onClose }: Props) {
  const [branch, setBranch] = useState<Branch>(initialBranch);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const [sending, setSending] = useState(false);
  // Errors under the contact fields show only after the first send attempt.
  const [zkouseno, setZkouseno] = useState(false);
  // Kontakt z formuláře před kalendářem. Dokud není, kalendář se neukáže.
  const [kontakt, setKontakt] = useState<KonzultaceKontakt | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const fullscreen = branch === "call" && kontakt !== null && !submitted;

  // The "call" branch is now Calendly; only the "message" branch runs the
  // step-based Web3Forms flow.
  const steps = messageBranchSteps;
  const currentStep = steps[stepIndex];
  const isLastStep = stepIndex === steps.length - 1;

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setBranch(initialBranch);
      setStepIndex(0);
      setAnswers({});
      setSubmitted(false);
      setZkouseno(false);
      setKontakt(null);
    }
  }, [isOpen, initialBranch]);

  // Modal focus: while open, the rest of the page is inert (Tab stays here)
  // and on close the focus returns to the link or button that opened it.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    const active = document.activeElement;
    const opener =
      active instanceof HTMLElement && active !== document.body ? active : null;
    const undoInert = inertOutside(dialog);
    return () => {
      undoInert();
      // A link in the closed mobile menu is inert by now and cannot take it.
      if (opener?.isConnected && !opener.closest("[inert]")) {
        opener.focus({ preventScroll: true });
      }
    };
  }, [isOpen]);

  // Focus moves into the dialog when it opens and again when the contact
  // form gives way to the fullscreen calendar (its button is gone then).
  useEffect(() => {
    if (isOpen) dialogRef.current?.focus({ preventScroll: true });
  }, [isOpen, fullscreen]);

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC closes
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleBranchSwitch = (newBranch: Branch) => {
    if (newBranch === branch) return;
    setBranch(newBranch);
    setStepIndex(0);
    setAnswers({});
    setZkouseno(false);
    setKontakt(null);
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleBack = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
    setZkouseno(false);
  };

  // Same checks as the form before Calendly: the phone against the CZ, SK,
  // DE, PL and AT numbering plans (lib/telefon), the e-mail by EMAIL_RE.
  // They recompute live, so an error disappears as soon as it is fixed.
  const telefon = overTelefon(answers.phone ?? "");
  const email = (answers.email ?? "").trim();
  const chybyKontaktu: Record<string, string | null> = {
    phone: telefon.ok ? null : telefon.chyba,
    email: EMAIL_RE.test(email) ? null : CHYBA_EMAIL,
  };

  // A valid number shows in the international form after leaving the field
  // ("+420 774 964 919"), so the visitor sees what goes out.
  const handleBlur = (questionId: string) => {
    if (questionId === "phone" && telefon.ok && answers.phone !== telefon.hezky) {
      handleAnswer("phone", telefon.hezky);
    }
  };

  const handleSubmit = async (overene: Record<string, string>) => {
    if (branch === "call" && answers.slot) {
      persistBookedSlot(answers.slot);
    }

    // Only show the success screen if the message actually went out —
    // otherwise the visitor thinks they reached us when they did not.
    setSending(true);
    setSendFailed(false);
    let ok = false;
    try {
      ({ ok } = await submitFunnel({ branch, answers: overene }));
    } catch (err) {
      console.error("[funnel submit error]", err);
    }
    setSending(false);

    if (!ok) {
      setSendFailed(true);
      return;
    }

    // Meta: Lead only once the message really reached us (a failed send and
    // its retry must not count as two leads), plus the branch-specific event
    // (Contact for a written message). A Calendly
    // booking reports itself from FunnelCalendly. Parameters come from
    // lib/meta-events so both halves of the event, browser and server, carry
    // the shape Meta documents for these standard events. email/phone go to
    // the CAPI relay for server-side match quality; the relay hashes them
    // before they reach Meta. The phone is already E.164.
    const userData = { email: overene.email, phone: overene.phone, name: overene.name };
    trackMetaEvent("Lead", leadParams(branch), userData);
    if (branch === "message") {
      trackMetaEvent("Contact", contactParams(), userData);
    }

    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 3000);
  };

  const handleNext = () => {
    if (!isLastStep) {
      setStepIndex(stepIndex + 1);
      return;
    }
    setZkouseno(true);
    // An invalid phone or e-mail stays in the form with the error under the
    // field; nothing goes to the relay.
    if (!telefon.ok || chybyKontaktu.email) return;
    handleSubmit({ ...answers, email, phone: telefon.e164 });
  };

  const isStepComplete = currentStep?.questions.every((q) => {
    if (!q.required) return true;
    const val = answers[q.id];
    return val !== undefined && val.trim() !== "";
  });

  if (!isOpen) return null;

  // Call branch: first the short contact form (in the modal), then fullscreen
  // Calendly with a single close button and the contact prefilled, so booking
  // a slot has the whole screen and no surrounding chrome.
  if (fullscreen) {
    return (
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="funnel-backdrop funnel-backdrop--full"
        role="dialog"
        aria-modal="true"
        aria-label="Rezervace konzultace"
      >
        <button
          type="button"
          onClick={onClose}
          className="funnel-close funnel-close--full"
          aria-label="Zavřít"
        >
          <X className="w-6 h-6" strokeWidth={2} aria-hidden />
        </button>
        <FunnelCalendly fullscreen kontakt={kontakt} />
      </div>
    );
  }

  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      className="funnel-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Kontaktní formulář"
    >
      <button
        type="button"
        onClick={onClose}
        className="funnel-close"
        aria-label="Zavřít formulář"
      >
        <X className="w-5 h-5" strokeWidth={1.5} aria-hidden />
      </button>

      <div className="funnel-container">
        {submitted ? (
          <FunnelSuccess branch={branch} />
        ) : (
          <>
            {/* Switch toggle */}
            <div
              className="funnel-switch"
              role="tablist"
              aria-label="Typ kontaktu"
            >
              <button
                type="button"
                role="tab"
                aria-selected={branch === "call"}
                onClick={() => handleBranchSwitch("call")}
                className={cn(
                  "funnel-switch-option",
                  branch === "call" && "is-active",
                )}
              >
                <Phone
                  className="w-4 h-4"
                  strokeWidth={1.5}
                  aria-hidden
                  focusable={false}
                />
                <span>Nezávazná konzultace</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={branch === "message"}
                onClick={() => handleBranchSwitch("message")}
                className={cn(
                  "funnel-switch-option",
                  branch === "message" && "is-active",
                )}
              >
                <Mail
                  className="w-4 h-4"
                  strokeWidth={1.5}
                  aria-hidden
                  focusable={false}
                />
                <span>Napsat zprávu</span>
              </button>
            </div>

            {branch === "call" ? (
              <FunnelKonzultace onDone={setKontakt} />
            ) : (
              <>
            {/* Progress */}
            <div
              className="funnel-progress"
              aria-label={`Krok ${stepIndex + 1} z ${steps.length}`}
            >
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "funnel-progress-dot",
                    idx <= stepIndex && "is-active",
                  )}
                />
              ))}
              <span className="funnel-progress-label">
                {stepIndex + 1} / {steps.length}
              </span>
            </div>

            {/* Step content (key forces remount + slide-in anim per step) */}
            <FunnelStep
              key={`${branch}-${stepIndex}`}
              step={currentStep}
              answers={answers}
              onAnswer={handleAnswer}
              chyby={zkouseno && isLastStep ? chybyKontaktu : undefined}
              onBlur={handleBlur}
            />

            {/* Navigation */}
            <div className="funnel-nav">
              <button
                type="button"
                onClick={handleBack}
                disabled={stepIndex === 0}
                className="funnel-nav-button funnel-nav-button--back"
              >
                <ArrowLeft
                  className="w-4 h-4"
                  strokeWidth={2}
                  aria-hidden
                  focusable={false}
                />
                <span>Zpět</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!isStepComplete || sending}
                className="funnel-nav-button funnel-nav-button--next"
              >
                <span>
                  {!isLastStep
                    ? "Pokračovat"
                    : sending
                      ? "Odesílám..."
                      : "Odeslat zprávu"}
                </span>
                <ArrowRight
                  className="w-4 h-4"
                  strokeWidth={2}
                  aria-hidden
                  focusable={false}
                />
              </button>
            </div>

            {isLastStep && (
              <>
                {sendFailed && (
                  <p className="funnel-error" role="alert">
                    Něco se pokazilo. Zkuste to prosím znovu, nebo mi napište
                    rovnou na{" "}
                    <a href="mailto:tomas.hammernik@gmail.com">
                      tomas.hammernik@gmail.com
                    </a>
                    .
                  </p>
                )}
                <p className="funnel-microcopy">
                  Odpovídám do 24 hodin. Vaše údaje nikam dál nepředávám.
                </p>
              </>
            )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function FunnelSuccess({ branch }: { branch: Branch }) {
  return (
    <div className="funnel-success">
      <div className="funnel-success-icon" aria-hidden>
        ✓
      </div>
      <h3 className="funnel-success-title">
        {branch === "call" ? "Díky, hovor je domluvený" : "Díky, zpráva dorazila"}
      </h3>
      <p className="funnel-success-text">
        {branch === "call"
          ? "Potvrzení s detaily Vám pošlu do 24 hodin."
          : "Ozvu se Vám do 24 hodin."}
      </p>
    </div>
  );
}
