import { ICurrencyState } from "../reducers/settingReducer";
import { roundToDecimal } from "./math";

export default function currencyConverter(
  original: number,
  currency: ICurrencyState,
  rounding = 2
) {
  return currency.base === currency.conversion
    ? original
    : roundToDecimal(original * currency.rate, rounding);
}
