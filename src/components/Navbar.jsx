import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { LuCircleChevronDown } from "react-icons/lu";
import { PiBagBold } from "react-icons/pi";
import { FaBloggerB } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-center h-full w-full ">
      <ul className="w-full flex justify-evenly h-full items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-yellow-500" : "text-white"
            } flex gap-1 items-center justify-center`
          }
        >
          <TiHomeOutline className="text-xl hover:cursor-pointer" />
          <p className="hidden lg:block font-bold text-sm">Home</p>
        </NavLink>

        <NavLink
  to="/rusume"
  className={({ isActive }) =>
    `${isActive ? "text-yellow-500" : "text-white"} flex gap-1 items-center justify-center`
  }
>
  <LuCircleChevronDown className="text-xl hover:cursor-pointer" />
  <p className="hidden lg:block font-bold text-sm">Resume</p>
</NavLink>


        <NavLink 
          to="/project"
         className={({isActive})=>`${isActive ? "text-yellow-500 ": "text-white"} flex gap-1 items-center justify-center`}
        >
          <PiBagBold className="text-xl hover:cursor-pointer" />
          <p className="hidden lg:block font-bold text-sm">Project</p>
        </NavLink>

        <NavLink
  to="blog"
  className={({ isActive }) =>
    `${isActive ? "text-amber-500" : "text-white"} flex gap-1 items-center justify-center`
  }
>
  <FaBloggerB className="text-xl hover:cursor-pointer" />
  <p className="hidden lg:block font-bold text-sm">Blog</p>
</NavLink>

        <NavLink
          to="contact"
          className={({isActive})=>`${isActive ?"text-amber-500" :"text-white"}
          flex gap-1 items-center justify-center`}
        >
          <IoMdContact className="text-xl hover:cursor-pointer" />
          <p to="/contact" className="hidden lg:block font-bold text-sm">
            Contact
          </p>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
