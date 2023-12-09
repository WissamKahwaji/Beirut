import { useGetAboutUsInfoQuery } from "@/api/aboutUs/queries";
import classNames from "classnames";
const AboutUsInfo = () => {
  const { data: aboutUsInfo } = useGetAboutUsInfoQuery();
  return (
    <section className=" mx-12 flex flex-col gap-16 py-12 sm:mx-24 md:mx-36 lg:mx-96 ">
      <div className="grid grid-cols-2  justify-center gap-8">
        <div className="h-[384px] w-[384px]">
          <img
            className="aspect-square h-full w-full object-cover"
            src={aboutUsInfo?.content[0].img}
            alt={aboutUsInfo?.content[0].title}
          />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="scroll-m-20  pb-2 text-center text-3xl font-semibold uppercase tracking-tight first:mt-0">
            {aboutUsInfo?.content[0].title}
          </h2>
          <p>{aboutUsInfo?.content[0].text}</p>
        </div>
      </div>
      <div className="grid grid-cols-2  justify-center gap-8">
        <div className="flex flex-col gap-8">
          <h2 className="scroll-m-20  pb-2 text-center text-3xl font-semibold uppercase tracking-tight first:mt-0">
            {aboutUsInfo?.content[1].title}
          </h2>
          <p>{aboutUsInfo?.content[1].text}</p>
        </div>
        <div className="h-[384px] w-[384px]">
          <img
            className="aspect-square h-full w-full object-cover"
            src={aboutUsInfo?.content[1].img}
            alt={aboutUsInfo?.content[1].title}
          />
        </div>
      </div>
      {/* {aboutUsInfo?.content.map((contactUs, index) => (
        <div
          key={contactUs._id}
          className={classNames(
            { "flex-row-reverse": index % 2 === 0 },
            "grid grid-cols-2  justify-center gap-8",
          )}
        >
          <div className="h-[384px] w-[384px]">
            <img
              className="aspect-square h-full w-full object-cover"
              src={contactUs.img}
              alt={contactUs.title}
            />
          </div>
          <div>
            <h2>{contactUs.title}</h2>
            <p>{contactUs.text}</p>
          </div>
        </div>
      ))} */}
    </section>
  );
};

export default AboutUsInfo;
