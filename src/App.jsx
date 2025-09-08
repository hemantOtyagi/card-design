"use client"

import React, { useRef } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./components/ui/tabs";
import Grid from "./components/grid";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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
import EventCard from "./components/new-card";
import CardSix from "./components/card-six";
import BentoGrid from "./components/bento-grid";
import MasonryGrid from "./components/masonry-grid";
import ComfortSection from "./components/comfort-section";
import BookingWidget from "./components/booking-widget";
import AmenitiesSection from "./components/amenities-section";
import ItineararyCard from "./components/itinerary-card";
import NewGrid from "./components/new-grid";
import ItineraryList from "./components/itinerary-card";
import ItineraryListTwo from "./components/itinerary-card-two";
import TourInclusionsExclusions from "./components/inclusion-exclusion";
import ItineraryListThree from "./components/ininerary-card-three";
import ItineraryAccordion from "./components/accordian-itinerary-list";
import ItineraryAccordionTwo from "./components/accordian-itinerary-list-two";



const events = [
  {
    image: "https://images.unsplash.com/photo-1594026634827-fe99c0a22e83?w=500&auto=format&fit=crop&q=60",
    location: "Reykjavik, Iceland",
    title: "Whale Watching Tour",
    duration: "3 hours • Wildlife experience",
    price: 199000, badge: "NEW",
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


const inclusions = [
  "Travel (Guwahati to Guwahati)",
  "Stay for 5 nights",
  "5 Breakfasts",
  "Dawki River Boating, Cliff Jumping",
  "Meghalaya Khasi tribe dress up",
  "All entry tickets, permissions",
  "Trip Captain (for bigger groups above 6 members)",
  "Local guide for Double Decker, Rainbow Trekking",
  "Airport pickup and drop (fixed timings)",
  "Bonfire (at least 1 time)",
  "Once in a lifetime experience visiting all places mentioned in Highlights section",
];

const exclusions = [
  "Lunches, Dinners",
  "Any kind of activities other than mentioned above or insurance, shopping, party, medical or misc. expenses.",
  "Any reimbursements for cancelled activities, or extra cost arising due to any change in the itinerary/stay/route on account of bad weather, traffic-congestion, landslides/roadblocks, natural calamities, political disturbances and/or any other factors beyond organizers control.",
];

const Example = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#212121]">
      <div className="max-w-screen-xl       h-fit  flex justify-center items-center">
        {/* <BentoGrid/> */}
        {/* <MasonryGrid/> */}
        {/* <ComfortSection/> */}
        {/* <BookingWidget/> */}
        {/* <AmenitiesSection/> */}
        {/* <ItineararyCard/> */}
        {/* <ItineraryListThree/> */}
        {/* <ItineraryAccordion/> */}
        <ItineraryAccordionTwo/>
        {/* <ItineraryList/> */}
        {/* <NewGrid/> */}
        {/* <Grid/> */}
        {/* <Tabs defaultValue="itinearary" className="w-[50vw]"> */}
        {/*   <TabsList> */}
        {/*     <TabsTrigger value="itinearary">Itinearary</TabsTrigger> */}
        {/*     <TabsTrigger value="inclusions">Inclusions</TabsTrigger> */}
        {/*     <TabsTrigger value="grid">Grid</TabsTrigger> */}
        {/*   </TabsList> */}
        {/*   <TabsContent value="itinearary"><ItineraryList/></TabsContent> */}
        {/*   <TabsContent value="inclusions"><TourInclusionsExclusions inclusions={inclusions} exclusions={exclusions}/></TabsContent> */}
        {/*   <TabsContent value="grid"><NewGrid/></TabsContent> */}
        {/* </Tabs> */}
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
