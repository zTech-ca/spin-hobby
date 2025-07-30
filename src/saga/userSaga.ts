import { takeLatest, all, put } from "redux-saga/effects";
import {
  queueLogin,
  login,
  loginBeta,
  requestLoginBeta,
  setUser,
  clearQueueLogin,
  logoutBeta,
} from "../reducers";
import { authenticateBetaUser, requestLogin } from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../ts";
import Cookies from "js-cookie";

function* loginSaga() {
  yield requestLogin({ username: "anelmes0", password: "spinhobby" }).then(
    (res) => {
      console.log("kooo", res);
      setUser(res.data);
    }
  );
}

function* requestLoginBetaSaga({ payload }: PayloadAction<ILogin>) {
  yield put({ type: queueLogin.type });
  const res: string = yield authenticateBetaUser(payload);
  if (res === "SUCCESS") yield put({ type: loginBeta.type });
  yield put({ type: clearQueueLogin.type });
}

function loginBetaSaga() {
  if (!Cookies.get("beta"))
    Cookies.set("beta", "authenticated", { expires: 0.5 });
}

function logoutBetaSaga() {
  if (Cookies.get("beta")) Cookies.remove("beta");
}

export function* userSaga() {
  yield all([
    takeLatest(login.type, loginSaga),
    takeLatest(requestLoginBeta.type, requestLoginBetaSaga),
    takeLatest(loginBeta.type, loginBetaSaga),
    takeLatest(logoutBeta.type, logoutBetaSaga),
  ]);
}
