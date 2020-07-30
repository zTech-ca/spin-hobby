import { createSlice } from "@reduxjs/toolkit";
import { ECurrencies } from "../types/enum";
import { baseCurrency } from "../types/constants";

interface ICurrencyState {
  base: ECurrencies;
  conversion: ECurrencies;
  rate: number;
}

export interface ISettingState {
  currency: ICurrencyState;
}

const initialState: ISettingState = {
  currency: {
    base: baseCurrency,
    conversion: baseCurrency,
    rate: 1,
  },
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    convertCurrency: (state, action) => {
      // Add the currency conversion handlers here
    },
  },
});

export const { convertCurrency } = settingSlice.actions;

export default settingSlice.reducer;
