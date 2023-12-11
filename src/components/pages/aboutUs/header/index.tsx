import React, { useState } from "react";
import { AboutUsHeaderSectionProps } from "./type";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import classNames from "classnames";

const AboutUsHeaderSection = ({
  img,
  title,
  description,
}: AboutUsHeaderSectionProps) => {
  const [showMore, setShowMore] = useState(false);
  const windowSize = window.innerWidth;
  const sm = 640;
  const maxTextLength = 200;
  const toggleShowDescription = () => setShowMore((pre) => !pre);
  return (
    <div className="  bg-gray-background pb-5   md:pb-10 ">
      <div className=" h-96 ">
        <img
          src={img}
          className="aspect-square h-full w-full object-cover"
          alt={title}
        />
      </div>
      <div className=" px-4 pt-6">
        <h2 className="sm:2xl scroll-m-20 pb-2 text-center  text-xl font-semibold uppercase tracking-tight first:mt-0 md:text-3xl">
          {title}
        </h2>
        <div className=" text-center  text-muted-foreground">
          {windowSize < sm ? (
            <div>
              {!showMore ? (
                <p>{description.slice(0, maxTextLength)}</p>
              ) : (
                <p>{description}</p>
              )}
              <button
                className="m-auto flex  items-center gap-2"
                onClick={toggleShowDescription}
              >
                <span className="capitalize">
                  {showMore ? "show less" : "show more"}
                </span>
                <span>
                  <MdOutlineKeyboardArrowUp
                    className={classNames(
                      { " rotate-180": !showMore },
                      "transition-transform",
                    )}
                  />{" "}
                </span>
              </button>
            </div>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeaderSection;
