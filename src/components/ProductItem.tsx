import { useEffect, useState } from "react";
import { Button } from "./Button";

type ProductItemProps = {
  id: number;
  title: string;
  image: string;
  image_1: string; 
  
};

export function ProductItem() {
  const [products, setProducts] = useState<ProductItemProps[]>([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 text-center -mt-56 ">
      {products.map(({ id, title, image, image_1 }: ProductItemProps) => (
        <div 
        key={id}
        className="border border-gray-300 p-4 bg-white
         rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
        >
          <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>
          <HoverImage image={image} image1={image_1} />
          {/* <img 
          src={image} 
          alt={title} 
          className="h-25 w-3/4 object-cover mb-2 rounded-md"
          /> */}
          <Button className="border rounded-lg pb-4 mt-2">Learn More</Button>
        </div>
      ))}
      
    </div>
  );
}

const HoverImage = ({ image, image1 }: { image: string, image1: string }) => {
  const [hovered, setHovered] = useState(false);
  const [showImage1, setShowImage1] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (hovered) {
      
      timer = setTimeout(() => {
        setShowImage1((prev) => !prev);
      }, 3000);
    } else {
      // Reset to show the first image when not hovered
      setShowImage1(true);
    }

    // Cleanup timer when the hover state changes or the component unmounts
    return () => clearTimeout(timer);
  }, [hovered, showImage1]);


  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-3/4 h-64"
    >
      <img
        src={hovered && showImage1 ? image1 : image}
        alt="product"
        className={`w-full h-full object-cover rounded-lg ${hovered ? "opacity-0" : "opacity-100"} transition-opacity duration-300 absolute top-0 left-0`}
      />
      {/* <img
        src={hovered && !showImage1? image2 : ""}
        alt="product"
        className={`w-full h-full object-cover rounded-lg ${hovered ? "opacity-100" : "opacity-0"} transition-opacity duration-300 absolute top-0 left-0`}
      /> */}
    </div>
  );
};



