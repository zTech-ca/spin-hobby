import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, all, call, put } from "redux-saga/effects";
import { IMerchPreview } from "../ts";
import { getSearch, setSearchResult, setSearchError } from "../reducers";
import { getSearchResult } from "../api";

function* fetchSearchResult({payload}: PayloadAction<{page: number, searchString: string}>) {
  try {
    const searchResult: IMerchPreview[] = yield call(getSearchResult(payload.page, payload.searchString));
    yield put(
      setSearchResult({
        page: payload.page,
        searchResult: searchResult
      })
    );
  } catch (err) {
    yield put(setSearchError(err));
  }
}

export function* searchSaga() {
  yield all([takeLatest(getSearch.type, fetchSearchResult)]);
}
