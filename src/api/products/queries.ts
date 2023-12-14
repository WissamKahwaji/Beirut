import { useQuery } from "@tanstack/react-query";
import {
  getProductDetails,
  getProductTypes,
  getProducts,
  getProductsByType,
} from ".";
import { GetProductParams } from "./type";

const useGetProductsQuery = () =>
  useQuery({ queryKey: ["products"], queryFn: () => getProducts() });
const useGetProductsByTypeQuery = (params: GetProductParams) =>
  useQuery({
    queryKey: ["products-by-type", params.type],
    queryFn: () => getProductsByType(params),
  });
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
  useGetProductsByTypeQuery,
};
