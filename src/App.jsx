import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Cart from "./containers/Cart";

const App = () => {
  return (
    <>
      <div className="app">
        {/* Implement the Router Properties & Functionalities */}
        <Router>
          {/* Implement the Switching Routes, which means One Route View at a time */}
          <Routes>
            {/* Lay down the Route for each (Home) Container with exact props (Exact Path, Not a Part of URL) */}
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/" element={<Home />} />
            {/* Lay down the Route for each (Cart) Container with exact props (Exact Path, Not a Part of URL) */}
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
