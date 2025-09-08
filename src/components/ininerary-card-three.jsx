import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";

// Reusable Card Component
const ItineraryCard = ({ day, title, description, image, detailsImage, details }) => {
  return (
    <Dialog>
      <div className="bg-white rounded-lg p-1 shadow-md flex gap-3 hover:shadow-lg transition-shadow duration-300">

        {/* Card Content */}
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-around gap-3 items-center">
            <div className="relative h-16 w-20 rounded-md overflow-hidden flex-shrink-0">
              <img
                src={image}
                alt={`Day ${day}`}
                className="absolute h-full w-full object-cover"
              />
              <h1 className="absolute font-bold text-md text-white flex justify-center items-center bg-black/20  h-full w-full  rounded-sm">Day {day}</h1>
            </div>
            <p className="text-sm text-gray-700 leading-snug mt-1 pr-2  text-start w-82">{description}</p>
            <DialogTrigger asChild className="cursor-pointer text-blue-600 hover:text-blue-800">
              <IoMdArrowDropdownCircle className="inline mr-1" size={25} fill="black" />
            </DialogTrigger>
          </div>

        </div>
      </div>

      {/* Dialog Content */}
      <DialogContent className="sm:max-w-[500px] bg-white p-6 rounded-lg shadow-2xl space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Day {day}: {title}
        </h2>

        <div className="relative h-48 w-full rounded-md overflow-hidden">
          <img
            src={detailsImage}
            alt={`Day ${day} details`}
            className="absolute h-full w-full object-cover"
          />
        </div>

        <ul className="list-disc pl-5 text-sm text-gray-700 text-start space-y-2 leading-relaxed">
          {details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

// Example Data for 5 Days
const itineraryData = [
  {
    day: 1,
    title: "Arrival & Shillong",
    description: "Trek down to Heaven, Walk on Double Decker Living Roots & Spot a Rainbow!",
    image: "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?q=80&w=1125&auto=format&fit=crop",
    detailsImage: "https://images.unsplash.com/photo-1545652985-5edd365b12eb?q=80&w=1170&auto=format&fit=crop",
    details: [
      "Pickup from Guwahati Airport around 11:45 AM.",
      "Drive to Shillong (3.5 hrs, 120 km).",
      "Lunch stop after Meghalaya check post.",
      "Visit Umium Lake viewpoint, catch sunset if lucky.",
      "Evening arrival at Shillong, short stop at Police Bazar.",
      "Check-in, socialize in the common area.",
      "Rest overnight in guest house."
    ],
  },
  {
    day: 2,
    title: "Cherrapunji Exploration",
    description: "Explore caves, waterfalls, and lush valleys in Cherrapunji.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=800&auto=format&fit=crop",
    detailsImage: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=800&auto=format&fit=crop",
    details: [
      "Early breakfast and departure for Cherrapunji.",
      "Visit Nohkalikai Falls – India’s tallest plunge waterfall.",
      "Explore Mawsmai caves.",
      "Lunch en route.",
      "Evening stay at Cherrapunji guest house."
    ],
  },
  {
    day: 3,
    title: "Double Decker Root Bridge",
    description: "Trek to the iconic Double Decker Root Bridge in Nongriat village.",
    image: "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=800&auto=format&fit=crop",
    detailsImage: "https://plus.unsplash.com/premium_photo-1661962862470-a03bcc2fb415?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      "Morning trek to Nongriat village.",
      "Cross hanging bridges along the way.",
      "Reach Double Decker Root Bridge.",
      "Optional dip in natural pools.",
      "Trek back and rest at homestay."
    ],
  },
  {
    day: 4,
    title: "Dawki & Mawlynnong",
    description: "Crystal-clear waters at Dawki River & Asia’s cleanest village Mawlynnong.",
    image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detailsImage: "https://images.unsplash.com/photo-1536048810607-3dc7f86981cb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      "Drive to Dawki, boat ride on Umngot river.",
      "Visit Indo-Bangladesh border viewpoint.",
      "Lunch at Mawlynnong village.",
      "Explore living root bridge in Mawlynnong.",
      "Overnight stay in village homestay."
    ],
  },
  {
    day: 5,
    title: "Return Journey",
    description: "Scenic return to Guwahati with memories of Meghalaya.",
    image: "https://images.unsplash.com/photo-1594329852649-012d9528deda?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detailsImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
    details: [
      "Breakfast and check-out.",
      "Stop for last scenic photos.",
      "Drive back to Guwahati (3.5 hrs).",
      "Drop-off at airport by evening.",
      "Trip ends with happy memories."
    ],
  },
];

// Wrapper Component to Render All Cards
const ItineraryListThree = () => {
  return (
    <div className="space-y-4 w-fit">
      {itineraryData.map((item, index) => (
        <ItineraryCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ItineraryListThree;
