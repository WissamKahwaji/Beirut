import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "../publicInstance";
import { Product, ProductType } from "./type";
const getProducts = async () => {
  const res = await publicInstance.get<Product[]>(
    API_ROUTES.PRODUCTS.GET_PRODUCTS,
  );
  return res.data;
};
const getProductTypes = async () => {
  const res = await publicInstance.get<ProductType[]>(
    API_ROUTES.PRODUCTS.GET_PRODUCT_TYPES,
  );
  return res.data;
};
export { getProductTypes, getProducts };
