import React, { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="mx-12 sm:mx-24 md:mx-36 lg:mx-96 ">{children}</div>;
};

export default Container;
