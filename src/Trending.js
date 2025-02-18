import React, { useState, useEffect } from 'react';
import { TrendingArray } from './TrendingArray';
import { IconChevronsLeft, IconChevronsRight } from '@tabler/icons-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Trending = ({ darkMode }) => {
  const [currentSlideOne, setcurrentSlideOne] = useState(0);
  const [currentSlideTwo, setcurrentSlideTwo] = useState(0);

  const itemsPerPage = 5; // 2 rows of 5 items each

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const nextSlide = () => {
    if (currentSlideOne + itemsPerPage < TrendingArray.length) {
      setcurrentSlideOne((prev) => (prev + itemsPerPage) % TrendingArray.length);
    }
  };

  const prevSlide = () => {
    if (currentSlideOne - itemsPerPage >= 0) {
      setcurrentSlideOne((prev) => (prev - itemsPerPage + TrendingArray.length) % TrendingArray.length);
    }
  };

  const displayedItems = TrendingArray.slice(currentSlideOne, currentSlideOne + itemsPerPage);

  const nextSlideTwo = () => {
    if (currentSlideTwo + itemsPerPage < TrendingArray.length) {
      setcurrentSlideTwo((prev) => (prev + itemsPerPage) % TrendingArray.length);
    }
  };

  const prevSlideTwo = () => {
    if (currentSlideTwo - itemsPerPage >= 0) {
      setcurrentSlideTwo((prev) => (prev - itemsPerPage + TrendingArray.length) % TrendingArray.length);
    }
  };

  const displayedItemsTwo = TrendingArray.slice(currentSlideTwo, currentSlideTwo + itemsPerPage);

  return (
    <section className="p-6">
      <h1 className="uppercase font-bold text-4xl text-center mt-20" data-aos="fade-up">
        Trending NOW
      </h1>
      <div>
      <div className="relative mt-10">
        <div className="relative mt-10 overflow-hidden">
  <div className="flex gap-6 transition-transform duration-100 ease-in-out transform translate-x-0 opacity-100">
    {displayedItems.map((item, index) => (
      <Link to={item.link} key={index}>
      <div
        key={index}
        className={`p-4 rounded-lg shadow-lg relative min-w-[200px] transition-all duration-500 ease-in-out transform ${
          currentSlideTwo ? "translate-x-[-10%] opacity-100" : "translate-x-0 opacity-100"
        } ${darkMode ? ' text-black' : ' bg-white text-white'}`}
      >
        {/* Stock Label */}
        {item.stock && (
          <span className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-xs font-bold rounded">
            {item.stock}
          </span>
        )}
        {/* Image */}
        <img src={item.img} alt={item.clotheName} className="w-full h-60 object-cover" />
        {/* Content */}
        <div className="mt-4 flex justify-between">
          <div className='flex flex-col items-start justify-evenly flex-1'>
            <h4 className={`font-bold text-x ${darkMode ? 'text-white' : 'text-black'}`}>{item.clotheName}</h4>
            <p className={`text-white-400 text-sm font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>${item.discountPrice}</p>
            <p className={`${darkMode ? 'text-white' : 'text-black'} text-sm`}>{item.availableStyle}</p>
          </div>
          {/* Discount & Actual Price */}
          <div className="flex flex-col items-start gap-5">
            <span className={`${darkMode ? 'bg-inherit text-white shadow-xl' : 'bg-inherit text-black shadow-xl'} px-2 py-1 text-xs font-bold rounded`}>{item.discount}</span>
            <p className="text-gray-400 line-through">${item.actualPrice}</p>
          </div>
        </div>
      </div>
      </Link>
      
    ))}
  </div>
</div>


          {/* Slide Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/3 left-0 w-12 transform -translate-y-1/2 bg-[#b9b9b5a1] opacity-90 text-white p-2 rounded-md shadow-sm"
            disabled={currentSlideTwo === 0}
          >
            <IconChevronsLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/3 right-0 transform -translate-y-1/2 bg-[#b9b9b5a1] opacity-90 text-white p-2 rounded-md"
            disabled={currentSlideTwo + itemsPerPage >= TrendingArray.length}
          >
            <IconChevronsRight />
          </button>
        </div>

        {/* Second Slide */}
        <div className="relative mt-10">
        <div className="relative mt-10 overflow-hidden">
  <div className="flex gap-6 transition-transform duration-100 ease-in-out transform translate-x-0 opacity-100">
    {displayedItemsTwo.map((item, index) => (
      <Link to={item.link} key={index}>
      <div
        key={index}
        className={`p-4 rounded-lg shadow-lg relative min-w-[200px] transition-all duration-500 ease-in-out transform ${
          currentSlideTwo ? "translate-x-[-10%] opacity-100" : "translate-x-0 opacity-100"
        } ${darkMode ? ' text-black' : ' text-white'}`}
      >
        {/* Stock Label */}
        {item.stock && (
          <span className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-xs font-bold rounded">
            {item.stock}
          </span>
        )}
        {/* Image */}
        <img src={item.img} alt={item.clotheName} className="w-full h-60 object-cover" />
        {/* Content */}
        <div className="mt-4 flex justify-between">
          <div className='flex flex-col items-start justify-evenly flex-1'>
            <h4 className={`font-bold text-x ${darkMode ? 'text-white' : 'text-black'}`}>{item.clotheName}</h4>
            <p className={`text-white-400 text-sm font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>${item.discountPrice}</p>
            <p className={`${darkMode ? 'text-white' : 'text-black'} ml-3 text-sm`}>{item.availableStyle}</p>
          </div>
          {/* Discount & Actual Price */}
          <div className="flex flex-col items-start gap-5">
            <span className={`${darkMode ? 'bg-inherit text-white shadow-xl' : 'bg-inherit text-black shadow-xl'} px-2 py-1 text-xs font-bold rounded`}>{item.discount}</span>
            <p className={`line-through ${darkMode ? ' text-white ' : 'text-black'}`}>${item.actualPrice}</p>
          </div>
        </div>
      </div>
      </Link>
    ))}
  </div>
</div>


          {/* Slide Buttons */}
          <button
            onClick={prevSlideTwo}
            className="absolute top-1/3 left-0 w-12 transform -translate-y-1/2 bg-[#b9b9b5a1] opacity-90 text-white p-2 rounded-md shadow-sm"
            disabled={currentSlideTwo === 0}
          >
            <IconChevronsLeft />
          </button>
          <button
            onClick={nextSlideTwo}
            className="absolute top-1/3 right-0 transform -translate-y-1/2 bg-[#b9b9b5a1] opacity-90 text-white p-2 rounded-md"
            disabled={currentSlideTwo + itemsPerPage >= TrendingArray.length}
          >
            <IconChevronsRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trending;