import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/store";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </StrictMode>
);