"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import WeeklySelector from "./WeeklySelector";
import MonthlySelector from "./MonthlySelector";

export default function CustomRecurrenceModal({
  open,
  setOpen,
  repeatUnit,
  setRepeatUnit,
  monthlyType,
  setMonthlyType,
  selectedDays,
  toggleDay,
}) {
  const [endOption, setEndOption] = useState("never");
  const [endDate, setEndDate] = useState("");
  const [occurrences, setOccurrences] = useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-94 rounded-2xl  gap-3">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Custom recurrence</DialogTitle>
        </DialogHeader>

        {/* Repeat every */}
        <div className="flex items-center gap-3">
          <span className="text-sm">Repeat every</span>
          <input
            type="number"
            min="1"
            value={1}
            className="w-16 border rounded-lg p-2 focus:ring-2 focus:ring-primary"
          />
          <select
            value={repeatUnit}
            onChange={(e) => setRepeatUnit(e.target.value)}
            className="border rounded-lg p-2 focus:ring-2 focus:ring-primary"
          >
            <option value="day">day</option>
            <option value="week">week</option>
            <option value="month">month</option>
            <option value="year">year</option>
          </select>
        </div>

        {/* Conditional Repeat */}
        {repeatUnit === "week" && (
          <div className="mt-3">
            <p className="text-sm font-medium mb-2">Repeat on</p>
            <WeeklySelector selectedDays={selectedDays} toggleDay={toggleDay} />
          </div>
        )}
        {repeatUnit === "month" && (
          <div className="mt-3">
            <p className="text-sm font-medium mb-2">Repeat on</p>
            <MonthlySelector monthlyType={monthlyType} setMonthlyType={setMonthlyType} />
          </div>
        )}

        {/* Ends */}
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Ends</p>
          <div className="space-y-3">
            {["never", "on", "after"].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="end"
                  value={option}
                  checked={endOption === option}
                  onChange={() => setEndOption(option)}
                />
                {option === "on" ? (
                  <span>
                    On &nbsp;
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      disabled={endOption !== "on"}
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-primary disabled:opacity-50"
                    />
                  </span>
                ) : option === "after" ? (
                  <span>
                    After &nbsp;
                    <input
                      type="number"
                      placeholder="5 occurrences"
                      min="1"
                      value={occurrences}
                      onChange={(e) => setOccurrences(e.target.value)}
                      disabled={endOption !== "after"}
                      className="w-36 border rounded-lg p-2 focus:ring-2 focus:ring-primary disabled:opacity-50"
                    />
                  </span>
                ) : (
                  <span>Never</span>
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 pt-6">
          <button onClick={() => setOpen(false)} className="text-primary font-medium px-3 py-1 rounded-full hover:bg-primary/10">
            Cancel
          </button>
          <Button onClick={() => setOpen(false)} className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
