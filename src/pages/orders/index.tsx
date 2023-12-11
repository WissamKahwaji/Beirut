import React from "react";
import { MdDelete } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  clearProduct,
  decrementProductNumber,
  incrementProductNumber,
  selectCartValues,
} from "@/features/cart/slice";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
const ORDERS_TABLE_HEADER = ["products", "amounts", "delete"];
const Orders = () => {
  const cardValues = useAppSelector(selectCartValues);
  const dispatch = useAppDispatch();
  return (
    <div className="m-auto max-w-6xl py-12 md:py-24 ">
      <Table>
        <TableHeader>
          <TableRow>
            {ORDERS_TABLE_HEADER.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="bg-gray-background">
          {cardValues.cartValues.map((cardValue) => (
            <TableRow key={cardValue._id}>
              <TableCell>
                <div className="flex gap-2">
                  <div className="h-14 w-14">
                    <img
                      className="aspect-square h-full w-full object-cover"
                      src={cardValue.img}
                      alt={cardValue.title}
                    />
                  </div>
                  <div>
                    <p>
                      <span>{cardValue.title}</span>
                      <span> * </span>
                      <span>{cardValue.count}</span>
                    </p>
                    <p className="flex items-center   text-muted-foreground ">
                      <BsCurrencyDollar />
                      <span>{cardValue?.deepDetails.price}</span>
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="flex ">
                <p
                  //   type="number"
                  //   value={cardValue.count}
                  className="flex items-center justify-center border bg-background p-2 px-4 shadow-sm"
                  //   onChange={(e) =>
                  //     dispatch(
                  //       changeByAmount({
                  //         id: cardValue._id,
                  //         amount: Number(e.target.value),
                  //       }),
                  //     )
                  //   }
                >
                  {cardValue.count}{" "}
                </p>
                <div className="flex ">
                  <button
                    type="button"
                    className="transition-transform hover:scale-90"
                    onClick={() =>
                      dispatch(incrementProductNumber({ id: cardValue._id }))
                    }
                  >
                    <CiSquarePlus className="h-12 w-12" />
                  </button>
                  <button
                    type="button"
                    disabled={cardValue.count <= 1}
                    onClick={() =>
                      dispatch(decrementProductNumber({ id: cardValue._id }))
                    }
                  >
                    <CiSquareMinus className="h-12 w-12" />
                  </button>
                </div>
              </TableCell>
              <TableCell>
                <button
                  onClick={() => dispatch(clearProduct({ id: cardValue._id }))}
                >
                  <MdDelete className="h-8 w-8 fill-destructive" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Orders;
