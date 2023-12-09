import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { useGetProductTypeQuery } from "./api/products/queries";
import { useGetLogo } from "./api/common/queries";

function App() {
  useGetProductTypeQuery();
  useGetLogo();
  return (
    <div className="App">
      <Navbar />
      <main className="mt-[105px] ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
