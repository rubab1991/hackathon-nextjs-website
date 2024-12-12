'use client';

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext"; // Assuming you have a Cart Context
import Link from "next/link";

// Product interface
interface Product {
  id: string;
  imageSrc: string;
  name: string;
  description: string;
  title: string;
  price: string;
}

// Product data
const productData: Product[] = [
  // (your product data here)
];

// Next.js expects params to be passed this way
interface ProductDetailProps {
  params: { id: string };  // params come from dynamic routing in Next.js
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { addToCart } = useCart();

  // Find the product by the ID from params
  const product = productData.find((item) => item.id === params.id);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Add product to cart
    }
  };

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
            <Link href="/shopping-cart">
              <button
                onClick={handleAddToCart}
                className="mt-4 bg-black text-white py-2 px-6 rounded-lg"
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
