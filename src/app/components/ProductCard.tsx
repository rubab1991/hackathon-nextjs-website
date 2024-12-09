"use client";
// components/ChairCard.tsx
import Image from "next/image";
import Link from "next/link";


interface ProductCardProps {
  imageSrc: string;
  title: string;
  id:string;
  price: string;
}

export default function ProductCard({ id,imageSrc, title, price }: ProductCardProps) {
 
  return (
    <Link href={`/products/${id}`}>
    <div
      className="max-w-xs rounded overflow-hidden shadow-2xl cursor-pointer"
    >
       
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
      <div className=" text-[#2A254B] px-2 py-1">
        <h4 className="">{title}</h4>
        
      </div>
      {/* Price */}
      <div className="px-2 py-1">
        <span className="">{price}</span>
      </div>
    </div>
    </Link>
  );
}
