import React, { useState } from "react";

const SizeSelector = () => {
  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div>
      <p className=" font-semibold mb-2 p-4">Choose The Size</p>
      <div className="flex gap-2">
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`w-10 h-10 flex items-center justify-center border border-white  `}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector; 
