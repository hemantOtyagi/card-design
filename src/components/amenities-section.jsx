import React, { useState } from "react";
import {
  Utensils,
  Briefcase,
  PawPrint,
  Square,
  Package,
  Wifi,
  Car,
  Tv,
  Snowflake,
  Camera,
} from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    { icon: <Utensils className="w-5 h-5" />, label: "Kitchen" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Dedicated workspace" },
    { icon: <PawPrint className="w-5 h-5" />, label: "Pets allowed" },
    { icon: <Square className="w-5 h-5" />, label: "Lift" },
    { icon: <Package className="w-5 h-5" />, label: "Luggage drop-off allowed" },
    { icon: <Wifi className="w-5 h-5" />, label: "Wifi" },
    { icon: <Car className="w-5 h-5" />, label: "Free parking on premises" },
    { icon: <Tv className="w-5 h-5" />, label: "TV" },
    { icon: <Snowflake className="w-5 h-5" />, label: "Air conditioning" },
    {
      icon: <Camera className="w-5 h-5" />,
      label: "Exterior security cameras",
    },
    // extra amenities for demo
    { icon: <Tv className="w-5 h-5" />, label: "Netflix & streaming" },
    { icon: <Snowflake className="w-5 h-5" />, label: "Heating" },
  ];

  const [showAll, setShowAll] = useState(false);

  // Show only first 9 amenities initially
  const visibleAmenities = showAll ? amenities : amenities.slice(0, 9);

  return (
    <section className="w-full p-4 rounded-xl border bg-white">
      <h2 className="text-lg font-semibold mb-4">What this place offers</h2>

      <div className="grid grid-cols-2 gap-4">
        {visibleAmenities.map((amenity, idx) => (
          <div key={idx} className="flex items-center gap-2 text-gray-800">
            {amenity.icon}
            <span className="text-sm">{amenity.label}</span>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <div className="mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 rounded-lg border bg-gray-100 text-sm font-medium hover:bg-gray-200 transition"
        >
          {showAll
            ? "Show fewer amenities"
            : `Show all ${amenities.length} amenities`}
        </button>
      </div>
    </section>
  );
};

export default AmenitiesSection;
