"use client";

import React from "react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TeamCardProps {
  avatar: string;
  name: string;
  dialogTitle: string;
  dialogDescription: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  avatar,
  name,
  dialogTitle,
  dialogDescription,
}) => {
  const { theme } = useTheme();

  // dynamic classes based on theme
  const cardClasses =
    theme === "dark"
      ? "bg-[#1e1e1e] border-gray-700 text-white shadow-white/20"
      : "bg-white border-gray-300 text-gray-900 shadow-gray-300/40";

  const nameClasses =
    theme === "dark" ? "text-white" : "text-gray-900";

  const dialogTitleClasses =
    theme === "dark" ? "text-white" : "text-gray-900";

  const dialogDescriptionClasses =
    theme === "dark" ? "text-gray-300" : "text-gray-600";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`flex items-center gap-4 rounded-xl cursor-pointer border p-4 shadow-sm hover:shadow-md transition-shadow duration-150 ${cardClasses}`}
        >
          {/* Avatar */}
          <div className="relative h-15 w-15 rounded-full overflow-hidden border border-outline-variant">
            <img
              src={avatar}
              alt={name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <p className={`text-title-medium font-semibold ${nameClasses}`}>
              {name}
            </p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className={`text-lg font-bold ${dialogTitleClasses}`}>
            {dialogTitle}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription
          className={`text-sm leading-relaxed ${dialogDescriptionClasses}`}
        >
          {dialogDescription}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default TeamCard;
