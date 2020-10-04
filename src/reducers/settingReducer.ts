import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ECurrencies } from "../types/enum";
import { baseCurrency } from "../types/constants";

export interface ICurrencyState {
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
    setConversionCurrency: (state, action: PayloadAction<ECurrencies>) => {
      state.currency.conversion = action.payload;
    },
    setCurrencyRate: (state, action: PayloadAction<number>) => {
      state.currency.rate = action.payload;
    },
    resetCurrency: (state) => {
      state.currency = initialState.currency;
    },
  },
});

export const {
  setConversionCurrency,
  setCurrencyRate,
  resetCurrency,
} = settingSlice.actions;

export default settingSlice.reducer;
