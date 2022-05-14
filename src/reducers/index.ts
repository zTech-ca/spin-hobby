import { combineReducers } from "redux";
import modalReducer, { ModalState, hideModal, openModal } from "./modalReducer";
import settingReducer, {
  ISettingState,
  setConversionCurrency,
  // setCurrencyRate,
  // resetCurrency,
} from "./settingReducer";
import userReducer, { IUserState, login } from "./userReducer";

export default combineReducers({
  setting: settingReducer,
  modal: modalReducer,
  user: userReducer,
});

export interface IRootState {
  setting: ISettingState;
  modal: ModalState;
  user: IUserState;
}

export {
  hideModal,
  openModal,
  setConversionCurrency,
  login,
  // setCurrencyRate,
  // resetCurrency,
};
