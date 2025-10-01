"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function EventForm() {
  const [allDay, setAllDay] = useState(false);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [recurrence, setRecurrence] = useState("do-not-repeat");
  const [customOpen, setCustomOpen] = useState(false);

  const recurrenceOptions = [
    { value: "do-not-repeat", label: "Do not repeat" },
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly on weekdays" },
    { value: "monthly", label: "Monthly on the first Wednesday" },
    { value: "every-weekday", label: "Every weekday (Mon–Fri)" },
    { value: "custom", label: "Custom" },
  ];

  return (
    <div className="p-4 border rounded-md shadow-sm max-w-md space-y-4">
      

      {/* Batch Title */}
      <div>
        <label className="block mb-1 font-medium">Batch Title</label>
        <input
          type="text"
          placeholder="Enter batch title"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>


      {/* Date */}
      <div>
        <label className="block mb-1 font-medium">Pick a date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>

      {/* All Day checkbox */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={allDay}
          onChange={(e) => setAllDay(e.target.checked)}
        />
        <label className="font-medium">All Day</label>
      </div>

      {/* Time selection (hidden if all day) */}
      {!allDay && (
        <div className="flex items-center space-x-2">
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="border rounded-md p-2"
          />
          <span>-</span>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>
      )}

      {/* Recurrence Dropdown */}
      <div>
        <label className="block mb-1 font-medium">Recurrence</label>
        <select
          value={recurrence}
          onChange={(e) => {
            if (e.target.value === "custom") {
              setCustomOpen(true);
            }
            setRecurrence(e.target.value);
          }}
          className="border rounded-md p-2 w-full"
        >
          {recurrenceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Custom Recurrence Modal */}
      <Dialog open={customOpen} onOpenChange={setCustomOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Custom recurrence</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Repeat every */}
            <div className="flex items-center space-x-2">
              <span>Repeat every</span>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 border rounded-md p-1"
              />
              <select className="border rounded-md p-1">
                <option>day</option>
                <option>week</option>
                <option>month</option>
                <option>year</option>
              </select>
            </div>

            {/* Repeat on */}
            <div>
              <label className="block mb-1 font-medium">Repeat on</label>
              <div className="flex gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                  <label key={d} className="flex items-center space-x-1">
                    <input type="checkbox" />
                    <span>{d}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Ends */}
            <div>
              <label className="block mb-1 font-medium">Ends</label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="end" defaultChecked />
                  <span>Never</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="end" />
                  <span>
                    On{" "}
                    <input
                      type="date"
                      defaultValue="2025-12-31"
                      className="border rounded-md p-1"
                    />
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="end" />
                  <span>
                    After{" "}
                    <input
                      type="number"
                      min="1"
                      defaultValue="13"
                      className="w-16 border rounded-md p-1"
                    />{" "}
                    occurrences
                  </span>
                </label>
              </div>
            </div>

            {/* Save button */}
            <Button onClick={() => setCustomOpen(false)}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
