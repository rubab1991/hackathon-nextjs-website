// app/products/[id]/page.tsx

import { GetServerSideProps } from 'next';
import products  from '../../data/products'; // Import your products data

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface ProductPageProps {
  product: Product | null;
}

const ProductPage = ({ product }: ProductPageProps) => {
  if (!product) {
    return <p>Product not found</p>; // Show a message if no product is found
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-gray-600 mt-2">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-4">${product.price}</p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Fetch product data from the local `products.ts` file using getServerSideProps
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  // Find the product based on the `id`
  const product = products.find((p) => p.id === id);

  // If no product is found, return a 404 page
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product, // Pass the product data to the component
    },
  };
};

export default ProductPage;
