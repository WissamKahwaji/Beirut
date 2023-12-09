import React, { FC, PropsWithChildren } from "react";

const TypographyLarge: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <p className="text-lg font-semibold">{children}</p>;
};

export default TypographyLarge;
