import React from "react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Rusume from "./pages/Rusume";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import starsVideo from "../src/assets/star.mp4";

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Starry Background Video */}
      <video
        src={starsVideo}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      {/* Optional overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent -z-5"></div>

      {/* Main Content */}
      <div className="relative z-10 h-full lg:h-screen p-4 lg:p-8 text-white">
        <Navbar />

        <div className="w-full h-full flex flex-col lg:flex-row gap-4">
          {/* Sidebar */}
          <div className="w-full lg:w-[25%] bg-transparent rounded-2xl shadow-lg backdrop-blur-md border border-gray-700 lg:mt-8 mt-10">
            <Sidebar />
          </div>

          {/* Right Section */}
          <div className="w-full h-full flex flex-col gap-4">
            {/* Main Content */}
            <div className="flex-1 bg-transparent rounded-2xl shadow-inner overflow-y-auto p-4 border border-gray-700 lg:mt-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rusume" element={<Rusume />} />
                <Route path="/project" element={<Project />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
