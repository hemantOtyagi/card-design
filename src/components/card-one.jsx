import { StarIcon, HeartIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const CardOne = () => {
  const [liked, setLiked] = useState(false);

  const eventName =
    "Rafting & Kayaking Adventure in the Stunning Glacial Rivers of Iceland";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }} 
      whileHover={{ scale: 1 }}
      className="relative w-90 h-78 rounded-3xl bg-white flex flex-col justify-end shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300 "
    >
      {/* Image */}
      <div className="absolute -top-24 w-full h-68 rounded-3xl overflow-hidden shadow-lg group">
        <motion.img
          src="https://images.unsplash.com/photo-1574116504481-e06341e984e1?w=500&auto=format&fit=crop&q=60"
          alt="Rafting Adventure"
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
        />

      </div>

      {/* Rating badge */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="absolute z-20 flex items-center gap-1 -top-20 left-4 bg-[#FDD67E] rounded-md px-2 py-1 text-sm font-medium shadow-sm"
      >
        <StarIcon fill="black" size={16} /> 4.8
      </motion.div>

      {/* Heart icon */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setLiked(!liked)}
        aria-label="Like"
        className="absolute z-20 -top-20 right-4 p-2 bg-white/70 hover:bg-white rounded-full shadow-sm transition-colors duration-200"
      >
        <HeartIcon
          fill={liked ? "red" : "none"}
          stroke={liked ? "red" : "gray"}
          size={24}
        />
      </motion.button>

      {/* Content */}
      <div className="w-full h-34 flex items-center px-4">
        <div className="w-full flex items-center gap-6 font-sans text-gray-800">
          {/* Date */}
          <div className="text-center border-r border-gray-500 w-20 h-24 flex flex-col items-center justify-center py-2">
            <p className="text-xs font-medium tracking-wide text-gray-500">DEC</p>
            <p className="text-3xl font-bold text-green-800">24</p>
          </div>

          {/* Event info */}
          <div className="flex-1 ">
            <p className="text-xs text-gray-600">Reykjavik, Iceland</p>

            <h2 className="text-base font-semibold text-green-900 leading-snug line-clamp-2 mt-0.5">
              {eventName}
            </h2>

            <p className="text-xs text-gray-600 mt-0.5">
              3 hours · Wildlife experience
            </p>

            <p className="text-sm text-gray-700 mt-1">
              <span className="font-semibold text-green-800">
                from <b>₹12,500</b> per person
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardOne;
