import React from "react";

const Product = (props) => {
  const { productId, productName, productPrice, productImage } = props.product;
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
      </div>
    </>
  );
};

export default Product;
