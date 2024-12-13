"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { useState } from "react"; // Import useState for managing count

interface ProductCardProps {
  id: string;
  imageSrc: string;
  title: string;
  price: string;
}

export default function ProductCard({ id, imageSrc, title, price }: ProductCardProps) {
  const { addToCart } = useCart();
  const [count, setCount] = useState(0); // Initialize the count state to 0

  const handleIncrement = () => setCount(count + 1); // Increment the count
  const handleDecrement = () => setCount((prev) => Math.max(0, prev - 1)); // Decrement the count, but not below 0

  return (
    <Link href={`/products/${id}`}>
      <div className="max-w-xs rounded overflow-hidden shadow-2xl cursor-pointer">
        {/* Image */}
        <div className="relative h-80 w-full flex justify-between">
          <Image
            src={imageSrc}
            alt={title}
            className="roundedf"
            width={305}
            height={375}
            style={{ objectFit: "cover" }} // Corrected objectFit usage
          />
        </div>
        {/* Content */}
        <div className="text-[#2A254B] px-2 py-1">
          <h4>{title}</h4>
        </div>
        {/* Price */}
        <div className="px-2 py-1">
          <span>{price}</span>
        </div>
        {/* Quantity Controls */}
        <div className="flex items-center space-x-4">
          <button onClick={handleIncrement} className="bg-yellow-600 text-white py-1 px-4 rounded">
            +
          </button>
          <span className="text-xl">{count}</span>
          <button onClick={handleDecrement} className="bg-yellow-600 text-white py-1 px-4 rounded">
            -
          </button>
        </div>
      </div>
    </Link>
  );
}
