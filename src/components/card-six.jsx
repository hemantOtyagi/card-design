"use client";

import { motion } from "framer-motion";
import { Heart, Tag, Clock, MapPin, Star } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from "@/components/ui/card"; // shadcn card imports

export default function FlightCard() {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="w-80 rounded-3xl overflow-hidden shadow-lg bg-white flex flex-col p-2 border-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col"
      >
        {/* Image with like button */}
        <CardHeader className="relative h-72  w-full p-0 rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1698472505070-6d3b90afb530?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Whale Watching Tour"
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
          />

          {/* Like Button with micro-interaction */}
          <motion.button
            onClick={() => setLiked(!liked)}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            animate={{ scale: liked ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
            aria-label="Like"
          >
            <Heart
              size={20}
              fill={liked ? "red" : "none"}
              stroke={liked ? "red" : "black"}
            />
          </motion.button>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-5 pb-0">
          {/* Location + Rating */}
          <div className="flex justify-between items-center">
            <span className="flex items-center text-gray-600 text-sm">
              <MapPin size={16} className="mr-1" />
              Reykjavik, Iceland
            </span>
            <div className="flex items-center text-yellow-500 text-sm">
              <Star size={16} className="mr-1" />
              4.8
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-start  px-5 pb-5 pt-2">
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-900 mt-1">
            Whale Watching Tour
          </h2>

          {/* Duration */}
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <Clock size={16} className="mr-1" />
            3 hours • Wildlife experience
          </div>

          {/* Price */}
          <div className="flex items-center gap-1 mt-3 text-sm text-gray-700">
            <Tag size={16} className="text-gray-500" />
            <span>
              from{" "}
              <span className="font-semibold text-gray-900">₹199,000</span>
              <span className="text-gray-500"> / person</span>
            </span>
          </div>
        </CardFooter>
      </motion.div>
    </Card>
  );
}
