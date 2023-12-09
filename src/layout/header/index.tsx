import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { MdHome } from "react-icons/md";
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
import { Logo } from "@/api/common/type";
import Drawer from "./Drawer";
import { BsList } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const productTypes: ProductType[] | undefined = queryClient.getQueryData([
    "product-types",
  ]);
  const logo: Logo | undefined = queryClient.getQueryData(["get-logo"]);
  const handleOpenDrawer = () => {
    setOpen(true);
  };
  const handleCloseDrawer = () => {
    setOpen(false);
  };
  return (
    <>
      <header className="fixed left-0 top-0 z-10 w-screen border-b border-border bg-background px-4 py-3 shadow-sm md:px-8 md:py-6 ">
        <nav className=" flex justify-between  ">
          <button className="md:hidden" onClick={handleOpenDrawer}>
            <BsList className=" h-10 w-10 transition-transform hover:scale-110 " />
          </button>
          <div className=" hidden items-center justify-center  gap-8 md:flex">
            <Link to={"/"}>
              <MdHome className="text-2xl " />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <TypographyLarge>products</TypographyLarge>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="mx-6 my-6  [&>li]:mt-2">
                      {productTypes?.map((productType) => (
                        <li key={productType._id}>
                          <Link to={`/products/${productType._id}`}>
                            <NavigationMenuLink>
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
                  <TypographyLarge>{navLink.label}</TypographyLarge>
                </Link>
              ))}
            </>
          </div>
          <div className=" ">
            <img
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 "
              src={logo?.mainLogo}
              alt="logo"
            />
          </div>
        </nav>
      </header>
      {open && <Drawer open={open} handleClose={handleCloseDrawer} />}
    </>
  );
};

export default Navbar;
