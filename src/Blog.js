import React from "react";
import { Link } from "react-router-dom";
import { AllProductsArray } from "./AllProductsArray";
import Footer from "./Footer";
import NewsletterSection from "./NewsletterSection";

function Blog() {
    const allProducts = AllProductsArray.blogs;
    console.log(allProducts.blogs)
  return (
    <div className="p-10 mt-28 font-[sora]">
        <div className="mb-4">
            <Link to='/' >Home</Link>/Blog
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProducts.map((blog) => (
          <div key={blog.id} className=" p-4 rounded-lg">
            <Link to={`/blog/${blog.id}`}>
              <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover rounded" />
              <h2 className="text-xl font-bold mt-4">{blog.title}</h2>
              <p className="text-sm">{blog.preview}</p>
              <p className=" text-sm mt-2">{blog.date}</p>
            </Link>
          
           
          </div>
        ))}
      </div>
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default Blog;
