import { useSelector } from "react-redux";
import { IRootState } from "../reducers";

export function useModalSelector() {
  return useSelector((state: IRootState) => state.modal);
}

export function useCurrencySelector() {
  return useSelector((state: IRootState) => state.setting.currency);
}

export function useUserSelector() {
  return useSelector((state: IRootState) => state.user.user);
}
