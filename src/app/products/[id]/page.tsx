import { GetServerSideProps } from 'next';
import products from "@/app/data/products"

type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
};

type ProductDetailProps = {
  product: Product | null;
};

const ProductDetail = ({ product }: ProductDetailProps) => {
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
};

// Get server-side props to fetch product data based on ID
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string }; // Cast to ensure `id` is a string
  const product = products.find((item) => item.id === id) || null;

  return {
    props: {
      product,
    },
  };
};

export default ProductDetail;
