"use client";

export default function RecurrenceSelect({ recurrence, setRecurrence, setCustomOpen }) {
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
}
