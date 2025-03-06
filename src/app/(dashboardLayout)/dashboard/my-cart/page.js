"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const CartPage = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Laptop", price: 500, quantity: 1 },
    { id: 2, name: "Smartphone", price: 300, quantity: 2 },
    { id: 3, name: "Headphones", price: 50, quantity: 3 },
    { id: 5, name: "Headphones", price: 50, quantity: 3 },
    { id: 4, name: "Headphones", price: 50, quantity: 3 },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Fixed checkout values for demo
  const subtotal = 182;
  const onlineFee = 48;
  const total = 230;
  const payableTotal = 230;

  return (
    <div className="p-8 min-h-screen">
      {/* Page Title */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        Shopping Cart
      </h2>

      {/* Main Grid: Left = Cart Items, Right = Checkout Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Cart Items Container (spanning 2 columns on md+) */}
        <div className="md:col-span-2 bg-white rounded-md shadow-sm">
          {cartItems.length === 0 ? (
            <p className="text-lg text-gray-600">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className=" border-b p-4 flex flex-col sm:flex-row items-center justify-between  "
              >
                <div className="flex items-center space-x-4 w-full">
                  <Image
                    width={150}
                    height={150}
                    src="https://media.istockphoto.com/id/495477978/photo/open-book.jpg?s=612x612&w=0&k=20&c=vwJ6__M7CVPdjkQFUv9j2pr7QJiQ9bWW_5jXjR9TcjY="
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Price: {item.price} TK
                    </p>
                  </div>
                </div>
                {/* Quantity Selector with Lucide Icons */}
                <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                    className="p-1 rounded border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                    className="p-1 rounded border border-gray-300 hover:bg-gray-200"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800 text-sm ml-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Summary Card (Right Column) */}
        {cartItems.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Checkout Summary
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-700">
                  Subtotal
                </span>
                <span className="text-lg font-bold text-teal-600">
                  {subtotal} TK
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-700">
                  Online Fee
                </span>
                <span className="text-lg font-bold text-teal-600">
                  {onlineFee} TK
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-4">
                <span className="text-lg font-medium text-gray-700">
                  Total
                </span>
                <span className="text-lg font-bold text-teal-600">
                  {total} TK
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-700">
                  Payable Total
                </span>
                <span className="text-lg font-bold text-teal-600">
                  {payableTotal} TK
                </span>
              </div>
              <button
                className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition"
                onClick={() => alert("Proceeding to Checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
