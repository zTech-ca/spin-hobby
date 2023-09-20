import axios from "axios";
import { homeData, productData } from "../dummy";
import { ECurrencies, ILogin, ICartItem, IMerchPreview } from "../ts";
import { IHomeData } from "../view/pages/Home";
import { IProductData } from "../view/pages/Product";

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

export function getProductData(): Promise<IProductData> {
  return new Promise((resolve) => resolve(productData));
}

export function getSearchResult(
  page: number,
  searchString: string
): () => Promise<IMerchPreview[]> {
  return () => {
    return axios.get(
      `http://localhost:8001/search/page=${page}&string=${searchString}`
    );
  };
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
