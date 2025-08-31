import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectList } from "../assets/Image";
import { FaGithub, FaPlay } from "react-icons/fa";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cat, setCat] = useState(ProjectList);

  const handleClick = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setCat(ProjectList);
    } else {
      let newlist = ProjectList.filter((item) => item.cate === category);
      setCat(newlist);
    }
  };

  const categories = [
    "All",
    "Basic_HCJ",
    "AI",
    "React_UI",
    "MERN_Stack",
    "Next_JS",
  ];

  return (
    <div className="px-6 md:px-12 py-12 flex flex-col gap-12 bg-transparent min-h-screen">
      {/* Heading */}
      <div className="flex flex-col gap-2 items-center">
        <p className="font-extrabold text-4xl md:text-5xl text-white tracking-wide">
          🚀 Projects
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
        <p className="text-gray-400 text-sm md:text-base mt-2">
          Explore my work by category
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={`px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg scale-105"
                  : "bg-[#1c1c1c] text-white hover:bg-[#2c2c2c] hover:scale-105"
              }`}
          >
            {cat.replace("_", " ")}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {cat.map((item, idx) => (
          <div
            key={idx}
            className="relative w-full max-w-xs rounded-xl overflow-hidden shadow-glow hover:shadow-[0_0_25px_rgba(255,193,7,0.7)] transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4">
              <p className="text-white font-bold text-lg text-center px-2">
                {item.name}
              </p>
              <div className="flex gap-4">
                <a
                  href={item.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all"
                >
                  <FaPlay />
                </a>
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
