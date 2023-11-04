import { IconType } from "react-icons";

export enum Content {
  Summary,
  OrderHistory,
  Address,
  ChangePassword,
  LogOut,
}

export interface MenuItem {
  content: Content;
  label: string;
  icon: IconType;
}
