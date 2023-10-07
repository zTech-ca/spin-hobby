import React from "react";
import CartSummary from "view/components/Cart/CartSummary";
import './cart.scss';

export default function Cart() {

  // sample data, need to connect actual cart items
  const items = [
    {name: 'Item 1', price: 20, productId: ''},
    {name: 'Item 2', price: 30, productId: ''},
    {name: 'Item 3', price: 40, productId: ''}
  ]
  const discounts = [
    {discountId: 'Discount 1', value: 10},
    {discountId: 'Discount 2', value: 30}
  ];
  const total = items.reduce((total, item) => total + item.price, 0) - discounts.reduce((total, discount) => total + discount.value, 0);

  return (
    <div className="cart-page">
      <div className="title">Shopping Cart</div>
      <div className="cart-info-container">
        <div className="cart-left-container">
          <div className="cart-products-container">
            <div className="cart-products-title">Product</div>
            <hr className="horizontal-line"></hr>
            <div className="cart-products">
              <li></li>
            </div>
          </div>
          <div className="discount">
            <div className="discount-title">Discounts</div>
            <hr className="horizontal-line"></hr>
            <div className="discount-description">Do you have any discount codes?</div>
            <form>
              <label>
                Enter code:
                <input type="text" name="code" />
              </label>
              <input type="submit" value="Apply" />
            </form>
          </div>
        </div>
        <CartSummary items={items} discounts={discounts} total={total}/>
      </div>
    </div>
  );
}
