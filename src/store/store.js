import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/products/products.slice";

export const makeStore = () => {
  return configureStore({
    reducer: { products: productSlice.reducer },
  });
};
