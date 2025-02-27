import React, { useState, useEffect, useRef } from "react";
import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { AllProductsArray } from "./AllProductsArray";

const Trending = ({ darkMode }) => {
  const [currentSlideOne, setCurrentSlideOne] = useState(0);
  const [currentSlideTwo, setCurrentSlideTwo] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const trendingProducts = Object.values(AllProductsArray)
    .flat()
    .filter((product) => product.trending);

  const displayedItemsOne = trendingProducts.slice(currentSlideOne, currentSlideOne + itemsPerPage);
  const displayedItemsTwo = trendingProducts.slice(currentSlideTwo, currentSlideTwo + itemsPerPage);

  const sliderRefOne = useRef(null);
  const sliderRefTwo = useRef(null);

  // Scroll Functions (With Boundary Checks)
  const scrollLeft = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <section className="p-6">
      {/* Title */}
      <h1 className="uppercase font-bold text-4xl text-center mt-20" data-aos="fade-up">
        Trending NOW
      </h1>

      {/* First Slide */}
      <div className="relative mt-10">
        {/* Horizontal Scroll Container */}
        <div ref={sliderRefOne} className="overflow-x-auto scroll-smooth hide-scrollbar flex gap-6">
          {displayedItemsOne.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className={`relative p-4 rounded-lg shadow-lg min-w-[200px] transition-all transform hover:scale-105 
                ${darkMode ? "bg-transparent text-white" : "bg-white text-black"}`} data-aos="fade-up">
                
                {/* Stock Label */}
                {product.stock && (
                  <span className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-xs font-bold rounded">
                    {product.stock}
                  </span>
                )}

                {/* Image */}
                <img src={product.mainImg} alt={product.clotheName} className="w-full h-60 object-cover" />

                {/* Content */}
                <div className="mt-4 flex justify-between">
                  <div className="flex flex-col items-start">
                    <h4 className="font-bold text-sm">{product.clotheName}</h4>
                    <p className="text-sm font-semibold">${product.discountPrice}</p>
                    <p className="text-xs">{product.availableStyle}</p>
                  </div>
                  {/* Discount & Actual Price */}
                  <div className="flex flex-col items-start gap-2">
                    <span className="px-2 py-1 text-xs font-bold rounded">{product.discount}</span>
                    <p className="text-gray-400 line-through">${product.actualPrice}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button onClick={() => scrollLeft(sliderRefOne)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full bg-opacity-50">
          <IconChevronsLeft className="opacity-100"/>
        </button>
        <button onClick={() => scrollRight(sliderRefOne)} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full bg-opacity-50">
          <IconChevronsRight className="opacity-100"/>
        </button>
      </div>

      {/* Second Slide */}
      <div className="relative mt-10">
        {/* Horizontal Scroll Container */}
        <div ref={sliderRefTwo} className="overflow-x-auto scroll-smooth hide-scrollbar flex gap-6">
          {displayedItemsTwo.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className={`relative p-4 rounded-lg shadow-lg min-w-[200px] transition-all transform hover:scale-105 
                ${darkMode ? "bg-transparent text-white" : "bg-white text-black"}`} data-aos="fade-up">
                
                {/* Stock Label */}
                {product.stock && (
                  <span className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-xs font-bold rounded">
                    {product.stock}
                  </span>
                )}

                {/* Image */}
                <img src={product.mainImg} alt={product.clotheName} className="w-full h-60 object-cover" />

                {/* Content */}
                <div className="mt-4 flex justify-between">
                  <div className="flex flex-col items-start">
                    <h4 className="font-bold text-sm">{product.clotheName}</h4>
                    <p className="text-sm font-semibold">${product.discountPrice}</p>
                    <p className="text-xs">{product.availableStyle}</p>
                  </div>
                  {/* Discount & Actual Price */}
                  <div className="flex flex-col items-start gap-2">
                    <span className="px-2 py-1 text-xs font-bold rounded">{product.discount}</span>
                    <p className="text-gray-400 line-through">${product.actualPrice}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button onClick={() => scrollLeft(sliderRefTwo)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full bg-opacity-50">
          <IconChevronsLeft className="opacity-100"/>
        </button>
        <button onClick={() => scrollRight(sliderRefTwo)} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full bg-opacity-50">
          <IconChevronsRight className="opacity-100"/>
        </button>
      </div>
    </section>
  );
};

export default Trending;
