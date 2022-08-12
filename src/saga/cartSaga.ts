import {
  takeLatest,
  takeEvery,
  all,
  call,
  put,
  // CallEffect,
} from "redux-saga/effects";
import {
  getCart,
  modifyCart,
  // addCart,
  // removeCart,
  // clearCart,
  setCart,
  setError,
} from "../reducers";
import { fetchCart, updateCart } from "../api";
import { ICartItem } from "../ts";

function* getCartSaga() {
  try {
    const cart: {
      data: { cartItems: ICartItem[]; quantity: { [key: string]: number } };
    } = yield call(fetchCart);
    yield put(
      setCart({ cartItems: cart.data.cartItems, quantity: cart.data.quantity })
    );
  } catch (err) {
    yield put(setError(err));
  }
}

function* modifyCartSaga(action: {
  payload: {
    product_id: number;
    delta: number;
    quantity: number;
    operation: string;
  };
  type: any;
}) {
  try {
    // if (action.payload.operation === "ADD") {
    //   yield call(updateCart(action.payload));
    //   // yield put(
    //   //   addCart({
    //   //     product_id: action.payload.product_id,
    //   //     delta: action.payload.delta,
    //   //   })
    //   // );
    // } else if (action.payload.operation === "REMOVE") {
    //   yield call(updateCart(action.payload));
    //   // yield put(
    //   //   removeCart({
    //   //     product_id: action.payload.product_id,
    //   //     delta: action.payload.delta,
    //   //   })
    //   // );
    // } else if (action.payload.operation === "SET") {
    //   yield call(updateCart(action.payload));
    //   // yield put(
    //   //   setCart({
    //   //     product_id: action.payload.product_id,
    //   //     quantity: action.payload.quantity,
    //   //   })
    //   // );
    // } else if (action.payload.operation === "CLEAR") {
    //   yield put(clearCart());
    // }

    const cart: {
      data: { cartItems: ICartItem[]; quantity: { [key: string]: number } };
    } = yield call(updateCart(action.payload));
    yield put(
      setCart({ cartItems: cart.data.cartItems, quantity: cart.data.quantity })
    );
  } catch (err) {
    yield put(setError(err));
  }
}

export function* cartSaga() {
  yield all([
    takeLatest(getCart.type, getCartSaga),
    takeEvery(modifyCart.type, modifyCartSaga),
  ]);
}
