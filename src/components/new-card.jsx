"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { StarIcon, HeartIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { formatINR } from "@/lib/utils";

export default function EventCard() {
  const [liked, setLiked] = useState(false);

  const eventName =
    "Rafting & Kayaking Adventure in the Stunning Glacial Rivers of Iceland";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
      whileHover={{ scale: 1 }}
      className="w-86 h-fit  relative"
    >
<Card className="rounded-3xl p-0 h-full gap-3  shadow-md hover:shadow-lg transition-shadow duration-300 ">
        {/* Image wrapper */}
        <CardHeader  className="relative h-66 overflow-hidden p-0 rounded-3xl group">
          <motion.img
            src="https://images.unsplash.com/photo-1593107757644-25f0b23e9297?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Rafting Adventure"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />


          {/* Heart */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setLiked(!liked)}
            aria-label="Like"
            className="absolute top-4 right-4 p-2 bg-white/40 hover:bg-white rounded-full shadow-sm"
          >
            <HeartIcon
              fill={liked ? "red" : "none"}
              stroke={liked ? "red" : "black"}
              size={22}
            />
          </motion.button>
        </CardHeader>

        {/* Content */}
        <CardContent className="px-5">
          <div className="flex justify-between ">
            <p className="text-sm text-gray-600">Reykjavik, Iceland</p>
          {/* Rating */}
          <div
            className="  flex items-center gap-1 bg-[#fdd67e] px-1 py-0.5 rounded-md  text-xs font-medium shadow-sm "
          >
            <StarIcon fill="black" size={12} /> 4.8
          </div>
          </div>
          <h2 className="text-base font-semibold text-green-900 leading-snug line-clamp-2 mt-1">
            {eventName}
          </h2>
        </CardContent>
        <CardFooter className="px-3 pb-3">
          <div className="flex gap-4">
            {/* Date */}
            <div className="flex flex-col items-center justify-center w-16 border-r border-gray-300 pr-4">
              <p className="text-xs font-medium tracking-wide text-gray-500">DEC</p>
              <p className="text-2xl font-bold text-green-800">24</p>
            </div>

            {/* Event info */}
            <div className="flex-1">
              <p className="text-xs text-gray-600 mt-1">
                3 hours · Wildlife experience
              </p>
              <div className="flex justify-between items-center">
                <p className="flex flex-row items-baseline-last gap-1 flex-nowrap  text-sm text-gray-700 mt-1">
                  <span className="text-xs font-normal ">
                    from
                  </span>
                  <span className="text-md font-bold text-green-900">{formatINR(199000,false)}</span>
                  <span className="text-xs font-normal">{"/person"}</span>
                </p>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
