import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import settingReducer, { ISettingState } from "./settingReducer";
import { ModalState } from "../actions/types";

export default combineReducers({
  modal: modalReducer,
  setting: settingReducer,
});

export interface IRootState {
  modal: ModalState;
  setting: ISettingState;
}
