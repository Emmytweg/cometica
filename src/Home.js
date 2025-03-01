import React, { useState, useEffect } from "react";
import { Nav } from "./Nav";
import Hero from "./Hero";
import WelcomeHome from "./WelcomeHome";
import Elevate from "./Elevate";
import Trending from "./Trending";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
const Home = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    document.body.className = darkMode ? "bg-black text-white" : "bg-white text-[#333]";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
    const [navProductsArray, setNavProductsArray] = useState(['Advisable', 'Best-Seller', 'Alphabetically A-Z', 'Alphabetically Z-A', 'Price: Low to High', 'Price: High to Low'])
console.log(navProductsArray)
  return (
    <div className="font-['Sora'] bg-opacity-35 backdrop-blur-lg" data-aos='drop-down'>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <WelcomeHome darkMode={darkMode} />
      <Elevate darkMode={darkMode} />
      <Trending darkMode={darkMode}/>
      <NewsletterSection darkMode={darkMode}/>
      <Footer navProductsArray={navProductsArray} darkMode={darkMode}/>
    </div>
  );
};

export default Home;