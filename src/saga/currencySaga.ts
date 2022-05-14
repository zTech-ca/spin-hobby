import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, all } from "redux-saga/effects";
import { ECurrencies } from "../ts";
import { setConversionCurrency } from "../reducers";

function* fetchCurrencyConversion({ payload }: PayloadAction<ECurrencies>) {}

export function* currencySaga() {
  yield all([takeLatest(setConversionCurrency.type, fetchCurrencyConversion)]);
}
