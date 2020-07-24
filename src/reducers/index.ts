import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import { ModalState } from "../actions/types";

export default combineReducers({ modal: modalReducer });

export interface IRootState {
  modal: ModalState;
}
