import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  window.addEventListener("scroll", () => {
    if (scrollY > 0) setIsScroll(true);
    else setIsScroll(false);
  });

  return (
    <>
      <nav
        className={`bg-dark transition-smooth fixed top-0 left-0 right-0 z-50 ${
          isScroll ? "py-3" : "py-7"
        }`}
      >
        <div className="container mx-auto px-4 md:px-2 flex justify-between items-center">
          <Link
            className="navbar-brand text-white uppercase font-bold text-[32px]"
            to="/"
          >
            Start Framework
          </Link>
          <ul
            className={`ml-auto mb-2 lg:mb-0 text-center lg:text-start ${openNav ? "flex" : "hidden"} hidden md:flex`}
          >
            <li className="mx-2">
              <NavLink
                className={({isActive}) => `text-white uppercase font-bold py-2 px-3 ${isActive && 'bg-cyan rounded'}`}
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="mx-2">
              <NavLink
                className={({isActive}) => `text-white uppercase font-bold py-2 px-3 ${isActive && 'bg-cyan rounded'}`}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="mx-2">
              <NavLink className={({isActive}) => `text-white uppercase font-bold py-2 px-3 ${isActive && 'bg-cyan rounded'}`} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            className={`ml-auto block md:hidden`}
            type="button"
            onClick={()=> setOpenNav(!openNav)}
          >
            <IoMenuOutline size={30} className="text-light" />
          </button>
        </div>
      </nav>
    </>
  );
};
