import { useGetProductsQuery } from "@/api/products/queries";
import ProductCard from "@/components/items/productCard";

const ProductSection = () => {
  const { data: products } = useGetProductsQuery();
  return (
    <section className="flex flex-col gap-16 bg-gray-background py-12">
      <div>
        <h2 className="sm:2xl  scroll-m-20 pb-2 text-center text-xl font-semibold uppercase tracking-tight first:mt-0 md:text-3xl">
          feature projects
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10  md:gap-8 ">
        {products
          ?.slice(0, 3)
          .map(({ _id, title, desc, img, deepDetails }) => (
            <ProductCard {...{ id: _id, title, desc, img, deepDetails }} />
          ))}
      </div>
    </section>
  );
};

export default ProductSection;
