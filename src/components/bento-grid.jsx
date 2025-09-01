const gridItems = [
  { src: "https://images.unsplash.com/photo-1755289446025-d04dfe8f0fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Nnx8fGVufDB8fHx8fA%3D%3D", span: "col-span-3" },
  { src: "https://images.unsplash.com/photo-1756470843828-617611d35cf6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { src: "https://images.unsplash.com/photo-1754753676170-f91ffcddb57e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDZ8fHxlbnwwfHx8fHw%3D", span: " col-span-1 " },
  { src: "https://plus.unsplash.com/premium_photo-1720767867216-6e91cce51244?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "row-span-3col-span-1" },
  { src: "https://images.unsplash.com/photo-1755895926335-a113232e064f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1756302637887-1c00e98fd0cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDd8fHxlbnwwfHx8fHw%3D", span: " col-span-2 " },
  { src: "https://images.unsplash.com/photo-1756302637887-1c00e98fd0cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDd8fHxlbnwwfHx8fHw%3D", span: " col-span-2 " },
];

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-6   gap-3 p-2 h-fit max-w-6xl mx-auto bg-white">
      {gridItems.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl overflow-hidden ${item.span || ""} `}
        >
          <img
            src={item.src}
            alt={`Decor ${i + 1}`}
            width={800}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
