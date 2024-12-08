// pages/chairs.tsx
import ProductCard from "./ProductCard";

export default function Products() {
  const products = [
    {
      imageSrc: "/images/p1.png",
      title: "The Dandy chair",
      price: "£250",
    },
    {
      imageSrc: "/images/p2.png",
      title: "Rustic Vase Set",
      price: "£155",
    },
    {
      imageSrc: "/images/p3.png",
      title: "The Silky Vase",
      price: "£125",
    },
    {
      imageSrc: "/images/p4.png",
      title: "The Lucy Lamp",
      price: "£399",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      {/* Section Header */}
      <h2 className="text-3xl font-semibold text-[#2A254B] mb-8">
        New Ceramics Collection
      </h2>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>

      {/* View Collection Button */}
      <div className="flex justify-center mt-9">
        <button className="text-[#2A254B] w-full md:w-auto py-4 bg-gray-200 rounded-md hover:bg-gray-300">
          View Collection
        </button>
      </div>
    </div>
  );
}
