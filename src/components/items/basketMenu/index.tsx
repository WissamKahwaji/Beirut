import { useState, useRef, useEffect } from "react";
import { MdOutlineAddShoppingCart, MdClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { clearProduct, selectCartValues } from "@/features/cart/slice";
import { Link, useNavigate } from "react-router-dom";

const BasketMenu = () => {
  const navigate = useNavigate();
  const cart = useAppSelector(selectCartValues);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <div onClick={handleToggleMenu} className="cursor-pointer">
        <div className="relative">
          <p className="absolute -right-1 -top-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground md:-right-2 md:-top-4 md:h-5 md:w-5">
            {cart.cartValues.length &&
              cart.cartValues.reduce((acc, pre) => acc + pre.count, 0)}
          </p>
          <MdOutlineAddShoppingCart className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute -right-2 z-10 mt-2 max-h-[75vh] w-72 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg md:-right-16">
          <div className="px-4 py-3">
            <p className="font-semibold">Product in Cart</p>
          </div>
          <div className="border-t border-gray-200" />
          <div className="px-4 py-3">
            {cart.cartValues.length > 0 ? (
              cart.cartValues.map((cartValue) => (
                <div
                  key={cartValue.localId}
                  className="mb-3 flex items-center gap-2"
                >
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
                    <p className="text-gray-500">
                      <span className="mr-1">
                        {parseFloat(
                          cartValue?.selectedWeightAndPrice?.price,
                        ).toFixed(2)}
                      </span>
                      <span className="uppercase">aed</span>
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(clearProduct({ id: cartValue.localId }));
                    }}
                    className="ml-auto"
                  >
                    <MdClose />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items in the cart.</p>
            )}
          </div>
          <div className="border-t border-gray-200" />
          <div className="flex justify-between px-4 py-3">
            <p className="text-lg font-semibold capitalize">Total:</p>
            <p>
              <span className="mr-1">
                {cart.cartValues.length &&
                  cart.cartValues
                    .reduce(
                      (acc, pre) =>
                        acc +
                        pre.count * Number(pre.selectedWeightAndPrice.price),
                      0,
                    )
                    .toFixed(2)}
              </span>
              <span className="uppercase">aed</span>
            </p>
          </div>
          <div className="flex gap-2 px-4 py-3">
            <button
              className="w-full border border-gray-300 px-3 py-1 text-center text-xs uppercase"
              onClick={() => {
                navigate("/cart");
                setIsOpen(false);
              }}
            >
              Review Order
            </button>
            <button
              className="w-full border border-gray-300 bg-primary px-3 py-2 text-center text-xs uppercase text-white"
              onClick={() => {
                navigate("/payment-order-details");
                setIsOpen(false);
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketMenu;

/*
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative">
          <p className="absolute -right-1 -top-3  flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground  md:-right-2 md:-top-4 md:h-5 md:w-5">
            {cart.cartValues.length &&
              cart.cartValues.reduce((acc, pre) => acc + pre.count, 0)}
          </p>
          <MdOutlineAddShoppingCart className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[75vh] overflow-y-auto">
        <DropdownMenuLabel>product in cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {cart.cartValues.map((cartValue) => (
            <DropdownMenuItem
              key={cartValue.localId}
              onSelect={(event) => event.preventDefault()}
            >
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
                      {parseFloat(
                        cartValue?.selectedWeightAndPrice?.price,
                      ).toFixed(2)}
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
                {cart.cartValues.length &&
                  cart.cartValues
                    .reduce(
                      (acc, pre) =>
                        acc +
                        pre.count * Number(pre.selectedWeightAndPrice.price),
                      0,
                    )
                    .toFixed(2)}
              </span>
              <span className=" uppercase">aed</span>
            </p>
          </div>
          <div className=" flex gap-4 px-1 py-2">
            <DropdownMenuItem
              className="border border-border px-2 py-1 uppercase"
              onClick={() => navigate("/cart")}
            >
              review order
            </DropdownMenuItem>
            <DropdownMenuItem
              className="border border-border bg-primary  px-2 py-1 uppercase text-primary-foreground"
              onClick={() => navigate("/payment-order-details")}
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
*/
