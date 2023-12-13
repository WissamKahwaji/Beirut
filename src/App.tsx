import { Outlet } from "react-router-dom";
import Navbar from "./layout/header";
import Footer from "./layout/footer";
import { useGetProductTypeQuery } from "./api/products/queries";
import { useGetLogo } from "./api/common/queries";
import { useAppSelector } from "./app/hooks";
import { selectCartValues } from "./features/cart/slice";
import { useEffect } from "react";
import "./App.css";
import "react-multi-carousel/lib/styles.css";

function App() {
  const cartValues = useAppSelector(selectCartValues);
  useGetProductTypeQuery();
  useGetLogo();
  useEffect(() => {
    localStorage.setItem("cartValues", JSON.stringify(cartValues));
  }, [cartValues]);
  useEffect(() => {
    document.body.scrollTo(0, 0);
  });
  return (
    <div className="App">
      <Navbar />
      <main className="mt-[65px] md:mt-[89px] md:min-h-[calc(100vh_-_405px)] ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
