import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../ts";
import Cookies from "js-cookie";
import { compareSync } from "bcryptjs";

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
    loginBeta: (state, { payload }: PayloadAction<ILogin>) => {
      state.beta =
        compareSync(
          payload.username,
          "$2a$10$UqutFHJydOIYkrW1HINpz.80TOzEE0uoECoydZ.P7VdtDL55Og4iO"
        ) &&
        compareSync(
          payload.password,
          "$2a$10$BM7looGxSrlIl6rQz4sjrewgUx/W0dKUTzsJTkRxa5tRYDq/Dell6"
        );
      if (state.beta && !Cookies.get("beta"))
        Cookies.set("beta", "authenticated", { expires: 0.5 });
    },
    logoutBeta: (state) => {
      state.beta = false;
      if (Cookies.get("beta")) Cookies.remove("beta");
    },
  },
});

export const { login, setUser, loginBeta, logoutBeta } = userSlice.actions;

export default userSlice.reducer;
