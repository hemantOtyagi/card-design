import { BedDouble, Sofa, Bath, Tv, Lamp } from "lucide-react";

const ComfortSection = () => {
  const items = [
    {
      icon: <BedDouble className="w-5 h-5" />,
      title: "Studio",
      desc: "1 queen bed",
      img: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800&q=80",
    },
    {
      icon: <Sofa className="w-5 h-5" />,
      title: "Living",
      desc: "Blackout curtains",
      img: "https://images.unsplash.com/photo-1629078691412-ffc8e1bcfaf6?w=800&q=80",
    },
    {
      icon: <Bath className="w-5 h-5" />,
      title: "Bath",
      desc: "Rain shower",
      img: "https://images.unsplash.com/photo-1652903761255-4fbf11cff931?w=800&q=80",
    },
    {
      icon: <Tv className="w-5 h-5" />,
      title: "Entertainment",
      desc: "Smart TV & Wi-Fi",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    },
    {
      icon: <Lamp className="w-5 h-5" />,
      title: "Ambience",
      desc: "Warm lighting",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    },
  ];

  return (
    <section className="w-full p-4">
      <h2 className="text-lg font-semibold mb-3">Sleeping comfort</h2>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[220px] rounded-xl overflow-hidden shadow-md bg-white border flex-shrink-0"
          >
            <div className="relative h-36 w-full ">
              <img
                src={item.img}
                alt={item.title}
                className="w-full absolute h-full object-cover"
              />
            </div>
            <div className="p-3 flex flex-col gap-1">
              <div className="flex items-center gap-2 font-medium text-gray-800">
                {item.icon}
                {item.title}
              </div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComfortSection;
