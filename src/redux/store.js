import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { fetchProduct } from "./products";

export const store = configureStore({
  reducer: {
    [fetchProduct.reducerPath]: fetchProduct.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchProduct.middleware),
});

setupListeners(store.dispatch);
