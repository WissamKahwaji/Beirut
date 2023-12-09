import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

import { ProductCardProps } from "./type";

const ProductCard = ({ img, title, desc, deepDetails }: ProductCardProps) => {
  return (
    <div className="flex w-[250px] flex-col items-center gap-4 overflow-hidden sm:w-[280px] sm:gap-6 md:w-[320px] md:gap-8">
      <div className=" w-full ">
        <img
          className="aspect-square h-full w-full object-cover"
          src={img}
          alt={title}
        />
      </div>
      <div>
        <p className="text-sm font-semibold uppercase md:text-lg">{title}</p>
        <p className="flex items-center justify-center text-sm text-muted-foreground md:text-lg">
          <BsCurrencyDollar />
          <span>{deepDetails.price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
