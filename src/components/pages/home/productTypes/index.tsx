import { useGetProductTypeQuery } from "@/api/products/queries";
import { ProductType } from "@/api/products/type";
import { useQueryClient } from "@tanstack/react-query";
import { Slice } from "lucide-react";
import React from "react";

const ProductTypes = () => {
  const { data: productTypes } = useGetProductTypeQuery();
  return (
    <section className=" bg-gray-background flex flex-col gap-16 py-12 ">
      <div>
        <h2 className="scroll-m-20  pb-2 text-center text-3xl font-semibold uppercase tracking-tight first:mt-0">
          product types
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 ">
        {productTypes?.slice(0, 4).map((productType) => (
          <div
            key={productType._id}
            className="flex w-[250px] flex-col items-center gap-4 overflow-hidden"
          >
            <div className="h-[50%] w-full ">
              <img
                className="aspect-square h-full w-full object-cover"
                src={productType.img}
                alt={productType.name}
              />
            </div>
            <p className="text-lg font-semibold uppercase">
              {productType.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductTypes;
