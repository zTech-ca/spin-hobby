import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

interface ICurrencyConversion {
  currency: ECurrencies;
  rate: number;
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
    convertCurrency: (state, action: PayloadAction<ICurrencyConversion>) => {
      state.currency.conversion = action.payload.currency;
      state.currency.rate = action.payload.rate;
    },
  },
});

export const { convertCurrency } = settingSlice.actions;

export default settingSlice.reducer;
