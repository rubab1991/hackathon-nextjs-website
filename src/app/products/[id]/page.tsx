import products from "@/app/data/products"; // Adjust the path accordingly
import Image from "next/image";
type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
};

type Params = {
  id: string;
};

// Component to display product details
const ProductDetail = ({ params }: { params: Params }) => {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      
<Image
  src={product.imageSrc}
  alt={product.title}
  width={500} // Set a fixed width and height
  height={500}
/>
    </div>
  );
};

// If you're not using `getServerSideProps` and relying on server-side fetching, this component structure should work in the App directory.

export default ProductDetail;
