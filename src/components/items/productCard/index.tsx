import React from "react";

import { ProductCardProps } from "./type";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/app/hooks";
import { addToCart } from "@/features/cart/slice";

const ProductCart = (props: ProductCardProps) => {
  const { _id, img, title, desc, deepDetails } = props;
  const dispatch = useAppDispatch();
  return (
    <div className="m-auto flex w-[250px] flex-col px-4 sm:w-[280px] sm:gap-5 md:w-[320px]">
      <Link to={`/product/${_id}`}>
        <div className="  group flex w-full  flex-col items-center gap-4 overflow-hidden  ">
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

          <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-semibold uppercase md:text-lg">
            {title}
          </p>

          <p className=" text-sm text-muted-foreground md:text-lg lg:text-xl">
            <span className="mr-1">{deepDetails.price}</span>
            <span className="uppercase">aed</span>
          </p>
        </div>
      </Link>
      <Button
        onClick={() => dispatch(addToCart({ ...props, count: 1, wight: 1 }))}
      >
        add to cart
      </Button>
    </div>
  );
};

export default ProductCart;
