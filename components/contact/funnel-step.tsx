"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { Question, Step } from "./funnel-data";
import { FunnelCalendar } from "./funnel-calendar";

interface Props {
  step: Step;
  answers: Record<string, string>;
  onAnswer: (id: string, value: string) => void;
}

export function FunnelStep({ step, answers, onAnswer }: Props) {
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
}: {
  q: Question;
  answers: Record<string, string>;
  onAnswer: (id: string, value: string) => void;
}) {
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
          value={answers[q.id] || ""}
          onChange={(e) => onAnswer(q.id, e.target.value)}
          placeholder={q.placeholder}
          required={q.required}
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
    </div>
  );
}
