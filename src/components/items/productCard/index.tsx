import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

import { ProductCardProps } from "./type";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  img,
  title,
  desc,
  deepDetails,
}: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="  group flex w-[250px] flex-col items-center gap-4 overflow-hidden sm:w-[280px] sm:gap-5 md:w-[320px] ">
        <div className="  relative w-full ">
          <div className="absolute left-0 top-0 flex h-0 w-full items-center justify-center bg-border/50  transition-all duration-500 group-hover:h-full  ">
            <p className=" hidden bg-background text-center opacity-100 group-hover:block">
              {" "}
              {desc}
            </p>
          </div>
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
    </Link>
  );
};

export default ProductCard;
