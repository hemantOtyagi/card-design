"use client";

import { FaRegImage } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";

const imageGallery = [
  "https://images.unsplash.com/photo-1756452442348-36fbd4260a33?q=80&w=687&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1755529582689-7a158b8f9183?q=80&w=735&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1753454116069-a4fba9e75e4c?q=80&w=1332&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1756877468830-9fbf44ee34a8?q=80&w=1170&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1755883200406-1f29bbdde2f5?q=80&w=764&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523978591478-c753949ff840?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1170&auto=format&fit=crop",
];

const NewGrid = () => {
  return (
    <div className="rounded-xl overflow-hidden h-[45vh] w-[60vw]">
      <div className="grid grid-cols-7 grid-rows-4 gap-1 h-full scale-105">
        {/* Main Image */}
        <div className="relative h-full w-full col-span-3 row-span-4">
          <img
            src={imageGallery[0]}
            alt=""
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute h-full w-full hover:bg-black/30 z-20 transition duration-300" />
        </div>

        {/* 2nd Image */}
        <div className="relative h-full w-full col-span-2 row-span-2">
          <img
            src={imageGallery[1]}
            alt=""
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute h-full w-full hover:bg-black/15 z-20 transition duration-300" />
        </div>

        {/* 3rd Image */}
        <div className="relative h-full w-full col-span-2 row-span-2">
          <img
            src={imageGallery[2]}
            alt=""
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute h-full w-full hover:bg-black/15 z-20 transition duration-300" />
        </div>

        {/* 4th Image */}
        <div className="relative h-full w-full col-span-2 row-span-2">
          <img
            src={imageGallery[3]}
            alt=""
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute h-full w-full hover:bg-black/15 z-20 transition duration-300" />
        </div>

        {/* Last Grid Item with Dialog */}
        <Dialog>
          <div className="relative h-full w-full col-span-2 row-span-2">
            <img
              src={imageGallery[4]}
              alt=""
              className="absolute h-full w-full object-cover"
            />

            <DialogTrigger asChild>
              <div className="absolute bottom-5 right-10 flex gap-1  rounded-lg p-2 bg-black/80 hover:bg-black/60 cursor-pointer transition duration-300  z-80">
                <FaRegImage size={"16px"} fill="white" /><spa className="text-white text-xs font-bold">Gallery</spa>
              </div>
            </DialogTrigger>

            <div className="absolute h-full w-full hover:bg-black/15 z-30 transition duration-300" />
          </div>

          {/* Dialog Content showing Masonry Grid */}
          <DialogContent className="sm:max-w-[80vw] sm:max-h-[80vh] overflow-y-auto bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-lg font-semibold mb-4">Event Gallery</h2>
            <div className="columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">
              {imageGallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`gallery-${idx}`}
                  className="rounded-lg w-full object-cover hover:opacity-90 transition"
                />
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default NewGrid;
