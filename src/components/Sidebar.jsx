import { MdOutlineAttachEmail, MdLocationOn } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profile from "../assets/profileImg.jpeg";


const Sidebar = () => {
  return (
    <div className="h-full w-full flex flex-col sm:flex-row md:flex-col gap-3 items-center overflow-auto p-4">
      {/* Profile Section */}
      <div className="flex flex-col gap-8 w-full items-center">
        <div className="max-w-[120px] min-h-[120px] sm:max-w-[140px] sm:min-h-[140px] bg-amber-400 mt-2 rounded-full">
          <img
            src={profile}
            className="w-full h-full rounded-full object-cover"
            alt="Profile"
          />
        </div>

        <div className="text-center">
          <h1 className="font-extrabold text-white text-lg sm:text-base">
            Pranshu Chauhan
          </h1>
          <p className="text-white font-bold bg-gray-600 px-2 py-1 rounded mt-3 text-sm">
            FullStack Developer
          </p>
        </div>
      </div>

      <hr className="w-full h-[1px] bg-gray-300 my-2" />

      {/* Contact Info */}
      <div className="w-full flex flex-col gap-8">
        {/* Email */}
        <div className="flex items-center gap-4 w-full">
          <div className="w-10 h-10 bg-black rounded-2xl flex justify-center items-center">
            <MdOutlineAttachEmail className="text-yellow-600 text-lg" />
          </div>
          <div>
            <p className="text-sm text-gray-300">GMAIL</p>
            <p className="text-sm text-gray-100 truncate">
              pranshuchauha149...
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-5 w-full">
          <div className="w-10 h-10 bg-black rounded-2xl flex justify-center items-center">
            <IoPhonePortraitOutline className="text-yellow-600 text-lg" />
          </div>
          <div>
            <p className="text-sm text-gray-300">PHONE</p>
            <p className="text-sm text-gray-100">+91 6388655896</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-5 w-full">
          <div className="w-10 h-10 bg-black rounded-2xl flex justify-center items-center">
            <MdLocationOn className="text-yellow-600 text-lg" />
          </div>
          <div>
            <p className="text-sm text-gray-300">Location</p>
            <p className="text-sm text-gray-100">CBR Kannauj (UP)</p>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-8 flex gap-6 justify-center sm:justify-evenly w-full">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-xl text-white hover:text-amber-500 transition duration-300" />
        </a>
        <a
          href="https://x.com/i/flow/single_sign_on"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-xl text-white hover:text-amber-500 transition duration-300" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl text-white hover:text-amber-500 transition duration-300" />
        </a>
        <a
          href="https://leetcode.com/u/Pranshu_chauhan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="text-xl text-white hover:text-amber-500 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
