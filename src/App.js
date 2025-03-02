import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";
import { SearchProvider } from "./SearchContext";
import AdvisablePage from "./AdvisablePage";
import { Nav } from "./Nav"; // Import Nav
import BestSellerPage from "./BestSellerPage";
import AlphabeticallyAZ from "./AlphabeticallyAZ";
import AlphabeticallyZA from "./AlphabeticallyZA";
import PriceHighToLow from "./PriceHighToLow";
import PriceLowToHigh from "./PriceLowToHigh";
import Jeans from "./Jeans";
import Shirts from "./Shirts";
import TShirts from "./T-Shirts";
import Sneakers from "./Sneakers";
import Promotions from "./Promotions";
import Blog from "./Blog";
import { AllProductsArray } from "./AllProductsArray";
import BlogDetail from "./FullBlog";
import FullBlog from "./FullBlog";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    document.body.className = darkMode ? "bg-black text-white" : "bg-white text-[#333]";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  const allProducts = AllProductsArray.blogs;

  return (
    <SearchProvider>
      <Router>
        {/* Navbar */}
        {/* <Nav darkMode={darkMode} setDarkMode={setDarkMode} /> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/advisable" element={<AdvisablePage />} />
          <Route path="/best-seller" element={<BestSellerPage />} />
          <Route path="/alphabetically-a-z" element={<AlphabeticallyAZ />} />
          <Route path="/alphabetically-z-a" element={<AlphabeticallyZA />} />
          <Route path="/price-high-to-low" element={<PriceHighToLow />} />
          <Route path="/price-low-to-high" element={<PriceLowToHigh />} />
          <Route path="/jeans" element={<Jeans />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/tshirts" element={< TShirts/>} />
          <Route path="/sneakers" element={< Sneakers/>} />
          <Route path="/promotions" element={< Promotions/>} />
          <Route path="/blog" element={< Blog/>} />
          <Route path= '/blog/:id' element={< FullBlog/>} />
          <Route path="/faq" element={< FAQ/>} darkMode={darkMode} />
          <Route path="/contact" element={< ContactForm/>} darkMode={darkMode} />
          <Route path="/privacy" element={< PrivacyPolicy/>} darkMode={darkMode} />
          <Route path="/terms" element={< TermsAndConditions/>} darkMode={darkMode} />

        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
