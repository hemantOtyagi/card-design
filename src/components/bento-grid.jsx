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
<div class="main">
    <div class="box wide">
     <img src="https://cdn.pixabay.com/photo/2023/06/27/04/05/spiderman-8091331_960_720.jpg" alt="error"/>
    </div>
    <div class="box medium">
      <img src="https://4kwallpapers.com/images/walls/thumbs_3t/11245.jpeg"/>
        <div class="box tall">
          <img src="https://4kwallpapers.com/images/walls/thumbs_3t/11671.jpg" alt="spiderman"/>
        </div>
    </div>
    <div class="box tall">
     <img src="https://4kwallpapers.com/images/walls/thumbs_3t/7525.jpg" />
    </div>
    <div class="box wide">
      <img src="https://4kwallpapers.com/images/walls/thumbs_3t/11600.jpeg" />
    </div>
      <div class="box medium">
        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/7214.png" alt="spiderman"/>
      </div>
      <div class="box medium">
        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/7214.png" alt="spiderman"/>
      </div>
    <div class="box small">
     <img src="https://4kwallpapers.com/images/walls/thumbs_3t/7525.jpg" />
    </div>
  </div>
  );
}
