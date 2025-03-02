import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import { useState, useEffect } from "react";
const NotFound = () => {
      const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
      );
    
      useEffect(() => {
        if (darkMode) {
          document.body.classList.add("bg-black", "text-white");
          document.body.classList.remove("bg-white", "text-[#333]");
        } else {
          document.body.classList.add("bg-white", "text-[#333]");
          document.body.classList.remove("bg-black", "text-white");
        }
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
      }, [darkMode]);
    
  return (
    <div>
        <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className="min-h-screen flex items-center justify-center  relative">
      <h1 className="text-[20rem] font-bold text-zinc-900 absolute">404</h1>
      <Link
        to="/"
        className="px-6 py-2 bg-gray-300 text-black font-semibold uppercase z-10 rounded shadow hover:bg-gray-400 transition"
      >
        Home
      </Link>
    </div>
    </div>
  );
};

export default NotFound;
