"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";


const TeamCard = ({ avatar, name, dialogTitle, dialogDescription }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 rounded-xl cursor-pointer border-outline bg-surface text-white p-4 shadow-xs shadow-white hover:shadow-md transition-shadow duration-100">
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
            <p className="text-title-medium font-semibold text-on-surface">
              {name}
            </p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-on-surface">
            {dialogTitle}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-sm text-on-surface leading-relaxed">
          {dialogDescription}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default TeamCard;
