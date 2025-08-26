import React from "react";

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 max-w-fit  border p-1 bg-white gap-2 rounded-lg overflow-hidden  max-h-96 ">
      {/* Large main image (left side, spanning all rows) */}
      <div className="col-span-1 row-span-4 relative">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
          alt="Main room"
          className="w-full h-full object-cover rounded-lg hover:scale-101 transition-transform duration-300"
        />
      </div>

      {/* Top right big image */}
      <div className="col-span-1 row-span-2 relative">
        <img
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1074&auto=format&fit=crop"
          alt="Bedroom"
          className="w-full h-full object-cover rounded-lg hover:scale-101 transition-transform duration-300"
        />
      </div>

      {/* Middle row - two side images */}
      <div className="col-span-1 row-span-4 relative">
        <img
          src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=687&auto=format&fit=crop"
          alt="Living room"
          className="w-full h-full object-cover rounded-lg hover:scale-101 transition-transform duration-300"
        />
      </div>

      <div className="col-span-1 row-span-2 relative">
        <img
          src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Dining"
          className="w-full h-full object-cover rounded-lg hover:scale-101 transition-transform duration-300"
        />
      </div>

      {/* Bottom row - three smaller images */}
      {/* <div className="col-span-1 row-span-1 relative"> */}
      {/*   <img */}
      {/*     src="https://plus.unsplash.com/premium_photo-1686090446908-60fbb45f2805?q=80&w=687&auto=format&fit=crop" */}
      {/*     alt="Decor" */}
      {/*     className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300" */}
      {/*   /> */}
      {/* </div> */}
      {/**/}
      <div className="col-span-1 row-span-2 relative">
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop"
          alt="Balcony"
          className="w-full h-full object-cover rounded-lg hover:scale-101 transition-transform duration-300"
        />
      </div>

      <div className="col-span-1 row-span-2 relative">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
          alt="Bathroom"
          className="w-full h-full object-cover rounded-lg hover:scale-101 transition-transform duration-300"
        />
        {/* Show all photos overlay button */}
        <button className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-3 py-1 rounded-md hover:bg-black/80">
          Show all photos
        </button>
      </div>
    </div>
  );
}
