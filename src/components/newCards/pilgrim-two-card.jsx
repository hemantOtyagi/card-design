import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PilgrimageTwoCard() {
  const [expanded, setExpanded] = useState(false);

  const description =
    "Surrounded by the beautiful meadows and panoramic views, Kedarnath is one of the most sacred Hindu temples located in the majestic Himalayas. Enclosed by snow-capped mountains, this divine pilgrimage offers an experience of peace and renewal that every devotee should experience at least once in a lifetime.";

  return (
    <Card className="max-w-sm mx-auto bg-[#212121] text-white p-0 gap-0 rounded-3xl shadow-lg  overflow-hidden transition-all hover:shadow-xl">
      <CardHeader className="relative h-60 p-0  overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1950"
          alt="Kedarnath Temple"
          className="w-full h-full object-cover absolute"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" /> */}
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <h2 className="text-lg font-semibold leading-snug text-white">
          Kedarnath Pilgrimage: Divine Journey of Renewal
        </h2>

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

        <div className="flex flex-col gap-3 mt-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium">
            Book Now
          </Button>
          <div className="flex gap-2 justify-between">
            <Button
              variant="outline"
              className="flex-1 border-zinc-700 text-black hover:bg-zinc-800 hover:text-white rounded-lg py-3 text-sm font-medium"
            >
              Get Details
            </Button>
            {/* <Button */}
            {/*   variant="outline" */}
            {/*   className="flex-1 border-zinc-700 text-black hover:bg-zinc-800 hover:text-white rounded-lg py-3 text-sm font-medium" */}
            {/* > */}
            {/*   Back to Main Menu */}
            {/* </Button> */}
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
