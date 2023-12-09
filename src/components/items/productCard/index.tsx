import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

import { ProductCardProps } from "./type";

const ProductCard = ({ img, title, desc, deepDetails }: ProductCardProps) => {
  return (
    <div className="flex w-[384px] flex-col items-center gap-8 overflow-hidden">
      <div className="h-[50%] w-full ">
        <img
          className="aspect-square h-full w-full object-cover"
          src={img}
          alt={title}
        />
      </div>
      <div>
        <p className="text-lg font-semibold uppercase">{title}</p>
        <p className="flex items-center justify-center text-lg text-muted-foreground">
          <BsCurrencyDollar />
          <span>{deepDetails.price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
