import { IconX, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";

const CartSidebar = ({ cartItems, isOpen, onClose, removeFromCart }) => {
  return (
    <div
      className={`fixed z-30 top-20 mb-10 right-0 h-[100vh] w-96 overflow-auto bg-white shadow-lg p-5 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
        <div className="flex items-center justify-between">
      {/* Close Button */}
      <IconX onClick={onClose} className="absolute top-3 right-3 text-2xl font-bold cursor-pointer" />
      <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
        </div>


      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-black border-b pb-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <IconTrash onClick={() => removeFromCart(item.id)} className="text-red-500 cursor-pointer" />
            </div>
          ))}
        </div>
      )}

      {/* Payment Options */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
        <div className="flex gap-3">
          <button className="flex-1 border p-2 rounded">Pay by Card</button>
          <button className="flex-1 border p-2 rounded">Pay by PayPal</button>
        </div>
      </div>

      {/* Billing Information */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-2" />
        <input type="email" placeholder="Email Address" className="w-full p-2 border rounded mb-2" />
        <input type="text" placeholder="Address" className="w-full p-2 border rounded mb-2" />
        <input type="text" placeholder="City" className="w-full p-2 border rounded mb-2" />
      </div>

      {/* Order Summary */}
      <div className="mt-5 border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="mt-4 w-full bg-black text-white py-2 rounded">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSidebar;
