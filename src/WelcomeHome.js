import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import pic1 from './OJDNbGuzVk6A8Iq5bPpN5YtOa8.png';
import pic2 from './6V5Ya6DiTUPrbKLquU43nXdLtrk.png';
import pic3 from './dOwh3KUyFEZINS7C79VAPWph28M.png';
import pic4 from './denWHUSajJRWeN8fw6ziZ98EX0.png';
import pic5 from './df5MKiO9s4Enl3fzukyit80.png';
import pic6 from './jxfdnRKBIg3NgooyzFvJ8h4Q8Ow.png';
import pic7 from './sSBESgjiJWd6cwKIAmP9jb0mAY.png';
import pic8 from './xLauhR5pIcD3jSEfJsZjrCzc8.png';
import pic10 from './w2y9F3Ob15aIghBkLtfHEAHKoqI.png';

const WelcomeHome = ({ darkMode }) => {
    const [scrollDir, setScrollDir] = useState(0);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const updateScrollDir = () => {
            setScrollDir(window.scrollY > lastScrollY ? -1 : 1);
            lastScrollY = window.scrollY;
        };
        window.addEventListener("scroll", updateScrollDir);
        return () => window.removeEventListener("scroll", updateScrollDir);
    }, []);

    return (
        <section className={`flex flex-col items-center ${darkMode ? 'bg-black text-white' : 'bg-white text-[#333]'}`}>
            {/* Content here */}
            <h1 className="uppercase font-bold text-4xl text-center mt-20">
                <span className="text-[16px] font-extralight">Welcome to </span><br />
                cometica
            </h1>

            <div className="flex flex-1 items-center justify-center gap-5 mt-10 max-w-full overflow-hidden h-screen">
                {[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic10].map((pic, index) => (
                    <motion.img
                        key={index}
                        src={pic}
                        className={`w-[210px] h-[319.5px] rounded-lg border 
                            ${darkMode ? 'border-white' : 'border-[#333]'}`}
                        animate={{ x: scrollDir * 50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}/>
                ))}
                </div>
        </section>
    );
};

export default WelcomeHome;
