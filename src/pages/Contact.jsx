import React from "react";
import { TitleHeader } from "../components/TitleHeader";

export const Contact = () => {
  return (
    <div className="text-dark flex justify-center items-center py-10">
      <div className="container mx-auto px-4 md:px-2 container-md about flex flex-col items-center gap-4">
        <TitleHeader title={"Contact component"} />
        <form className="d-flex flex-column gap-4 my-4 w-full md:w-1/2">
          <input
            className="outline-none border-0 border-b border-gray-300 rounded p-3 w-full my-4"
            type="text"
            placeholder="userName"
          />
          <input
            className="outline-none border-0 border-b border-gray-300 rounded p-3 w-full my-4"
            type="text"
            placeholder="userAge"
          />
          <input
            className="outline-none border-0 border-b border-gray-300 rounded p-3 w-full my-4"
            type="email"
            placeholder="userEmail"
          />
          <input
            className="outline-none border-0 border-b border-gray-300 rounded p-3 w-full my-4"
            type="password"
            placeholder="userPassword"
          />
          <button className="text-white bg-cyan border-0 rounded py-2 px-4 w-fit mt-7 block">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
