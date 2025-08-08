// components/CardFive.tsx
import { motion } from "framer-motion";
import { MapPin, Clock, Star } from "lucide-react";

export default function CardFive() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="relative w-80 rounded-3xl overflow-hidden shadow-lg bg-white"
    >
      {/* Background Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Rafting Adventure"
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />

        {/* Date Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          className="absolute top-4 left-4 bg-white text-center px-3 py-1 rounded-lg shadow-md"
        >
          <p className="text-xs font-bold text-red-600">JUN</p>
          <p className="text-lg font-bold text-gray-900">18</p>
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900">
          Rafting Adventure
        </h2>

        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <MapPin size={14} className="mr-1" /> Aspen, Colorado
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-5 text-gray-700 text-sm mt-4">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" /> 6 Hours
          </div>
          <div className="flex items-center">
            <Star size={14} className="mr-1 text-yellow-400" /> 4.9
          </div>
          <div className="font-semibold">$160</div>
        </div>

        {/* Book Now Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 mt-6 rounded-xl shadow-lg"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
}
