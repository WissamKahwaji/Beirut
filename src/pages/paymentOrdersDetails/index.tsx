import React, { useEffect } from "react";
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
import { UAE_EMIRATES } from "@/constants";
import { useSubmitOrderDetailsMutation } from "@/api/orders/queries";

const PaymentOrdersDetails = () => {
  const { cartValues } = useSelector(selectCartValues);
  const { mutate: submitOrderDetails } = useSubmitOrderDetailsMutation();

  const form = useForm<PaymentOrdersValue>({
    defaultValues: {
      userId: "",
      userName: "",
      userStreet: "",
      userBuilding: "",
      userMobileNumber: "",
      userNote: "",
      cartItemsTotalPrice: cartValues.reduce(
        (acc, pre) =>
          acc + Number(pre.selectedWeightAndPrice.price) * pre.count,
        0,
      ),
      deliveryFee:25,
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
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>user name</FormLabel>
                <FormControl>
                  <Input placeholder="enter your user name" {...field} required />
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
                <FormLabel>mobile number</FormLabel>
                <FormControl>
                  <Input placeholder="enter your mobile number" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userStreet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>your street</FormLabel>
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
                <FormLabel>your building</FormLabel>
                <FormControl>
                  <Input placeholder="enter  your building" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>emirate</FormLabel>
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
          /> */}
          <FormField
            control={form.control}
            name="userNote"
            render={({ field }) => (
              <FormItem>
                <FormLabel>your note</FormLabel>
                <FormControl>
                  <TextArea placeholder="enter  your note" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormDescription>
                    {`your delivery fee is 25 AED`}
                  </FormDescription>
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>payment method</FormLabel>
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
                      <FormLabel className="font-normal">
                        cash payment{" "}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="card" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        card payment{" "}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default PaymentOrdersDetails;
