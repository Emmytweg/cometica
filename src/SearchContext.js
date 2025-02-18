import React, { createContext, useState } from "react";

// Create Context
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  // Manually define searchable data
  const [searchableData] = useState([
    { id: 1, type: "page", name: "Home", link: "/" },
    { id: 2, type: "page", name: "Contact", link: "/contact" },
    { id: 3, type: "product", name: "Jeans", link: "/products/jeans" },
    { id: 4, type: "product", name: "Shirt", link: "/products/shirt" },
    { id: 5, type: "blog", name: "Latest Fashion Trends", link: "/blog/fashion-trends" },
    { id: 6, type: "faq", name: "How to return an item?", link: "/faq/returns" },
  ]);

  return (
    <SearchContext.Provider value={{ searchableData }}>
      {children}
    </SearchContext.Provider>
  );
};
