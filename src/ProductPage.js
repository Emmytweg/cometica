import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Nav } from "./Nav";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { AllProductsArray } from "./AllProductsArray";
import SizeSelector from "./SizeSelector";
import ProductDescription from "./ProductDescription";
import ProductPageExtra from "./ProductPageExtra";
import Testimonials from "./Testimonials";
import SimilarProducts from "./SimilarProducts";
import CategoryBySex from "./CategoryBySex";
import OurProducts from "./OurProducts";
import Footer from "./Footer";
import NewsletterSection from "./NewsletterSection";
import CartSidebar from "./CartSideBar";
const ProductPage = () => {
  const { productId } = useParams();
  const parsedProductId = Number(productId);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = () => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex((item) => item.id === product.id);
  
      if (existingItemIndex !== -1) {
        // If the item exists, increase its quantity
        return prevCartItems.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the item is not in the cart, add it with quantity 1
        return [
          ...prevCartItems,
          {
            id: product.id,
            name: product.clotheName,
            price: product.discountPrice,
            image: product.carouselImg[0],
            quantity: 1,
          },
        ];
      }
    });
  
    setCartOpen(true);
  };
  

  // 🛑 Moved hooks before any return statements
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

  // 🛑 Now return statements are AFTER the hooks
  if (isNaN(parsedProductId)) {
    return <h2 className="text-center mt-10 text-2xl">Invalid Product ID</h2>;
  }

  const product = Object.values(AllProductsArray).flat().find((p) => p.id === parsedProductId);

  if (!product) {
    return <h2 className="text-center mt-10 text-2xl">Product not found</h2>;
  }
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(id); // Remove item if quantity reaches 0
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };
  
  return (
    <div className="font-[sora]">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container mx-auto p-5 mt-5 lg:p-10">
        <div className="grid md:grid-cols-2 gap-8 py-12 mt-3">
          {/* Product Images Carousel */}
          <Carousel className="w-full" showThumbs={false}>
            {product.carouselImg.length > 0 ? (
              product.carouselImg.map((image, index) => (
                <div key={index}>
                  <Zoom>
                    <img
                      src={image}
                      alt={`Image of ${product.clotheName}`}
                      className="w-full rounded-lg"
                    />
                  </Zoom>
                </div>
              ))
            ) : (
              <div className="text-center">No images available</div>
            )}
          </Carousel>

          {/* Product Info */}
          <div>
            <p className="text-[15px]">{product.type}</p>
            <h1 className="text-3xl font-bold">{product.clotheName}</h1>
            <div className="flex justify-between items-center gap-2 pb-3">
              <span className="mt-6 w-1/2 border text-center p-2">{product.stock}</span>
              <span className="mt-6 w-1/2 border text-center p-2">{product.gender}</span>
            </div>

            {/* Pricing */}
            <div className="flex items-center justify-between border-b border-t p-4">
              <p className="text-[15px] font-semibold text-green-600">
                ${product.discountPrice}{" "}
                <span className="text-sm text-gray-500">
                  (You save ${product.actualPrice - product.discountPrice})
                </span>
              </p>
              <div className="text-sm flex items-center gap-3">
                <span className="line-through">${product.actualPrice}</span>
                <span className="shadow-xl p-1 text-xs bg-yellow-300 rounded">
                  {product.discount}
                </span>
              </div>
            </div>

            {/* Variant Thumbnails */}
            {product.variantImage?.length > 0 && (
  <div className="flex flex-col gap-2 mt-4 border-b p-4">
    <p className="text-[15px]">Choose Other Versions</p>
    <div className="flex flex-wrap gap-2">
      {product.variantImage.map((variant, index) => (
        <Link to={`/product/${variant.productId}`} key={index}>
          <img
            src={variant.imageUrl}  // Get the correct image URL
            alt={`Variant ${index + 1}`}
            className="w-20 h-20 cursor-pointer border border-gray-300 hover:border-black rounded-lg"
          />
        </Link>
      ))}
    </div>
  </div>
)}

            <SizeSelector />
            <ProductDescription />
            <button  onClick={handleAddToCart} className=" w-96 flex justify-center m-auto mt-3 p-3 bg-white text-black hover:bg-gray-500">
        Purchase Now
      </button>
          </div>
     
        </div>
        <ProductPageExtra />
       <Testimonials />
       <SimilarProducts productType={product.type}/>
<CategoryBySex productGender={product.gender} />
<OurProducts />
<NewsletterSection />
{/* Sidebar */}
 <CartSidebar
        cartItems={cartItems}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}  // ✅ Fix: Ensure function is passed
      />
      
      <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default ProductPage;
