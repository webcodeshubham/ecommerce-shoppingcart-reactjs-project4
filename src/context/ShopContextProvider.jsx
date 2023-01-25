import React, { useState, createContext } from "react";
import PRODUCTS from "../products";

// React Context API (Hook) means this store is going to keep track of states, functionalities which can be accessed anywhere in the react app.
// Calling & Assigning it to Variable, Initially the Value of Store is NULL
// He have this Context API (Hook), so we can access & change this state in other components (Shop & Cart Page) as well.
export const ShopContext = createContext(null);

{
  // How many products - Count(Qty/No. of Items) do we have in the cart specific to that productId.
  // Initially all the Items will be having 0 count.
  // productId : 1 : Count(Qty/No. of Items)
  // productId : 1 : 0,
  // productId : 2 : 0,
  // productId : 3 : 0,
  // productId : 4 : 0,
  // productId : 5 : 0,
  // If, we satrt adding the Items, count will change.
  // productId : 1 : Count(Qty/No. of Items)
  // productId : 1 : 2,
  // productId : 2 : 4,
  // productId : 3 : 7,
  // productId : 4 : 10,
  // productId : 5 : 12,
}

// ===> We are going to create a function in order to add the Items, not the 8 Items.
// this function will get the array and create an empty object will represent our initial state of our cart items.
// If we add more products in future, this function will handle it.
// This means the no. of cartItems, we do have right now.
// this function will provide the default state of the Cart.
// How to convert the array into an object.
// No. of Counts of Cart Items in [ object1, object2, object3, object4, object5, object6, object7 ]
// In order to access the no. as key, use square brackets, for strings use dot notation.
// From this FOR Loop, the key & its value as a count will be assigned to the empty object.
// Shopping ProductIDs and Cart ProductIDs will be same.
const getDefaultCart = () => {
  let cart = {};
  // i is to count the Items in Products ArrayOfObjects.
  // i = 1, id starts with 1.
  for (i = 1; i < PRODUCTS.length + 1; i++) {
    // Default Count Value of all the Items is Zero.
    // cart[1] = 0;
    // cart[2] = 0;
    // cart[3] = 0;
    // cart[4] = 0;
    // cart[5] = 0;
    cart[i] = 0;
  }
  return cart;
};

// We are creating this component to organize the Context Store Properly.
// Defining all the State Variables & Functions.
// Passing within the ShopContext.Provider Custom JSX Element.
// <ShopContext.Provider> = Not a self-closed will take components where you want to access your store logic & Empty Storage.
// All logic and then JSX Store & Nested JSX to access all the store stuff.
// props.children => where you want to use your context store.
const ShopContextProvider = (props) => {
  // Initial Value will be Object with 8 properties.
  //   const [cartItems, setCartItems] = useState({
  //     // productId : 1 : 0,
  //     // productId : 2 : 0,
  //     // productId : 3 : 0,
  //     // productId : 4 : 0,
  //     // productId : 5 : 0,
  //   });
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Want to add the Items to the Cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Want to remove the Items to the Cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { cartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
