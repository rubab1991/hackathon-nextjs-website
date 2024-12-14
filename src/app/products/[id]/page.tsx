// app/products/[id]/page.tsx

import  Product  from '../../data/products'; // Import the Product type
import products from '../../data/products'; // Import the product data

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  // Find the product based on the id
  const product = products.find((p) => p.id === id);

  // If product is not found, show a message
  if (!product) {
    return <p className="text-center text-xl font-semibold">Product not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={product.imageSrc}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-xl text-gray-600 mt-2">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-4">{product.price}</p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
