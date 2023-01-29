import React, { useContext } from "react";
import PRODUCTS from "../../products";
import { ShopContext } from "../../context/ShopContextProvider";
import CartItem from "./CartItem";
import "../Cart/Cart.css"

const Cart = (props) => {
  const { cartItems } = useContext(ShopContext);

  return (
    <>
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.productId] !== 0) {
              return <CartItem product={product} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
