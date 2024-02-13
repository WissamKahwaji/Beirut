import { useGetLastUserOrderQuery } from "@/api/orders/queries";
import { selectCartValues } from "@/features/cart/slice";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../loading";

const OrderSummery = () => {
  const { cartValues } = useSelector(selectCartValues);
  const { id } = useParams<{ id: string | undefined }>();
  const navigate = useNavigate();
  const {
    data: lastOrder,
    isLoading,
    isFetching,
    isError,
  } = useGetLastUserOrderQuery(id);
  if (isFetching) return <LoadingPage />;
  if (isError) return <></>;
  console.log(id);
  console.log(`asdasdasd ${lastOrder}`);
  return (
    <div className="flex flex-col px-1 py-12 sm:py-16 md:py-24 lg:px-10 lg:py-10">
      <h1 className="text-center text-lg font-bold uppercase lg:text-3xl">
        your invoice details{" "}
      </h1>
      <div className="mt-10 grid grid-flow-row grid-cols-1 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        <div className="my-1 flex gap-4">
          <p className="font-semibold capitalize">Invoice Number : </p>
          <p>{lastOrder?._id}</p>
        </div>
        <div className="my-1 flex gap-4">
          <p className="font-semibold capitalize">full name : </p>
          <p>{lastOrder?.userName}</p>
        </div>
        <div className="my-1 flex gap-4">
          <p className="font-semibold capitalize">mobile number : </p>
          <p>{lastOrder?.userMobileNumber}</p>
        </div>
        <div className="my-1 flex gap-4">
          <p className="font-semibold capitalize">country : </p>
          <p>{lastOrder?.country}</p>
        </div>
        <div className="my-1 flex gap-4">
          <p className="font-semibold capitalize">city : </p>
          <p>{lastOrder?.city}</p>
        </div>
        <div className="my-1 flex gap-4">
          <p className="font-semibold capitalize">your street : </p>
          <p>{lastOrder?.userStreet}</p>
        </div>
        <div className="my-1 flex gap-4">
          <p className="font-semibold capitalize">your building : </p>
          <p>{lastOrder?.userBuilding}</p>
        </div>
        <div className="my-1 flex gap-4">
          <p className="font-semibold capitalize">Payment Method : </p>
          <p>{lastOrder?.paymentMethod}</p>
        </div>
        <div className="my-1 flex gap-4">
          <p className="font-semibold capitalize">Delivery Fee : </p>
          <p>{lastOrder?.deliveryFee}</p>
        </div>
      </div>
      <hr className="border-1 border-t-1 my-2 w-full border-black" />
      <div className="flex flex-col">
        <p className="text-lg font-semibold lg:text-2xl">
          Purchased products :{" "}
        </p>
      </div>
      <div className="mt-10 grid grid-flow-row grid-cols-1 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        {lastOrder?.cartItems.map((item, index) => (
          <div className="my-1 flex gap-2">
            <div className="h-14 w-14">
              <img
                className="aspect-square h-full w-full object-cover"
                src={item.img}
                alt={item.title}
              />
            </div>
            <div>
              <p>
                <span>{item.title}</span>
                <span> * </span>
                <span>{item.quantity}</span>
              </p>
              <p className="  text-muted-foreground ">
                <span className="mr-1">{item.price.toFixed(2)}</span>
                <span className="uppercase">aed</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr className=" border-1 border-t-1 my-2 w-full border-black" />
      <div className="flex items-center justify-center gap-7 px-1 py-2">
        <p className="text-lg font-semibold capitalize lg:text-2xl">total:</p>
        <p>
          <span className="mx-1 text-2xl">
            {(
              lastOrder?.cartItemsTotalPrice! + lastOrder?.deliveryFee!
            ).toFixed(2)}
          </span>
          <span className=" uppercase">aed</span>
        </p>
      </div>
      <div className="mt-10 w-full items-center text-center">
        <button
          className="mx-auto inline-flex h-10 w-1/4 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          onClick={() => {
            navigate("/");
          }}
          type="button"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default OrderSummery;
