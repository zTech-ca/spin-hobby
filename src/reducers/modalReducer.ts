import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EModal } from "../types/enum";

export type ModalState = EModal | null;

const initialState = null;

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState as ModalState,
  reducers: {
    hideModal: () => null,
    openModal: (state, action: PayloadAction<EModal>) => action.payload,
  },
});

export const { hideModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
