import React, { useEffect, useState } from "react";
import { Stripe, StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { createIntent } from "@/api/products";
import { clearCart, selectCartValues } from "@/features/cart/slice";
import { useGetPaymentConfigQuery } from "@/api/products/queries";
import LoadingPage from "../loading";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const CheckoutForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const { cartValues } = useAppSelector(selectCartValues);

  const handlePaymentSubmit = async (event: any) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }
    try {
      const { clientSecret } = await createIntent({
        amount:
          cartValues.reduce(
            (acc, pre) =>
              acc + pre.count * Number(pre.selectedWeightAndPrice.price),
            0,
          ) + (state.deliveryFee ?? 0),
      });
      dispatch(clearCart({}));
      toast.success("successfully payment for order");
      const stripeRes = await stripe?.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}`,
        },
      });

      console.log(stripeRes, "stripe response");
      if (stripeRes?.error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(stripeRes?.error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    } catch (error) {}
  };

  return (
    <div>
      <div className=" m-auto max-w-sm px-4 py-20">
        <form onSubmit={handlePaymentSubmit}>
          <PaymentElement />
          <Button
            className="mt-3"
            type="submit"
            disabled={!stripe || !elements}
          >
            Pay
          </Button>
          {/* Show error message to your customers */}
          {errorMessage && (
            <div className="text-destructive">{errorMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};

const Checkout = () => {
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);
  const {
    data: paymentConfig,
    isLoading,
    isError,
  } = useGetPaymentConfigQuery();
  console.log(paymentConfig?.publicKey);
  useEffect(() => {
    (async () => {
      if (paymentConfig) {
        const stripePromise = await loadStripe(paymentConfig?.publicKey!);
        setStripePromise(stripePromise);
      }
    })();
  }, [paymentConfig]);

  if (isLoading) return <LoadingPage />;
  if (isError) return <></>;
  console.log();
  const options: StripeElementsOptions = {
    mode: "payment",
    amount: 200,
    currency: "aed",
    appearance: {},
  };
  return (
    <>
      {stripePromise ? (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      ) : null}
    </>
  );
};
export default Checkout;
