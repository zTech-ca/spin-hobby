import { useSelector } from "react-redux";
import { IRootState } from "../reducers";

export function useModalSelector() {
  return useSelector((state: IRootState) => state.modal);
}
