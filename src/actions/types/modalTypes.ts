export const LOGIN = "LOGIN";

export const MODAL_OFF = "MODAL_OFF";
export const MODAL_LOGIN = "MODAL_LOGIN";

interface IHideModalAction {
  type: typeof MODAL_OFF;
}

interface ILoginModalAction {
  type: typeof MODAL_LOGIN;
}

export type ModalActionTypes = IHideModalAction | ILoginModalAction;

export type ModalMode = typeof LOGIN;
export type ModalState = ModalMode | null;
