import axios from "axios";
import { ECurrencies } from "../ts";
import { homeData } from "../dummy";
import { IHomeData } from "../view/pages/Home";

export function loadInitialData() {}

export function getCurrencyConversion(
  base: ECurrencies,
  conversion: ECurrencies
): Promise<number> {
  if (base === conversion) return new Promise((resolve) => resolve(1));
  return axios
    .get(
      `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${conversion}`
    )
    .then((data) => data.data.rates[conversion]);
}

export function getHomeData(): Promise<IHomeData> {
  return new Promise((resolve) => resolve(homeData));
}
