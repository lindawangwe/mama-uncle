import { useState } from "react";

type ProductItemProps = {
  id: string;
  title: string;
  image: string;
  image_1: string; // Hover image 1
  image_2: string; // Hover image 2
};

export function ProductItem({ products }: { products: ProductItemProps[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 bg-teal-100 p-4"> 
      {products.map(({ id, title, image, image_1, image_2 }) => (
        <div
          key={id}
          className="relative bg-white border border-gray-200 p-4 rounded-lg shadow hover:shadow-lg transition-all cursor-pointer"
        >
          <HoverImage image={image} image1={image_1} image2={image_2} />
          <h2 className="mt-2 text-center">{title}</h2>
        </div>
      ))}
    </div>
  );
}

const HoverImage = ({ image, image1, image2 }: { image: string, image1: string, image2: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full h-64"
    >
      <img
        src={hovered ? image1 : image}
        alt="product"
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-100'}`}
      />
      <img
        src={image2}
        alt="hover-product"
        className={`w-full h-full object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};
