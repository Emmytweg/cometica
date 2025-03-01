import React from "react";
import { AllProductsArray } from "./AllProductsArray";
import { Link } from "react-router-dom";

const PriceHighToLowProducts = () => {
  // Flatten the array of products
  const allProducts = Object.values(AllProductsArray).flat();

  // Filter products where productCategory is "advisable"
  const advisableProducts = allProducts.filter(
    (product) => product.order?.[2] === 'Price, from high to low'
  );
  console.log(advisableProducts)
  return (
 
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {advisableProducts.map((product, index) => (
          <Link to={`/product/${product.id}`} key={index}>
          <div key={product.id} className="p-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
                  data-aos="fade-up" >
                       {/* Image */}
                       <img src={product.mainImg} alt={product.clotheName} className="w-full h-60 object-cover" />
              {/* Stock Label */}
              {product.stock && (
                        <span className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-xs font-bold rounded">
                          {product.stock}
                        </span>
                      )}
                      <div className="flex justify-between items-center">
   {/* Content */}

   <div className="mt-4 flex justify-between">
                        <div className='flex flex-col items-start justify-evenly flex-1'>
                          <h4 className="font-bold text-x">{product.clotheName}</h4>
                          <p className="text-white-400 text-sm font-semibold">${product.discountPrice}</p>
                          <p className="text-sm">{product.availableStyle}</p>
                        </div>
          </div>
          <div className="flex flex-col items-start gap-5">
                          <span className={` px-2 py-1 text-xs font-bold rounded`}>{product.discount}</span>
                          <p className="text-gray-400 line-through">${product.actualPrice}</p>
                        </div>
          </div>
                      </div>
          
          </Link>
        ))}
      </div>
  
  );
};

export default PriceHighToLowProducts;
