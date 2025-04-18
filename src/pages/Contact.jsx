import React from "react";
import { FaHandPointRight } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="w-full   flex flex-col gap-8 p-8 px-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-white text-3xl ">Contact</h1>
        <div className="h-0.5 ml-1 bg-yellow-600 w-[8%]"></div>
      </div>
      <div className="w-full rounded-2xl h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.51528009187!2d80.25598103996937!3d26.44715007162656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1744895529722!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl  shadow-md"
        ></iframe>
      </div>
      <div className="h-[400px] w-full flex flex-col gap-8">
        <p className="text-2xl text-white font-semibold">Contact Form</p>

        <form
          action="https://formspree.io/f/mgvajwya"
          method="POST"
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-8 p w-full lg:flex-row lg:gap-4 ">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border-1 border-[#4f4b4b] w-full lg:w-[50%] rounded-lg p-4 text-white" required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="border-1 border-[#4f4b4b] w-full lg:w-[50%] rounded-lg p-4 text-white" required
            />
          </div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="border-1 border-[#4f4b4b] w-full rounded-lg p-4 text-white" required
          />
          <textarea
            rows={5}
            cols={50}
            name="massage"
            placeholder="Your Message"
            className="border-1 border-[#4f4b4b] w-full rounded-lg p-4 text-white"
          required ></textarea>

          <div className="w-full flex justify-center items-center lg:justify-end mb-4">
            <button className="text-yellow-600 flex gap-4 px-10 items-center bg-[#2b2929]  rounded-lg py-2 transition-all duration-300 hover:text-yellow-700 hover:scale-105 hover:shadow-lg cursor-pointer hover:bg-[#3a3939]">
              <FaHandPointRight /> Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
