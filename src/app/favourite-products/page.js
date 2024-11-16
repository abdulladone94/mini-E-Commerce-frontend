import PageTable from "@/components/pageTable";
import PageHeader from "@/components/pageHeader";

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

export default function FavouriteProducts() {
  return (
    <>
      <PageHeader title="FAVOURITE PRODUCTS" />
    </>
  );
}
