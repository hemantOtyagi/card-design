import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatINR(){
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format;
}

export const WEEK_DAYS = [
  { label: "S", value: "sun" },
  { label: "M", value: "mon" },
  { label: "T", value: "tue" },
  { label: "W", value: "wed" },
  { label: "T", value: "thu" },
  { label: "F", value: "fri" },
  { label: "S", value: "sat" },
];
