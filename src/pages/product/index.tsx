import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import { useGetProductDetailsQuery } from "@/api/products/queries";
import { IdParams } from "./type";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const Product = () => {
  const [count, setCount] = useState<number>(0);
  const { id } = useParams<IdParams>();

  const { data: productDetails } = useGetProductDetailsQuery(id);
  return (
    <div className="mx-16 grid  grid-cols-1 gap-8 py-24 sm:mx-20 md:mx-32 md:grid-cols-2 md:gap-16 lg:mx-52">
      <div>
        <img
          className="aspect-square h-full w-full object-contain"
          src={productDetails?.img}
          alt={productDetails?.title}
        />
      </div>
      <div className=" flex flex-col gap-4 bg-gray-background px-6 py-4 md:gap-6 ">
        <p className="sm:2xl lg:5xl border-b border-border pb-4 text-xl font-semibold uppercase md:text-4xl">
          {productDetails?.title}
        </p>
        <p className="text-lg  sm:text-xl md:text-2xl">
          {productDetails?.type.name}
        </p>
        <p className="flex items-center  text-lg text-muted-foreground sm:text-xl md:text-2xl">
          <BsCurrencyDollar />
          <span>{productDetails?.deepDetails.price}</span>
        </p>
        <div className="h-32 overflow-hidden lg:h-96">
          <p>{productDetails?.desc}</p>
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-4">
            <p className="bg-background p-2 px-4">{count}</p>
            <div className="flex flex-col">
              <button onClick={() => setCount((count) => count + 1)}>
                <CiSquarePlus className="h-6 w-6" />
              </button>
              <button onClick={() => setCount((count) => count - 1)}>
                <CiSquareMinus className="h-6 w-6" />
              </button>
            </div>
          </div>
          <Button> add to card</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
