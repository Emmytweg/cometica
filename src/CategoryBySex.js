import React from 'react'
import { useState, useEffect } from 'react';
import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { AllProductsArray } from "./AllProductsArray";
const CategoryBySex = ({productGender, darkMode}) => {

    const [currentSlideOne, setCurrentSlideOne] = useState(0);
        const itemsPerPage = 4;
      
        useEffect(() => {
          AOS.init({ duration: 1000 });
        }, []);
      
        // 🔥 Dynamically filter based on the given productType
        const trendingProducts = Object.values(AllProductsArray)
          .flat()
          .filter((product) => product.gender === productGender);  // Match current product's type
      
        console.log(trendingProducts); // Debugging check
      
        const nextSlideOne = () => {
          if (currentSlideOne + itemsPerPage < trendingProducts.length) {
            setCurrentSlideOne((prev) => prev + itemsPerPage);
          }
        };
      
        const prevSlideOne = () => {
          if (currentSlideOne - itemsPerPage >= 0) {
            setCurrentSlideOne((prev) => prev - itemsPerPage);
          }
        };
      
        const displayedItemsOne = trendingProducts.slice(currentSlideOne, currentSlideOne + itemsPerPage);
  return (
    <div>
        <section className="p-6">
        <h1 className="uppercase font-bold text-4xl text-center mt-20" data-aos="fade-up">
        CATEGORY BY SEX
        </h1>
  
        {/* First Slide */}
        <div className="relative mt-10">
          <div className="relative mt-10 overflow-hidden">
            <div className="flex gap-6 transition-transform duration-100 ease-in-out transform">
              {displayedItemsOne.map((product, index) => (
                <div
                  key={product.id}
                  className="p-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
                  data-aos="fade-up"
                >
                  <Link to={`/product/${product.id}`} key={index}>
                    <div
                      key={index}
                      className={`p-4 rounded-lg shadow-lg relative min-w-[200px] transition-all duration-500 ease-in-out transform ${
                        currentSlideOne ? "translate-x-[-10%] opacity-100" : "translate-x-0 opacity-100"
                      } `}
                    >
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
                        <div className='flex flex-col items-start justify-evenly flex-1'>
                          <h4 className="font-bold text-x">{product.clotheName}</h4>
                          <p className="text-white-400 text-sm font-semibold">${product.discountPrice}</p>
                          <p className="text-sm">{product.availableStyle}</p>
                        </div>
                        {/* Discount & Actual Price */}
                        <div className="flex flex-col items-start gap-5">
                          <span className={`px-2 py-1 text-xs font-bold rounded`}>{product.discount}</span>
                          <p className="text-gray-400 line-through">${product.actualPrice}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Buttons */}
          <button onClick={prevSlideOne} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-opacity-30 p-2 rounded-full">
            <IconChevronsLeft className="opacity-100"/>
          </button>
          <button onClick={nextSlideOne} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full bg-opacity-25">
            <IconChevronsRight className="opacity-100"/>
          </button>
        </div>
      </section>
    </div>
  )
}

export default CategoryBySex