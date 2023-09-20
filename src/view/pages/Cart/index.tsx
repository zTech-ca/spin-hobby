import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import { useCartSelector } from "../../../selectors";
import { getCart, modifyCart } from "../../../reducers";
import { Operation } from "../../../reducers/cartReducer";
import calculateSubTotal from "../../../utils/calculateSubTotal";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useCartSelector();

  useEffect(() => {
    // dispatch(
    //   modifyCart({
    //     product_id: 1,
    //     delta: 1,
    //     quantity: 6,
    //     operation: Operation.ADD,
    //   })
    // );
    // dispatch(
    //   modifyCart({
    //     product_id: 2,
    //     delta: 2,
    //     quantity: 6,
    //     operation: Operation.ADD,
    //   })
    // );
    // dispatch(getCart());
  }, []);

  console.log(cart);

  function handleClick() {

    dispatch(
      modifyCart({
        product_id: 1,
        delta: 1,
        quantity: 6,
        operation: Operation.ADD,
      })
    );
    
  }

  return (
    // <section classNameName="cart-show">

    //   <header classNameName="page-header">
    //     <h1>My Cart</h1>
    //   </header>

    //   {/* <% if enhanced_cart.length == 0 %> */}

    //  {cart.cartItems.length === 0 && <div classNameName="alert alert-danger" role="alert">
    //     <p>Your cart is empty.</p>
    //     <a href='/'>Return to home</a>
    //   </div>}

    //   {/* <%else%> */}
    //   <div classNameName="panel panel-default items">
    //     <table classNameName="table table-bordered">
    //       <thead>
    //         <tr>
    //           <th colSpan={2}>Product</th>
    //           <th>Unit Price</th>
    //           <th>Quantity</th>
    //           <th>Price</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {/* <% enhanced_cart.each do |item| %>
    //         <%= render 'item', product: item[:product], quantity: item[:quantity].to_i %>
    //         <% end %> */}

    //         {cart.cartItems.map(cartItem => {

    //           return (
    //             <tr>
    //               <td>{cartItem.name}</td>
    //               <td></td>
    //               <td>{cartItem.price}</td>
    //               <td>{cart.quantity[cartItem.id]}</td>
    //               <td>${cartItem.price * cart.quantity[cartItem.id]}</td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //       <tfoot>
    //         <tr>
    //         <th colSpan={4}>
    //             TOTAL:
    //           </th>
    //           <th>
    //             {/* <%= humanized_money_with_symbol cart_subtotal_cents / 100.0 %> */}
    //           </th>
    //         </tr>
    //       </tfoot>
    //     </table>
    //   </div>

    //   <button>Check Out</button>

    // </section>

    <div className="wrap">
      <header className="cart-header cf">
        <strong>Cart</strong>
        <span className="btn" onClick={handleClick} >Checkout</span>
        {/* <Link to="/checkout" className="btn">Checkout</Link> */}
      </header>
      <div className="bonus-products">
        <strong>
          Bonus Products Block{" "}
          <span className="bp-toggle">(hide this block)</span>
        </strong>
      </div>
      <div className="cart-table">
        <ul>
          {cart.cartItems.map((item, index) => {
            return (
              <li key={index} className="item">
                <div className="item-main cf">
                  <div className="item-block ib-info cf">
                    <img
                      className="product-img"
                      src="http://fakeimg.pl/150/e5e5e5/adadad/?text=IMG"
                      alt=""
                    />
                    <div className="ib-info-meta">
                      <span className="title">
                        {item.name}
                      </span>
                      <span className="itemno">#3498765</span>
                      {/* <span className="styles">
                        <span>
                          <strong>Color</strong>: Neon Green
                        </span>
                        <span>
                          <strong>Size</strong>: 32oz
                        </span>
                        <span>
                          <strong>Warranty</strong>: 3 Years
                        </span>
                        <span className="blue-link">Edit Details</span>
                      </span> */}
                    </div>
                  </div>
                  <div className="item-block ib-qty">
                    <input type="text" value={cart.quantity[item.id]} className="qty" />
                    <span className="price">
                      <span>x</span> ${item.price}
                    </span>
                  </div>
                  <div className="item-block ib-total-price">
                    <span className="tp-price">${cart.quantity[item.id] * item.price}</span>
                    <span className="tp-remove">
                      <i className="i-cancel-circle"></i>
                    </span>
                  </div>
                </div>
                <div className="item-foot cf">
                  <div className="if-message">
                    <p> Item/promo related messaging shows up here</p>
                  </div>
                  <div className="if-left">
                    <span className="if-status">In Stock</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sub-table cf">
        <div className="summary-block">
          <ul>
            <li className="subtotal">
              <span className="sb-label">Subtotal</span>
              <span className="sb-value">${calculateSubTotal(cart)}</span>
            </li>
            <li className="shipping">
              <span className="sb-label">Shipping</span>
              <span className="sb-value">n/a</span>
            </li>
            <li className="tax">
              <span className="sb-label">
                Est. Tax |{" "}
                <span className="tax-edit">
                  edit <i className="i-notch-down"></i>
                </span>
              </span>
              <span className="sb-value">$5.00</span>
            </li>
            <li className="tax-calculate">
              <input type="text" value="06484" className="tax" />
              <span className="btn">Calculate</span>
            </li>
            <li className="grand-total">
              <span className="sb-label">Total</span>
              <span className="sb-value">${calculateSubTotal(cart)}</span>
            </li>
          </ul>
        </div>
        <div className="copy-block">
          <p className="customer-care">
            Call us M-F 8:00 am to 6:00 pm EST
            <br />
            (877)-555-5555 or <a href="/">contact us</a>. <br />
          </p>
        </div>
      </div>

      <div className="cart-footer cf">
        <Link to="/checkout" className="btn">Checkout</Link>
        <span className="cont-shopping">
          <i className="i-angle-left"></i>Continue Shopping
        </span>
      </div>
    </div>
  );
}
