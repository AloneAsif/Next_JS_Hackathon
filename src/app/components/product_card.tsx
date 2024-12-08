import React from "react";
import Image from "next/image"; // Import Image from next/image

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

function ProductCard({ image, name, description, price }: ProductCardProps) {
  return (
    <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] mx-auto rounded-lg shadow-md overflow-hidden bg-white">
      {/* Image Section */}
      <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[440px] bg-gray-100">
        <Image
          src={image}
          alt={name}
          layout="fill" // This makes the image fill the container
          objectFit="cover" // This ensures the image covers the entire area
          className="w-full h-full" // Ensure full width and height
        />
      </div>
      {/* Content Section */}
      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
          <span className="text-lg font-bold text-gray-800 mt-2 sm:mt-0">{price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
