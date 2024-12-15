// src/app/products/[id]/page.tsx

import { Product } from "../../data/products";  // Import the Product type
import products from "../../data/products";    // Import the products data

interface props {
  params: {
    id: any;  // Typing the 'id' as string
  };
}

const ProductDetailPage = ( props:any) => {
  const product = products.find((p) => p.id === props.params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">{product.title}</h1>
      <img src={product.imageSrc} alt={product.title} className="w-full h-auto" />
      <p className="mt-4">{product.description}</p>
      <p className="text-xl font-bold mt-4">{product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
