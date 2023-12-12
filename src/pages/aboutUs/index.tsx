import { useGetAboutUsInfoQuery } from "@/api/aboutUs/queries";
import AboutUsInfo from "@/components/items/aboutUsInfo";
import AboutUsHeaderSection from "@/components/pages/aboutUs/header";
import LoadingPage from "../loading";

const AboutUs = () => {
  const { data: aboutUsInfo, isLoading, isError } = useGetAboutUsInfoQuery();
  if (isLoading) return <LoadingPage />;
  if (isError) return <div></div>;
  return (
    <div className="py-12 sm:py-16 md:py-24">
      <h2 className="mb-2  scroll-m-20 text-center text-3xl font-semibold uppercase tracking-tight first:mt-0 sm:mb-4 md:mb-8">
        {aboutUsInfo?.title}
      </h2>
      {/* <AboutUsHeaderSection
        title={aboutUsInfo?.title!}
        description={aboutUsInfo?.description!}
        img={aboutUsInfo?.img!}
      /> */}
      <AboutUsInfo aboutUsContent={aboutUsInfo?.content} />
    </div>
  );
};

export default AboutUs;
