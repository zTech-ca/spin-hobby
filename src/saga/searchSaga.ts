import { takeLatest, all, put, call } from "redux-saga/effects";
import { search, setSearch } from "../reducers";
import { requestSearch } from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { ISearchParams } from "../ts";
import { AxiosResponse } from "axios";
// import {} from '..'

function* searchKeywordsSaga(action: PayloadAction<ISearchParams>) {
  try {
    const response: AxiosResponse<ISearchParams> = yield requestSearch(
      action.payload.page,
      action.payload.keywords
    );

    // yield put(setSearch(response));

    console.log(response);
  } catch (e) {
    console.log("catching  -------> search");
  }
}

export function* searchSaga() {
  yield all([search.type, searchKeywordsSaga]);
}
