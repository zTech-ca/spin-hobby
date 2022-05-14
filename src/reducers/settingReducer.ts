import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ECurrencies } from "../ts";
import { baseCurrency } from "../ts/constants";

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
  },
});

export const { setConversionCurrency } = settingSlice.actions;

export default settingSlice.reducer;
