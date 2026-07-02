import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { CartApi } from "./services/ApiSlice";
import cartReducer from "./redux/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,

    [CartApi.reducerPath]: CartApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CartApi.middleware),
});

setupListeners(store.dispatch);