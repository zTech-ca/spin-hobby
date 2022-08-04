import { takeLatest, all, put, call } from "redux-saga/effects";
import { login, register, setUser } from "../reducers";
import { requestLogin, requestRegister } from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { IRegister, ILogin, IUserData, IUserResponse } from "../ts";
import { AxiosResponse } from "axios";

function* loginSaga(action: PayloadAction<ILogin>) {
  try {
    console.log("logging in right now!");

    const response: AxiosResponse<IUserResponse> = yield requestLogin(
      action.payload
    );

    const { id, fname, lname, email, phone, username, token } = response.data;

    console.log("yahoo------->", {
      id,
      fname,
      lname,
      email,
      phone,
      username,
      token,
    });

    yield put(setUser({ id, fname, lname, email, phone, username, token }));
  } catch (e) {
    console.log("error ------> ", e);
  }
}

function* registerSaga(action: PayloadAction<IRegister>) {
  try {
    const response: AxiosResponse<IUserResponse> = yield requestRegister(
      action.payload
    );

    console.log("show this here ------> ", response);

    const { id, fname, lname, email, phone, username, token } = response.data;

    yield put(setUser({ id, fname, lname, email, phone, username, token }));
  } catch (e) {
    console.log("error ------> ", e);
  }
}

export function* userSaga() {
  yield all([
    takeLatest(login.type, loginSaga),
    takeLatest(register.type, registerSaga),
  ]);
}
