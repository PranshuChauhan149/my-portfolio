import React from "react";
import { FaEye, FaDownload } from "react-icons/fa";

const achievements = [
  {
    title: "React Developer Certificate",
    year: "2025",
    img: "/certificates/react_cert.png",
    viewLink: "/certificates/react_cert.png",
    downloadLink: "/certificates/react_cert.png",
  },
  {
    title: "AI Hackathon Winner",
    year: "2024",
    img: "/certificates/ai_hackathon.png",
    viewLink: "/certificates/ai_hackathon.png",
    downloadLink: "/certificates/ai_hackathon.png",
  },
  // Add more certificates here
];

const Achievements = () => {
  return (
    <div className="p-6 lg:p-10 flex flex-col gap-8">
      {/* Heading */}
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-4xl font-extrabold text-white">Achievements & Certificates</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
        <p className="text-gray-400 mt-2 text-center">
          Showcasing certifications, awards, and hackathon participation
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1f1f1f]/70 p-4 rounded-2xl shadow-md hover:shadow-yellow-500/40 transition-all duration-300 flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            <p className="text-yellow-500 mt-1">{item.year}</p>
            <div className="flex gap-4 mt-4">
              <a
                href={item.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition-all"
              >
                <FaEye /> View
              </a>
              <a
                href={item.downloadLink}
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition-all"
              >
                <FaDownload /> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
