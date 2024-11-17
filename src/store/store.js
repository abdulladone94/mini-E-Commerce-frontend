import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/products/products.slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
