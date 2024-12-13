'use client';

import { useCart } from "@/context/CartContext";

interface CartButtonProps {
  product: {
    id: string;
    imageSrc: string;
    name: string;
    description: string;
    title: string;
    price: string;
  };
}

export default function CartButton({ product }: CartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-4 bg-black text-white py-2 px-6 rounded-lg"
    >
      Add to Cart
    </button>
  );
}
