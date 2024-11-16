import { Search, Star, Trash2, PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

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

export default function PageTable() {
  return (
    <div className="p-6 space-y-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-bold text-[#001EB9]">
              SKU
            </TableHead>
            <TableHead className="w-[100px] font-bold text-[#001EB9]">
              IMAGE
            </TableHead>
            <TableHead className="font-bold text-[#001EB9]">
              PRODUCT NAME
            </TableHead>
            <TableHead className="text-right font-bold text-[#001EB9]">
              PRICE
            </TableHead>
            <TableHead className="w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.sku}>
              <TableCell className="font-medium text-muted-foreground">
                {product.sku}
              </TableCell>
              <TableCell>
                {/* <div className="relative w-20 h-20">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div> */}
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell className="text-right">
                ${product.price.toFixed(2)}
              </TableCell>
              <TableCell>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-5 h-5 text-[#001EB9]" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <PenSquare className="w-5 h-5 text-[#001EB9]" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Star
                      className={`w-5 h-5 ${
                        product.isFavorite
                          ? "fill-[#001EB9] text-[#001EB9]"
                          : "text-blue-600"
                      }`}
                    />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
