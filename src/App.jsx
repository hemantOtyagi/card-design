import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { Button } from "./components/button";
import CardOne from "./components/card-one";
import CardTwo from "./components/card-two";
import CardThree from "./components/card-three";
import CardFour from "./components/card-four";
import TravelEventCard from "./components/card-five";
import CardFive from "./components/card-five";
import TiltEventCard from "./components/tilt-card";
import NumberOutline from "./components/number-outline";



const events = [
  {
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=1173",
    location: "Reykjavik, Iceland",
    title: "Whale Watching Tour",
    duration: "3 hours • Wildlife experience",
    price: 12500,
    badge: "NEW",
    rating: 4.8,
    tag: "Limited spots",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1173",
    location: "Maldives",
    title: "Scuba Diving Adventure",
    duration: "5 hours • Underwater paradise",
    price: 18999,
    badge: "HOT",
    rating: 4.9,
    tag: "Best seller",
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1173",
    location: "Paris, France",
    title: "Eiffel Tower Night Tour",
    duration: "2 hours • City lights",
    price: 8500,
    badge: "POPULAR",
    rating: 4.7,
  },
  {
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1173",
    location: "Swiss Alps, Switzerland",
    title: "Mountain Hiking Expedition",
    duration: "8 hours • Nature escape",
    price: 15500,
    badge: "NEW",
    rating: 4.9,
    tag: "Only 3 left",
  },
  {
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1173",
    location: "Kyoto, Japan",
    title: "Cherry Blossom Walking Tour",
    duration: "4 hours • Cultural experience",
    price: 9900,
    badge: "SEASONAL",
    rating: 4.8,
  },
];

const event = Array.from({ length: 1 }, (_, i) => ({
  number: i + 1,
  title: `Adventure Event ${i + 1}`,
  location: `Location ${i + 1}`,
  duration: `${2 + i} Hours`,
  rating: (4.5 + (i % 5) * 0.1).toFixed(1),
  price: (100 + i * 20).toFixed(2),
  image: "https://images.unsplash.com/photo-1594026634827-fe99c0a22e83?w=500&auto=format&fit=crop&q=60"
}));

const Example = () => {
  return (
    <div className="grid w-full  h-screen place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      {/* <CardOne/> */}
      {/* <CardTwo/> */}
      {/* <CardThree/> */}
      {/* <CardFour/> */}
      {/* <CardFive/> */}
      {/* <TiltEventCard/> */}

      {/* {events.map((event, idx) => ( */}
      {/*   <CardTwo key={idx} {...event} /> */}
      {/* ))} */}
      {/* <NumberOutline/> */}

      <div className="flex flex-wrap gap-6">
        {event.map((event) => (
          <TiltEventCard key={event.number} {...event} />
        ))}
      </div>

    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p>
      </div>
    </motion.div>
  );
};

export default Example;
