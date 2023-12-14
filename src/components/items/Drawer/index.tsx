import React, { useEffect } from "react";
import * as Portal from "@radix-ui/react-portal";
import { DrawerProps } from "./type";
import { Logo as TLogo } from "@/api/common/type";
import { useQueryClient } from "@tanstack/react-query";
import { MdClose } from "react-icons/md";
import { DRAWER_LINKS } from "@/constants";
import { Link } from "react-router-dom";
import Logo from "@/components/ui/svg/logo";
import Name from "@/components/ui/svg/name";

const Drawer = ({ handleClose, open }: DrawerProps) => {
  const queryClient = useQueryClient();
  const logo: TLogo | undefined = queryClient.getQueryData(["get-logo"]);
  useEffect(() => {
    if (open) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.style.overflow = "hidden";
    } else if (!open) document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <Portal.Root className="absolute bottom-0 left-0 right-0 top-0  z-[1002]">
      <div
        className="absolute left-0 top-0 -z-10 h-full w-full bg-black/30"
        onClick={handleClose}
      ></div>
      <div className="relative  h-screen w-[200px] ">
        <div className=" h-full  border-r border-border bg-background shadow-sm">
          <div className="flex flex-row items-center justify-between border-b border-border p-4 pb-6 shadow-sm">
            <Link to={"/"} className="">
              <div className="flex justify-start ">
                <Logo className="  h-14 w-14 sm:h-16 sm:w-16   " />

                <Name className="  h-14 w-14 sm:h-16 sm:w-16  " />
              </div>
            </Link>
            <button onClick={handleClose}>
              <MdClose className="h-6 w-6" />
            </button>
          </div>
          <div className="p-4 pt-6">
            <ul className="flex flex-col gap-4">
              {DRAWER_LINKS.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} onClick={handleClose}>
                    <p className="text-lg font-semibold transition-transform hover:translate-x-2 hover:scale-105">
                      {link.label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Portal.Root>
  );
};

export default Drawer;
