import React from "react";
import PRODUCTS from "../../products";

const Shopping = () => {
  return (
    <>
    <div className="shoppingPage">
      <div className="shoppingPage__title">
        <h1>🌳Recycled Products🌳</h1>
      </div>
      <div className="shoppingPage__products">
        {
        PRODUCTS.map((product) => {
          return (
            <>
            <h1>{product.id}</h1>
            <h1>{product.productName}</h1>
            <h1>{product.productPrice}</h1>
            <img src={product.productImage} alt="productImage" />
            </>
          )
        })}
      </div>
    </div>
    </>
  );
};

export default Shopping