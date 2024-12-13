import { FC } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import products from '../../data/products'; // Adjust the path based on your actual file structure

type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
};

// Define the PageProps with params
type PageProps = {
  params: { id: string };
};

const ProductDetail: FC<PageProps> = ({ params }) => {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    // Return 404 if product not found
    notFound();
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Image
        src={product.imageSrc}
        alt={product.title}
        width={500}
        height={500}
      />
    </div>
  );
};

export default ProductDetail;
