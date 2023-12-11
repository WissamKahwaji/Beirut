import { useGetAboutUsInfoQuery } from "@/api/aboutUs/queries";
import AboutUsInfo from "@/components/items/aboutUsInfo";
import LandingPage from "@/components/pages/home/landingPage";
import ProductSection from "@/components/pages/home/productSection";
import ProductTypes from "@/components/pages/home/productTypes";

const Home = () => {
  const { data: aboutUsInfo } = useGetAboutUsInfoQuery();

  return (
    <div>
      <LandingPage />
      <ProductSection />
      <AboutUsInfo aboutUsContent={aboutUsInfo?.content} />
      <ProductTypes />
    </div>
  );
};

export default Home;
