import { takeLatest } from "redux-saga/effects";
import { fetchCurrencyConversion } from "./currencySaga";
import { setConversionCurrency } from "../reducers";

export default function* saga() {
  yield takeLatest(setConversionCurrency, fetchCurrencyConversion);
}
