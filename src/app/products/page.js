"use client";
import PageTable from "@/components/pageTable";
import PageHeader from "@/components/pageHeader";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "@/store/store";
import { useEffect } from "react";
import { fetchProducts } from "@/store/reducers/products/products.slice";

export default function Products() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.product);
  console.log(posts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <PageHeader title="PRODUCTS" />
      <PageTable posts={posts} status={status} error={error} />;
    </Provider>
  );
}
