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
import { MdDelete } from "react-icons/md";
import { RemoveProductFromCartDialogProps } from "./type";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/app/hooks";
import { clearProduct } from "@/features/cart/slice";
const RemoveProductFromCartDialog = ({
  productTitle,
  id,
}: RemoveProductFromCartDialogProps) => {
  const dispatch = useAppDispatch();

  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <MdDelete className=" h-6 w-6 fill-destructive sm:h-7 sm:w-7 md:h-8 md:w-8" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`are you sour you want to remove " ${productTitle} " from cart`}</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>close</Button>
          </DialogClose>
          <Button onClick={() => dispatch(clearProduct({ id }))}>remove</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RemoveProductFromCartDialog;
