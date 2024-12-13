import products from "@/app/data/products"

export default function ProductDetail({ params }: { params: { id: string } }) {
  // Find the product based on the id from params
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.imageSrc} alt={product.title} />
    </div>
  );
}
