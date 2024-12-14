import { Metadata } from 'next';

// TypeScript interface for PageProps
interface PageProps {
  params: {
    id: string; // Ensure `id` is a string
  };
}

// Add metadata for the page (optional)
export const metadata: Metadata = {
  title: 'Product Details',
};

// Product page component
const ProductPage = ({ params }: PageProps) => {
  const { id } = params; // Extract the dynamic route parameter

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Add more details or data fetching logic */}
    </div>
  );
};

export default ProductPage;

// If needed, use `generateStaticParams` for SSG
export async function generateStaticParams() {
  // Fetch or define dynamic IDs for products
  const products = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

  return products.map((product) => ({ params: { id: product.id } }));
}
