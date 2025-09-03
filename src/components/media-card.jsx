import React from "react";

// Media Data
export const mediaItems = [
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1000&q=80",
    alt: "Luxury Bedroom",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1629078691412-ffc8e1bcfaf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=m3wxmja3fdb8mhxzzwfyy2h8mjj8fg1vzgvybiuymgjhdghyb29tfgvufdb8fdb8fhww",
    alt: "Cozy Bedroom",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?w=500&auto=format&fit=crop&q=60",
    alt: "Modern Kitchen",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1676968003305-307c441dbbd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVybiUyMGJhdGhyb29tfGVufDB8fDB8fHww",
    alt: "Dining Area",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1652903761255-4fbf11cff931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVybiUyMGJhdGhyb29tfGVufDB8fDB8fHww",
    alt: "Modern Bathroom",
  },
];

// Media Card Component
// MediaCard.jsx
const MediaCard = ({ item, index }) => {
  if (item.type === "image") {
    return (
      <div className="h-[250px] w-full break-inside-avoid">
        <img
          key={index}
          src={item.src}
          alt={item.alt || `media-${index}`}
          loading="lazy"
          className="w-full h-full rounded-xl object-fill shadow-md"
        />
      </div>
    );
  }

  if (item.type === "video") {
    return (
      <div key={index} className="h-[480px] w-full break-inside-avoid">
        <video
          controls
          className="w-full h-full object-fill rounded-xl shadow-lg"
        >
          <source src={item.src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return null;
};

export default MediaCard;
