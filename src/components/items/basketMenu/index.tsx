import React, { useRef } from "react";
import { MdOutlineAddShoppingCart, MdClose } from "react-icons/md";

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
import { Link, useNavigate } from "react-router-dom";

const BasketMenu = () => {
  const navigate = useNavigate();
  const cart = useAppSelector(selectCartValues);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLButtonElement>(null!);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger ref={ref}>
        <div className="relative">
          <p className="absolute -right-1 -top-3  flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground  md:-right-2 md:-top-4 md:h-5 md:w-5">
            {cart.cartValues.reduce((acc, pre) => acc + pre.count, 0)}
          </p>
          <MdOutlineAddShoppingCart className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>product in cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {cart.cartValues.map((cartValue) => (
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
                  <p className="  text-muted-foreground ">
                    <span className="mr-1">
                      {cartValue?.selectedWeightAndPrice.price}
                    </span>
                    <span className="uppercase">aed</span>
                  </p>
                </div>
                <DropdownMenuShortcut>
                  <button
                    onClick={() =>
                      dispatch(clearProduct({ id: cartValue.localId }))
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
              <span className="mr-1">
                {cart.cartValues.reduce(
                  (acc, pre) =>
                    acc + pre.count * Number(pre.selectedWeightAndPrice.price),
                  0,
                )}
              </span>
              <span className=" uppercase">aed</span>
            </p>
          </div>
          <div className=" flex gap-4 px-1 py-2">
            <DropdownMenuItem
              className="border border-border px-2 py-1 uppercase"
              onClick={() => navigate("/orders")}
            >
              view orders
            </DropdownMenuItem>
            <DropdownMenuItem
              className="border border-border bg-primary  px-2 py-1 uppercase text-primary-foreground"
              onClick={() => navigate("/")}
            >
              check out{" "}
            </DropdownMenuItem>
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BasketMenu;
