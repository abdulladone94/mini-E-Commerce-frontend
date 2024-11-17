"use client";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Products from "./products/page";

export default function Products11() {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
}
