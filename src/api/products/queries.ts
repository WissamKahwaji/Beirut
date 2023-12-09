import { useQuery } from "@tanstack/react-query";
import { getProductDetails, getProductTypes, getProducts } from ".";

const useGetProductsQuery = () =>
  useQuery({ queryKey: ["products"], queryFn: () => getProducts() });
const useGetProductTypeQuery = () =>
  useQuery({ queryKey: ["product-types"], queryFn: () => getProductTypes() });
const useGetProductDetailsQuery = (id: string | undefined) =>
  useQuery({
    queryKey: ["product-details"],
    queryFn: () => getProductDetails(id),
    enabled: !!id,
  });
export {
  useGetProductTypeQuery,
  useGetProductsQuery,
  useGetProductDetailsQuery,
};
