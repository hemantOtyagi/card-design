"use client";

export default function DateTimePicker({
  date,
  setDate,
  allDay,
  setAllDay,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}) {
  return (
    <div className="space-y-4 py-2">
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
}
