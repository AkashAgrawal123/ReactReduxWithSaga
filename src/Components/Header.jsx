import React from "react";
import { TbShoppingCart } from "react-icons/tb";
import '../Styles/Header.scss';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__wrapper">
          <div className="header__content">
            <div className="header__logo">
              <img src="images/logo.png" className="header__logo--icon" />
            </div>
            <input className="header__input" type="text" placeholder="Search item..."/>
            <div className="header__cart">
              <TbShoppingCart className="header__cart--icon" />
              <span>7</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
