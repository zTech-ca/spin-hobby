import { all } from "redux-saga/effects";
import { currencySaga } from "./currencySaga";
import { userSaga } from "./userSaga";
import { cartSaga } from "./cartSaga";
import { searchSaga } from "./searchSaga";

export default function* saga() {
  yield all([currencySaga(), userSaga(), cartSaga(), searchSaga()]);
}
