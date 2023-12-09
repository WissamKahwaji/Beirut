import { useGetHomeData } from "@/api/homeData/queries";

const LandingPage = () => {
  const { data: homeData } = useGetHomeData();

  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-8 overflow-hidden px-7 md:px-14 lg:px-20">
      <img
        src={homeData?.landingImg}
        className="absolute left-0 top-0 -z-10 aspect-square h-full w-full object-cover"
        alt="landing-page-img"
      />
      {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {homeData?.brandName}
      </h1>
      <h2 className="scroll-m-20 pb-2  text-center text-3xl font-semibold tracking-tight first:mt-0">
        {homeData?.brandDesc}
      </h2> */}
    </div>
  );
};

export default LandingPage;
