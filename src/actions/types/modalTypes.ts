export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";

export const MODAL_OFF = "MODAL_OFF";
export const MODAL_LOGIN = "MODAL_LOGIN";
export const MODAL_SIGNUP = "MODAL_SIGNUP";
export const MODAL_FORGOT_PASSWORD = "MODAL_FORGOT_PASSWORD";

interface IHideModalAction {
  type: typeof MODAL_OFF;
}

interface ILoginModalAction {
  type: typeof MODAL_LOGIN;
}

interface ISignUpModalAction {
  type: typeof MODAL_SIGNUP;
}

interface IForgotPasswordModalAction {
  type: typeof MODAL_FORGOT_PASSWORD;
}

export type ModalActionTypes =
  | IHideModalAction
  | ILoginModalAction
  | ISignUpModalAction
  | IForgotPasswordModalAction;

export type ModalMode = typeof LOGIN | typeof SIGNUP | typeof FORGOT_PASSWORD;
export type ModalState = ModalMode | null;
