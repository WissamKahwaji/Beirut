const PRODUCTS = {
  GET_PRODUCTS: "/products",
  GET_PRODUCTS_BY_TYPE: "/products/type-products",
  GET_PRODUCT_TYPES: "/products/product-type",
  GET_PRODUCT_DETAILS: (id: string | undefined) => `/products/byid/${id}`,
  CREATE_INTENT: "/products/create-payment",
  PAYMENT_CONFIG: "/products/config",
};
const COMMON = {
  GET_LOGO: "logo",
};
const HOME_DATA = {
  GET: "/home",
};
const CONTACT_US = {
  GET: "/contact",
};
const ABOUT_US = {
  GET: "/about",
};
const ORDERS = {
  SUBMIT_DETAILS: "/orders/submit",
  USER_ORDERS: (id: string) => `/orders/user-orders/${id}`,
  LAST_USER_ORDER: (id: string) => `/orders/last-user-order/${id}`,
};
const API_ROUTES = {
  PRODUCTS,
  COMMON,
  HOME_DATA,
  CONTACT_US,
  ABOUT_US,
  ORDERS,
};
export default API_ROUTES;
