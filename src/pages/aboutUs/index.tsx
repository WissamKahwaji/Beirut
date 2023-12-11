import { useGetAboutUsInfoQuery } from "@/api/aboutUs/queries";
import AboutUsInfo from "@/components/items/aboutUsInfo";
import AboutUsHeaderSection from "@/components/pages/aboutUs/header";
import LoadingPage from "../loading";

const AboutUs = () => {
  const { data: aboutUsInfo, isLoading, isError } = useGetAboutUsInfoQuery();
  if (isLoading) return <LoadingPage />;
  if (isError) return <div></div>;
  return (
    <div className="pb-12 sm:pb-16 md:pb-24">
      <AboutUsHeaderSection
        title={aboutUsInfo?.title!}
        description={aboutUsInfo?.description!}
        img={aboutUsInfo?.img!}
      />
      <AboutUsInfo aboutUsContent={aboutUsInfo?.content} />
    </div>
  );
};

export default AboutUs;
