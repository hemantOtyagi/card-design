const Grid = () => {
  const items = [
    {
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      col: "col-span-4",
      row: "row-span-5",
      bg: "bg-red-300",
    },
    {
      type: "image",
      src: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0",
      col: "col-span-3",
      row: "row-span-3",
      bg: "bg-green-300",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
      col: "col-span-3",
      row: "row-span-2",
      bg: "bg-blue-300",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1629078691412-ffc8e1bcfaf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      col: "col-span-3",
      row: "row-span-3",
      bg: "bg-orange-400",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1725257928373-dc6d2ac7b145?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0",
      col: "col-span-3",
      row: "row-span-2",
      bg: "bg-blue-300",
    },
  ];

  return (
    <div className="grid grid-cols-10 grid-rows-5 gap-2 h-[45vh] w-[50vw] rounded-xl bg-white p-2">
      {items.map((item, i) => (
        <div
          key={i}
          className={`${item.col} ${item.row} relative flex justify-center items-center overflow-hidden rounded-lg ${item.bg}`}
        >
          {item.type === "video" ? (
            <video controls className="w-full h-full object-fill shadow-lg">
              <source src={item.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={item.src}
              alt={`grid-item-${i}`}
              className="absolute w-full h-full object-cover shadow-md"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Grid;
