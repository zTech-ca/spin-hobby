import {
  MODAL_OFF,
  MODAL_LOGIN,
  MODAL_SIGNUP,
  MODAL_FORGOT_PASSWORD,
  ModalActionTypes,
} from "./types";

export function hideModal(): ModalActionTypes {
  return { type: MODAL_OFF };
}

export function showLoginModal(): ModalActionTypes {
  return { type: MODAL_LOGIN };
}

export function showSignUpModal(): ModalActionTypes {
  return { type: MODAL_SIGNUP };
}

export function showForgotPasswordModal(): ModalActionTypes {
  return { type: MODAL_FORGOT_PASSWORD };
}
