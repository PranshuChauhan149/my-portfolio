import React from "react";
import { FaBookReader } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";

const Rusume = () => {
  return (
    <div className="p-6 sm:p-10">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-white tracking-wide">
          Resume
        </h2>
        <div className="h-1 w-24 mt-2 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full"></div>
      </div>

      {/* Education Section */}
      <div className="flex flex-col lg:flex-row gap-10 mb-12">
        {/* Timeline */}
        <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <div className="bg-transparent h-12 w-12 rounded-full flex items-center justify-center shadow-lg shadow-yellow-600/30">
            <FaBookReader className="text-yellow-500 text-xl" />
          </div>
          <div className="h-40 w-[2px] bg-gradient-to-b from-yellow-500/70 to-transparent mt-2"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-yellow-500">Education</h3>

          <div className="bg-transparent p-5 rounded-xl shadow-md border border-gray-800 hover:border-yellow-600 transition">
            <p className="text-lg font-semibold text-white">
              Lovely Professional University, Punjab
            </p>
            <p className="text-gray-300">B.Tech in CSE & IT</p>
            <p className="text-yellow-500 font-medium mt-1">2023 – 2027</p>
          </div>

          <div className="bg-transparent p-5 rounded-xl shadow-md border border-gray-800 hover:border-yellow-600 transition">
            <p className="text-lg font-semibold text-white">
              Subhash Academy, Chhibramau, Kannauj
            </p>
            <p className="text-gray-300">Secondary Education (10th)</p>
            <p className="text-yellow-500 font-medium mt-1">2019 – 2021</p>
          </div>
        </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex flex-row gap-10 mb-12">
        {/* Timeline */}
        <div className="flex flex-col items-center">
          <div className="bg-transparent h-12 w-12 rounded-full flex items-center justify-center shadow-lg shadow-yellow-600/30">
            <FaBookReader className="text-yellow-500 text-xl" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-yellow-500">Experience</h3>

          <div className="bg-transparent p-5 rounded-xl shadow-md border border-gray-800 hover:border-yellow-600 transition">
            <p className="text-lg font-semibold text-white">
              Software Development Intern
            </p>
            <p className="text-gray-300">Remote / Freelance</p>
            <p className="text-yellow-500 font-medium mt-1">2025 – Present</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4 mt-6">
        <button className="flex gap-2 items-center justify-center px-6 py-2 rounded-lg text-yellow-500 border border-yellow-600 bg-[#1f1f1f] hover:bg-yellow-600 hover:text-black transition-all duration-300 shadow-md hover:shadow-yellow-500/40 hover:scale-105">
          <FaRegEye /> View CV
        </button>

        <button className="flex gap-2 items-center justify-center px-6 py-2 rounded-lg text-yellow-500 border border-yellow-600 bg-[#1f1f1f] hover:bg-yellow-600 hover:text-black transition-all duration-300 shadow-md hover:shadow-yellow-500/40 hover:scale-105">
          <RiDownloadLine /> Download CV
        </button>
      </div>
    </div>
  );
};

export default Rusume;
