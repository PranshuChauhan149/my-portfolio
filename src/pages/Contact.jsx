import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-12 p-6 lg:p-10 bg-transparent ">
      {/* Title Section */}
      <div className="flex flex-col gap-2 text-center lg:text-left">
        <h1 className="font-bold text-white text-4xl tracking-wide">Get in Touch</h1>
        <div className="h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 w-20 rounded-full mx-auto lg:mx-0"></div>
        <p className="text-gray-400 text-lg mt-2">
          Have a question or want to work together? Fill out the form below 👇
        </p>
      </div>

      {/* Map */}
      <div className="w-full rounded-2xl h-[400px] overflow-hidden shadow-lg border border-gray-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.51528009187!2d80.25598103996937!3d26.44715007162656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1744895529722!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="w-full flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-white">Contact Form</h2>

        <form
          action="https://formspree.io/f/mgvajwya"
          method="POST"
          className="flex flex-col gap-6 bg-transparent p-6 rounded-2xl border border-gray-700 shadow-md"
        >
          {/* Name & Email */}
          <div className="flex flex-col lg:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full lg:w-1/2 p-4 rounded-xl bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-600 outline-none transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full lg:w-1/2 p-4 rounded-xl bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-600 outline-none transition-all"
              required
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-4 rounded-xl bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-600 outline-none transition-all"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            rows={6}
            placeholder="Your Message..."
            className="w-full p-4 rounded-xl bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-600 outline-none transition-all"
            required
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center lg:justify-end">
            <button
              type="submit"
              className="flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-yellow-600/40"
            >
              <FaHandPointRight className="text-xl" />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
