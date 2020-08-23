import { call, select, put } from "redux-saga/effects";
import { getCurrencyConversion } from "../api";
import { setCurrencyRate, resetCurrency, IRootState } from "../reducers";

export function* fetchCurrencyConversion() {
  try {
    const currencyState = yield select(
      (state: IRootState) => state.setting.currency
    );
    const rate = yield call(
      getCurrencyConversion,
      currencyState.base,
      currencyState.conversion
    );
    yield put(setCurrencyRate(rate));
  } catch (e) {
    console.log(`Failed to obtain currency conversion rate: `, e);
    yield put(resetCurrency());
  }
}
