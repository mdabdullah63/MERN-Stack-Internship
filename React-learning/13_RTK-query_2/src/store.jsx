import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { CardApi} from "./services/ApiSlice"

export const store = configureStore({
  reducer: {
    [CardApi.reducerPath]: CardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CardApi.middleware),
});

setupListeners(store.dispatch);