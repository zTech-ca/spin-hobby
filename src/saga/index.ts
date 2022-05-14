import { all } from "redux-saga/effects";
import { currencySaga } from "./currencySaga";
import { userSaga } from "./userSaga";

export default function* saga() {
  yield all([currencySaga(), userSaga()]);
}
