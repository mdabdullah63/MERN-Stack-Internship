import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./store";

import { SnackbarProvider } from "notistack";


ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>

    <React.StrictMode>

      <Provider store={store}>

        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={2000}
        >

          <App />

        </SnackbarProvider>

      </Provider>

    </React.StrictMode>

  </BrowserRouter>
);