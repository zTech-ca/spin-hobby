import axios from "axios";
import { ECurrencies, ILogin, ICartItem, IMerchPreview } from "../ts";
import { homeData } from "../dummy";
import { IHomeData } from "../view/pages/Home";

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://spinhobby.herokuapp.com/"
    : "http://localhost:8001/";

export function loadInitialData() {}

export async function getCurrencyConversion(
  base: ECurrencies,
  conversion: ECurrencies
): Promise<number> {
  if (base === conversion) return new Promise((resolve) => resolve(1));
  const data = await axios.get(
    `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${conversion}`
  );
  return data.data.rates[conversion];
}

export function getHomeData(): Promise<IHomeData> {
  return new Promise((resolve) => resolve(homeData));
}

export function getSearchResult(
  page: number,
  searchString: string
): Promise<IMerchPreview[]> {
  return axios
    .get(`http://localhost:8001/search?page=${page}&keywords=${searchString}`)
    .then((res) => res.data as IMerchPreview[]);
}

export function requestLogin(login: ILogin) {
  return axios.post(`${serverUrl}login`, login);
}

export function fetchCart(): Promise<ICartItem[]> {
  return axios.get("http://localhost:8001/cart");
}

export function updateCart(payload: {
  product_id: number;
  delta: number;
  quantity: number;
  operation: string;
}) {
  return () => {
    return axios({
      method: "post",
      url: `http://localhost:8001/cart/${payload.product_id}`,
      data: payload,
      withCredentials: true,
    });
  };
}

// export function addToCart(product_id: number) {
//   return axios.post(`http://localhost:8001/cart/add/${product_id}`);
// }

// export function removeFromCart(product_id: number) {
//   return axios.post(`http://localhost:8001/cart/remove/${product_id}`);
// }
