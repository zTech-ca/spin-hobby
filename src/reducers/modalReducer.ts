import {
  ModalActionTypes,
  MODAL_OFF,
  MODAL_LOGIN,
  MODAL_SIGNUP,
  MODAL_FORGOT_PASSWORD,
  LOGIN,
  SIGNUP,
  FORGOT_PASSWORD,
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
    case MODAL_FORGOT_PASSWORD:
      return FORGOT_PASSWORD;
    default:
      return state;
  }
}
