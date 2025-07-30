import React from "react";
import pictureUser from "../assets/avataaars.svg";
import { TitleHeader } from "../components/TitleHeader";

export const Home = () => {
  return (
    <div className="bg-cyan text-white flex justify-center items-center py-24">
      <div className="w-fit flex flex-col items-center gap-4">
        <img
          src={pictureUser}
          alt="user-picture"
          width={250}
          className="mb-4"
        />
        <TitleHeader color={'white'} title={'Start Framework'}/>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
};
