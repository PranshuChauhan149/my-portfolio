import React from "react";
import "./home.css";
import About from "../components/About";
import Skill from "../components/Skill";
import { skillSection } from "../assets/Image";

const Home = () => {
  return (
    <div className="flex flex-col bg-transparent">
      {/* About Section */}
      <About />

      {/* Skills Section */}
      <div className="w-full text-white px-6 md:px-12 py-16 flex flex-col gap-10 items-center">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-extrabold text-4xl md:text-5xl tracking-wide">
            💡 Skills
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base mt-2">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {skillSection.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center transform transition-all duration-300 hover:scale-110"
            >
              <Skill image={item.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
