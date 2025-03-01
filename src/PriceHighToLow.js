import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Nav } from "./Nav";
import { useState, useEffect, useRef } from "react";
import { IconChevronUp, IconChevronDown, IconCheck } from "@tabler/icons-react";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import BestSellerPageProduct from './BestSellerPageProduct';
import PriceHighToLowProducts from './PriceHighToLowProducts';

const PriceHighToLow = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // Default empty
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Sorting options
  const navProductsArray = [
    "Advisable",
    "Best-Seller",
    "Alphabetically: A-Z",
    "Alphabetically: Z-A",
    "Price: Low to High",
    "Price: High to Low",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    const formattedOption = option.toLowerCase().replace(/[^a-z0-9]+/g, "-"); // Clean URL format
    setSelectedOption(option);
    setIsOpen(false);
    navigate(`/${formattedOption}`);
  };

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
      <Nav navProductsArray={navProductsArray} darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Breadcrumb & Sort Dropdown */}
      <div className="mt-40 flex justify-between p-6">
        <div>
          <Link to="/">Home</Link> / Price, High-To-Low
        </div>

        {/* Sort Dropdown */}
        <div className="relative inline-block w-64">
          <button
            className="bg-inherit font-semibold focus:outline-none px-4 py-2 rounded w-full text-left flex items-center justify-between  border-gray-400 dark:border-gray-700"
            onClick={toggleDropdown}
          >
            <span className="flex items-center gap-2">
              {selectedOption && <IconCheck size={16} className="text-inherit" />} {selectedOption || "Sort By"}
            </span>
            {isOpen ? <IconChevronUp size={18} /> : <IconChevronDown size={18} />}
          </button>

          {isOpen && (
            <ul ref={dropdownRef} className={`absolute w-full p-4 ${darkMode ? 'bg-zinc-800 shadow-gray-600' : 'bg-grey-200 shadow-gray-600'} bg-gray-200 shadow-gray-400 rounded mt-1 z-10`}>
              {navProductsArray.map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 flex items-center gap-2  text-[13px] cursor-pointer"
                  onClick={() => handleOptionClick(option)}
                >
                  {selectedOption === option && <IconCheck size={16} className="text-inherit" />}
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Product Listings */}
      <PriceHighToLowProducts category={selectedOption} />

      {/* Footer */}
      <NewsletterSection />
      <Footer navProductsArray={navProductsArray} darkMode={darkMode} />
    </div>
  )
}

export default PriceHighToLow