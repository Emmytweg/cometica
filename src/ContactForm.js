import React from "react";
import Footer from "./Footer";

const ContactForm = () => {
  return (
    <div className="min-h-screen mt-20 font-[sora] ">
      <div className="flex items-center justify-center mb-10">
      <div className="w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-6">CONTACT US</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">NAME</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full bg-transparent border border-gray-600 p-5 rounded-xl text-white focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">EMAIL</label>
            <input
              type="email"
              placeholder="jane@gmail.com"
              className="w-full bg-transparent border border-gray-600 p-5 rounded-xl text-white focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">LOCATION</label>
            <select className="w-full bg-transparent border border-gray-600 p-5 rounded-xl text-white focus:outline-none focus:border-gray-400">
              <option>Select...</option>
              <option>Contact</option>
              <option>Report The Problem</option>
              <option>Command</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">MESSAGE</label>
            <textarea
              placeholder="Hello!"
              className="w-full bg-transparent border border-gray-600 p-3 rounded-xl text-white focus:outline-none focus:border-gray-400 h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
