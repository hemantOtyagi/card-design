import { motion } from "framer-motion";
import { MapPin, Clock, Star, DollarSign, ArrowRight } from "lucide-react";

export default function CardFour() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="relative w-96 h-72 rounded-xl overflow-hidden shadow-lg bg-gray-900 text-white"
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Beach Paradise"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative p-5 flex flex-col justify-between h-full">
        {/* Date */}
        <p className="text-xs text-gray-300 tracking-wide">
          Aug 25-28, 2025
        </p>

        {/* Title */}
        <h2 className="text-xl font-bold leading-snug">
          Maldives Island Getaway
        </h2>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-300 mt-1">
          <MapPin size={14} className="mr-1" /> Maldives
        </div>

        {/* Stats */}
        <div className="flex justify-between mt-4 text-sm">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span className="font-semibold">4 Days</span>
            </div>
            <span className="text-gray-400 text-xs">Duration</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center">
              <Star size={16} className="mr-1 text-yellow-400" />
              <span className="font-semibold">4.8</span>
            </div>
            <span className="text-gray-400 text-xs">Rating</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center">
              <DollarSign size={16} className="mr-1" />
              <span className="font-semibold">$1,250</span>
            </div>
            <span className="text-gray-400 text-xs">Per Person</span>
          </motion.div>
        </div>

        {/* Arrow Button */}
        <motion.button
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute top-5 right-5 bg-pink-500 p-2 rounded-full shadow-lg hover:bg-pink-600"
        >
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
}
