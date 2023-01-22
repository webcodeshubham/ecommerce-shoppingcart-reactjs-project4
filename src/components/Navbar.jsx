import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/img/add-to-basket.png";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__brandlogo">
          <img src={cartIcon} alt="cart-icon" />
        </div>
        <div className="navbarLinks">
          <Link className="navbarLinks__shop" to="/">
            Shop
          </Link>
          <Link className="navbarLinks__cart" to="/cart">
            {/* Must be Inside src dir. Relative imports outside of src/ are not supported. */}
            {/* <img src={cartIcon} alt="cart-icon" /> */}
            {/* Embed the Inbuilt Component from the Phosphor-React Library with Style Props */}
            <ShoppingCart className="navbarLinks--img" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
