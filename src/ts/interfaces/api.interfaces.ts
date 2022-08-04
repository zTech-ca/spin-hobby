import { IUserData } from "./user.interfaces";

export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister {
  username: string;
  fname: string;
  lname: string;
  phone: number | string;
  password: string;
  email: string;
}

export interface IUserResponse extends IUserData {
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
  plane: string;
}
