import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AllProductsArray } from "./AllProductsArray"; // Ensure correct import
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
const FullBlog = () => {
  const { id } = useParams();
  const allProducts = AllProductsArray.blogs;
  
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = allProducts.find((blog) => blog.id === parseInt(id, 10));
    setBlog(foundBlog);
  }, [id, allProducts]); // Re-run when id changes

  if (!blog) {
    return <h2 className="text-red-500 text-center mt-10">Blog not found</h2>;
  }

  const relatedBlogs = allProducts.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <motion.div className="min-h-screen">
      <div className="max-w-3xl mx-auto p-6 mt-20">
        <Link to="/blog" className="">← Back to Blogs</Link>

        <motion.h1 className="text-4xl font-bold text-center mt-6">
          .{blog.title}.
        </motion.h1>
        <motion.p className=" text-center">{blog.date}</motion.p>

        <motion.img
          src={blog.img}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg mt-6"
        />

        <div className="mt-6 space-y-4 text-lg leading-relaxed">
          {blog.fullBlog.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedBlogs.map((related) => (
            <div key={related.id}>
              <Link to={`/blog/${related.id}`} className="p-4 rounded-lg">
                <img
                  src={related.img}
                  alt={related.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-bold mt-2">{related.title}</h3>
                <p className="text-gray-400 text-sm">{related.preview}</p>
                <p className="text-sm">{related.date}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />

    </motion.div>
  );
};

export default FullBlog;
