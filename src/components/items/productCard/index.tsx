import React from "react";

import { ProductCardProps } from "./type";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/app/hooks";
import { addToCart } from "@/features/cart/slice";
import classNames from "classnames";
import { Weight } from "lucide-react";

const ProductCart = (props: ProductCardProps) => {
  const { _id, img, title, desc, deepDetails, isCarouselItem } = props;
  const dispatch = useAppDispatch();
  return (
    <div
      className={classNames(
        // { "w-[250px] sm:w-[280px] md:w-[320px]": !isCarouselItem },
        "   flex  flex-col gap-3 px-4 sm:gap-5 ",
      )}
    >
      <Link to={`/product/${_id}`}>
        <div className="  group flex w-full  flex-col items-center gap-4   ">
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

          <p className=" w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-sm font-semibold uppercase md:text-lg">
            {title}
          </p>

          <p className=" text-sm text-muted-foreground md:text-lg lg:text-xl">
            <span className="mr-1">{deepDetails?.[0]?.price}</span>
            <span className="uppercase">aed</span>
            <span className="text-sm"> (Including VAT)</span>
          </p>
        </div>
      </Link>
      <Button
        size={"sm"}
        onClick={() =>
          dispatch(
            addToCart({
              ...props,
              count: 1,
              weight: 1,
              selectedWeightAndPrice: {
                price: deepDetails[0].price,
                weight: deepDetails[0].weight,
              },
              localId: new Date(),
            }),
          )
        }
      >
        add to cart
      </Button>
    </div>
  );
};

export default ProductCart;
