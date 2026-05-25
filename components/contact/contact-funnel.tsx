"use client";

import { useEffect, useState } from "react";
import { X, ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { callBranchSteps, messageBranchSteps } from "./funnel-data";
import { FunnelStep } from "./funnel-step";
import { submitFunnel } from "@/app/actions/contact";

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

  const steps = branch === "call" ? callBranchSteps : messageBranchSteps;
  const currentStep = steps[stepIndex];
  const isLastStep = stepIndex === steps.length - 1;

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setBranch(initialBranch);
      setStepIndex(0);
      setAnswers({});
      setSubmitted(false);
    }
  }, [isOpen, initialBranch]);

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
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleBack = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  const handleSubmit = async () => {
    if (branch === "call" && answers.slot) {
      persistBookedSlot(answers.slot);
    }
    try {
      await submitFunnel({ branch, answers });
    } catch (err) {
      console.error("[funnel submit error]", err);
    }
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 3000);
  };

  const handleNext = () => {
    if (isLastStep) {
      handleSubmit();
    } else {
      setStepIndex(stepIndex + 1);
    }
  };

  const isStepComplete = currentStep?.questions.every((q) => {
    if (!q.required) return true;
    const val = answers[q.id];
    return val !== undefined && val.trim() !== "";
  });

  if (!isOpen) return null;

  return (
    <div
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
                <span>Domluvit hovor</span>
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
                disabled={!isStepComplete}
                className="funnel-nav-button funnel-nav-button--next"
              >
                <span>{isLastStep ? "Odeslat" : "Pokračovat"}</span>
                <ArrowRight
                  className="w-4 h-4"
                  strokeWidth={2}
                  aria-hidden
                  focusable={false}
                />
              </button>
            </div>
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
        {branch === "call" ? "Hovor je domluvený" : "Zpráva je na cestě"}
      </h3>
      <p className="funnel-success-text">
        {branch === "call"
          ? "Pošlu Vám potvrzení s detaily během 24 hodin."
          : "Ozvu se Vám během 24 hodin."}
      </p>
    </div>
  );
}
