export type PaymentOrdersValue = {
  userId: string;
  userName: string;
  userStreet: string;
  userBuilding: string;
  userMobileNumber: string;
  userNote: string;
  orderStatus?: string;
  city: string;
  deliveryFee: number;
  cartItemsTotalPrice: number;
  paymentMethod: string;
  cartItems: CartItem[];
};
export type CartItem = {
  id: string;
  img: string;
  title: string;
  price: string;
  quantity: number;
  weight: string;
};
