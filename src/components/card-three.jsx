import { motion } from "framer-motion";
import { Heart, Star, MapPin, Calendar, Clock } from "lucide-react";
import { useState } from "react";

export default function ImageCard() {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg group">
      {/* Main Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Beach Party"
        className="w-full h-full object-cover"
      />

      {/* Rating Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-3 left-3 z-10 bg-black/70 text-white text-sm font-medium px-2 py-1 rounded-full flex items-center gap-1"
      >
        <Star size={14} className="text-yellow-400" />
        4.5
      </motion.div>

      {/* Wishlist Button */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setWishlisted(!wishlisted)}
        className="absolute top-3 z-10 right-3 p-2 bg-black/70 rounded-full text-white"
      >
        <Heart
          size={18}
          className={
            wishlisted
              ? "fill-red-500 text-red-500 transition-colors"
              : "transition-colors"
          }
        />
      </motion.button>

      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col justify-end"
      >
        {/* Event Details */}
        <motion.div className="p-4 text-white">
          <h3 className="text-lg font-semibold">Beach Music Festival</h3>

          <div className="flex items-center gap-2 text-sm text-gray-200 mt-1">
            <MapPin size={14} /> Miami, Florida
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-200">
            <Calendar size={14} /> Aug 25, 2025 • 7:00 PM
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-200 mt-1">
            <Clock size={14} /> Duration: 5 hours
          </div>

          {/* Price */}
          <div className="mt-3 text-lg font-semibold text-yellow-300">
            $120 per person
          </div>

          {/* Book Now Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="mt-3 w-full bg-purple-600 hover:bg-purple-700 transition text-white font-medium py-2 px-4 rounded-lg text-sm"
          >
            Book Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
