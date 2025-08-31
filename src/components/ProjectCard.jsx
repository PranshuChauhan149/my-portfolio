import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ image, name, demoLink, githubLink }) => {
  return (
    <div className="relative w-[300px] h-[280px] rounded-xl overflow-hidden bg-[#1e1e1e] text-white shadow-md transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_35px_rgba(238,179,8,0.6)] group">
      
      {/* Project Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-[200px] object-cover"
      />

      {/* Hover Overlay with Icons */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-full text-black text-xl hover:bg-yellow-400 transition-all"
          >
            <FaExternalLinkAlt />
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full text-white text-xl hover:bg-gray-600 transition-all"
          >
            <FaGithub />
          </a>
        )}
      </div>

      {/* Project Name */}
      <div className="p-3 flex items-center justify-center">
        <p className="text-lg font-semibold text-center">{name}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
