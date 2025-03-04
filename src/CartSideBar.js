import { IconX, IconTrash } from "@tabler/icons-react";
import React from "react";

const CartSidebar = ({ cartItems, isOpen, onClose, removeFromCart, updateQuantity }) => {
  return (
    <div
      className={`fixed z-50 top-20 right-0 h-screen overflow-auto w-96 bg-white text-black shadow-lg p-5 transform transition-transform duration-300 flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <IconX onClick={onClose} className="absolute top-3 right-3 text-2xl font-bold cursor-pointer" />
        <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 h-32 overflow-auto">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 border-b pb-2">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
                <IconTrash onClick={() => removeFromCart(item.id)} className="text-red-500 cursor-pointer" />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-96 relative -top-14 overflow-auto">
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
        </div>

        {/* Order Summary */}
        <div className="mt-5 border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
          </div>
        </div>

        {/* Sticky Checkout Button */}
        <div className="p-3 border-t bg-white">
          <button className="w-full bg-black text-white py-2 rounded">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;