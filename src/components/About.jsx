import React from "react";
import { MdViewQuilt } from "react-icons/md";
import { FaUikit } from "react-icons/fa6";
import { HiMiniServerStack } from "react-icons/hi2";
import { MdOutlineImportantDevices } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="w-full text-white px-4 md:px-8 py-8 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="font-extrabold text-2xl md:text-3xl">About Me</h1>
          <div className="h-0.5 bg-yellow-600 w-[100px]"></div>
        </div>

        <p className="text-[#e4dddd] text-sm md:text-base">
          🚀 Aspiring Software Engineer | B.Tech CSE (2027) I am a passionate
          Computer Science & Engineering student at Lovely Professional
          University, with a strong interest in Data Structures & Algorithms,
          Web Development, and System Design. I enjoy solving complex problems
          and building efficient solutions. I have experience in web
          development, system design, and networking and have completed
          certifications in Computer Communications and Packet Switching
          Networks. With 200+ solved LeetCode problems, I continuously enhance
          my problem-solving skills. I am always eager to learn and grow,
          looking for opportunities to contribute effectively and build
          innovative solutions. Let's connect and create something impactful! 🚀
        </p>

        <h2 className="font-extrabold text-2xl md:text-3xl">What I'm Doing</h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-32 pb-16">
        {/* Card 1 */}
        <div className="bg-[#2c2b2b] flex items-center p-4 rounded gap-4">
          <FaUikit className="text-4xl md:text-4xl text-yellow-500" />
          <div>
            <p className="font-bold text-white text-lg md:text-xl">UI/UX Design</p>
            <p className="text-[#e4dddd] text-sm">
              The most modern and high-quality design at a professional level.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#2c2b2b] flex items-center p-4 rounded gap-4">
          <MdViewQuilt className="text-4xl md:text-4xl text-yellow-500" />
          <div>
            <p className="font-bold text-white text-lg md:text-xl">Frontend</p>
            <p className="text-[#e4dddd] text-sm">
              Professional development of modern and responsive web interfaces.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#2c2b2b] flex items-center p-4 rounded gap-4">
          <HiMiniServerStack className="text-4xl md:text-4xl text-yellow-500" />
          <div>
            <p className="font-bold text-white text-lg md:text-xl">Backend</p>
            <p className="text-[#e4dddd] text-sm">
              Efficient and scalable server-side development with robust APIs.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#2c2b2b] flex items-center p-4 rounded gap-4">
          <MdOutlineImportantDevices className="text-4xl md:text-4xl text-yellow-500" />
          <div>
            <p className="font-bold text-white text-lg md:text-xl">Web Development</p>
            <p className="text-[#e4dddd] text-sm">
              High-quality development of sites at the professional level.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
