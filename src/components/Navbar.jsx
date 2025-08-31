import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { LuCircleChevronDown } from "react-icons/lu";
import { PiBagBold } from "react-icons/pi";
import { FaBloggerB } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FaAward } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md">
      <ul className="flex justify-center md:justify-evenly items-center py-4 px-6 gap-6 md:gap-12 text-white font-medium">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex gap-2 items-center transition-all duration-300 hover:text-yellow-400 ${
              isActive ? "text-yellow-500 font-bold" : "text-gray-300"
            }`
          }
        >
          <TiHomeOutline className="text-xl" />
          <span className="hidden lg:block text-sm uppercase tracking-wide">Home</span>
        </NavLink>

        {/* Resume */}
        <NavLink
          to="/rusume"
          className={({ isActive }) =>
            `flex gap-2 items-center transition-all duration-300 hover:text-yellow-400 ${
              isActive ? "text-yellow-500 font-bold" : "text-gray-300"
            }`
          }
        >
          <LuCircleChevronDown className="text-xl" />
          <span className="hidden lg:block text-sm uppercase tracking-wide">Resume</span>
        </NavLink>

        {/* Project */}
        <NavLink
          to="/project"
          className={({ isActive }) =>
            `flex gap-2 items-center transition-all duration-300 hover:text-yellow-400 ${
              isActive ? "text-yellow-500 font-bold" : "text-gray-300"
            }`
          }
        >
          <PiBagBold className="text-xl" />
          <span className="hidden lg:block text-sm uppercase tracking-wide">Projects</span>
        </NavLink>

        {/* Blog */}
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `flex gap-2 items-center transition-all duration-300 hover:text-yellow-400 ${
              isActive ? "text-yellow-500 font-bold" : "text-gray-300"
            }`
          }
        >
          <FaAward className="text-xl" />
          <span className="hidden lg:block text-sm uppercase tracking-wide">Achievements</span>
        </NavLink>

        {/* Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex gap-2 items-center transition-all duration-300 hover:text-yellow-400 ${
              isActive ? "text-yellow-500 font-bold" : "text-gray-300"
            }`
          }
        >
          <IoMdContact className="text-xl" />
          <span className="hidden lg:block text-sm uppercase tracking-wide">Contact</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
