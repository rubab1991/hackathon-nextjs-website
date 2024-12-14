interface PageProps {
  params: {
    id: string;
  };
}

// Dynamic product page component
const ProductPage = async ({ params }: PageProps) => {
  const { id } = params;

  // Simulated fetch operation (e.g., fetch product details)
  const product = await fetchProductById(id); // Replace with actual fetch logic

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>{product?.name || "No product found"}</p>
    </div>
  );
};

export default ProductPage;

// Mock fetch function (replace with actual API call)
async function fetchProductById(id: string) {
  return {
    id,
    name: `Product ${id}`,
  };
}
