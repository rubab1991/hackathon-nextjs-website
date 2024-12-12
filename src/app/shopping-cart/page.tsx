"use client"
// pages/shopping-cart.tsx (ShoppingCart page)
import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";  // Import the useRouter hook

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const router = useRouter(); // Initialize the router

  const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.product.price.slice(1)) * item.quantity, 0);

  const handleCheckout = () => {
    router.push("/checkout"); // Programmatically navigate to the checkout page
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <header className="mb-12">
          <h1 className="text-4xl font-bold">Your shopping cart</h1>
        </header>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-4 text-left font-medium text-gray-700">Product</th>
              <th className="py-4 text-left font-medium text-gray-700">Quantity</th>
              <th className="py-4 text-left font-medium text-gray-700">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.product.id} className="border-b">
                <td className="py-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.product.imageSrc}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <div>
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-gray-500">{item.product.description}</p>
                      <p className="text-gray-700">{item.product.price}</p>
                    </div>
                  </div>
                </td>
                <td className="py-6">
                  <div className="flex items-center gap-4">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="text-xl text-gray-700">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="text-xl text-gray-700">+</button>
                  </div>
                </td>
                <td className="py-6">{`£${parseFloat(item.product.price.slice(1)) * item.quantity}`}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-12">
          <div>
            <p className="text-lg font-semibold text-gray-700">Subtotal</p>
            <p className="text-2xl font-bold text-gray-900">£{subtotal}</p>
            <p className="text-sm text-gray-500">
              Taxes and shipping are calculated at checkout
            </p>
          </div>
          <button onClick={handleCheckout} className="bg-black text-white py-3 px-6 rounded-lg text-lg">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
