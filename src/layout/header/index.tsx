import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigationMenu";
import { ProductType } from "@/api/products/type";
import { NAV_LINKS } from "@/constants";
import TypographyLarge from "@/components/ui/typographyLarge";
import { Logo as TLogo } from "@/api/common/type";
import Drawer from "../../components/items/Drawer";
import { BsList } from "react-icons/bs";
import BasketMenu from "@/components/items/basketMenu";
import Name from "@/components/ui/svg/name";
import Logo from "@/components/ui/svg/logo";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const productTypes: ProductType[] | undefined = queryClient.getQueryData([
    "product-types",
  ]);
  const logo: TLogo | undefined = queryClient.getQueryData(["get-logo"]);
  const handleOpenDrawer = () => {
    setOpen(true);
  };
  const handleCloseDrawer = () => {
    setOpen(false);
  };
  return (
    <>
      <header className="fixed  left-0 top-0 z-[1001] w-screen border-b border-border bg-background px-4 py-3 shadow-sm md:px-8 md:py-6 ">
        <nav className="  flex items-center justify-between  ">
          <div className="relative hidden  md:block">
            <div className="absolute -top-7 left-0">
              <Link to={"/"} className="">
                <div className="flex justify-start ">
                  <Logo className="  h-10 w-10 sm:h-12 sm:w-12  md:h-14 md:w-14 lg:h-24 lg:w-24 " />

                  <Name className="  h-10 w-10 sm:h-12 sm:w-12  md:w-14 lg:h-24 lg:w-24 " />
                </div>
              </Link>
            </div>
          </div>
          <div className=" flex gap-8">
            <button className="md:hidden" onClick={handleOpenDrawer}>
              <BsList className=" h-10 w-10 transition-transform hover:scale-110 " />
            </button>
            <div className=" hidden items-center justify-center  gap-8 md:flex">
              <Link to={"/"}>
                <p className="text-lg font-semibold capitalize">home</p>
              </Link>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <p className="text-lg font-semibold capitalize">Shop</p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="mx-6 my-6 min-w-[100px] capitalize  [&>li]:mt-2">
                        <li>
                          <Link to={"/products"}>
                            <NavigationMenuLink asChild>
                              <TypographyLarge>all products</TypographyLarge>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        {productTypes?.map((productType) => (
                          <li key={productType._id}>
                            <Link
                              to={`/products?type=${productType.name}&type_id=${productType._id}`}
                            >
                              <NavigationMenuLink asChild>
                                <TypographyLarge>
                                  {productType.name}
                                </TypographyLarge>
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <>
                {NAV_LINKS.map((navLink) => (
                  <Link key={navLink.label} to={navLink.href}>
                    <p className=" text-lg font-semibold capitalize">
                      {navLink.label}
                    </p>
                  </Link>
                ))}
              </>
            </div>
          </div>
          <div className="md:pr-16">
            <BasketMenu />
          </div>
        </nav>
      </header>
      {open && <Drawer open={open} handleClose={handleCloseDrawer} />}
    </>
  );
};

export default Navbar;
