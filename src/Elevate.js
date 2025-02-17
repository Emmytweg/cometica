import React from 'react';
import jean from './jean.png';
import promotion1 from './promotion1.png';
import promotion2 from './promotion2.png';
import sneaker from './sneaker.png';
import tshirt from './tshirt.png';
import shirts from './shirts.png';

const Elevate = ({ darkMode }) => {
    return (
        <section className={`drop-shadow-lg p-4 transition-all ${darkMode ? 'bg-black text-white' : 'bg-white text-[#333]'}`}>
            <h1 className="uppercase font-bold text-4xl text-center mt-20 w-full">
                elevating your style game
                <p className="text-[13px] font-extralight w-2/5 text-center m-auto break-words max-sm:w-full">
                    discover the perfect blend of comfort and trend with our exclusive collection explore deals on jeans, sneakers, and more!
                </p>
            </h1>

            {/* Responsive Flex/Grid Layout */}
            <div className="flex flex-wrap lg:flex-nowrap justify-evenly items-start w-full m-auto p-5 text-center font-bold gap-5">

                {/* Left Column */}
                <div className="flex flex-col gap-5 w-full md:w-auto">
                    {/* Jeans */}
                    <div className={`p-6 text-center rounded-lg shadow-md w-full md:w-96 h-96 m-auto ${darkMode ? 'bg-[radial-gradient(circle_at_center,_#333,_#000)]' : 'bg-[radial-gradient(circle_at_center,_#E4E4E4,_#e0e0e0)]'} relative`}>
                        <h2 className="font-bold text-xl">JEANS</h2>
                        <p className="text-[13px]">
                            Style and comfort meet in our collection of jeans. Discover the latest trends and perfect cuts for an impeccable look.
                        </p>
                        <div className="w-full h-[220px] overflow-hidden relative top-14">
                            <img src={jean} className="h-96 m-auto drop-shadow-lg opacity-100 w-96 object-cover object-top" />
                        </div>
                    </div>

                    {/* Shirts */}
                    <div className={`p-6 text-center rounded-lg shadow-md w-full md:w-96 h-62 m-auto ${darkMode ? 'bg-[radial-gradient(circle_at_center,_#333,_#000)]' : 'bg-[radial-gradient(circle_at_center,_#E4E4E4,_#e0e0e0)]'}`}>
                        <h2 className="font-bold text-xl">SHIRTS</h2>
                        <div className="w-full h-[200px] overflow-hidden relative top-6">
                            <img src={shirts} className="h-64 m-auto drop-shadow-lg relative w-96 object-cover object-top" />
                        </div>
                    </div>
                </div>

                {/* Center Column - Promotions */}
                <div className={`p-6 text-center rounded-lg shadow-md h-auto lg:h-[680px] flex flex-col items-center justify-center gap-5 w-full md:w-auto ${darkMode ? 'bg-[radial-gradient(circle_at_center,_#333,_#000)]' : 'bg-[radial-gradient(circle_at_center,_#E4E4E4,_#e0e0e0)]'}`}>
                    <div className="w-full h-full overflow-hidden relative inset-x-0 top-0 flex justify-center">
                        <img src={promotion1} className="h-96 m-auto drop-shadow-lg object-contain object-top w-96" />
                    </div>
                    <h2 className="font-bold text-xl">PROMOTIONS</h2>
                    <p className="text-[13px]">
                        Explore exclusive deals on our top products. The perfect opportunity to enrich your wardrobe with trendy pieces at affordable prices.
                    </p>
                    <div className="w-full h-[200px] overflow-hidden relative top-6">
                        <img src={promotion2} className="h-96 m-auto drop-shadow-lg w-96 object-cover object-top" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-5 w-full md:w-auto">
                    {/* T-Shirts */}
                    <div className={`p-6 text-center rounded-lg shadow-md w-full md:w-96 h-64 m-auto ${darkMode ? 'bg-[radial-gradient(circle_at_center,_#333,_#000)]' : 'bg-[radial-gradient(circle_at_center,_#E4E4E4,_#e0e0e0)]'}`}>
                        <h2 className="font-bold text-xl">T-SHIRTS</h2>
                        <div className="w-full h-[200px] overflow-hidden relative top-2">
                            <img src={tshirt} className="h-96 m-auto drop-shadow-lg w-96 object-cover object-top" />
                        </div>
                    </div>

                    {/* Sneakers */}
                    <div className={`p-6 text-center rounded-lg shadow-md w-full md:w-96 h-[25rem] m-auto ${darkMode ? 'bg-[radial-gradient(circle_at_center,_#333,_#000)]' : 'bg-[radial-gradient(circle_at_center,_#E4E4E4,_#e0e0e0)]'}`}>
                        <h2 className="font-bold text-xl">SNEAKERS</h2>
                        <p className="text-[13px]">
                            Passion for fashion and comfort is reflected in every pair of sneakers. Experience style and functionality in a single step.
                        </p>
                        <div className="w-full h-[220px] overflow-hidden relative top-[4.35rem]">
                            <img src={sneaker} className="h-96 m-auto drop-shadow-lg w-96 object-cover object-top" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Elevate;