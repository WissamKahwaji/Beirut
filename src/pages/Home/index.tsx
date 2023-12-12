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
      <section className="py-12">
        <h2 className="mb-2  scroll-m-20 text-center text-3xl font-semibold uppercase tracking-tight first:mt-0 sm:mb-4 md:mb-8">
          {aboutUsInfo?.title}
        </h2>
        <AboutUsInfo aboutUsContent={aboutUsInfo?.content} />
      </section>
      <ProductTypes />
    </div>
  );
};

export default Home;
