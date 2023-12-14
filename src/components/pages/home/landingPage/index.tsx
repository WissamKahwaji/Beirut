import { useGetHomeData } from "@/api/homeData/queries";

const LandingPage = () => {
  const { data: homeData } = useGetHomeData();

  return (
    <img
      src={homeData?.landingImg}
      className="    object-cover"
      alt="landing-page-img"
    />
  );
};

export default LandingPage;
