"use client";
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

export default function PageTable({ posts, status, error }) {
  console.log(posts);

  return (
    <div className="p-6 space-y-6">
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
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
          {status === "succeeded" &&
            posts.map((post) => (
              <TableRow key={post._id}>
                <TableCell className="font-medium text-muted-foreground">
                  {post.sku}
                </TableCell>
                <TableCell>
                  <div className="relative w-20 h-20">
                    <Image
                      src={post.images?.[0] || "/default-image.png"} // Use the first image or a fallback
                      alt={post.productName || "No Name"}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </TableCell>
                <TableCell>{post.productName}</TableCell>
                <TableCell className="text-right">${post.price}</TableCell>
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
                          post.isFavorite
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
