import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[5.5rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
