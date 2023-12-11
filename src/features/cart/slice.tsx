import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "@/api/products/type";

interface CartValue extends Product {
  count: number;
}
interface InitialState {
  cartValues: CartValue[];
}
const initialState: InitialState = {
  cartValues: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      const product = action.payload;
      const existProductIndex = state.cartValues.findIndex(
        (productInCard) => productInCard._id === product._id,
      );
      if (existProductIndex !== -1) {
        const existProductObject = state.cartValues[existProductIndex];
        state.cartValues.splice(existProductIndex, 1, {
          ...existProductObject,
          count: action.payload.count,
        });
      } else {
        state.cartValues.push(action.payload);
      }
    },
    clearCart: (state, action) => {
      state.cartValues = [];
    },
    clearProduct: (state, action) => {
      const productId = action.payload.id;
      return {
        cartValues: state.cartValues.filter(
          (cartValue) => cartValue._id !== productId,
        ),
      };
    },
    changeByAmount: (state, action) => {
      const productId = action.payload.id;
      return {
        cartValues: state.cartValues.map((cartValue) =>
          cartValue._id === productId
            ? {
                ...cartValue,
                count: Number(cartValue.count) + Number(action.payload.amount),
              }
            : cartValue,
        ),
      };
    },
    incrementProductNumber: (state, action) => {
      const productId = action.payload.id;
      return {
        cartValues: state.cartValues.map((cartValue) =>
          cartValue._id === productId
            ? { ...cartValue, count: cartValue.count + 1 }
            : cartValue,
        ),
      };
    },
    decrementProductNumber: (state, action) => {
      const productId = action.payload.id;
      return {
        cartValues: state.cartValues.map((cartValue) =>
          cartValue._id === productId
            ? { ...cartValue, count: cartValue.count - 1 }
            : cartValue,
        ),
      };
    },
  },
});
export const selectCartValues = (state: RootState) => state.cartReducer;
export const {
  addToCart,
  clearCart,
  clearProduct,
  changeByAmount,
  incrementProductNumber,
  decrementProductNumber,
} = cartSlice.actions;
export default cartSlice.reducer;
