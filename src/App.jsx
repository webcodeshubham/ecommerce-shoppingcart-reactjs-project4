import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Shopping/Shopping";
import Cart from "./Pages/Cart/Cart";
import ShopContextProvider from "./context/ShopContextProvider";

const App = () => {
  return (
    <>
      <div className="app">
        {/* Wrap the Children with Context Component */}
        <ShopContextProvider>
          {/* Implement the Router Properties & Functionalities */}
          <Router>
            {/* This Component will be available in Every Route */}
            <Navbar />
            {/* Implement the Switching Routes, goes through all the Route and render the Element of a given path, which means One Route View at a time */}
            <Routes>
              {/* Lay down the Route for each (Home) Container with exact props (Exact Path, Not a Part of URL) */}
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/" element={<Home />} />
              {/* Lay down the Route for each (Cart) Container with exact props (Exact Path, Not a Part of URL) */}
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    </>
  );
};

export default App;
