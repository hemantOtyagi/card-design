"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { MapPin, Clock, Star } from "lucide-react";

const ROTATION_RANGE = 20;

 function TiltEventCard({ number, title, location, duration, rating, price, image }) {
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
        className="relative h-[380px] w-80 rounded-2xl bg-gradient-to-br from-indigo-300 to-violet-300 p-4 z-10"
      >
        {/* Background outline number */}
        <span
          className={number < 10?`absolute font-serif -left-22 -bottom-25 text-[180px] p-6 font-bold select-none pointer-events-none z-0 transition-all duration-300 group-hover:text-red-500`:`absolute font-serif -left-44 -bottom-25 text-[180px] p-6 font-bold select-none pointer-events-none z-0 transition-all duration-300 group-hover:text-red-500`}
          
          style={{
            WebkitTextStroke: "2px red",
            WebkitTextFillColor: "red",
            color: "transparent",
          }}
        >
          {number}
        </span>

        {/* Card content */}
        <div
          style={{
            transform: "translateZ(60px)",
            transformStyle: "preserve-3d",
          }}
          className="relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-lg"
        >
          <img
            src={image}
            alt={title}
            className="h-44 w-full object-cover"
            style={{
              transform: "translateZ(40px)",
            }}
          />

          <div className="p-4" style={{ transform: "translateZ(35px)" }}>
            <h2 className="text-lg font-bold text-gray-900">{title}</h2>

            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin size={14} className="mr-1" /> {location}
            </div>

            <div className="flex items-center space-x-5 text-gray-700 text-sm mt-3">
              <div className="flex items-center">
                <Clock size={14} className="mr-1" /> {duration}
              </div>
              <div className="flex items-center">
                <Star size={14} className="mr-1 text-yellow-400" /> {rating}
              </div>
              <div className="font-semibold">${price}</div>
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

export default TiltEventCard;
