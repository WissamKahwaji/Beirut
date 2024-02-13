import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textArea";
import { useForm, SubmitHandler } from "react-hook-form";
import { PaymentOrdersValue } from "./type";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { selectCartValues } from "@/features/cart/slice";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { COUNTRIES, UAE_EMIRATES } from "@/constants";
import { useSubmitOrderDetailsMutation } from "@/api/orders/queries";
import Modal from "./Modal";

const PaymentOrdersDetails = () => {
  const { cartValues } = useSelector(selectCartValues);
  const { mutate: submitOrderDetails } = useSubmitOrderDetailsMutation();
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm<PaymentOrdersValue>({
    defaultValues: {
      userId: "",
      userName: "",
      userStreet: "",
      userBuilding: "",
      userMobileNumber: "",
      city: "Dubai",
      country: "United Arab Emirates",
      userNote: "",
      cartItemsTotalPrice: cartValues.reduce(
        (acc, pre) =>
          acc + Number(pre.selectedWeightAndPrice.price) * pre.count,
        0,
      ),
      deliveryFee: 25,
      paymentMethod: "cash",
      cartItems: cartValues.map((cart) => ({
        id: cart._id,
        img: cart.img,
        title: cart.title,
        weight: cart.selectedWeightAndPrice.weight,
        price: cart.selectedWeightAndPrice.price,
        quantity: cart.count,
      })),
    },
  });
  useEffect(() => {
    let userId = localStorage.userId;
    if (userId) {
      form.setValue("userId", userId);
    } else {
      userId = uuidv4();
      localStorage.setItem("userId", userId);
    }
  }, [form]);

  const onSubmit: SubmitHandler<PaymentOrdersValue> = (values) => {
    submitOrderDetails(values);
  };

  return (
    <div className="mx-4 max-w-6xl py-12 md:py-24 lg:m-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 lg:space-y-8"
        >
          <p className="text-center text-sm font-semibold">
            On our online store, we process order within the United Arab
            Emirates only. For worldwide orders, please contact us on WhatsApp.
          </p>
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">full name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter your full name"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userMobileNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">mobile number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter your mobile number"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">emirate</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your emirate" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {UAE_EMIRATES.map((emirate) => (
                      <SelectItem key={emirate} value={emirate}>
                        {emirate}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.watch("city") ? (
                  <FormDescription>
                    {`your delivery fee is ${
                      form.watch("city") === "Abu Dhabi" ? 25 : 25
                    } AED`}
                  </FormDescription>
                ) : null}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userStreet"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">your street</FormLabel>
                <FormControl>
                  <Input placeholder="enter  your street" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userBuilding"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">your building</FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter  your building"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="userNote"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">your note</FormLabel>
                <FormControl>
                  <TextArea placeholder="enter  your note" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormDescription>{`your delivery fee is 25 AED`}</FormDescription>
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="capitalize">payment method</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="cash" />
                      </FormControl>
                      <FormLabel className="font-normal capitalize">
                        cash payment{" "}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="card" />
                      </FormControl>
                      <FormLabel className="font-normal capitalize">
                        card payment{" "}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <Button onClick={() => setOpen(true)}>Submit</Button> */}
          <button
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            onClick={() => setOpen(true)}
            type="button"
          >
            Submit
          </button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <div className="flex w-full flex-col items-start justify-start">
              <h1 className="py-3 text-center text-2xl text-black">
                Your Order Summery
              </h1>
              <p className="font-semibold">Product in cart</p>
              <div className="">
                {cartValues.map((cartValue, index) => (
                  <div className="my-1 flex gap-2">
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
                  </div>
                ))}
              </div>
              <hr className=" border-1 border-t-1   mt-8 w-full border-black" />
              <div className="my-3">
                <p className="font-semibold">Your delivery details :</p>
                <div className="flex flex-col ">
                  <div className="my-1 flex gap-4">
                    <p>full name : </p>
                    <p>{form.getValues("userName")}</p>
                  </div>
                  <div className="my-1 flex gap-4">
                    <p>mobile number : </p>
                    <p>{form.getValues("userMobileNumber")}</p>
                  </div>
                  <div className="my-1 flex gap-4">
                    <p>country : </p>
                    <p>{form.getValues("country")}</p>
                  </div>
                  <div className="my-1 flex gap-4">
                    <p>emirate : </p>
                    <p>{form.getValues("city")}</p>
                  </div>
                  <div className="my-1 flex gap-4">
                    <p>your street : </p>
                    <p>{form.getValues("userStreet")}</p>
                  </div>
                  <div className="my-1 flex gap-4">
                    <p>your building : </p>
                    <p>{form.getValues("userBuilding")}</p>
                  </div>
                </div>

                <div className="my-1 flex gap-4">
                  <p>Payment Method : </p>
                  <p>{form.getValues("paymentMethod")}</p>
                </div>
                <div className="my-1 flex gap-4">
                  <p>Delivery Fee : </p>
                  <p>{25}</p>
                </div>
              </div>

              <hr className=" border-1 border-t-1  w-full border-black" />
              <div>
                <div className="flex items-center justify-between px-1 py-2">
                  <p className="text-lg font-semibold capitalize">
                    total amount:
                  </p>
                  <p>
                    <span className="mx-1">
                      {form.getValues("cartItemsTotalPrice") + 25}
                    </span>
                    <span className=" uppercase">aed</span>
                  </p>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </Modal>
        </form>
      </Form>
      {/* <button onClick={() => setOpen(true)}>Show Your Order details</button> */}
    </div>
  );
};

export default PaymentOrdersDetails;
