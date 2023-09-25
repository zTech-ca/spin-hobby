import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../ts";
import Cookies from "js-cookie";

export interface IUserState {
  beta: boolean;
}

const initialState: IUserState = {
  beta: process.env.NODE_ENV !== "production" || !!Cookies.get("beta"),
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
      Cookies.set("beta", "authenticated", { expires: 0.5 });
    },
    logoutBeta: (state) => {
      state.beta = false;
      if (Cookies.get("beta")) Cookies.remove("beta");
    },
  },
});

export const requestLoginBeta = createAction<ILogin>("user/requestLoginBeta");

export const { login, setUser, loginBeta, logoutBeta } = userSlice.actions;

export default userSlice.reducer;
