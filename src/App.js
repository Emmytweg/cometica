import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";
import { SearchProvider } from "./SearchContext";

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
          <Route path="/" element={<Home />} />
          {/* Corrected dynamic route */}
          <Route path="/product/:productId" element={<ProductPage />} />
          </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
