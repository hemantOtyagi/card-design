import React, { useState } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const CardTwo = () => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      className="min-w-sm h-fit w-fit rounded-2xl overflow-hidden shadow-sm bg-white"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Image with overlay badges */}
      <div className="relative h-46 w-full">
        <motion.img
          src="https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* NEW badge */}
        <span className="absolute top-3 left-3 bg-yellow-300 text-xs font-semibold px-3 py-1 rounded">
          NEW
        </span>

        {/* Heart icon */}
        <motion.button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 p-1"
          whileTap={{ scale: 0.9 }}
        >
          <Heart
            size={22}
            className={liked ? "text-red-500 fill-red-500" : "text-gray-400"}
          />
        </motion.button>

        {/* Rating */}
        <div className="absolute bottom-3 left-3 bg-yellow-200 px-1.5 py-0.5 rounded flex items-center text-sm font-medium">
          <span className="text-black">★ 4.8</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-1">
        <p className="text-xs text-gray-500">Reykjavik, Iceland</p>
        <h3 className="text-lg font-semibold text-gray-900">
          Whale watching tour
        </h3>
        <p className="text-sm text-gray-600">3 hours • Wildlife experience</p>

        <p className="text-sm text-gray-700">
          From{" "}
          <span className="text-xl font-bold text-gray-900">₹12,500</span>{" "}
          <span className="text-sm font-normal">per person</span>
        </p>

        <p className="inline-block bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded">
          Limited spots
        </p>

        <motion.button
          className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm"
          whileTap={{ scale: 0.97 }}
        >
          Check availability
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CardTwo;
