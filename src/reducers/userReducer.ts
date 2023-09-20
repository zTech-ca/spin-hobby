import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../ts";

export interface IUserState {}

const initialState: IUserState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ILogin>) => {},
    setUser: (state, action: PayloadAction<IUserState>) => {
      state = action.payload;
    }
  },
});

export const { login, setUser } = userSlice.actions;

export default userSlice.reducer;
