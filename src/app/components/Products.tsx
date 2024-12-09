
import ProductCard from "./ProductCard";

export default function Products() {
  const products = [
    {id:"5",
      imageSrc: "/images/p1.png",
      title: "The Dandy chair",
      price: "£250",
    },
    {id:"6",
      imageSrc: "/images/p2.png",
      title: "Rustic Vase Set",
      price: "£155",
    },
    {
      id:"7",
      imageSrc: "/images/p3.png",
      title: "The Silky Vase",
      price: "£125",
    },
    {
      id:"8",
      imageSrc: "/images/p4.png",
      title: "The Lucy Lamp",
      price: "£399",
    },
  ];

  return (
    <div className="container mx-auto py-10">
    
     
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

     
    </div>
  );
}
