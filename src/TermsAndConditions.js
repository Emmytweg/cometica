import React from "react";
import { Nav } from "./Nav";
import { useState, useEffect } from "react";
import Footer from "./Footer";
const TermsAndConditions = () => {
  const terms = [
    "Welcome to Store, an online fashion retailer specializing in contemporary fashion and accessories. Please read these Terms and Conditions carefully before using our website.",
    "Acceptance of Terms:",
    "By using this website, you agree to comply with and be bound by all of our Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.",
    "Privacy Policy:",
    "We are committed to protecting the privacy of your personal data in accordance with our Privacy Policy. By using this site, you consent to the collection, use, and disclosure of your personal data in accordance with this policy.",
    "Copyright and Intellectual Property:",
    "All copyrights and intellectual property rights to the content and materials on this site are owned by Store or its partners. Unauthorized use of these materials is prohibited and may constitute a violation of copyright laws.",
    "Orders and Payments:",
    "By placing an order on this site, you confirm that you are legally eligible to enter into a contract and make payments using authorized credentials.",
    "Delivery and Returns:",
    "Details regarding delivery options, associated costs, and return policies are specified in the dedicated sections of our policy. Please review this information before placing your order.",
    "Limitation of Liability:",
    "Store shall not be liable for any loss or damage incurred as a result of the use or inability to use this website.",
    "Changes to Terms and Conditions:",
    "We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the site. Your continued use of the site after any such changes constitutes your acceptance of those changes.",
    "By using this website, you agree to abide by and be subject to these Terms and Conditions. For further questions or clarifications, please contact us through our contact page.",
  ];
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
        <div className="min-h-screen p-10 max-w-4xl mt-20 mx-auto ">
      <h1 className="text-4xl font-bold text-center mb-6">TERMS AND CONDITIONS</h1>
      <div className="space-y-4">
        {terms.map((paragraph, index) => (
          <p key={index} className={`${paragraph.endsWith(":") ? "font-bold mt-4" : ""}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default TermsAndConditions;
