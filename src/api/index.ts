import axios from "axios";
import { ECurrencies, ILogin, IRegister } from "../ts";
import { homeData } from "../dummy";
import { IHomeData } from "../view/pages/Home";

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://spinhobby.herokuapp.com/"
    : "http://localhost:8001/";

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
  console.log(login);
  return axios.post(`${serverUrl}login`, login);
}

export function requestRegister(register: IRegister) {
  return axios.post(`${serverUrl}register`, register);
}

export function requestSearch(page: number, searchKeyword: string) {
  return axios.get(
    `${serverUrl}search/?page=${page}&keywords=${searchKeyword}`
  );
}
