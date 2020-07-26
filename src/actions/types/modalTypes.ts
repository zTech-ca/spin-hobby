export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

export const MODAL_OFF = "MODAL_OFF";
export const MODAL_LOGIN = "MODAL_LOGIN";
export const MODAL_SIGNUP = "MODAL_SIGNUP";

interface IHideModalAction {
  type: typeof MODAL_OFF;
}

interface ILoginModalAction {
  type: typeof MODAL_LOGIN;
}

interface ISignUpModalAction {
  type: typeof MODAL_SIGNUP;
}

export type ModalActionTypes =
  | IHideModalAction
  | ILoginModalAction
  | ISignUpModalAction;

export type ModalMode = typeof LOGIN | typeof SIGNUP;
export type ModalState = ModalMode | null;
