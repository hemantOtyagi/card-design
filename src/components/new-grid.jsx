import { GalleryVerticalIcon  } from "lucide-react"
import { FaRegImage } from "react-icons/fa6";

const NewGrid = () => {
  return (
    <div className="rounded-xl overflow-hidden h-[40vh] w-[45vw]">
      <div className="grid grid-cols-5 grid-rows-4 gap-1 h-full  scale-110">
        <div className="relative h-full w-full  col-span-3 row-span-4">
          <img src="https://images.unsplash.com/photo-1756452442348-36fbd4260a33?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute h-full w-full object-cover"/>
          <div className="absolute h-full w-full hover:bg-black/15 z-20 transition duration-300  " />
        </div> 
        <div className="relative h-full w-full  col-span-2 row-span-2">
          <img src="https://images.unsplash.com/photo-1753454116069-a4fba9e75e4c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute h-full w-full object-cover"/>
          <div className="absolute h-full w-full hover:bg-black/15 z-20 transition duration-300  " />
        </div> 
        <div className="relative h-full w-full  col-span-2 row-span-2">
          <img src="https://plus.unsplash.com/premium_photo-1755883200406-1f29bbdde2f5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute h-full w-full object-cover"/>
          <div className="absolute  bottom-7 right-12 rounded-full p-3 bg-black/70 hover:bg-black/80 cursor-pointer trensition duration-300 ease-in-out">
            <FaRegImage size={"16px"} fill="white"/>
          </div>
          <div className="absolute h-full w-full hover:bg-black/15 z-30 transition duration-300  " />
        </div> 
      </div>
    </div>
  )
}

export default NewGrid 
