"use client";

import { LuTestTubes } from "react-icons/lu";

const GlowBackground = () => {
  return (
    <div className="relative group inline-block">
      {/* Glow Layer */}
      <div
        className="
          absolute inset-0 
          rounded-xl 
          bg-gradient-to-r from-pink-600 to-purple-600 
          blur-lg opacity-60 
          transition-all duration-700 ease-out
          group-hover:opacity-100 group-hover:scale-105
        "
      />

      {/* Button */}
      <button
        aria-label="View Labs Release 2021.09 updates"
        className="
          relative z-10 flex items-center gap-x-6
          px-7 py-4 
          rounded-xl 
          bg-black text-white 
          shadow-md 
          transition-transform duration-300 ease-out
          group-hover:scale-[1.02] active:scale-[0.98]
        "
      >
        <span className="rotate-12">
          <LuTestTubes className="w-6 h-6 text-red-500" />
        </span>
        <div className="flex divide-x divide-gray-500/40">
          <span className="pr-5">Labs Release 2021.09</span>
          <span className="pl-5">See what’s new →</span>
        </div>
      </button>
    </div>
  );
};

export default GlowBackground;
