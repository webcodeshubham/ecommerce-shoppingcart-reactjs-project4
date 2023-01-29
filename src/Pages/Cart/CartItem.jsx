import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const CartItem = (props) => {
  const { productId, productName, productPrice, productImage } = props.product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <>
      <div className="cartItem">
        <img src={productImage} alt={productName} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p>${productPrice}</p>
          <div className="countHandler">
            <button onClick={() => removeFromCart(productId)}>
              &nbsp;-&nbsp;
            </button>
            <input
              type="text"
              value={cartItems[productId]}
              onChange={(e) =>
                updateCartItemCount(Number(e.target.value), productId)
              }
            />
            <button onClick={() => addToCart(productId)}>&nbsp;+&nbsp;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
