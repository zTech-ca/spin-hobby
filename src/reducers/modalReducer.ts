import {
  ModalActionTypes,
  MODAL_OFF,
  MODAL_LOGIN,
  LOGIN,
} from "../actions/types";

const initialState = null;

export default function modalReducer(
  state = initialState,
  action: ModalActionTypes
) {
  switch (action.type) {
    case MODAL_OFF:
      return null;
    case MODAL_LOGIN:
      return LOGIN;
    default:
      return state;
  }
}
