import { MODAL_OFF, MODAL_LOGIN, ModalActionTypes } from "./types";

export function hideModal(): ModalActionTypes {
  return { type: MODAL_OFF };
}

export function showLoginModal(): ModalActionTypes {
  return { type: MODAL_LOGIN };
}
