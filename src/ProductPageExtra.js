import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import person1 from './person1.png'
import person2 from './person2.png'
import person3 from './person3.png'
import person4 from './pern4.png'
import person5 from './person5.png'
import person6 from './person6.png'
import peron7 from './peron7.png'
import person8 from './p8.png'
import person9 from './p9.png'
const ProductPageExtra = ({darkMode}) => {
     const [scrollDir, setScrollDir] = useState(0);
    
        useEffect(() => {
            let lastScrollY = window.scrollY;
            const updateScrollDir = () => {
                setScrollDir(window.scrollY > lastScrollY ? -2 : 2);
                lastScrollY = window.scrollY;
            };
            window.addEventListener("scroll", updateScrollDir);
            return () => window.removeEventListener("scroll", updateScrollDir);
        }, []);
    
  return (
    <section>
           <section className={`flex flex-col items-center p-0`}>
            {/* Content here */}
            <h1 className="uppercase font-bold text-4xl text-center mt-20" data-aos='fade-in'>
                <span className="text-[16px] font-extralight">We give you more</span><br />
                ccomerce
            </h1>

            <div className="flex flex-1 items-start justify-center gap-5 mt-10 max-w-full overflow-hidden h-screen">
                {[person1,person2,person3,person4,person5,person6,peron7,person8,person9].map((pic, index) => (
                    <motion.img
                        key={index}
                        src={pic}
                        className={`w-52 h-52 rounded-lg  
                            ${darkMode ? 'border-white' : 'border-[#333]'}`}
                        animate={{ x: scrollDir * 20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}/>
                ))}
                </div>
        </section>
    </section>
  )
}

export default ProductPageExtra