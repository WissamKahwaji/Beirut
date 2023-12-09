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
const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path={"products"} element={<Products />} />
        <Route path="product/:id" element={<Product />} />
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
