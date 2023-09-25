import { combineReducers } from "redux";
import modalReducer, { ModalState, hideModal, openModal } from "./modalReducer";
import settingReducer, {
  ISettingState,
  setConversionCurrency,
  // setCurrencyRate,
  // resetCurrency,
} from "./settingReducer";
import userReducer, {
  IUserState,
  login,
  setUser,
  requestLoginBeta,
  loginBeta,
  logoutBeta,
  queueLogin,
  clearQueueLogin,
} from "./userReducer";
import cartReducer, {
  ICartState,
  getCart,
  modifyCart,
  addCart,
  removeCart,
  clearCart,
  setCart,
  setError,
} from "./cartReducer";
import {
  ISearchState,
  getSearch,
  setSearchResult,
  setSearchError,
} from "./searchReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  setting: settingReducer,
  modal: modalReducer,
  user: userReducer,
  cart: cartReducer,
  search: searchReducer,
});

export interface IRootState {
  setting: ISettingState;
  modal: ModalState;
  user: IUserState;
  cart: ICartState;
  search: ISearchState;
}

export {
  hideModal,
  openModal,
  setConversionCurrency,
  login,
  setUser,
  requestLoginBeta,
  queueLogin,
  clearQueueLogin,
  loginBeta,
  logoutBeta,
  getCart,
  modifyCart,
  addCart,
  removeCart,
  clearCart,
  setCart,
  setError,
  getSearch,
  setSearchResult,
  setSearchError,

  // setCurrencyRate,
  // resetCurrency,
};
