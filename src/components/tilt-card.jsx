"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { MapPin, Clock, Star } from "lucide-react";

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export default function TiltEventCard() {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const px = (e.clientX - rect.left) / width;
    const py = (e.clientY - rect.top) / height;

    const rY = (px - 0.5) * ROTATION_RANGE;
    const rX = (py - 0.5) * -ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[380px] w-80 rounded-2xl bg-gradient-to-br from-indigo-300 to-violet-300 p-4"
    >
      <div
        style={{
          transform: "translateZ(60px)",
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-lg"
      >
        <img
          src="https://images.unsplash.com/photo-1594026634827-fe99c0a22e83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D"
          alt="Rafting Event"
          className="h-44 w-full object-cover"
          style={{
            transform: "translateZ(40px)",
          }}
        />

        <div className="p-4" style={{ transform: "translateZ(35px)" }}>
          <h2 className="text-lg font-bold text-gray-900">Rafting Adventure</h2>

          <div className="flex items-center text-gray-500 text-sm mt-1">
            <MapPin size={14} className="mr-1" /> Aspen, Colorado
          </div>

          <div className="flex items-center space-x-5 text-gray-700 text-sm mt-3">
            <div className="flex items-center">
              <Clock size={14} className="mr-1" /> 6 Hours
            </div>
            <div className="flex items-center">
              <Star size={14} className="mr-1 text-yellow-400" /> 4.9
            </div>
            <div className="font-semibold">$160</div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 mt-4 rounded-lg shadow-md"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
