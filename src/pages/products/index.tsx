import { useGetProductsByTypeQuery } from "@/api/products/queries";
import ProductCard from "@/components/items/productCard";
import { useSearchParams } from "react-router-dom";
const Products = () => {
  const [searchParams] = useSearchParams();
  const productTypeId = searchParams.get("type_id");
  const productType = searchParams.get("type");

  const { data: productsByType } = useGetProductsByTypeQuery({
    type: productTypeId,
  });
  return (
    <div className="px-2 py-28 md:px-4 lg:px-8 ">
      <h1 className="sm:2xl mb-12  scroll-m-20 pb-2 text-center text-xl font-semibold uppercase tracking-tight first:mt-0 md:text-3xl">{`products${
        productType ? "/" + productType : ""
      }`}</h1>
      <div className=" flex flex-wrap items-center  gap-10  md:gap-8 ">
        {productsByType?.map(
          (type) =>
            type.products.length !== 0 && (
              <div key={type._id}>
                <h2 className="mb-2  scroll-m-20  text-3xl font-semibold uppercase tracking-tight first:mt-0 sm:mb-4 md:mb-8">
                  {type.name}
                </h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {type.products.map((product) => (
                    <ProductCard
                      key={product._id}
                      {...{ ...product, isCarouselItem: false }}
                    />
                  ))}
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default Products;
