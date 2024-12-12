"use client";

import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <header className="mb-12">
          <h1 className="text-4xl font-bold">Checkout</h1>
        </header>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Billing Details</h2>
            <form className="space-y-4 mt-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700"
                  placeholder="Enter your address"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium">
                  City
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700"
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700"
                  placeholder="Enter your postal code"
                />
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Payment Details</h2>
            <form className="space-y-4 mt-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium">
                  Card Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm font-medium">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm font-medium">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700"
                    placeholder="123"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <button className="bg-black text-white py-3 px-6 rounded-lg text-lg">
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
