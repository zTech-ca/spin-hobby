import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../ts";

export interface IUserState {}

const initialState: IUserState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ILogin>) => {},
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
