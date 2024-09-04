import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "@/api/products/queries";
import { IdParams } from "./type";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import addToCartValidationSchema, {
  AddToCartValues,
} from "@/utils/validation/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { addToCart, selectCartValues } from "@/features/cart/slice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const Product = () => {
  const { id } = useParams<IdParams>();
  const cartValues = useAppSelector(selectCartValues);
  const dispatch = useAppDispatch();

  const { data: productDetails } = useGetProductDetailsQuery(id);
  const {
    register,
    watch,
    setValue,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<AddToCartValues>({
    resolver: zodResolver(addToCartValidationSchema),
    defaultValues: {
      count: 1,
      // cartValues.cartValues.find((productInCart) => productInCart._id === id)
      //   ?.count ?? 0,
      selectedWeightAndPrice: {},
      // cartValues.cartValues.find((productInCart) => productInCart._id === id)
      //   ?.selectedWeightAndPrice ?? productDetails?.deepDetails[0],
    },
  });
  useEffect(() => {
    productDetails &&
      setValue("selectedWeightAndPrice", {
        price: productDetails.priceKg.toString(),
        weight: "1",
        unit: "kg",
      });
  }, [productDetails, setValue]);

  // useEffect(() => {
  //   setValue(
  //     "count",
  //     cartValues.cartValues.find((productInCart) => productInCart._id === id)
  //       ?.count ?? 0,
  //   );
  //   productDetails &&
  //     setValue(
  //       "selectedWeightAndPrice",
  //       cartValues.cartValues.find((productInCart) => productInCart._id === id)
  //         ?.selectedWeightAndPrice ?? productDetails?.deepDetails[0],
  //     );
  // }, [cartValues, id, setValue, watch, productDetails]);
  const onSubmit = (values: AddToCartValues) => {
    console.log("enter submit area");
    dispatch(
      addToCart({
        ...productDetails,
        count: 1,
        selectedWeightAndPrice: values.selectedWeightAndPrice,
        localId: new Date(),
        unit: values.selectedWeightAndPrice.unit,
        note: values.note,
      }),
    );
  };

  return (
    <div className=" py-24 ">
      <div className="  flex flex-col justify-center gap-4 bg-gray-background px-6 py-4 md:flex-row md:gap-6 ">
        <p className="sm:2xl lg:5xl border-b border-border pb-4 text-xl font-semibold uppercase md:hidden md:text-4xl">
          {productDetails?.title}
        </p>
        <div className="h-60 w-60 md:h-[450px] md:w-[450px]">
          <img
            className="aspect-square h-full w-full object-cover"
            src={productDetails?.img}
            alt={productDetails?.title}
          />
        </div>
        <div className="flex flex-col  gap-4 md:max-w-[500px] md:gap-6">
          <p className="sm:2xl lg:5xl hidden border-b border-border pb-4 text-xl font-semibold uppercase md:block md:text-4xl">
            {productDetails?.title}
          </p>
          <div className="flex items-center gap-2">
            <p className=" font-semibold capitalize   md:text-xl">type : </p>
            <p className="  sm:text-lg md:text-xl">
              {productDetails?.type.name}
            </p>
          </div>
          <div className="flex  flex-col gap-4 md:flex-row md:gap-8">
            <div className="flex  items-center gap-2">
              <p className=" font-semibold capitalize   md:text-xl">price : </p>
              <p className="  text-muted-foreground sm:text-lg md:text-xl">
                <span className="mr-1">
                  {/* {parseFloat(
                    productDetails?.priceKg.toString() ?? "0",
                  ).toFixed(2)} */}
                  {parseFloat(watch("selectedWeightAndPrice").price).toFixed(2)}
                </span>
                <span className="uppercase">aed</span>
                <span className="text-xs"> (Price Per Kg; Including VAT)</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className=" font-semibold capitalize md:text-xl">weight : </p>
              <p className="flex items-center   text-muted-foreground sm:text-lg md:text-xl">
                {watch("selectedWeightAndPrice")?.weight}
                <span className="uppercase">
                  {" "}
                  {watch("selectedWeightAndPrice")?.unit}
                </span>
              </p>
            </div>
          </div>
          <div className="overflow-hidden ">
            <p>{productDetails?.desc}</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col  gap-8"
          >
            {/* <div> */}
            {/* <div className="flex gap-1">
              {productDetails?.deepDetails.map((deepDetail, index) => (
                <Button
                  variant={
                    productDetails?.deepDetails.findIndex(
                      (deepDetail) =>
                        deepDetail.price ===
                        watch("selectedWeightAndPrice")?.price,
                    ) === index
                      ? "default"
                      : "outline"
                  }
                  type="button"
                  key={index}
                  onClick={(e) => {
                    setValue("selectedWeightAndPrice", deepDetail);
                  }}
                >
                  {deepDetail.weight}Kg
                </Button>
              ))}
            </div> */}
            <div className="flex gap-6">
              <input
                type="number"
                className="  border bg-background px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter weight"
                value={watch("selectedWeightAndPrice").weight}
                onChange={(e) => {
                  setValue(
                    "selectedWeightAndPrice.weight",
                    Number(e.target.value).toString(),
                  );
                  watch("selectedWeightAndPrice")?.unit === "kg"
                    ? setValue(
                        "selectedWeightAndPrice.price",
                        (
                          Number(e.target.value) * productDetails?.priceKg!
                        ).toString(),
                      )
                    : setValue(
                        "selectedWeightAndPrice.price",
                        (
                          (Number(e.target.value) / 1000) *
                          productDetails?.priceKg!
                        ).toString(),
                      );
                }}
              />
              <select
                className="rounded-md border bg-background px-3 py-2 capitalize focus:outline-none focus:ring-1 focus:ring-primary"
                // {...register("unit")}
                onChange={(e) => {
                  setValue(
                    "selectedWeightAndPrice.unit",
                    e.target.value.toString(),
                  );
                  e.target.value.toString() === "kg"
                    ? setValue(
                        "selectedWeightAndPrice.price",
                        (
                          Number(watch("selectedWeightAndPrice")?.weight) *
                          productDetails?.priceKg!
                        ).toString(),
                      )
                    : setValue(
                        "selectedWeightAndPrice.price",
                        (
                          (Number(watch("selectedWeightAndPrice")?.weight) /
                            1000) *
                          productDetails?.priceKg!
                        ).toString(),
                      );
                }}
              >
                <option value="kg">kg</option>
                <option value="g">g</option>
              </select>
            </div>
            <div className="items-center space-y-2 md:w-[80%]">
              <p className="text-sm text-gray-700">
                Please enter any notes or requests about your order
              </p>
              <textarea
                name="note"
                id="note"
                value={watch("note")}
                onChange={(e) => setValue("note", e.target.value)}
                className="min-h-[100px] w-full border bg-background p-2 px-4 shadow-sm"
              />

              {/* <input
                type="text"
                min={3}
                name="note"
                value={watch("note")}
                onChange={(e) => setValue("note", e.target.value)}
                className="border bg-background p-2 px-4 shadow-sm"
              /> */}
            </div>
            {/* <div className="flex items-center gap-4">
              <input
                type="number"
                name="count"
                value={watch("count")}
                onChange={(e) => setValue("count", Number(e.target.value))}
                className="border bg-background p-2 px-4 shadow-sm"
              />

              <div className="flex ">
                <button
                  type="button"
                  className="transition-transform hover:scale-90"
                  onClick={() => setValue("count", watch("count") + 1)}
                >
                  <CiSquarePlus className="h-12 w-12" />
                </button>
                <button
                  type="button"
                  className="transition-transform hover:scale-90 disabled:hover:scale-100"
                  disabled={watch("count") < 1}
                  onClick={() => setValue("count", watch("count") - 1)}
                >
                  <CiSquareMinus className="h-12 w-12" />
                </button>
              </div>
            </div> */}
            {/* </div> */}
            {/* {errors.count && (
              <p className="text-destructive">{errors.count.message}</p>
            )} */}
            <Button type="submit"> add to cart</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
