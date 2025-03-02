import React, { useState } from "react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { AllProductsArray } from "./AllProductsArray";

const ProductDescription = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showMaterial, setShowMaterial] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);

  // Accessing product descriptions correctly
  const productDescribe = AllProductsArray.productDescriptions;

  return (
    <div className="p-4">
      {/* Product Description */}
      <div className="flex flex-col gap-2 border-b border-b-[#f4f4f448] p-4">
        <div className="flex justify-between items-center">
          <span>Product Description</span>
          {showDescription ? (
            <IconChevronUp onClick={() => setShowDescription(!showDescription)} className="cursor-pointer" />
          ) : (
            <IconChevronDown onClick={() => setShowDescription(!showDescription)} className="cursor-pointer" />
          )}
        </div>
        {showDescription && <p>{productDescribe[0]?.productDescription || "No description available"}</p>}
      </div>

      {/* Material */}
      <div className="flex flex-col gap-2 border-b border-b-[#f4f4f448] p-4">
        <div className="flex justify-between items-center">
          <span>Material</span>
          {showMaterial ? (
            <IconChevronUp onClick={() => setShowMaterial(!showMaterial)} className="cursor-pointer" />
          ) : (
            <IconChevronDown onClick={() => setShowMaterial(!showMaterial)} className="cursor-pointer" />
          )}
        </div>
        {showMaterial && <p>{productDescribe[1]?.material || "Material info not available"}</p>}
      </div>

      {/* Delivery and Returns */}
      <div className="flex flex-col gap-2 border-b border-b-[#f4f4f448] p-4">
        <div className="flex justify-between items-center">
          <span>Delivery and Returns</span>
          {showDelivery ? (
            <IconChevronUp onClick={() => setShowDelivery(!showDelivery)} className="cursor-pointer" />
          ) : (
            <IconChevronDown onClick={() => setShowDelivery(!showDelivery)} className="cursor-pointer" />
          )}
        </div>
        {showDelivery && <p>{productDescribe[2]?.deliveryAndReturns || "Delivery info not available"}</p>}
      </div>

      
    </div>
  );
};

export default ProductDescription;
