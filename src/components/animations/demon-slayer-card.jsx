const Button = () => {
  return (
    <div className=" relative h-62  border-1 text-black border-black   text-xs flex justify-center items-center w-92  my-10 bg-[#ffffff] overflow-hidden rounded-lg  hover:shadow-[inset_0rem_0.1rem_0.3rem_0_rgb(0,0,0,0.1)] shadow-black shadow-xs  transition-shadow duration-300 cursor-pointer">
      <img src="/trio.jpeg" alt="image" className="absolute w-full h-full object-cover "/>
      <div className="absolute h-full w-full bg-black/50 hover:bg-transparent duration-500 ease-in z-20"/>
      {/* overlay text / */}
      <span className="absolute text-white font-semibold text-2xl z-50">Neumorph Card</span>
    </div>
  )
}

export default Button 
