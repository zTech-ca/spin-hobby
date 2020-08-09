import { combineReducers } from "redux";
import modalReducer, { ModalState, hideModal, openModal } from "./modalReducer";
import settingReducer, {
  ISettingState,
  convertCurrency,
} from "./settingReducer";

export default combineReducers({
  setting: settingReducer,
  modal: modalReducer,
});

export interface IRootState {
  setting: ISettingState;
  modal: ModalState;
}

export { hideModal, openModal, convertCurrency };
