import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TextOnlyCard() {
  const [expanded, setExpanded] = useState(false);

  const description =
    "Surrounded by the beautiful meadows and panoramic views, Kedarnath is one of the most sacred Hindu temples located in the majestic Himalayas. Enclosed by snow-capped mountains, this divine pilgrimage offers an experience of peace and renewal that every devotee should experience at least once in a lifetime.";

  return (
    <Card className="max-w-sm mx-auto bg-[#212121] text-white rounded-3xl shadow-lg overflow-hidden p-6 gap-2 transition-all hover:shadow-xl">
      {/* Card Header */}
      <CardHeader className="p-0 ">
        <span className="text-xs text-zinc-400">{"Tripper trails"}</span>
        <h2 className="text-xl font-semibold text-white leading-snug">
          Kedarnath Pilgrimage: Divine Journey of Renewal
        </h2>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="p-0">
        <p className="text-sm text-zinc-300 leading-relaxed mb-4">
          {expanded
            ? description
            : description.slice(0, 120) +
              (description.length > 120 ? "..." : "")}
          {description.length > 120 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-400 ml-1 font-medium hover:underline"
            >
              {expanded ? "See Less" : "See More"}
            </button>
          )}
        </p>

        {/* Buttons */}
        <div className="flex justify-between gap-3">
          <Button
            variant="outline"
            className="border-zinc-700 flex-1 text-black hover:bg-zinc-800 hover:text-white rounded-lg py-3 text-sm font-medium"
          >
            Get Details
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 flex-1 text-white rounded-lg py-3 text-sm font-medium">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
