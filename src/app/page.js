"use client";
import PageTable from "@/components/pageTable";
import PageHeader from "@/components/pageHeader";
import { Provider } from "react-redux";
import { useRef } from "react";
import { makeStore } from "@/store/store";

const products = [
  {
    sku: "#CA25",
    image: "/placeholder.svg?height=80&width=80",
    name: "Product-name",
    price: 24.0,
    isFavorite: true,
  },
  {
    sku: "#CA34",
    image: "/placeholder.svg?height=80&width=80",
    name: "Product-name",
    price: 24.0,
    isFavorite: false,
  },
  {
    sku: "#CA35",
    image: "/placeholder.svg?height=80&width=80",
    name: "Product-name",
    price: 24.0,
    isFavorite: true,
  },
  {
    sku: "#CA56",
    image: "/placeholder.svg?height=80&width=80",
    name: "Product-name",
    price: 24.0,
    isFavorite: false,
  },
  {
    sku: "#CA57",
    image: "/placeholder.svg?height=80&width=80",
    name: "Product-name",
    price: 24.0,
    isFavorite: false,
  },
];

export default function Products() {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  return (
    <Provider store={storeRef.current}>
      <PageHeader title="PRODUCTS" />
      <PageTable />;
    </Provider>
  );
}
