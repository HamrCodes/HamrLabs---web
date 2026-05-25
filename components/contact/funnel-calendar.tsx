"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const TIME_SLOTS = ["11:00", "13:00", "15:00", "17:00"];
const ALLOWED_WEEKDAYS = [2, 3, 4]; // Tue, Wed, Thu
const BOOKED_KEY = "hamr-booked-slots";

interface BookedSlot {
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
}

interface Props {
  value: string; // "YYYY-MM-DD|HH:MM"
  onChange: (value: string) => void;
}

const MONTHS_CZ = [
  "Leden",
  "Únor",
  "Březen",
  "Duben",
  "Květen",
  "Červen",
  "Červenec",
  "Srpen",
  "Září",
  "Říjen",
  "Listopad",
  "Prosinec",
];

const WEEKDAYS_CZ = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];

function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

function formatDate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function getMondayOfWeek(d: Date): Date {
  const result = new Date(d);
  const day = result.getDay(); // 0=Sun, 1=Mon, ...
  const diff = day === 0 ? -6 : 1 - day;
  result.setDate(result.getDate() + diff);
  result.setHours(0, 0, 0, 0);
  return result;
}

function isAllowedDay(d: Date): boolean {
  const day = d.getDay();
  return ALLOWED_WEEKDAYS.includes(day);
}

function isPast(d: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d < today;
}

function loadBookedSlots(): BookedSlot[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(BOOKED_KEY);
    return raw ? (JSON.parse(raw) as BookedSlot[]) : [];
  } catch {
    return [];
  }
}

export function FunnelCalendar({ value, onChange }: Props) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [weekStart, setWeekStart] = useState<Date>(() =>
    getMondayOfWeek(today),
  );
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([]);

  useEffect(() => {
    setBookedSlots(loadBookedSlots());
  }, []);

  const days = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(weekStart);
      d.setDate(weekStart.getDate() + i);
      return d;
    });
  }, [weekStart]);

  const monthLabel = useMemo(() => {
    const m = days[0].getMonth();
    const y = days[0].getFullYear();
    return `${MONTHS_CZ[m]} ${y}`;
  }, [days]);

  const goPrev = () => {
    const prev = new Date(weekStart);
    prev.setDate(prev.getDate() - 7);
    // Don't go before this week
    if (prev >= getMondayOfWeek(today)) {
      setWeekStart(prev);
    }
  };

  const goNext = () => {
    const next = new Date(weekStart);
    next.setDate(next.getDate() + 7);
    setWeekStart(next);
  };

  const canGoPrev = weekStart > getMondayOfWeek(today);

  const isSlotBooked = (date: string, time: string): boolean => {
    return bookedSlots.some((s) => s.date === date && s.time === time);
  };

  const handleSelect = (date: string, time: string) => {
    onChange(`${date}|${time}`);
  };

  const [selectedDate, selectedTime] = value ? value.split("|") : ["", ""];

  return (
    <div className="funnel-calendar">
      {/* Week header */}
      <div className="funnel-calendar-header">
        <button
          type="button"
          onClick={goPrev}
          disabled={!canGoPrev}
          className="funnel-calendar-nav-btn"
          aria-label="Předchozí týden"
        >
          ←
        </button>
        <span className="funnel-calendar-month">{monthLabel}</span>
        <button
          type="button"
          onClick={goNext}
          className="funnel-calendar-nav-btn"
          aria-label="Další týden"
        >
          →
        </button>
      </div>

      {/* Days row */}
      <div className="funnel-calendar-days">
        {days.map((d, i) => {
          const dateStr = formatDate(d);
          const dayAllowed = isAllowedDay(d) && !isPast(d);
          const isToday = formatDate(d) === formatDate(today);
          return (
            <div
              key={dateStr}
              className={cn(
                "funnel-calendar-day",
                !dayAllowed && "is-disabled",
                isToday && "is-today",
                selectedDate === dateStr && "is-active",
              )}
            >
              <span className="funnel-calendar-day-name">{WEEKDAYS_CZ[i]}</span>
              <span className="funnel-calendar-day-num">{d.getDate()}</span>
            </div>
          );
        })}
      </div>

      {/* Time slots per allowed day */}
      <div className="funnel-calendar-slots">
        {days
          .filter((d) => isAllowedDay(d) && !isPast(d))
          .map((d) => {
            const dateStr = formatDate(d);
            return (
              <div key={dateStr} className="funnel-calendar-slot-row">
                <span className="funnel-calendar-slot-date">
                  {WEEKDAYS_CZ[(d.getDay() + 6) % 7]} {d.getDate()}.
                </span>
                <div className="funnel-calendar-slot-grid">
                  {TIME_SLOTS.map((time) => {
                    const booked = isSlotBooked(dateStr, time);
                    const isSelected =
                      selectedDate === dateStr && selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        disabled={booked}
                        onClick={() => handleSelect(dateStr, time)}
                        className={cn(
                          "funnel-calendar-slot",
                          booked && "is-booked",
                          isSelected && "is-selected",
                        )}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>

      {selectedDate && selectedTime && (
        <div className="funnel-calendar-confirmation">
          Vybráno:{" "}
          <strong>
            {selectedDate.split("-").reverse().join(". ")} v {selectedTime}
          </strong>
        </div>
      )}
    </div>
  );
}
