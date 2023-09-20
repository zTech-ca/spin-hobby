import {ICartItem} from '../ts';

export default function calculateSubTotal(cart: {cartItems: ICartItem[], quantity: {[key: string]: number}}): number {

  let subtotal = 0;

  cart.cartItems.forEach(item => {

    subtotal += item.price * cart.quantity[item.id.toString()];

  });
  
  return subtotal;
};