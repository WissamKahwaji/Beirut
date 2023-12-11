import { useGetAboutUsInfoQuery } from "@/api/aboutUs/queries";
import AboutUsInfo from "@/components/items/aboutUsInfo";
import AboutUsHeaderSection from "@/components/pages/aboutUs/header";
import React from "react";

const AboutUs = () => {
  const { data: aboutUsInfo, isLoading, isError } = useGetAboutUsInfoQuery();
  if (isLoading) return <p></p>;
  if (isError) return <div></div>;
  return (
    <div>
      <AboutUsHeaderSection
        title={aboutUsInfo?.title!}
        description={aboutUsInfo?.description!}
        img={aboutUsInfo?.img!}
      />
      <AboutUsInfo />
    </div>
  );
};

export default AboutUs;
