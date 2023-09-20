export interface ILogin {
  username: string;
  password: string;
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
