import React from "react";
import PRODUCTS from "../../products";
import Product from "./Product";
import "./Shopping.css";

const Shopping = () => {
  return (
    <>
      <div className="shoppingPage">
        <div className="shoppingPage__title">
          <h1>🌳 Recycled Products 🌳</h1>
        </div>
        <div className="shoppingPage__products">
          {PRODUCTS.map((product) => {
            return (
              <>
                <Product product={product} key={product.productId} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shopping;
