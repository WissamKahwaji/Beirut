import { useGetProductsQuery } from "@/api/products/queries";
import ProductCard from "@/components/items/productCard";
import React from "react";

const ProductSection = () => {
  const { data: products } = useGetProductsQuery();
  return (
    <section className="bg-gray-background flex flex-col gap-16 py-12">
      <div>
        <h2 className="scroll-m-20  pb-2 text-center text-3xl font-semibold uppercase tracking-tight first:mt-0">
          feature projects
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 ">
        {products
          ?.slice(0, 3)
          .map(({ title, desc, img, deepDetails }) => (
            <ProductCard {...{ title, desc, img, deepDetails }} />
          ))}
      </div>
    </section>
  );
};

export default ProductSection;
