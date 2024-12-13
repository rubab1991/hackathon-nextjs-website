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
  {
    id: "1",
    imageSrc: "/images/p5.png",
    name: "Graystone vase",
    description: "A timeless ceramic vase with a soft color gray glaze.",
    title: "The Dandy Chair",
    price: "£250",
  },
  {
    id: "2",
    imageSrc: "/images/p6.png",
    name: "Rustic Vase Set",
    description: "A rustic ceramic vase set perfect for modern interiors.",
    title: "Rustic Vase Set",
    price: "£155",
  },
  {
    id: "3",
    imageSrc: "/images/p7.png",
    name: "Silky Vase",
    description: "A sleek and modern vase with a glossy finish.",
    title: "The Silky Vase",
    price: "£125",
  },
  {
    id: "4",
    imageSrc: "/images/p8.png",
    name: "Classic Vase",
    description: "A classic ceramic vase with an elegant white finish.",
    title: "Classic Vase",
    price: "£180",
  },
  {
    id: "5",
    imageSrc: "/images/p9.png",
    name: "Lucy Lamp",
    description: "A contemporary lamp with a unique, modern design.",
    title: "The Lucy Lamp",
    price: "£399",
  },
  {
    id: "6",
    imageSrc: "/images/p1.png",
    name: "Dandy Chair",
    description: "A comfortable and stylish chair for any living space.",
    title: "The Dandy Chair",
    price: "£250",
  },
  {
    id: "7",
    imageSrc: "/images/p2.png",
    name: "Rustic Vase Set",
    description: "A timeless set of vases with a textured design.",
    title: "Rustic Vase Set",
    price: "£155",
  },
  {
    id: "8",
    imageSrc: "/images/p3.png",
    name: "Silky Vase",
    description: "An elegant vase with a smooth and silky finish.",
    title: "The Silky Vase",
    price: "£125",
  },
  {
    id: "9",
    imageSrc: "/images/p4.png",
    name: "Lucy Lamp",
    description: "A stylish lamp that enhances the ambiance of any room.",
    title: "The Lucy Lamp",
    price: "£399",
  },
  // Add other products here
];

// Correct type for dynamic route params
interface ProductDetailProps {
  params: {
    id: string;
  };
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
