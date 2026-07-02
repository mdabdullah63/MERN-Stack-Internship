import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/AddCart";
import ProductDetails from "./pages/ProductDetails";

import {
  Routes,
  Route,
} from "react-router-dom";

import { Toolbar } from "@mui/material";


function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar setShowCart={setShowCart} />

      <Toolbar />

      <Routes>

        <Route
          path="/"
          element={
            showCart ? (
              <Cart setShowCart={setShowCart} />
            ) : (
              <Home />
            )
          }
        />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

      </Routes>

    </>
  );
}

export default App;