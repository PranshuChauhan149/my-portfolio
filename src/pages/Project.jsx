import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectList } from "../assets/Image";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [flitercat, setfiltercat] = useState("All");

  const [cat, setcat] = useState(ProjectList);

  const handleClick = (category) => {
    setActiveCategory(category);
    setfiltercat(category);
    if (category === "All") {
      setcat(ProjectList); // show all projects
    } else {
      let newlist = ProjectList.filter((item) => item.cate === category);
      setcat(newlist);
    }

    console.log(category);
  };

  const categories = ["All", "Application", "Web", "UI/UX"];

  return (
    <div className="p-8 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="font-bold text-3xl text-white">Project</p>
        <div className="w-[90px] h-0.5 bg-amber-600"></div>
      </div>

      <div className="text-white font-semibold flex gap-4 cursor-pointer">
        {categories.map((cat) => (
          <p
            key={cat}
            onClick={() => handleClick(cat)}
            className={` text-white ${
              activeCategory === cat
                ? "text-yellow-600"
                : " hover:text-[#e8e4e4]"
            }`}
          >
            {cat}
          </p>
        ))}
      </div>

      <div className="flex gap-6 flex-wrap p-8 items-center justify-center">
        {cat.map((item) => (
          <ProjectCard image={item.image} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Project;
