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
    <div className=" py-24 ">
      <div className="  flex flex-col justify-center gap-4 bg-gray-background px-6 py-4 md:flex-row md:gap-6 ">
        <p className="sm:2xl lg:5xl border-b border-border pb-4 text-xl font-semibold uppercase md:hidden md:text-4xl">
          {productDetails?.title}
        </p>
        <div className="h-60 w-60 md:h-[450px] md:w-[450px]">
          <img
            className="aspect-square h-full w-full object-cover"
            src={productDetails?.img}
            alt={productDetails?.title}
          />
        </div>
        <div className="flex flex-col  gap-4 md:gap-6">
          <p className="sm:2xl lg:5xl hidden border-b border-border pb-4 text-xl font-semibold uppercase md:block md:text-4xl">
            {productDetails?.title}
          </p>
          <div className="flex items-center gap-2">
            <p className=" font-semibold capitalize   md:text-xl">type : </p>
            <p className="  sm:text-lg md:text-xl">
              {productDetails?.type.name}
            </p>
          </div>
          <div className="flex  flex-col gap-4 md:flex-row md:gap-8">
            <div className="flex  items-center gap-2">
              <p className=" font-semibold capitalize   md:text-xl">price : </p>
              <p className="flex items-center   text-muted-foreground sm:text-lg md:text-xl">
                <BsCurrencyDollar />
                <span>{productDetails?.deepDetails.price}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className=" font-semibold capitalize   md:text-xl">wight : </p>
              <p className="flex items-center   text-muted-foreground sm:text-lg md:text-xl">
                <span>{productDetails?.deepDetails?.weight}</span>
                <span className="uppercase">kg</span>
              </p>
            </div>
          </div>
          <div className="overflow-hidden ">
            <p>{productDetails?.desc}</p>
          </div>
          <div className="flex flex-col  gap-8">
            <div className="flex items-center justify-center gap-4">
              <p className="border bg-background p-2 px-4 shadow-sm">{count}</p>
              <div className="flex ">
                <button
                  className="transition-transform hover:scale-90"
                  onClick={() => setCount((count) => count + 1)}
                >
                  <CiSquarePlus className="h-12 w-12" />
                </button>
                <button onClick={() => setCount((count) => count - 1)}>
                  <CiSquareMinus className="h-12 w-12" />
                </button>
              </div>
            </div>
            <Button> add to card</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
