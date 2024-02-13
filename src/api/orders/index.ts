import { PaymentOrdersValue } from "@/pages/paymentOrdersDetails/type";
import publicInstance from "../publicInstance";
import API_ROUTES from "@/constants/apiRoutes";
import { UserOrder } from "./type";

const getUserOrders = async (id: string) => {
  const res = await publicInstance.get<UserOrder[]>(
    API_ROUTES.ORDERS.USER_ORDERS(id),
  );
  return res.data;
};

const getLastUserOrder = async (id: string) => {
  const res = await publicInstance.get<UserOrder>(
    API_ROUTES.ORDERS.LAST_USER_ORDER(id),
  );
  return res.data;
};

const submitOrderDetails = async (data: PaymentOrdersValue) => {
  const res = await publicInstance.post(API_ROUTES.ORDERS.SUBMIT_DETAILS, data);
  return res.data;
};
export { getUserOrders, getLastUserOrder, submitOrderDetails };
