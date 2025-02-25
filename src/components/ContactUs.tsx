"use client";
import React from "react";

function ContactUs() {
  return (
    <>
      <div className="grid md:grid-cols-2 items-center  py-10">
        <div className="overflow-hidden">
          <div className="px-6 sm:px-12 lg:px-20">
            <p className="text-gray-300 text-start text-sm md:text-lg tracking-wide">
              Feel free to reach out! Whether you have a project in mind, need
              technical help, or just want to connect, I'm always open to new
              opportunities. <br /> Let's create something amazing together!
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-teal-400 font-semibold">📞 Phone:</span>
                <span className="text-gray-300">+91 98765 43210</span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-teal-400 font-semibold">📧 Email:</span>
                <span className="text-gray-300">aditya@example.com</span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-teal-400 font-semibold">
                  📍 Location:
                </span>
                <span className="text-gray-300">Indore, India</span>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-teal-400 hover:text-teal-500 transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-500 transition duration-300"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-500 transition duration-300"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="bg-black text-white px-6 sm:px-12 lg:px-20 rounded-xl mx-auto shadow-lg w-full">
          <h2 className="text-3xl font-bold text-center text-teal-400 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm md:text-lg font-medium"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium md:text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium md:text-lg"
              >
                Message / Inquiry
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message..."
                className="mt-1 w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
