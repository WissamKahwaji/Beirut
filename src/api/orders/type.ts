import { Product } from "../products/type";

export type UserOrder = {
  cartItems: CartItem[];
  cartItemsTotalPrice: number;
  country: string;
  city: string;
  createdAt: string;
  paymentMethod: "cash" | "card";
  updatedAt: string;
  userBuilding: string;
  userId: string;
  userMobileNumber: string;
  userName: string;
  userNote: string;
  userStreet: string;
  deliveryFee: number;
  __v: string;
  _id: string;
};
export type CartItem = {
  id?: string;
  img: string;
  price: number;
  quantity: number;
  title: string;
  weight: number;
  _id?: string;
};
