"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

/* ------------------ Constants ------------------ */
const WEEK_DAYS = [
  { label: "S", value: "sun" },
  { label: "M", value: "mon" },
  { label: "T", value: "tue" },
  { label: "W", value: "wed" },
  { label: "T", value: "thu" },
  { label: "F", value: "fri" },
  { label: "S", value: "sat" },
];

/* ------------------ Weekly Selector ------------------ */
const WeeklySelector = ({ selectedDays, toggleDay }) => (
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

/* ------------------ Monthly Selector ------------------ */
const MonthlySelector = ({ monthlyType, setMonthlyType }) => (
  <select
    value={monthlyType}
    onChange={(e) => setMonthlyType(e.target.value)}
    className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-primary"
  >
    <option value="day">Monthly on day 3</option>
    <option value="weekday">Monthly on the first Friday</option>
  </select>
);

/* ------------------ Date & Time Picker ------------------ */
const DateTimePicker = ({
  date,
  setDate,
  allDay,
  setAllDay,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}) => (
  <div className="space-y-3">
    <label className="text-sm font-medium">Date</label>
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-primary"
    />

    <label className="flex items-center gap-2 text-sm font-medium">
      <input
        type="checkbox"
        checked={allDay}
        onChange={(e) => setAllDay(e.target.checked)}
        className="accent-primary"
      />
      All Day
    </label>

    {!allDay && (
      <div className="flex items-center gap-2">
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="border rounded-lg p-2 flex-1 focus:ring-2 focus:ring-primary"
        />
        <span>–</span>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="border rounded-lg p-2 flex-1 focus:ring-2 focus:ring-primary"
        />
      </div>
    )}
  </div>
);

/* ------------------ Recurrence Selector ------------------ */
const RecurrenceSelect = ({ recurrence, setRecurrence, setCustomOpen }) => {
  const options = [
    { value: "do-not-repeat", label: "Do not repeat" },
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly on weekdays" },
    { value: "monthly", label: "Monthly on the first Wednesday" },
    { value: "every-weekday", label: "Every weekday (Mon–Fri)" },
    { value: "custom", label: "Custom" },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setRecurrence(value);
    if (value === "custom") setCustomOpen(true);
  };

  return (
    <div>
      <label className="block mb-1 text-sm font-medium">Recurrence</label>
      <select
        value={recurrence}
        onChange={handleChange}
        className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-primary"
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

/* ------------------ Custom Recurrence Modal ------------------ */
const CustomRecurrenceModal = ({
  open,
  setOpen,
  repeatUnit,
  setRepeatUnit,
  monthlyType,
  setMonthlyType,
  selectedDays,
  toggleDay,
}) => {
  const [endOption, setEndOption] = useState("never");
  const [endDate, setEndDate] = useState("");
  const [occurrences, setOccurrences] = useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-94 rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Custom recurrence
          </DialogTitle>
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

        {/* Repeat on */}
        {repeatUnit === "week" && (
          <div>
            <p className="text-sm font-medium mb-2">Repeat on</p>
            <WeeklySelector
              selectedDays={selectedDays}
              toggleDay={toggleDay}
            />
          </div>
        )}
        {repeatUnit === "month" && (
          <div>
            <p className="text-sm font-medium mb-2">Repeat on</p>
            <MonthlySelector
              monthlyType={monthlyType}
              setMonthlyType={setMonthlyType}
            />
          </div>
        )}

        {/* Ends */}
        <div>
          <p className="text-sm font-medium mb-2">Ends</p>
          <div className="space-y-3">
            {/* Never */}
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="end"
                value="never"
                checked={endOption === "never"}
                onChange={() => setEndOption("never")}
              />
              <span>Never</span>
            </label>

            {/* On Date */}
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="end"
                value="on"
                checked={endOption === "on"}
                onChange={() => setEndOption("on")}
              />
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
            </label>

            {/* After occurrences */}
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="end"
                value="after"
                checked={endOption === "after"}
                onChange={() => setEndOption("after")}
              />
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
                />{" "}
              </span>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 pt-6">
          <button
            onClick={() => setOpen(false)}
            className="text-primary font-medium px-3 py-1 rounded-full hover:bg-primary/10"
          >
            Cancel
          </button>
          <Button
            onClick={() => setOpen(false)}
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

/* ------------------ Main Event Form ------------------ */
export default function EventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [recurrence, setRecurrence] = useState("do-not-repeat");
  const [customOpen, setCustomOpen] = useState(false);

  const [repeatUnit, setRepeatUnit] = useState("day");
  const [monthlyType, setMonthlyType] = useState("day");
  const [selectedDays, setSelectedDays] = useState([]);

  useEffect(() => {
    if (repeatUnit !== "week") setSelectedDays([]);
  }, [repeatUnit]);

  const toggleDay = (dayValue) =>
    setSelectedDays((prev) =>
      prev.includes(dayValue)
        ? prev.filter((d) => d !== dayValue)
        : [...prev, dayValue]
    );

  const recurrenceSummary = () => {
    if (recurrence === "custom") {
      if (repeatUnit === "day") return "Repeats daily";
      if (repeatUnit === "week")
        return `Repeats weekly on ${selectedDays
          .map((d) => d.toUpperCase())
          .join(", ")}`;
      if (repeatUnit === "month")
        return monthlyType === "day"
          ? "Repeats monthly on day 3"
          : "Repeats monthly on first Friday";
    }
    const summaryMap = {
      "do-not-repeat": "Does not repeat",
      daily: "Repeats daily",
      weekly: "Repeats weekly",
      monthly: "Repeats monthly",
      "every-weekday": "Repeats every weekday",
    };
    return summaryMap[recurrence] || "";
  };

  return (
    <div className="p-6 rounded-2xl shadow-lg border bg-surface max-w-md space-y-6">
      {/* Title */}
      <input
        type="text"
        placeholder="Add title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-xl font-medium border-b focus:outline-none focus:border-primary p-1"
      />

      {/* Date & Time */}
      <DateTimePicker
        date={date}
        setDate={setDate}
        allDay={allDay}
        setAllDay={setAllDay}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
      />

      {/* Recurrence */}
      <RecurrenceSelect
        recurrence={recurrence}
        setRecurrence={setRecurrence}
        setCustomOpen={setCustomOpen}
      />

      {/* Recurrence summary */}
      {recurrence === "custom" && (
        <p className="text-sm text-gray-600 mt-1">{recurrenceSummary()}</p>
      )}

      {/* Save */}
      <div className="flex justify-end">
        <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
          Save
        </Button>
      </div>

      {/* Custom Modal */}
      <CustomRecurrenceModal
        open={customOpen}
        setOpen={setCustomOpen}
        repeatUnit={repeatUnit}
        setRepeatUnit={setRepeatUnit}
        monthlyType={monthlyType}
        setMonthlyType={setMonthlyType}
        selectedDays={selectedDays}
        toggleDay={toggleDay}
      />
    </div>
  );
}
