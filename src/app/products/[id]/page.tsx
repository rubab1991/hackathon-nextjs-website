import React from "react";
import Image from "next/image";

// Sample data
const productData = [
  
    {id:"1",
        imageSrc: "/images/p5.png",
        title: "The Dandy Chair",
        price: "£250",
        description: "A timeless design with premium materials.",
        dimensions: {
          height: "110cm",
          width: "75cm",
          depth: "50cm",
        },
      },
      {
        id:"2",
        imageSrc: "/images/p6.png",
        title: "Rustic Vase Set",
        price: "£155",
        description: "A timeless design with premium materials.",
        dimensions: {
          height: "110cm",
          width: "75cm",
          depth: "50cm",
        },
      },
      {
        id:"3",
        imageSrc: "/images/p8.png",
        title: "The Silky Vase",
        price: "£125",
        description: "A timeless design with premium materials.",
        dimensions: {
          height: "110cm",
          width: "75cm",
          depth: "50cm",
        },
      },
      {
        id:"4",
        imageSrc: "/images/p9.png",
        title: "The Lucy Lamp",
        price: "£399",
        description: "A timeless design with premium materials.",
        dimensions: {
          height: "110cm",
          width: "75cm",
          depth: "50cm",
        },
      },
 {id:"5",
      imageSrc: "/images/p1.png",
      title: "The Dandy chair",
      price: "£250",
      description: "A timeless design with premium materials.",
      dimensions: {
        height: "110cm",
        width: "75cm",
        depth: "50cm",
      },
    },
    {id:"6",
      imageSrc: "/images/p2.png",
      title: "Rustic Vase Set",
      price: "£155",
      description: "A timeless design with premium materials.",
      dimensions: {
        height: "110cm",
        width: "75cm",
        depth: "50cm",
      },
    },
    {
      id:"7",
      imageSrc: "/images/p3.png",
      title: "The Silky Vase",
      price: "£125",
      description: "A timeless design with premium materials.",
      dimensions: {
        height: "110cm",
        width: "75cm",
        depth: "50cm",
      },
    },
    {
      id:"8",
      imageSrc: "/images/p4.png",
      title: "The Lucy Lamp",
      price: "£399",
      description: "A timeless design with premium materials.",
      dimensions: {
        height: "110cm",
        width: "75cm",
        depth: "50cm",
      },
    },



  // Add more products as needed
];

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Find the product based on the ID
  const product = productData.find((product) => product.id === id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Image
              src={product.imageSrc}
              alt={product.title}
              width={600}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-xl text-gray-600">{product.price}</p>
            <p className="text-gray-700">{product.description}</p>
            <h3 className="text-lg font-semibold text-gray-800">Dimensions</h3>
            <p className="text-gray-700">
              Height: {product.dimensions.height} | Width: {product.dimensions.width} | Depth: {product.dimensions.depth}
            </p>
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
              <button className="bg-black text-white py-2 px-6 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
