import React from "react";
import PRODUCTS from "../../products";
import Product from "../Shopping/Product";

const Cart = () => {
  return (
    <>
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
          {PRODUCTS.amp((product) => {
            <Product data={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
