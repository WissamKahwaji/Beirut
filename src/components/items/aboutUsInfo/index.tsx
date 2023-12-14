import classNames from "classnames";
import { AboutUsContent } from "./type";
const AboutUsInfo = ({ aboutUsContent }: AboutUsContent) => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-12  ">
      {aboutUsContent?.map((contactUs, index) => (
        <div
          key={contactUs._id}
          className={classNames(
            { "md:flex-row-reverse": index % 2 === 0 },
            "flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:items-start md:gap-16",
          )}
        >
          <div className=" md:h-[400px] md:w-[400px] ">
            <img
              className=" h-full w-full object-cover"
              src={contactUs.img}
              alt={contactUs.title}
            />
          </div>
          <div className="md:max-w-md ">
            <p
              style={{ direction: "rtl", textAlign: "justify" }}
              className="text-start text-muted-foreground  first-letter:pl-2"
            >
              {contactUs.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutUsInfo;
