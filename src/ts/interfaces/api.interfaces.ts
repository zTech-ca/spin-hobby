export interface ILogin {
  username: string;
  password: string;
}

export interface ISquareLogin {
  type: "square";
  user: {
    id: string;
    merchantId: string;
    businessName: string;
    status: string;
  };
  token: string;
}

export interface IAuthUser {
  id?: string;
  email?: string;
  username?: string;
  merchantId?: string;
  businessName?: string;
  authType: "standard" | "square" | "google";
  loginAt: string;
}

export interface ICartItem {
  id: number;
  name: string;
  inventory_id: number;
  price: number;
  discount_id: number;
  createdAt: string;
  updatedAt: string;
  category_id: number;
  quantity: number;
}
