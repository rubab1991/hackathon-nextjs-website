
export type Product = {
  
  id: string;

  title: string;
  description: string;
  price: string;
  imageSrc: string;
};
const products:Product [] = [
    {
        id: "1",
        imageSrc: "/images/p5.png",

        description: "A timeless ceramic vase with a soft color gray glaze.",
        title: "The Dandy Chair",
        price: "£250",
      },
      {
        id: "2",
        imageSrc: "/images/p6.png",

        description: "A rustic ceramic vase set perfect for modern interiors.",
        title: "Rustic Vase Set",
        price: "£155",
      },
      {
        id: "3",
        imageSrc: "/images/p7.png",
        description: "A sleek and modern vase with a glossy finish.",
        title: "The Silky Vase",
        price: "£125",
      },
      {
        id: "4",
        imageSrc: "/images/p8.png",
      
        description: "A classic ceramic vase with an elegant white finish.",
        title: "Classic Vase",
        price: "£180",
      },
      {
        id: "5",
        imageSrc: "/images/p9.png",
        description: "A contemporary lamp with a unique, modern design.",
        title: "The Lucy Lamp",
        price: "£399",
      },
      {
        id: "6",
        imageSrc: "/images/p1.png",
       
        description: "A comfortable and stylish chair for any living space.",
        title: "The Dandy Chair",
        price: "£250",
      },
      {
        id: "7",
        imageSrc: "/images/p2.png",
       
        description: "A timeless set of vases with a textured design.",
        title: "Rustic Vase Set",
        price: "£155",
      },
      {
        id: "8",
        imageSrc: "/images/p3.png",
       
        description: "An elegant vase with a smooth and silky finish.",
        title: "The Silky Vase",
        price: "£125",
      },
      {
        id:"9",
        imageSrc: "/images/p4.png",
       
        description: "A stylish lamp that enhances the ambiance of any room.",
        title: "The Lucy Lamp",
        price: "£399",
      },
    // More products
  ];
  export default products;