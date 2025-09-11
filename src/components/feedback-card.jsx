"use client";

import { Star } from "lucide-react";

const FeedbackCard = ({ rating, title, feedback, user, date, avatar }) => {
  return (
    <div className="max-w-md w-full rounded-2xl border border-outline bg-white shadow-sm p-6 transition-colors">
      {/* Rating */}
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, idx) => (
          <Star
            key={idx}
            stroke="none"
            className={`w-5 h-5 ${
              idx < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-outline-variant"
            }`}
          />
        ))}
      </div>

      {/* Title */}
      <h3 className="text-title-medium font-semibold text-on-surface mb-2">
        {title}
      </h3>

      {/* Feedback */}
      <p className="text-body-medium text-on-surface-variant mb-4">
        {feedback}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src={avatar}
            alt={`${user}'s avatar`}
            width={40}
            height={40}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <p className="text-body-medium font-medium text-on-surface">{user}</p>
          <p className="text-body-small text-on-surface-variant">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
