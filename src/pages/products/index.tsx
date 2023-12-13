import { useGetProductsQuery } from "@/api/products/queries";
import ProductCard from "@/components/items/productCard";
import { useSearchParams } from "react-router-dom";
const Products = () => {
  const [searchParams] = useSearchParams();
  const { data: products } = useGetProductsQuery();
  const productType = searchParams.get("type");
  return (
    <div className="pt-28 ">
      <h1 className="sm:2xl mb-12  scroll-m-20 pb-2 text-center text-xl font-semibold uppercase tracking-tight first:mt-0 md:text-3xl">{`products${
        productType ? "/" + productType : ""
      }`}</h1>
      <div className=" flex flex-wrap items-center  gap-10  md:gap-8 ">
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            {...{ ...product, isCarouselItem: false }}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
