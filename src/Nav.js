import React, { useState, useEffect, useContext } from 'react';
import { IconMenu, IconSunHigh, IconSearch, IconX, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import Logo from './Screenshot_2025-02-10_055627-removebg-preview.png';
import LogoTwo from './image-removebg-preview.png';
import { SearchContext } from './SearchContext';
export const Nav = ({ darkMode, setDarkMode }) => {
    const [showNav, setShowNav] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [showShortBy, setShowShortBy] = useState(false);
    const { searchableData } = useContext(SearchContext); // Get global data
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => setShowSearch(!showSearch);
  // Search Function
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
        setSearchResults([]);
        return;
    }
 // Filter through local component data
 const results = searchableData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
);

setSearchResults(results);
};

    useEffect(() => {
        if (showNav) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [showNav]);

    const toggleNav = () => setShowNav(!showNav);
    const toggleDarkMode = () => setDarkMode((prev) => !prev);
    const toggleProducts = () => setShowProducts(!showProducts);
    const toggleShortBy = () => setShowShortBy(!showShortBy);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 transition-all 
         ${darkMode ? 'bg-black text-white' : 'bg-white text-[#333] shadow-md'}`}>
            {/* Menu Icon */}
            <div className='flex items-center'>
                <IconMenu className='cursor-pointer' onClick={toggleNav} />

                {/* Mobile Menu */}
                <ul className={`fixed top-0 left-0 h-full w-full p-5 flex flex-col gap-5 sm:w-96 font-['Sora', sans-serif] transition-transform transform ${darkMode ? 'bg-black text-white' : 'bg-white text-[#333] shadow-md'} ${showNav ? 'translate-x-0' : '-translate-x-full'} max-h-screen overflow-y-auto`}>
                    <li className="flex justify-between items-center pb-5 border-b border-gray-300">
                        MENU <IconX className='cursor-pointer' onClick={toggleNav} />
                    </li>
                    <li className='p-4 border-b'><Link to="/">HOME</Link></li>

                    {/* Products Dropdown */}
                    <li>
                        <div onClick={toggleProducts} className='p-4 flex justify-between items-center border-b cursor-pointer'>
                            PRODUCTS {showProducts ? <IconChevronUp /> : <IconChevronDown />}
                        </div>
                        {showProducts && (
                            <ul className='pl-4 font-bold border-b'>
                                {['Advisable', 'Best-Seller', 'Alphabetically A-Z', 'Alphabetically Z-A', 'Price: Low to High', 'Price: High to Low', 'Date: Old to New', 'Date: New to Old'].map((item) => (
                                    <li key={item} className='p-4 border-b'><Link to="">{item}</Link></li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {/* Short-By Dropdown */}
                    <li>
                        <div onClick={toggleShortBy} className='p-4 flex justify-between items-center border-b cursor-pointer'>
                            SHORT-BY {showShortBy ? <IconChevronUp /> : <IconChevronDown />}
                        </div>
                        {showShortBy && (
                            <ul className='pl-4 font-bold border-b'>
                                {['Jeans', 'Shirt', 'T-Shirts', 'Sneakers', 'Promotions'].map((item) => (
                                    <li key={item} className='p-4 border-b'><Link to="">{item}</Link></li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li className='p-4 border-b'><Link to="/blog">BLOG</Link></li>
                    <li className='p-4 border-b'><Link to="/faq">FAQ</Link></li>
                    <li className='p-4'><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>

            {/* Logo */}
            <Link to="/">
                <img src={darkMode ? Logo : LogoTwo} alt="Logo" className='h-10' />
            </Link>

            {/* Icons */}
            <div className='flex items-center gap-x-4'>
                <IconSunHigh onClick={toggleDarkMode} className='cursor-pointer' />
               {/* Search Icon */}
            <IconSearch className='cursor-pointer' onClick={toggleSearch} />

                {/* Search Bar */}
            {showSearch && (
                <div className={`fixed top-0 left-0 h-full w-full p-5 flex flex-col gap-5 sm:w-96 font-['Sora', sans-serif] transition-transform transform ${darkMode ? 'bg-black text-white' : 'bg-white text-[#333] shadow-md'} max-h-screen overflow-y-auto`}>
                    <div className="flex items-center border-b pb-2">
                        <IconSearch className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full p-2 outline-none bg-transparent"
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <IconX className="cursor-pointer" onClick={toggleSearch} />
                    </div>

                    {/* Search Results */}
                    {searchResults.length > 0 ? (
                        <ul className="mt-3">
                            {searchResults.map((result) => (
                                <li key={result.id} className="p-2 hover:bg-gray-inherit rounded-md">
                                    <Link to={result.link}>{result.name}</Link>
                                </li>
                            ))}
                        </ul>
                    ) : searchQuery ? (
                        <p className="text-gray-500 mt-2">No results found</p>
                    ) : null}
                </div>
            )}
            </div>
        </nav>
    );
};
