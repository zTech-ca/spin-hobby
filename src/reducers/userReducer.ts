import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../ts";
import Cookies from "js-cookie";

export interface IUserState {
  beta: boolean;
  awaitingLoginRes: boolean;
}

const initialState: IUserState = {
  beta: process.env.NODE_ENV !== "production" || !!Cookies.get("beta"),
  awaitingLoginRes: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ILogin>) => {},
    setUser: (state, action: PayloadAction<IUserState>) => {
      state = action.payload;
    },
    loginBeta: (state) => {
      state.beta = true;
    },
    logoutBeta: (state) => {
      state.beta = false;
    },
    queueLogin: (state) => {
      state.awaitingLoginRes = true;
    },
    clearQueueLogin: (state) => {
      state.awaitingLoginRes = false;
    },
  },
});

export const requestLoginBeta = createAction<ILogin>("user/requestLoginBeta");

export const {
  login,
  setUser,
  loginBeta,
  logoutBeta,
  queueLogin,
  clearQueueLogin,
} = userSlice.actions;

export default userSlice.reducer;
