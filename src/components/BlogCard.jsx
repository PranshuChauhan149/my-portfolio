import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-md bg-[#1e1e1e] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(255,193,7,0.6)]">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-3">{description}</p>
        <button className="mt-2 self-start px-4 py-1 text-sm bg-yellow-600 rounded-full hover:bg-yellow-500 transition-all flex items-center gap-2">
          Read More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
