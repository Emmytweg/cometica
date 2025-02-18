import React from 'react'
import { Nav } from './Nav'
import { useEffect, useState } from 'react';

const ProductPage = () => {
   const [darkMode, setDarkMode] = useState(
      JSON.parse(localStorage.getItem("darkMode")) || false
    );
  
    useEffect(() => {
      document.body.className = darkMode ? "bg-black text-white" : "bg-white text-[#333]";
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);
  
  return (
    <div>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <div>
        <img />
      </div>
    </div>
  )
}

export default ProductPage