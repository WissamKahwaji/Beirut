import React from "react";
import { MdOutlineAddShoppingCart, MdClose } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { clearProduct, selectCartValues } from "@/features/cart/slice";
import { Link } from "react-router-dom";

const BasketMenu = () => {
  const card = useAppSelector(selectCartValues);
  const dispatch = useAppDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="relative">
          <p className="absolute -right-2 -top-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
            {card.cartValues.reduce((acc, pre) => acc + pre.count, 0)}
          </p>
          <MdOutlineAddShoppingCart className="h-6 w-6" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>product in card</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {card.cartValues.map((cartValue) => (
            <DropdownMenuItem>
              <div className="flex gap-2">
                <div className="h-14 w-14">
                  <img
                    className="aspect-square h-full w-full object-cover"
                    src={cartValue.img}
                    alt={cartValue.title}
                  />
                </div>
                <div>
                  <p>
                    <span>{cartValue.title}</span>
                    <span> * </span>
                    <span>{cartValue.count}</span>
                  </p>
                  <p className="flex items-center   text-muted-foreground ">
                    <BsCurrencyDollar />
                    <span>{cartValue?.deepDetails.price}</span>
                  </p>
                </div>
                <DropdownMenuShortcut>
                  <button
                    onClick={() =>
                      dispatch(clearProduct({ id: cartValue._id }))
                    }
                  >
                    <MdClose />
                  </button>
                </DropdownMenuShortcut>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <div className="flex justify-between px-1 py-2">
            <p className="text-lg font-semibold capitalize">total:</p>
            <p>
              {" "}
              {card.cartValues.reduce(
                (acc, pre) => acc + pre.count * Number(pre.deepDetails.price),
                0,
              )}
            </p>
          </div>
          <div className=" flex gap-4 px-1 py-2">
            <Link
              to={"/orders"}
              className="border border-border px-2 py-1 uppercase"
            >
              view orders
            </Link>
            <Link
              to={"/"}
              className="border border-border bg-primary  px-2 py-1 uppercase text-primary-foreground"
            >
              check out
            </Link>
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BasketMenu;
