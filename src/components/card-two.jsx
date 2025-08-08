import React, { useState } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const CardTwo = ({
  image,
  location,
  title,
  duration,
  price,
  priceLabel = "per person",
  badge,
  rating,
  tag,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      className="min-w-sm h-full w-fit rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative h-56 shadow-2xl rounded-2xl overflow-hidden w-full">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 bg-yellow-300 text-xs font-semibold px-3 py-1 rounded">
            {badge}
          </span>
        )}

        {/* Heart Icon */}
        <motion.button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
          whileTap={{ scale: 0.9 }}
        >
          <Heart
            size={22}
            className={liked ? "text-red-500 fill-red-500" : "text-gray-400"}
          />
        </motion.button>

        {/* Rating */}
        <div className="absolute bottom-3 left-3 bg-yellow-200 px-1.5 py-0.5 rounded flex items-center text-sm font-medium">
          <span className="text-black">★ {rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-grow gap-y-0.5">
        <p className="text-xs text-gray-500">{location}</p>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{duration}</p>

        <p className="text-sm text-gray-700">
          From{" "}
          <span className="text-xl font-bold text-gray-900">₹{price}</span>{" "}
          <span className="text-sm font-normal">{priceLabel}</span>
        </p>

        {tag && (
          <p className="inline-block w-fit bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded">
            {tag}
          </p>
        )}

        {/* Buttons pinned at bottom */}
        <div className="flex gap-2 mt-auto pt-3">
          <motion.button
            className="w-full border border-blue-600 hover:bg-blue-600 text-blue-600 font-medium py-2 px-4 hover:text-white rounded-lg text-sm"
            whileTap={{ scale: 0.97 }}
          >
            Check availability
          </motion.button>
          <motion.button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm"
            whileTap={{ scale: 0.97 }}
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CardTwo;
