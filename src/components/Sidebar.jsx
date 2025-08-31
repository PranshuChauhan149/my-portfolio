import { MdOutlineAttachEmail, MdLocationOn } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profile from "../assets/profileImg.jpeg";
import { Tooltip } from "react-tooltip"; // optional tooltip library

const Sidebar = () => {
  const socials = [
    { icon: <FaInstagram />, link: "https://www.instagram.com/", name: "Instagram" },
    { icon: <FaTwitter />, link: "https://x.com/i/flow/single_sign_on", name: "Twitter" },
    { icon: <FaGithub />, link: "https://github.com/", name: "GitHub" },
    { icon: <SiLeetcode />, link: "https://leetcode.com/u/Pranshu_chauhan/", name: "LeetCode" },
  ];

  return (
    <div className="h-full w-full flex lg:flex-col sm:flex-row md:flex-col lg:gap-6 gap-2 items-center overflow-auto p-6 
      bg-transparent rounded-2xl shadow-2xl border border-gray-800">
      
      {/* Profile Section */}
      <div className="flex flex-col  gap-6 w-full items-center relative">
        <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden border-4 border-amber-500 shadow-lg shadow-amber-500/50 hover:scale-105 transition-transform duration-500">
          <img
            src={profile}
            className="w-full h-full rounded-full object-cover hover:scale-110 transition-transform duration-500"
            alt="Profile"
          />
          <span className="absolute -bottom-2 right-2 bg-gradient-to-r from-yellow-500 to-orange-500 w-4 h-4 rounded-full animate-pulse shadow-lg"></span>
        </div>

        <div className="text-center">
          <h1 className="font-extrabold text-white text-xl">Pranshu Chauhan</h1>
          <p className="text-white font-semibold bg-amber-600/80 px-3 py-1 rounded-lg mt-3 text-sm shadow-md
            hover:shadow-amber-500/50 transition-all duration-300">
            FullStack Developer
          </p>
        </div>
      </div>

      <hr className="w-full h-[1px] bg-gray-700 my-4 opacity-50" />

      {/* Contact Info */}
      <div className="w-full flex flex-col gap-5">
        {[
          { icon: <MdOutlineAttachEmail />, label: "EMAIL", value: "pranshuchauha149..." },
          { icon: <IoPhonePortraitOutline />, label: "PHONE", value: "+91 6388655896" },
          { icon: <MdLocationOn />, label: "LOCATION", value: "CBR Kannauj (UP)" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 w-full p-3 rounded-xl bg-transparent hover:bg-[#333] transition-all shadow hover:shadow-amber-500/30 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-transparent rounded-2xl flex justify-center items-center text-amber-500 text-lg group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-gray-400">{item.label}</p>
              <p className="text-sm text-gray-100 truncate group-hover:text-amber-400 transition-colors duration-300">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      <div className="mt-6 flex gap-5 justify-center w-full">
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-amber-500 hover:text-black text-white text-xl transition-all duration-300 shadow hover:shadow-amber-500/50 group"
          >
            {item.icon}
            <span className="absolute -top-8 text-xs bg-gray-900 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
              {item.name}
            </span>
          </a>
        ))}
      </div>
      </div>

      {/* Socials */}
    </div>
  );
};

export default Sidebar;
