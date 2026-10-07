"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { Question, Step } from "./funnel-data";
import { FunnelCalendar } from "./funnel-calendar";

interface Props {
  step: Step;
  answers: Record<string, string>;
  onAnswer: (id: string, value: string) => void;
  /** Error text per question id, shown under the field (null = no error). */
  chyby?: Record<string, string | null>;
  /** Called when a text field loses focus (the phone reformats itself). */
  onBlur?: (id: string) => void;
}

export function FunnelStep({ step, answers, onAnswer, chyby, onBlur }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const id = requestAnimationFrame(() => {
      el.classList.add("funnel-step--enter");
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const isSplit = step.layout === "split";
  const calendarQuestion = step.questions.find((q) => q.type === "calendar");
  const formQuestions = step.questions.filter((q) => q.type !== "calendar");

  return (
    <div ref={containerRef} className="funnel-step">
      <h2 className="funnel-step-heading">{step.heading}</h2>
      {step.subheading && (
        <p className="funnel-step-subheading">{step.subheading}</p>
      )}

      {isSplit && calendarQuestion ? (
        <div className="funnel-step-split">
          <div className="funnel-step-split-col">
            <span className="funnel-split-label">Kontaktní údaje</span>
            <div className="funnel-step-questions">
              {formQuestions.map((q) => (
                <QuestionField
                  key={q.id}
                  q={q}
                  answers={answers}
                  onAnswer={onAnswer}
                  chyba={chyby?.[q.id] ?? null}
                  onBlur={onBlur}
                />
              ))}
            </div>
          </div>
          <div className="funnel-step-split-col">
            <span className="funnel-split-label">Termín hovoru</span>
            <FunnelCalendar
              value={answers[calendarQuestion.id] || ""}
              onChange={(val) => onAnswer(calendarQuestion.id, val)}
            />
          </div>
        </div>
      ) : (
        <div className="funnel-step-questions">
          {step.questions.map((q) => (
            <QuestionField
              key={q.id}
              q={q}
              answers={answers}
              onAnswer={onAnswer}
              chyba={chyby?.[q.id] ?? null}
              onBlur={onBlur}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function QuestionField({
  q,
  answers,
  onAnswer,
  chyba,
  onBlur,
}: {
  q: Question;
  answers: Record<string, string>;
  onAnswer: (id: string, value: string) => void;
  chyba: string | null;
  onBlur?: (id: string) => void;
}) {
  const chybaId = `${q.id}-chyba`;
  return (
    <div className="funnel-question">
      {q.label && (
        <label htmlFor={q.id} className="funnel-question-label">
          {q.label}
        </label>
      )}

      {q.type === "choice" && q.options && (
        <div className="funnel-choice-grid">
          {q.options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onAnswer(q.id, opt.value)}
              className={cn(
                "funnel-choice-card",
                answers[q.id] === opt.value && "is-selected",
              )}
            >
              <span className="funnel-choice-label">{opt.label}</span>
              {opt.description && (
                <span className="funnel-choice-description">
                  {opt.description}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {(q.type === "text" || q.type === "email" || q.type === "tel") && (
        <input
          id={q.id}
          type={q.type}
          inputMode={q.type === "tel" ? "tel" : undefined}
          value={answers[q.id] || ""}
          onChange={(e) => onAnswer(q.id, e.target.value)}
          onBlur={onBlur ? () => onBlur(q.id) : undefined}
          placeholder={q.placeholder}
          required={q.required}
          aria-invalid={Boolean(chyba)}
          aria-describedby={chyba ? chybaId : undefined}
          className="funnel-input"
        />
      )}

      {q.type === "textarea" && (
        <textarea
          id={q.id}
          value={answers[q.id] || ""}
          onChange={(e) => onAnswer(q.id, e.target.value)}
          placeholder={q.placeholder}
          rows={5}
          required={q.required}
          className="funnel-input funnel-textarea"
        />
      )}

      {q.type === "calendar" && (
        <FunnelCalendar
          value={answers[q.id] || ""}
          onChange={(val) => onAnswer(q.id, val)}
        />
      )}

      {chyba && (
        <span id={chybaId} className="funnel-field-error" role="alert">
          {chyba}
        </span>
      )}
    </div>
  );
}
