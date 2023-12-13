const NAV_LINKS = [
  { label: "about us", href: "/about-us" },
  { label: "orders", href: "/orders" },
  { label: "contact us", href: "/contact-us" },
];
const DRAWER_LINKS = [
  { label: "home", href: "/" },
  { label: "products", href: "/products" },
  { label: "about us", href: "/about-us" },
  { label: "orders", href: "/orders" },
  { label: "contact us", href: "/contact-us" },
];
const CAROUSAL_RESPONSIVE = {
  xxl: {
    breakpoint: { max: 5000, min: 1536 },
    items: 3,
  },
  xl: {
    breakpoint: { max: 1536, min: 1280 },
    items: 3,
  },
  lg: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
  },
  md: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  sm: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  xs: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};
const PRODUCT_TYPE_CAROUSAL_RESPONSIVE = {
  xxl: {
    breakpoint: { max: 5000, min: 1536 },
    items: 4,
  },
  xl: {
    breakpoint: { max: 1536, min: 1280 },
    items: 4,
  },
  lg: {
    breakpoint: { max: 1280, min: 1024 },
    items: 4,
  },
  md: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  sm: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  xs: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};
const ORDERS_TABLE_HEADER = [
  "products",
  "weight",
  "amounts",
  "total price",
  "delete",
];

export {
  NAV_LINKS,
  DRAWER_LINKS,
  CAROUSAL_RESPONSIVE,
  PRODUCT_TYPE_CAROUSAL_RESPONSIVE,
  ORDERS_TABLE_HEADER,
};
