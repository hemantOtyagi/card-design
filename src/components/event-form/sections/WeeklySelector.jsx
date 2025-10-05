"use client";
import { WEEK_DAYS } from "@/lib/utils";

export default function WeeklySelector({ selectedDays, toggleDay }) {
  return (
    <div className="flex gap-4 flex-wrap">
      {WEEK_DAYS.map((day) => (
        <button
          key={day.value}
          type="button"
          onClick={() => toggleDay(day.value)}
          className={`w-8 h-8 flex items-center justify-center rounded-full border text-sm transition-colors duration-200 focus:outline-none
            ${selectedDays.includes(day.value) ? "bg-primary text-white" : ""}`}
        >
          {day.label}
        </button>
      ))}
    </div>
  );
}
