import React, { Suspense, lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import LoadingPage from "./pages/loading";
const Home = lazy(() => import("@/pages/Home"));
const Products = lazy(() => import("@/pages/products"));
const Product = lazy(() => import("@/pages/product"));
const AboutUs = lazy(() => import("@/pages/aboutUs"));
const ContactUs = lazy(() => import("@/pages/contactUs"));
const Orders = lazy(() => import("@/pages/orders"));
const Cart = lazy(() => import("@/pages/Cart"));
const Checkout = lazy(() => import("@/pages/checkout"));
const PaymentOrdersDetails = lazy(() => import("@/pages/paymentOrdersDetails"));
const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path={"products"} element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="orders/user/:id" element={<Orders />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route
          path="payment-order-details"
          element={<PaymentOrdersDetails />}
        />
      </Route>,
    ),
  );
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
