import axios from "axios";
import { ECurrencies } from "../types/enum";

export function loadInitialData() {}

export function getCurrencyConversion(
  base: ECurrencies,
  conversion: ECurrencies
) {
  if (base === conversion) return new Promise((resolve) => resolve(1));
  return axios
    .get(
      `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${conversion}`
    )
    .then((data) => data.data.rates[conversion]);
}
