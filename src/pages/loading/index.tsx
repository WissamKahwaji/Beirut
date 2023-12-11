import React from "react";

const LoadingPage = () => {
  return (
    <div className=" absolute left-0 top-0 z-30 flex h-screen w-screen items-center justify-center">
      <div className="h-14 w-14 animate-pulse sm:h-20 sm:w-20 md:h-28 md:w-28">
        <img
          src="/logo.png"
          className="aspect-square h-full w-full object-cover"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default LoadingPage;
