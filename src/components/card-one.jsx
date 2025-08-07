import { StarIcon, HeartIcon , LocateIcon} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const CardOne = () => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1 }}
      className="w-90 h-72 relative bg-white rounded-3xl flex flex-col justify-end shadow-md cursor-pointer transition-all"
    >
      {/* Image */}
      <div className="absolute -top-24 w-full h-68 rounded-3xl overflow-hidden shadow-xl group">
        <motion.img
          src="https://images.unsplash.com/photo-1574116504481-e06341e984e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D"
          alt="image"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <button className="px-4 py-2  bg-white text-green-800 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            Show Availability
          </button>
        </div>
      </div>

      {/* Rating badge */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="absolute z-20 flex justify-center text-sm items-center gap-1 -top-20 left-4 w-13 h-fit rounded-md bg-[#FDD67E] px-2 py-1"
      >
        <StarIcon fill="black" size={"16px"} /> 4.8
      </motion.div>

      {/* Heart */}
      <motion.div
        whileTap={{ scale: 1.3 }}
        className="absolute z-20 flex justify-center items-center -top-21 right-4 cursor-pointer"
        onClick={() => setLiked(!liked)}
      >
        <HeartIcon
          fill={liked ? "red" : "none"}
          stroke={liked ? "red" : "currentColor"}
          size={"28px"}
        />
      </motion.div>

      {/* Content */}
      <div className="w-full flex justify-center items-center h-28">
        <div className="w-full max-w-full flex items-center justify-center gap-8 font-sans text-gray-800">
          {/* Left Date */}
          <div className="text-center border-r w-24 h-20 flex flex-col justify-center items-center">
            <p className="text-sm tracking-wide text-gray-500">DEC</p>
            <p className="text-4xl font-bold text-green-800">24</p>
          </div>

          {/* Right Content */}
          <div className="flex-1 w-52">
            <div className="flex items-center text-xs text-gray-600 ">
              <span>Reykjavik, Iceland</span>
            </div>

            <h2 className="text-xl font-semibold text-green-900 leading-tight">
              Rafting & Kayaking
            </h2>

            <p className="text-sm text-gray-600  w-52">
              3 hours. wildlife experience
            </p>

            <p className="text-sm text-gray-600 ">
              <span className="font-semibold text-green-800">
                from <b>12,500</b> per person
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardOne;
