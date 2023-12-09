import AboutUsInfo from "@/components/pages/home/aboutUsInfo";
import LandingPage from "@/components/pages/home/landingPage";
import ProductSection from "@/components/pages/home/productSection";
import ProductTypes from "@/components/pages/home/productTypes";
import Container from "@/components/ui/container";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <ProductSection />
      <AboutUsInfo />
      <ProductTypes />
    </div>
  );
};

export default Home;
