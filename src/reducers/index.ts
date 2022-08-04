import { combineReducers } from "redux";
import modalReducer, { ModalState, hideModal, openModal } from "./modalReducer";
import settingReducer, {
  ISettingState,
  setConversionCurrency,
  // setCurrencyRate,
  // resetCurrency,
} from "./settingReducer";
import userReducer, {
  // IUserState,
  login,
  register,
  setUser,
  logout,
  IUserState,
} from "./userReducer";
// import { IUserState } from "../ts";

import searchReducer, { search, setSearch, SearchState } from "./searchReducer";

export default combineReducers({
  setting: settingReducer,
  modal: modalReducer,
  user: userReducer,
  search: searchReducer,
});

export interface IRootState {
  setting: ISettingState;
  modal: ModalState;
  user: IUserState;
  search: SearchState;
}

// export type { IUserState };

export {
  hideModal,
  openModal,
  setConversionCurrency,
  login,
  register,
  setUser,
  logout,
  search,
  setSearch,
  // setCurrencyRate,
  // resetCurrency,
};
