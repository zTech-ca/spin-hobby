import axios from "axios";
import { ECurrencies, ILogin } from "../ts";
import { homeData } from "../dummy";
import { IHomeData } from "../view/pages/Home";

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://spinhobby.herokuapp.com/"
    : "http://localhost:8080/";

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

export function requestLogin(login: ILogin) {
  return axios.post(`${serverUrl}login`, login);
}
