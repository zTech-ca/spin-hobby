import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin, IRegister, IUserData } from "../ts";

// interface IUserData {
//   id: number;
//   token: string;
//   fname: string;
//   lname: string;
//   email: string;
//   phone: string;
//   username: string;
// }

export interface IUserState {
  user: IUserData | null;
  error?: string;
}

const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ILogin>) => {},

    register: (state, action: PayloadAction<IRegister>) => {},

    setUser(state, action: PayloadAction<IUserData>) {
      console.log("setting the user here ----->", action.payload);

      state.user = action.payload;
    },

    logout(state) {
      state.user = null;
    },
  },
});

export const { login, register, setUser, logout } = userSlice.actions;

export default userSlice.reducer;
