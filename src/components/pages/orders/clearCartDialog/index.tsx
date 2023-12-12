import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogClose,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/app/hooks";
import { clearCart } from "@/features/cart/slice";
const ClearCartDialog = () => {
  const dispatch = useAppDispatch();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>
          <MdOutlineRemoveShoppingCart className="mr-1 fill-destructive  " />
          <span> clear all</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            are you sour you want to clear your cart orders
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>close</Button>
          </DialogClose>
          <Button onClick={() => dispatch(clearCart({}))}>remove</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ClearCartDialog;
