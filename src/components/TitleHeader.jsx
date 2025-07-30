import React from "react";
import { FaStar } from "react-icons/fa";

export const TitleHeader = ({color, title}) => {
  return (
    <header className="w-fit">
      <h1 className={`uppercase mb-4 text-3xl md:text-[40px] font-bold ${color == 'white'? "text-white":"text-dark"}`}>{title}</h1>
      <div className={`w-[55%] h-1 ${color == 'white'? 'bg-white': "bg-dark"} relative mx-auto`}>
      <div className={`w-12 ${color == 'white'? 'bg-cyan': 'bg-white'} absolute -top-2.5 left-1/2 -translate-x-1/2 z-10 flex justify-center`}>
        <FaStar size={20} className={color == 'white'? "text-white":"text-dark"}/>
      </div>
    </div>
    </header>
  );
};
