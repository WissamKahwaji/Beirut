import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "../publicInstance";
import { GetProductParams, Product, ProductByType, ProductType } from "./type";
const getProducts = async () => {
  const res = await publicInstance.get<Product[]>(
    API_ROUTES.PRODUCTS.GET_PRODUCTS,
  );
  return res.data;
};
const getProductsByType = async (params: GetProductParams) => {
  const res = await publicInstance.get<ProductByType[]>(
    API_ROUTES.PRODUCTS.GET_PRODUCTS_BY_TYPE,
    { params },
  );
  return res.data;
};
const getProductTypes = async () => {
  const res = await publicInstance.get<ProductType[]>(
    API_ROUTES.PRODUCTS.GET_PRODUCT_TYPES,
  );
  return res.data;
};
const getProductDetails = async (id: string | undefined) => {
  const res = await publicInstance.get<Product>(
    API_ROUTES.PRODUCTS.GET_PRODUCT_DETAILS(id),
  );
  return res.data;
};
export { getProductTypes, getProducts, getProductsByType, getProductDetails };
