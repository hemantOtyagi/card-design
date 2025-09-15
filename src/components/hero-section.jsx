"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-sm overflow-hidden border border-outline transition hover:shadow-md space-y-6">
      {/* Image */}
      <div className="relative w-full h-[45vh] overflow-hidden rounded-xl shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1756916475341-ef71802fe5d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="travel"
          className="absolute inset-0 h-full w-full object-cover z-10"
        />
      </div>

      {/* Heading */}
      <div className="flex justify-between w-full " >
        <div className="self-start space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-on-surface">
            Tripper Trails
          </h1>
          <p className="text-lg text-muted-foreground">
            Backpacking international trips
          </p>
        </div>
        <div className="rounded-sm overflow-hidden  z-30 h-20 w-20" >
          <div className="relative w-full h-full   overflow-hidden  ">
            <img
              src="/tripper.png"
              alt="travel"
              className="absolute inset-0 h-full w-full object-cover z-10 rounded-full"
            />
          </div> 
        </div>
      </div>

      {/* About Us */}
      <div className="self-start w-full space-y-3">
        <h2 className="text-xl font-medium text-on-surface border-b pb-2">
          About Us
        </h2>

        <div>
          {/* Collapsed */}
          {!expanded && (
            <p className="text-base text-on-surface-variant leading-relaxed line-clamp-3">
              We are a travel company that specializes in backpacking
              international trips. Our mission is to provide affordable and
              adventurous travel experiences for young travelers. We are a
              travel company that specializes in backpacking international
              trips. Our mission is to provide affordable and adventurous travel
              experiences for young travelers.
            </p>
          )}

          {/* Expanded */}
          {expanded && (
            <p className="text-base text-on-surface-variant leading-relaxed">
              We are a travel company that specializes in backpacking
              international trips. Our mission is to provide affordable and
              adventurous travel experiences for young travelers. We are a
              travel company that specializes in backpacking international
              trips. Our mission is to provide affordable and adventurous travel
              experiences for young travelers. We are a travel company that
              specializes in backpacking international trips. Our mission is to
              provide affordable and adventurous travel experiences for young
              travelers.
            </p>
          )}
        </div>

        {/* Toggle */}
        <Button
          variant="link"
          className="mt-1 text-primary text-sm px-0 font-medium"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Read less" : "Read more"}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
