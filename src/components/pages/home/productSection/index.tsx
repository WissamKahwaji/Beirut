import { useGetProductsQuery } from "@/api/products/queries";
import ProductCard from "@/components/items/productCard";
import { CAROUSAL_RESPONSIVE } from "@/constants";
import Carousel from "react-multi-carousel";

const ProductSection = () => {
  const { data: products } = useGetProductsQuery();
  return (
    <section className="flex flex-col gap-16 bg-gray-background py-12">
      <div>
        <h2 className="sm:2xl  scroll-m-20 pb-2 text-center text-xl font-semibold uppercase tracking-tight first:mt-0 md:text-3xl">
          feature projects
        </h2>
      </div>
      <div className="m-auto w-full lg:w-3/4 ">
        {products && (
          <Carousel
            infinite
            autoPlay
            removeArrowOnDeviceType={"xs"}
            responsive={CAROUSAL_RESPONSIVE}
          >
            {products?.map((product) => (
              <ProductCard
                key={product._id}
                {...{ ...product, isCarouselItem: true }}
              />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
