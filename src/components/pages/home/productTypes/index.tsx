import { useGetProductTypeQuery } from "@/api/products/queries";

const ProductTypes = () => {
  const { data: productTypes } = useGetProductTypeQuery();
  return (
    <section className=" flex flex-col gap-16 bg-gray-background py-12 ">
      <div>
        <h2 className="sm:2xl  scroll-m-20 pb-2 text-center text-xl font-semibold uppercase tracking-tight first:mt-0 md:text-3xl">
          product types
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 ">
        {productTypes?.slice(0, 4).map((productType) => (
          <div
            key={productType._id}
            className="flex w-[250px] flex-col items-center gap-8 overflow-hidden sm:w-[280px] md:w-[320px]"
          >
            <div className=" w-full ">
              <img
                className="aspect-square h-full w-full object-cover"
                src={productType.img}
                alt={productType.name}
              />
            </div>
            <p className="text-sm font-semibold uppercase md:text-lg">
              {productType.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductTypes;
