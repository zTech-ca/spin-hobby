import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../ts";

export interface ICartState {
  cartItems: ICartItem[];
  quantity: { [key: string]: number };
  cartTotalQuantity: number;
  cartTotalAmount: number;
  error: string;
}

export enum Operation {
  ADD = "ADD",
  REMOVE = "REMOVE",
  SET = "SET",
  CLEAR = "CLEAR",
}

const initialState: ICartState = {
  cartItems: [],
  quantity: { "0": 0 },
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  error: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //use to set initial state
    getCart: () => {},
    //use to trigger api and add/remove/set cart reducers
    modifyCart: (
      state,
      action: {
        payload: {
          product_id: number;
          delta: number;
          quantity: number;
          operation: Operation;
        };
      }
    ) => {},
    //add a certain number(delta) of quantity
    addCart: (
      state,
      action: { payload: { product_id: number; delta: number } }
    ) => {
      state.quantity[action.payload.product_id.toString()] +=
        action.payload.delta;
    },
    //remove a certain number(delta) of quantity
    removeCart: (
      state,
      action: { payload: { product_id: number; delta: number } }
    ) => {
      if (state.quantity[action.payload.product_id] > action.payload.delta) {
        state.quantity[action.payload.product_id] -= action.payload.delta;
      } else {
        delete state.quantity[action.payload.product_id];
      }
    },
    setCart: (
      state,
      action: {
        payload: { cartItems: ICartItem[]; quantity: ICartState["quantity"] };
      }
    ) => {
      // if (action.payload.quantity <= 0)
      //   delete state.quantity[action.payload.product_id];
      // state.quantity[action.payload.product_id] = action.payload.quantity;
      state.cartItems = action.payload.cartItems;
      state.quantity = action.payload.quantity;
    },
    clearCart: (state) => {
      state.quantity = {};
      state.cartItems = [];
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  getCart,
  modifyCart,
  addCart,
  removeCart,
  clearCart,
  setCart,
  setError,
} = cartSlice.actions;

export default cartSlice.reducer;
