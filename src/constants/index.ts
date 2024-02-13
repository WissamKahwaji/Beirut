import L from "leaflet";

const NAV_LINKS = [
  { label: "about us", href: "/about-us" },
  ...(localStorage.userId
    ? [{ label: "orders", href: `/orders/user/${localStorage.userId}` }]
    : []),
  { label: "contact us", href: "/contact-us" },
];
const DRAWER_LINKS = [
  { label: "home", href: "/" },
  { label: "products", href: "/products" },
  { label: "about us", href: "/about-us" },
  ...(localStorage.userId
    ? [{ label: "orders", href: `/orders/user/${localStorage.userId}` }]
    : []),
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
    items: 2,
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
    items: 2,
  },
};
const ORDERS_TABLE_HEADER = ["products", "weight", "total price"];
const CART_TABLE_HEADER = [
  "products",
  "weight",
  "amounts",
  "total price",
  "delete",
];
const UAE_EMIRATES = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
] as const;
const COUNTRIES = ["United Arab Emirates"] as const;
var MAP_INDICATOR_ICON = L.icon({
  iconUrl: "/logo.svg",
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});
export {
  NAV_LINKS,
  DRAWER_LINKS,
  CAROUSAL_RESPONSIVE,
  PRODUCT_TYPE_CAROUSAL_RESPONSIVE,
  ORDERS_TABLE_HEADER,
  CART_TABLE_HEADER,
  MAP_INDICATOR_ICON,
  UAE_EMIRATES,
  COUNTRIES,
};
