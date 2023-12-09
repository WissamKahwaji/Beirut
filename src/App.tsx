import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/header";
import Footer from "./layout/footer";
import { useGetProductTypeQuery } from "./api/products/queries";
import { useGetLogo } from "./api/common/queries";

function App() {
  useGetProductTypeQuery();
  useGetLogo();
  return (
    <div className="App">
      <Navbar />
      <main className="mt-[65px] md:mt-[105px] md:min-h-[calc(100vh_-_405px)] ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
