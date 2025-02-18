import React from 'react';
import movingPic from './moovingpics.png';

const NewsletterSection = ({ darkMode }) => {
  return (
    <section 
      className={`relative flex flex-col items-center justify-center p-10 text-center min-h-[50vh] 
                 bg-contain bg-center animate-slideBg transition-all duration-500 
                 ${darkMode ? "opacity-80 border-b-2 border-b-black " : "opacity-80  border-b-1 border-b-white "}`}
      style={{ backgroundImage: `url(${movingPic})` }}
    >
      {/* Dark Mode Adaptive Overlay */}
      <div className={`absolute inset-0 ${darkMode ? "bg-black bg-opacity-60" : "bg-white bg-opacity-20"}`}></div>

      {/* Form & Text (Static) */}
      <h1 className={`uppercase text-4xl font-extrabold  relative z-10 *(${ darkMode ? 'text-black' : 'text-white' }`} data-aos='zoom-in'>
        Discover Style <br /> Just A Button Away!
      </h1>

      <form className="flex flex-col justify-center items-center gap-4 relative z-10 w-full max-w-lg mt-5" data-aos='fade-in'>
        <input 
          placeholder="Your email address"
          className="h-12 w-4/5 text-center bg-black bg-opacity-50 border border-gray-400 
                     text-white p-3 rounded-md placeholder-gray-300 focus:outline-none focus:border-white"
        />
        <button 
          className="h-12 w-4/5 text-center font-bold text-black bg-white rounded-md shadow-md 
                     transition-all duration-300 hover:bg-gray-200"
          type="submit"
        >
          Subscribe
        </button>
      </form>

      <p className={` text-sm opacity-90 mt-3 max-w-md relative z-10 ${darkMode ?  'text-white' : 'text-black'}`}>
        Instantly access the latest fashion trends and exclusive deals on our site. 
        Discover your perfect style in a few clicks!
      </p>
    </section>
  );
};

export default NewsletterSection;