import React from "react";
import { MdViewQuilt } from "react-icons/md";
import { FaUikit } from "react-icons/fa6";
import { HiMiniServerStack } from "react-icons/hi2";
import { MdOutlineImportantDevices } from "react-icons/md";

const About = () => {
  return (
    <>
      {/* About Section */}
      <div className="w-full text-white px-6 md:px-12 py-16 flex flex-col gap-8 items-center bg-transparent">
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-extrabold text-3xl md:text-4xl tracking-wide">
            👨‍💻 About Me
          </h1>
          <div className="h-1 bg-gradient-to-r from-yellow-500 to-orange-500 w-24 rounded-full"></div>
        </div>

        <p className="text-gray-300 text-center max-w-4xl leading-relaxed text-sm md:text-base">
          🚀 Aspiring Software Engineer | B.Tech CSE (2027)  
          I am a passionate Computer Science & Engineering student at Lovely Professional University,  
          with a strong interest in <span className="text-yellow-400">Data Structures & Algorithms</span>,  
          <span className="text-yellow-400"> Web Development</span>, and <span className="text-yellow-400">System Design</span>.  
          I enjoy solving complex problems and building efficient solutions.  
          With <span className="text-yellow-400">400+ solved LeetCode problems</span>, I continuously enhance my skills.  
          Always eager to learn and grow, I look forward to creating impactful solutions. 🚀
        </p>

        <h2 className="font-extrabold text-2xl md:text-3xl mt-6">💼 What I'm Doing</h2>
      </div>

      {/* Service Carbds */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 px-6 md:px-12 pb-20 bg-transparent">
        {/* Card 1 */}
        <div className="bg-transparent backdrop-blur-lg p-6 rounded-2xl flex gap-4 items-start 
                        border border-gray-700 hover:border-yellow-400 
                        shadow-md hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105">
          <div className="bg-gradient-to-tr from-yellow-500 to-orange-500 p-3 rounded-full">
            <FaUikit className="text-2xl text-black" />
          </div>
          <div>
            <p className="font-bold text-lg">UI/UX Design</p>
            <p className="text-gray-400 text-sm">
              The most modern and high-quality design at a professional level.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1a1a1a]/70 backdrop-blur-lg p-6 rounded-2xl flex gap-4 items-start 
                        border border-gray-700 hover:border-yellow-400 
                        shadow-md hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105">
          <div className="bg-gradient-to-tr from-yellow-500 to-orange-500 p-3 rounded-full">
            <MdViewQuilt className="text-2xl text-black" />
          </div>
          <div>
            <p className="font-bold text-lg">Frontend</p>
            <p className="text-gray-400 text-sm">
              Professional development of modern and responsive web interfaces.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1a1a1a]/70 backdrop-blur-lg p-6 rounded-2xl flex gap-4 items-start 
                        border border-gray-700 hover:border-yellow-400 
                        shadow-md hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105">
          <div className="bg-gradient-to-tr from-yellow-500 to-orange-500 p-3 rounded-full">
            <HiMiniServerStack className="text-2xl text-black" />
          </div>
          <div>
            <p className="font-bold text-lg">Backend</p>
            <p className="text-gray-400 text-sm">
              Efficient and scalable server-side development with robust APIs.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#1a1a1a]/70 backdrop-blur-lg p-6 rounded-2xl flex gap-4 items-start 
                        border border-gray-700 hover:border-yellow-400 
                        shadow-md hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105">
          <div className="bg-gradient-to-tr from-yellow-500 to-orange-500 p-3 rounded-full">
            <MdOutlineImportantDevices className="text-2xl text-black" />
          </div>
          <div>
            <p className="font-bold text-lg">Web Development</p>
            <p className="text-gray-400 text-sm">
              High-quality development of sites at the professional level.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
