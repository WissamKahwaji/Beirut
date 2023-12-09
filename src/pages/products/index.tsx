import { useGetProductsQuery } from "@/api/products/queries";
import ProductCard from "@/components/items/productCard";
const Products = () => {
  const { data: products } = useGetProductsQuery();
  return (
    <div className="pt-28 ">
      <div className="flex flex-wrap items-center justify-center gap-10  md:gap-8 ">
        {products?.map(({ _id, title, desc, img, deepDetails }) => (
          <ProductCard {...{ id: _id, title, desc, img, deepDetails }} />
        ))}
      </div>
    </div>
  );
};

export default Products;
