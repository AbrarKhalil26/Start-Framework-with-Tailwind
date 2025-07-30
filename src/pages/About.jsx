import React from "react";
import { TitleHeader } from "../components/TitleHeader";

export const About = () => {
  return (
    <div className="bg-cyan text-white flex justify-center items-center  py-48">
      <div className="container mx-auto about flex flex-col items-center gap-4 px-8 my-5">
        <TitleHeader color={"white"} title={"About component"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
};
