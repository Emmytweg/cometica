import React from "react";
import Marquee from "react-fast-marquee";
import movingPic from "./moovingpics.png";

const NewsletterSection = ({ darkMode }) => {
  return (
    <section className="relative flex flex-col items-center justify-center p-10 text-center  overflow-hidden">
      {/* Background Marquee */}
      <Marquee speed={70} gradient={true} gradientWidth={true} className=" inset-0 w-full h-full">
        <div className="flex">
          {/* Duplicating the image inside Marquee for smooth effect */}
          <img src={movingPic} alt="Moving Background" className="w-full h-[50vh] object-cover" />
          <img src={movingPic} alt="Moving Background" className="w-full h-[50vh] object-cover" />
          <img src={movingPic} alt="Moving Background" className="w-full h-[50vh] object-cover" />
          <img src={movingPic} alt="Moving Background" className="w-full h-[50vh] object-cover" />
        </div>
      </Marquee>

      {/* Dark Mode Overlay */}
      <div className={`absolute inset-0  `} />
<div className="absolute top-13 z-10">
      {/* Content */}
      <h1
        className={`uppercase text-4xl font-extrabold relative z-10 `}
        data-aos="zoom-in"
      >
        Discover Style <br /> Just A Button Away!
      </h1>

      <form className=" flex flex-col justify-center items-center gap-4  z-10 w-full max-w-lg mt-5" data-aos="fade-in">
        <input
          placeholder="Your email address"
          className="h-12 w-4/5 text-center bg-black bg-opacity-50 border border-gray-400 
                     text-white p-3 rounded-md placeholder-gray-300 focus:outline-none focus:border-white "
        />
        <button
          className="h-12 w-4/5 text-center font-bold text-black bg-white rounded-md shadow-md 
                     transition-all duration-300 hover:bg-gray-200"
          type="submit"
        >
          Subscribe
        </button>
      </form>

      <p className={`text-sm opacity-90 mt-3 max-w-md relative z-10 `}>
        Instantly access the latest fashion trends and exclusive deals on our site. 
        Discover your perfect style in a few clicks!
      </p>
</div>

    </section>
  );
};

export default NewsletterSection;
