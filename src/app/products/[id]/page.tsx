// src/app/products/[id]/page.tsx
import { FC } from "react";
import products from "../../data/products"; // Adjust the import path as needed
import Image from "next/image";
import Link from "next/link";
interface PageProps {
  params: {
    id: string;
  };
}

const ProductPage: FC<PageProps> = ({ params }) => {
  const { id } = params;

  // Find the product by ID
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div className="text-center text-red-500 text-xl font-bold">Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col items-center">
        
        <Image src={product.imageSrc}
          alt={product.title}
          className="w-64 h-auto rounded-lg shadow-md mb-6" width={500} height={500} />    
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-4 text-center">{product.description}</p>
        <p className="text-xl text-green-500 font-semibold">Price: {product.price}</p>
      <Link href="/shopping-cart">  <button>Add to Cart</button></Link>
      </div>
    </div>
  );
};

export default ProductPage;
