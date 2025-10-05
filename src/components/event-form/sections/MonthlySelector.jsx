"use client";

export default function MonthlySelector({ monthlyType, setMonthlyType }) {
  return (
    <select
      value={monthlyType}
      onChange={(e) => setMonthlyType(e.target.value)}
      className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-primary"
    >
      <option value="day">Monthly on day 3</option>
      <option value="weekday">Monthly on the first Friday</option>
    </select>
  );
}
