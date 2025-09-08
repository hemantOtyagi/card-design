"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ItineraryAccordionTwo = () => {
  const itineraryData = [
    {
      day: 1,
      title: "Arrival & Shillong",
      description:
        "Trek down to Heaven, Walk on Double Decker Living Roots & Spot a Rainbow!",
      image:
        "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?q=80&w=1125&auto=format&fit=crop",
      detailsImage:
        "https://images.unsplash.com/photo-1545652985-5edd365b12eb?q=80&w=1170&auto=format&fit=crop",
      details: [
        "Pickup from Guwahati Airport around 11:45 AM.",
        "Drive to Shillong (3.5 hrs, 120 km).",
        "Lunch stop after Meghalaya check post.",
        "Visit Umium Lake viewpoint, catch sunset if lucky.",
        "Evening arrival at Shillong, short stop at Police Bazar.",
        "Check-in, socialize in the common area.",
        "Rest overnight in guest house.",
      ],
    },
    {
      day: 2,
      title: "Cherrapunji Exploration",
      description: "Explore caves, waterfalls, and lush valleys in Cherrapunji.",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=800&auto=format&fit=crop",
      detailsImage:
        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=800&auto=format&fit=crop",
      details: [
        "Early breakfast and departure for Cherrapunji.",
        "Visit Nohkalikai Falls – India’s tallest plunge waterfall.",
        "Explore Mawsmai caves.",
        "Lunch en route.",
        "Evening stay at Cherrapunji guest house.",
      ],
    },
    {
      day: 3,
      title: "Double Decker Root Bridge",
      description:
        "Trek to the iconic Double Decker Root Bridge in Nongriat village.",
      image:
        "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=800&auto=format&fit=crop",
      detailsImage:
        "https://plus.unsplash.com/premium_photo-1661962862470-a03bcc2fb415?q=80&w=1170&auto=format&fit=crop",
      details: [
        "Morning trek to Nongriat village.",
        "Cross hanging bridges along the way.",
        "Reach Double Decker Root Bridge.",
        "Optional dip in natural pools.",
        "Trek back and rest at homestay.",
      ],
    },
    {
      day: 4,
      title: "Dawki & Mawlynnong",
      description:
        "Crystal-clear waters at Dawki River & Asia’s cleanest village Mawlynnong.",
      image:
        "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=1170&auto=format&fit=crop",
      detailsImage:
        "https://images.unsplash.com/photo-1536048810607-3dc7f86981cb?q=80&w=735&auto=format&fit=crop",
      details: [
        "Drive to Dawki, boat ride on Umngot river.",
        "Visit Indo-Bangladesh border viewpoint.",
        "Lunch at Mawlynnong village.",
        "Explore living root bridge in Mawlynnong.",
        "Overnight stay in village homestay.",
      ],
    },
    {
      day: 5,
      title: "Return Journey",
      description: "Scenic return to Guwahati with memories of Meghalaya.",
      image:
        "https://images.unsplash.com/photo-1594329852649-012d9528deda?q=80&w=715&auto=format&fit=crop",
      detailsImage:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
      details: [
        "Breakfast and check-out.",
        "Stop for last scenic photos.",
        "Drive back to Guwahati (3.5 hrs).",
        "Drop-off at airport by evening.",
        "Trip ends with happy memories.",
      ],
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {itineraryData.map((item, index) => (
        <AccordionItem key={index} value={`day-${item.day}`} className={"border-none flex flex-col mb-4"}>
          <AccordionTrigger className="bg-white p-1 w-[25vw]">
            <div className="flex items-center gap-4  w-full text-left">
              <div className="relative h-16 w-20 rounded-sm overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={`Day ${item.day}`}
                  className="object-cover absolute h-full w-full"
                />
                <h1 className="absolute font-bold text-md text-white flex justify-center items-center bg-black/20 h-full w-full">
                  Day {item.day}
                </h1>
              </div>
              <p className="text-sm text-gray-700 leading-snug text-start">
                {item.description}
              </p>
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-4 bg-white p-3 mt-1.5 rounded-lg">
            {/* <h2 className="text-lg font-semibold text-gray-900"> */}
            {/*   Day {item.day}: {item.title} */}
            {/* </h2> */}
            {/**/}
            <div className="relative h-48 w-full rounded-md overflow-hidden">
              <img
                src={item.detailsImage}
                alt={`Day ${item.day} details`}
                className="object-cover absolute h-full w-full"
              />
            </div>

            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              {item.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ItineraryAccordionTwo;
