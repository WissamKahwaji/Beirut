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
  changeWight,
  decrementProductNumber,
  incrementProductNumber,
  selectCartValues,
} from "@/features/cart/slice";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import RemoveProductFromCartDialog from "@/components/pages/orders/removeProductFromCartDialog";
import ClearCartDialog from "@/components/pages/orders/clearCartDialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CART_TABLE_HEADER } from "@/constants";
const Cart = () => {
  const cartValues = useAppSelector(selectCartValues);
  const dispatch = useAppDispatch();
  return (
    <div className="m-auto max-w-6xl  py-6 md:py-8 ">
      <p className=" pb-6 text-center text-2xl font-bold  capitalize text-black md:pb-8">
        Order Review
      </p>
      <Table>
        <TableHeader>
          <TableRow>
            {CART_TABLE_HEADER.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="bg-gray-background">
          {cartValues.cartValues.map((cartValue) => (
            <TableRow key={cartValue._id}>
              <TableCell>
                <div className="flex gap-2">
                  <div className="h-14 w-14 shrink-0">
                    <img
                      className="aspect-square h-full w-full object-cover"
                      src={cartValue.img}
                      alt={cartValue.title}
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm lg:text-lg">
                      <span>{cartValue.title}</span>
                      <span> * </span>
                      <span>{cartValue.count}</span>
                    </p>
                    <p className=" text-muted-foreground ">
                      <span className="mr-1">
                        {parseFloat(
                          cartValue?.selectedWeightAndPrice?.price,
                        ).toFixed(2)}
                      </span>
                      <span className="uppercase">aed</span>
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-1">
                  {cartValue.selectedWeightAndPrice.weight + cartValue.unit}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-1">{cartValue.note ?? "-------"}</div>
              </TableCell>
              {/* <TableCell>
                <div className="flex items-center ">
                  <button
                    type="button"
                    className="transition-transform hover:scale-90"
                    onClick={() => {
                      dispatch(
                        incrementProductNumber({ id: cartValue.localId }),
                      );
                    }}
                  >
                    <CiSquarePlus className="h-10 w-10 md:h-12 md:w-12" />
                  </button>
                  <p
                    //   type="number"
                    //   value={cartValue.count}
                    className="flex h-10 w-10 items-center justify-center border bg-background shadow-sm md:h-12  md:w-12"
                    //   onChange={(e) =>
                    //     dispatch(
                    //       changeByAmount({
                    //         id: cartValue._id,
                    //         amount: Number(e.target.value),
                    //       }),
                    //     )
                    //   }
                  >
                    {cartValue.count}{" "}
                  </p>
                  <button
                    type="button"
                    disabled={cartValue.count <= 1}
                    className="transition-transform hover:scale-90 disabled:text-muted-foreground disabled:hover:scale-100"
                    onClick={() =>
                      dispatch(
                        decrementProductNumber({ id: cartValue.localId }),
                      )
                    }
                  >
                    <CiSquareMinus className="h-10 w-10 md:h-12 md:w-12" />
                  </button>
                </div>
              </TableCell> */}
              <TableCell>
                <p>
                  <span className="mr-1">
                    {(
                      Number(cartValue.selectedWeightAndPrice.price) *
                      cartValue.count
                    ).toFixed(2)}
                  </span>
                  <span className=" uppercase">aed</span>
                </p>
              </TableCell>
              <TableCell>
                <RemoveProductFromCartDialog
                  productTitle={cartValue.title}
                  id={cartValue.localId}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="ml-4 mt-5 flex flex-col justify-between gap-4 md:flex-row lg:ml-0">
        <div className="flex gap-2">
          <p className="font-semibold capitalize ">total: </p>
          <p className="text-muted-foreground">
            <span className="mr-1 ">
              {cartValues.cartValues
                .reduce(
                  (acc, pre) =>
                    acc + pre.count * Number(pre.selectedWeightAndPrice.price),
                  0,
                )
                .toFixed(2)}
            </span>
            <span className="uppercase">aed</span>
          </p>
        </div>
        <div className=" flex flex-wrap items-center gap-4 ">
          <Button variant={"secondary"} asChild>
            <Link to={"/products"}>continue shopping</Link>
          </Button>
          <Button asChild>
            <Link to={"/payment-order-details"}>check out</Link>
          </Button>
          <ClearCartDialog />
        </div>
      </div>
    </div>
  );
};

export default Cart;
