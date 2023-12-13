import { useGetProductTypeQuery } from "@/api/products/queries";
import { PRODUCT_TYPE_CAROUSAL_RESPONSIVE } from "@/constants";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const ProductTypes = () => {
  const { data: productTypes } = useGetProductTypeQuery();
  return (
    <section className=" flex flex-col gap-16 bg-gray-background py-12 ">
      <div>
        <h2 className="sm:2xl  scroll-m-20 pb-2 text-center text-xl font-semibold uppercase tracking-tight first:mt-0 md:text-3xl">
          product types
        </h2>
      </div>
      {/* <div className="flex flex-wrap items-center justify-center gap-4 "> */}
      {productTypes && (
        <Carousel
          infinite
          autoPlay
          responsive={PRODUCT_TYPE_CAROUSAL_RESPONSIVE}
        >
          {productTypes?.map((productType) => (
            <div className=" px-12  ">
              <Link to={`/product/${productType._id}`}>
                <div
                  key={productType._id}
                  className="group flex  flex-col items-center gap-8 overflow-hidden  "
                >
                  <div className=" h-full  w-full overflow-hidden  ">
                    <img
                      className="aspect-square h-full w-full object-cover transition-transform group-hover:rotate-1 group-hover:scale-105"
                      src={productType.img}
                      alt={productType.name}
                    />
                  </div>
                  <p className="text-sm font-semibold uppercase md:text-lg">
                    {productType.name}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      )}
      {/* </div> */}
    </section>
  );
};

export default ProductTypes;
