import React from "react";
import Image from "next/image";

const ProductListing = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
          
      

      {/* Product Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-6">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src="/images/p10.png" // Replace with your image
            alt="The Dandy Chair"
            width={600}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-4">The Dandy Chair</h2>
            <p className="text-xl text-gray-600 mb-4">£250</p>
            <p className="text-gray-700 mb-6">
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather upholstery.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mb-6">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Dimensions</h3>
            <p className="text-gray-700 mb-6">
              Height: 110cm | Width: 75cm | Depth: 50cm
            </p>
          </div>

          {/* Add to Cart Section */}
          <div className="flex items-center space-x-4">
            <label htmlFor="amount" className="text-gray-700">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              defaultValue={1}
              className="border border-gray-300 rounded px-2 py-1 w-16 text-center"
            />
            <button className="bg-black text-white py-2 px-6 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* You Might Also Like Section */}
      <div className="container mx-auto py-10 px-6">
        <h3 className="text-xl font-semibold mb-6 text-center">
          You might also like
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Placeholder Products */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border rounded-lg p-4 shadow-md">
              <Image
                src={`/images/product-${item}.png`} // Replace with your image paths
                alt={`Product ${item}`}
                width={200}
                height={200}
                className="w-full h-auto mb-4 rounded"
              />
              <h4 className="text-lg font-medium">Product Name</h4>
              <p className="text-gray-600">£Price</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
