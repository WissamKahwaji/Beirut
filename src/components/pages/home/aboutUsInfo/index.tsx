import { useGetAboutUsInfoQuery } from "@/api/aboutUs/queries";
import classNames from "classnames";
const AboutUsInfo = () => {
  const { data: aboutUsInfo } = useGetAboutUsInfoQuery();
  return (
    <section className=" mx-12 flex flex-col gap-16 py-12 sm:mx-24 md:mx-36 lg:mx-96 ">
      {aboutUsInfo?.content.map((contactUs, index) => (
        <div
          key={contactUs._id}
          className={classNames(
            { "md:flex-row-reverse": index % 2 === 0 },
            "flex flex-col gap-4 md:flex-row md:gap-16",
          )}
        >
          <div className="h-[300px] w-full sm:h-[350px] md:h-[400px] ">
            <img
              className="aspect-square h-full w-full object-cover"
              src={contactUs.img}
              alt={contactUs.title}
            />
          </div>
          <div className="md:max-w-md">
            <h2 className="mb-2  scroll-m-20 text-center text-3xl font-semibold uppercase tracking-tight first:mt-0 sm:mb-4 md:mb-8">
              {contactUs.title}
            </h2>
            <p>{contactUs.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutUsInfo;
