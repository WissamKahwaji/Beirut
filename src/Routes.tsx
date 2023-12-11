import React, { Suspense, lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
const Home = lazy(() => import("@/pages/Home"));
const Products = lazy(() => import("@/pages/products"));
const Product = lazy(() => import("@/pages/product"));
const AboutUs = lazy(() => import("@/pages/aboutUs"));
const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path={"products"} element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="about-us" element={<AboutUs />} />
      </Route>,
    ),
  );
  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
