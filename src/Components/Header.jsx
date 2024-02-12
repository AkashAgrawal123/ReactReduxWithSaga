import React from "react";
import { TbShoppingCart } from "react-icons/tb";
import "../Styles/Header.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItemCount = useSelector((state) => state.cartData);
  console.log(cartItemCount, 'cartItemCount');

  return (
    <>
      <div className="header">
        <div className="header__wrapper">
          <div className="header__content">
            <NavLink to="/">
              <div className="header__logo">
                <img src="images/logo.png" className="header__logo--icon" />
              </div>
            </NavLink>
            <input
              className="header__input"
              type="text"
              placeholder="Search item..."
            />
            <NavLink to="/cart-item">
              <div className="header__cart">
                <TbShoppingCart className="header__cart--icon" />
                <span className="salsa-regular">{cartItemCount.length}</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
