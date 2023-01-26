import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const Product = (props) => {
  const { productId, productName, productPrice, productImage } = props.product;
  const { cartItems, addToCart } = useContext(ShopContext);
  console.log(cartItems);
  return (
    <>
      <div className="product">
        <img className="product__image" src={productImage} alt="productImage" />
        <div className="product__description">
          <b>
            <p>{productName}</p>
          </b>
          {/* Money Symbol */}
          <p>${productPrice}</p>
        </div>
        <button
          className="product__addToCartBtn"
          onClick={() => addToCart(productId)}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Product;
