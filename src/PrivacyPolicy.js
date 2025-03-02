import React from 'react'
import { useState, useEffect } from 'react'
import { AllProductsArray } from './AllProductsArray'
import Footer from './Footer'
import { Nav } from './Nav'
const PrivacyPolicy = () => {
    const privacyPolicy = AllProductsArray.privacyPoliy
      const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
      );
    
      useEffect(() => {
        if (darkMode) {
          document.body.classList.add("bg-black", "text-white");
          document.body.classList.remove("bg-white", "text-[#333]");
        } else {
          document.body.classList.add("bg-white", "text-[#333]");
          document.body.classList.remove("bg-black", "text-white");
        }
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
      }, [darkMode]);
  return (
    <div>
              <Nav darkMode={darkMode} setDarkMode={setDarkMode} />

  <div className="min-h-screen p-10 max-w-4xl mx-auto text-white">
    <h1 className="text-4xl font-bold text-center mb-6">PRIVACY POLICY</h1>
    <div className="space-y-4">
      {privacyPolicy.map((paragraph, index) => (
        <p key={index} className={`${paragraph.endsWith(":") ? "font-bold mt-4" : ""}`}>
          {paragraph}
        </p>
      ))}
    </div>
    <Footer />
  </div>
    </div>
  
  )
}

export default PrivacyPolicy