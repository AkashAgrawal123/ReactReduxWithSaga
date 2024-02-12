import React from "react";
import "../Styles/CartItem.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Services/Action/index";

const CartItem = () => {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  const amount =
    cartData.length &&
    cartData
      .map((item) => parseFloat(item.price))
      .reduce((prev, next) => prev + next, 0);
  const discountAmount = amount / 10;
  const taxAmount = parseFloat((amount * 0.12).toFixed(2));
  const totalAmount = (amount + taxAmount - discountAmount).toFixed(2);
  console.log(totalAmount, 'total');

  return (
    <div className="cartPage">
      <div className="cartPage__wrapper">
        <h1 className="salsa-regular cartPage__heading">Billing Page</h1>
        <div className="cartPage__wrapper--container">
          <div className="cartPage__wrapper--table">
            <table>
              <tbody>
                <tr>
                  <th className="salsa-regular">Name</th>
                  <th className="salsa-regular">Color</th>
                  <th className="salsa-regular">Price</th>
                  <th className="salsa-regular">Brand</th>
                  <th className="salsa-regular">Category</th>
                </tr>
                {cartData.map((item) => (
                  <tr key={item.id}>
                    <td className="salsa-regular">{item.name}</td>
                    <td className="salsa-regular">{item.color}</td>
                    <td className="salsa-regular">{item.price}</td>
                    <td className="salsa-regular">{item.brand}</td>
                    <td className="salsa-regular">{item.category}</td>
                    <td>
                      <button
                        className="salsa-regular remove-button"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="total-cart">
              <button className="salsa-regular total-cart--button">
                Total Amount
              </button>
              <p className="salsa-regular">{amount}</p>
            </div>
          </div>
          <div className="cartPage__wrapper--details">
            <div className="adjust-detail">
              <span className="salsa-regular text--button">Amount</span>
              <span className="salsa-regular">{amount}</span>
            </div>
            <div className="adjust-detail">
              <span className="salsa-regular text--button">Discount</span>
              <span className="salsa-regular">{discountAmount}</span>
            </div>
            <div className="adjust-detail">
              <span className="salsa-regular text--button">Tax</span>
              <span className="salsa-regular">{taxAmount}</span>
            </div>
            <div className="adjust-detail">
              <span className="salsa-regular text--button">Total</span>
              <span className="salsa-regular">
                {(amount + taxAmount - discountAmount).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
