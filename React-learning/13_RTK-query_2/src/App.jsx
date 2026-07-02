import { Provider } from "react-redux";
import { store } from "./store";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import ProductDetails from "./components/detail";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
      </Routes>
    </Provider>
  );
}

export default App;