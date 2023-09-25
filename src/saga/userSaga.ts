import { takeLatest, all, put } from "redux-saga/effects";
import { login, loginBeta, requestLoginBeta, setUser } from "../reducers";
import { authenticateBetaUser, requestLogin } from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "ts";

function* loginSaga() {
  yield requestLogin({ username: "anelmes0", password: "spinhobby" }).then(
    (res) => {
      console.log("kooo", res);
      setUser(res.data);
    }
  );
}

function* requestLoginBetaSaga({ payload }: PayloadAction<ILogin>) {
  const res: string = yield authenticateBetaUser(payload);
  if (res === "SUCCESS") yield put({ type: loginBeta.type });
}

export function* userSaga() {
  yield all([
    takeLatest(login.type, loginSaga),
    takeLatest(requestLoginBeta.type, requestLoginBetaSaga),
  ]);
}
