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
      count:
        cartValues.cartValues.find((productInCart) => productInCart._id === id)
          ?.count ?? 0,
    },
  });
  useEffect(() => {
    setValue(
      "count",
      cartValues.cartValues.find((productInCart) => productInCart._id === id)
        ?.count ?? 0,
    );
  }, [cartValues, id, setValue, watch]);

  console.log(cartValues);
  const onSubmit = (values: AddToCartValues) => {
    dispatch(addToCart({ ...productDetails, count: values.count }));
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
        <div className="flex flex-col  gap-4 md:gap-6">
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
                  {productDetails?.deepDetails.price}
                </span>
                <span className="uppercase">aed</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className=" font-semibold capitalize   md:text-xl">wight : </p>
              <p className="flex items-center   text-muted-foreground sm:text-lg md:text-xl">
                <span>{productDetails?.deepDetails?.weight}</span>
                <span className="uppercase">kg</span>
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
            <div className="flex items-center justify-center gap-4">
              <input
                type="number"
                name="count"
                value={watch("count")}
                onChange={(e) => setValue("count", Number(e.target.value))}
                // {...register("count")}

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
            </div>
            {errors.count && (
              <p className="text-destructive">{errors.count.message}</p>
            )}
            <Button type="submit"> add to cart</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
