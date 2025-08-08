import React from "react";

const NumberOutline = ({ number = 1 }) => {
  return (
    <div className="relative w-fit h-[132px] overflow-hidden flex items-center justify-center group ">
      <span
        className="
          text-[150px] font-bold leading-none
          transition-all duration-300
        "
        style={{
          WebkitTextStroke: "2px red",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          hover: {
            WebkitTextStroke: "2px red",
            WebkitTextFillColor: "transparent",
          }
        }}
      >
        {number}
      </span>
    </div>
  );
};

export default NumberOutline;
