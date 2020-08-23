import { combineReducers } from "redux";
import modalReducer, { ModalState, hideModal, openModal } from "./modalReducer";
import settingReducer, {
  ISettingState,
  setConversionCurrency,
  setCurrencyRate,
  resetCurrency,
} from "./settingReducer";

export default combineReducers({
  setting: settingReducer,
  modal: modalReducer,
});

export interface IRootState {
  setting: ISettingState;
  modal: ModalState;
}

export {
  hideModal,
  openModal,
  setConversionCurrency,
  setCurrencyRate,
  resetCurrency,
};
