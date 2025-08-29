import React from "react";


const mediaItems = [
  { type: "image", src: "https://images.unsplash.com/photo-1756314891315-3295b50658f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "img1" },
  { type: "image", src: "https://images.unsplash.com/photo-1756314355668-7d3056db8600?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "img2" },
  { type: "image", src: "https://images.unsplash.com/photo-1756314355668-7d3056db8600?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "img2" },
  { type: "image", src: "https://images.unsplash.com/photo-1756314355668-7d3056db8600?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "img2" },
  { type: "image", src: "https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "img3" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", src: "https://images.unsplash.com/photo-1710866492245-8b001ba03ce7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", alt: "img4" },
  { type: "image", src: "https://images.unsplash.com/photo-1755467020939-4c3e196545bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "img5" },
  { type: "image", src: "https://plus.unsplash.com/premium_photo-1700558685040-a75735b86bb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "img5" },
  { type: "image", src: "https://images.unsplash.com/photo-1755467020939-4c3e196545bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "img5" },
  { type: "image", src: "https://images.unsplash.com/photo-1756177199716-68a94b825d80?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "img5" },
];

const MasonryGrid = () => {
  return (
    <div className="columns-2 sm:columns-3 lg:columns-4 h-fit gap-4 space-y-4 bg-white p-4 rounded-md shadow-lg max-h-[80vh] overflow-y-auto   ">
      {mediaItems.map((item, idx) =>
        item.type === "image" ? (
          <img
            key={idx}
            src={item.src}
            alt={item.alt || `media-${idx}`}
            className="w-full rounded-xl shadow-md break-inside-avoid"
          />
        ) : (
            <div key={idx} className="col-span-full break-inside-avoid">
              <video
                controls
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            </div>
          )
      )}
    </div>
  );
};

export default MasonryGrid;
