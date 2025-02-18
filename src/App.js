import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './Home';
import {Nav} from './Nav';
import { SearchProvider } from './SearchContext';
import { TrendingArray } from './TrendingArray';
import ProductPage from './ProductPage';
function App() {
 const [darkMode, setDarkMode] = useState(
      JSON.parse(localStorage.getItem("darkMode")) || false
    );
  
    useEffect(() => {
      document.body.className = darkMode ? "bg-black text-white" : "bg-white text-[#333]";
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);
  
 

  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {TrendingArray.map((product) => (
            <Route key={product.id} path={`${product.link}`} element={<ProductPage product={product} />} />
          ))}
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
