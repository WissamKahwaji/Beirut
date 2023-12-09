import { useQuery } from "@tanstack/react-query";
import { getProductTypes, getProducts } from ".";

const useGetProductsQuery = () =>
  useQuery({ queryKey: ["products"], queryFn: () => getProducts() });
const useGetProductTypeQuery = () =>
  useQuery({ queryKey: ["product-types"], queryFn: () => getProductTypes() });
export { useGetProductTypeQuery, useGetProductsQuery };
