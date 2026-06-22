import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/AddCart";
import Toolbar from "@mui/material/Toolbar";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
  <>
  <Navbar setShowCart={setShowCart} />

  <Toolbar />

  {showCart ? (
  <Cart setShowCart={setShowCart} />
) : (
  <Home />
)}

  {!showCart && <Footer />}
</>
  );
}

export default App;