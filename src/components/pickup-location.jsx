"use client";

import React from "react";

const PickupLocation = ({ lat, lng, label }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // store safely in env
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=14`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="w-full max-w-3xl mx-auto bg-surface rounded-xl shadow-md overflow-hidden">
      {/* Title */}
      <div className="p-4 border-b border-outline">
        <h2 className="text-title-medium font-semibold text-on-surface">
          Where you'll be
        </h2>
        <p className="text-body-medium text-on-surface-variant">{label}</p>
      </div>

      {/* Map */}
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-96 cursor-pointer">
          <iframe
            title="pickup-location"
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-b-xl pointer-events-none" // prevents iframe from capturing clicks
          ></iframe>
        </div>
      </a>
    </div>
  );
};

export default PickupLocation;
