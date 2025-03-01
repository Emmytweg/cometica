import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AllProductsArray } from "./AllProductsArray";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const FAQ = ({ darkMode }) => {
    const [activeIndex, setActiveIndex] = useState({});
    const faqData = AllProductsArray.faqData;
  
    // Toggle function
    const toggleQuestion = (id) => {
      setActiveIndex((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    };
  
    // Smooth scrolling
    useEffect(() => {
      const handleHashChange = () => {
        const { hash } = window.location;
        if (hash) {
          const validHash = hash.replace("#", ""); // Remove #
          const element = document.getElementById(validHash); // Use getElementById (safer)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      };
  
      window.addEventListener("hashchange", handleHashChange);
      handleHashChange();
  
      return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);
  
    return (
      <div className="min-h-screen p-10 mt-24">
        <div>
            <Link to='/'>Home</Link>/FAQ
        </div>
        <h1 className="text-4xl font-bold text-center mb-8">FAQ</h1>
        <div className="flex max-w-5xl mx-auto">
          {/* Sidebar */}
          <div className="w-1/4 pr-6 hidden md:block sticky top-10 self-start border-l-4 border-white pl-2">
            {faqData.map((section) => (
              <div key={section.id} className="mb-6">
                <a
                  href={`#faq-${section.id}`} // Add "faq-" prefix
                  className="block uppercase font-semibold tracking-wide pl-4 hover:text-white transition"
                >
                  {section.category}
                </a>
              </div>
            ))}
          </div>
  
          {/* FAQ Content */}
          <div className="w-full md:w-3/4">
            {faqData.map((section) => (
              <div key={section.id} id={`faq-${section.id}`} className="mb-8">
                <h2 className="text-xl font-semibold p-4 rounded-md">
                  {section.category}
                </h2>
                {section.questions.map((q, index) => {
                  const questionId = `faq-${section.id}-q${index}`; // Ensure unique & valid ID
  
                  return (
                    <div
                      key={questionId}
                      id={questionId}
                      className={`border-b ${darkMode ? "border-zinc-200" : "border-zinc-800"}`}
                    >
                      <button
                        onClick={() => toggleQuestion(questionId)}
                        className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                      >
                        {q.question}
                        <span>{activeIndex[questionId] ? "−" : "+"}</span>
                      </button>
                      {activeIndex[questionId] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="p-4"
                        >
                          {q.answer}
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
export default FAQ;
