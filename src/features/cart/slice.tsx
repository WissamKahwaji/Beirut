import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { DeepDetails, Product } from "@/api/products/type";

interface CartValue extends Product {
  count: number;
  selectedWeightAndPrice: DeepDetails;
  localId: string;
}
interface InitialState {
  cartValues: CartValue[];
}
const persisCartValues = localStorage.getItem("cartValues");
const initialState: InitialState = persisCartValues
  ? JSON.parse(persisCartValues)
  : {
      cartValues: [],
    };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // const product = action.payload;
      // const existProductIndex = state.cartValues.findIndex(
      //   (productInCart) => productInCart._id === product._id,
      // );
      // if (existProductIndex !== -1) {
      //   const existProductObject = state.cartValues[existProductIndex];
      //   // if (
      //   //   existProductObject.selectedWeightAndPrice.price ===
      //   //   product.selectedWeightAndPrice.price
      //   // ) {
      //   state.cartValues.splice(existProductIndex, 1, {
      //     ...existProductObject,
      //     count: action.payload.count,
      //     selectedWeightAndPrice: action.payload.selectedWeightAndPrice,
      //   });
      //   // } else {
      //   //   state.cartValues.push(action.payload);
      //   // }
      // } else {
      state.cartValues.push(action.payload);
      // }
    },
    clearCart: (state, action) => {
      state.cartValues = [];
    },
    clearProduct: (state, action) => {
      const productId = action.payload.id;
      return {
        cartValues: state.cartValues.filter(
          (cartValue) => cartValue.localId !== productId,
        ),
      };
    },
    changeWight: (state, action) => {
      const productId = action.payload.id;
      // const duplicatedProductIndex = state.cartValues.findIndex(
      //   (cartValue) =>
      //     cartValue._id === productId &&
      //     Number(cartValue.selectedWeightAndPrice.price) ===
      //       Number(action.payload.selectedWeightAndPrice.price),
      // );
      // if (duplicatedProductIndex!==-1) {

      //   const duplicatedProduct=state.cartValues[duplicatedProductIndex]

      //  state.cartValues.splice(duplicatedProductIndex,1)

      // } else {
      return {
        cartValues: state.cartValues.map((cartValue, index) => {
          if (
            cartValue.localId === productId
            // &&
            // Number(cartValue.selectedWeightAndPrice.price) ===
            //   Number(action.payload.oldWeightAndPrice.price)
          ) {
            return {
              ...cartValue,
              selectedWeightAndPrice: {
                ...action.payload.selectedWeightAndPrice,
              },
            };
          } else return cartValue;
        }),
      };
      // }
    },
    changeByAmount: (state, action) => {
      const productId = action.payload.id;
      return {
        cartValues: state.cartValues.map((cartValue) =>
          cartValue.localId === productId
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
          cartValue.localId === productId
            ? { ...cartValue, count: cartValue.count + 1 }
            : cartValue,
        ),
      };
    },
    decrementProductNumber: (state, action) => {
      const productId = action.payload.id;
      return {
        cartValues: state.cartValues.map((cartValue) =>
          cartValue.localId === productId
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
  changeWight,
  changeByAmount,
  incrementProductNumber,
  decrementProductNumber,
} = cartSlice.actions;
export default cartSlice.reducer;
