"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function PilgrimThreeCard() {

  const [expanded, setExpanded] = useState(false);

  const description =
    "Surrounded by the beautiful meadows and panoramic views, Kedarnath is one of the most sacred Hindu temples located in the majestic Himalayas. Enclosed by snow-capped mountains, this divine pilgrimage offers an experience of peace and renewal that every devotee should experience at least once in a lifetime.";

  return (
    <Card className="flex items-center justify-between max-w-xs mx-auto bg-[#1e1e1e] text-white rounded-2xl shadow-lg p-5 hover:bg-[#2a2a2a] transition-colors">
      <CardContent className="flex px-0 items-start gap-3">
        {/* Text Section */}
        <div className="flex flex-col gap-1 ">
          <span className="text-xs text-zinc-400">India Today</span>
          <a
            href="https://www.indiatoday.in/education-today"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md text-blue-400 font-semibold hover:underline"
          >
          Kedarnath Pilgrimage: Divine Journey of Renewal
          </a>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {expanded ? description : description.slice(0, 100) + (description.length > 100 ? "..." : "")}
            {description.length > 100 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-400 ml-1 font-medium hover:underline"
              >
                {expanded ? "See Less" : "See More"}
              </button>
            )}
          </p>
        </div>
      </CardContent>

    </Card>
  );
}
