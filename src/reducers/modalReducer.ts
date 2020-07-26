import {
  ModalActionTypes,
  MODAL_OFF,
  MODAL_LOGIN,
  MODAL_SIGNUP,
  LOGIN,
  SIGNUP,
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
    case MODAL_SIGNUP:
      return SIGNUP;
    default:
      return state;
  }
}
