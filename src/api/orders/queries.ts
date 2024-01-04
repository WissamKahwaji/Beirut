import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserOrders, submitOrderDetails } from ".";
import { PaymentOrdersValue } from "@/pages/paymentOrdersDetails/type";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/app/hooks";
import { clearCart } from "@/features/cart/slice";

const useGetUserOrdersQuery = (id: string | undefined) =>
  useQuery({
    queryKey: ["get-user-orders", id],
    queryFn: () => getUserOrders(id!),
    enabled: !!id,
  });
const useSubmitOrderDetailsMutation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["submit-order-details"],
    mutationFn: (data: PaymentOrdersValue) => submitOrderDetails(data),
    onSuccess(data, variables, context) {
      if (variables.paymentMethod === "card") {
        navigate("/checkout", {
          state: { deliveryFee: 25 },
        });
      } else {
        dispatch(clearCart({}));
        toast.success("your order has submitted successfully");
        navigate("/");
      }
    },
    onError(error, variables, context) {
      toast.error("failed to deliver order please reorder again");
    },
  });
};
export { useGetUserOrdersQuery, useSubmitOrderDetailsMutation };
