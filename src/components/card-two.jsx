import React, { useState } from "react";
import { Heart, StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { formatINR } from "@/lib/utils";

const CardTwo = ({
  image,
  location,
  title,
  duration,
  price, priceLabel = "/person", badge,
  rating,
  tag,
}) => {
  const [liked, setLiked] = useState(false);

  const eventName =
    "Rafting & Kayaking Adventure in the Stunning Glacial Rivers of Iceland";

  return (
    <motion.div
      className="group min-w-xs w-fit h-fit rounded-xl overflow-hidden bg-white border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
      whileHover={{ y: 0 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {/* Image Section */}
      <div className="relative h-58 w-full overflow-hidden rounded-xl shadow-xl">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 bg-yellow-300 text-xs font-medium px-3 py-1 rounded-full">
            {badge}
          </span>
        )}

        {/* Heart */}
        <motion.button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 p-2 bg-[#212121]/60 hover:bg-[#212121]/80 rounded-full transition-colors duration-200"
          whileTap={{ scale: 0.9 }}
        >
          <Heart
            size={20}
            className={liked ? "text-red-500 fill-red-500" : "text-gray-400"}
          />
        </motion.button>

        {/* Rating */}
        {rating && (
          <div className="absolute flex gap-1 justify-center items-center bottom-3 left-3 bg-yellow-200 px-2 py-1 rounded-full text-sm font-medium">
            <StarIcon  size={"16px"} fill="black"/>{rating}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm text-gray-500">{location}</p>
        <h3 className="text-lg w-72 font-semibold text-gray-900 leading-tight line-clamp-2">
          {eventName}
        </h3>
        {duration && (
          <p className="text-sm py-0.5 text-gray-600">{duration}</p>
        )}

        <div className="flex justify-between items-center">
          <p className="flex flex-row items-baseline-last gap-1 flex-nowrap  text-sm text-gray-700 mt-1">
            <span className="text-xs font-normal ">
              from
            </span>
            <span className="text-xl font-bold text-gray-900">{formatINR(price,false)}</span>
            <span className="text-xs font-normal">{priceLabel}</span>
          </p>

          {tag && (
            <span className="inline-block w-fit bg-red-100 text-red-700 text-xs font-medium px-2 py-0.5 rounded-full mt-1">
              {tag}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CardTwo;
