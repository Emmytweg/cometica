import React, { useState } from "react";
import Footer from "./Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission
      console.log("Form submitted", formData);
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen mt-20 font-[sora] ">
      <div className="flex items-center justify-center mb-10">
        <div className="w-full max-w-lg">
          <h1 className="text-4xl font-bold text-center mb-6">CONTACT US</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold mb-1">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="w-full bg-transparent border border-gray-600 p-5 rounded-xl text-white focus:outline-none focus:border-gray-400"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@gmail.com"
                className="w-full bg-transparent border border-gray-600 p-5 rounded-xl text-white focus:outline-none focus:border-gray-400"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">LOCATION</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-600 p-5 rounded-xl text-white focus:outline-none focus:border-gray-400"
              >
                <option value="">Select...</option>
                <option value="Contact">Contact</option>
                <option value="Report The Problem">Report The Problem</option>
                <option value="Command">Command</option>
              </select>
              {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello!"
                className="w-full bg-transparent border border-gray-600 p-3 rounded-xl text-white focus:outline-none focus:border-gray-400 h-32"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
