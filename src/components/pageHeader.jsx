"use client";
import { Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/store/reducers/products/products.slice";
import { useState } from "react";

export default function PageHeader({ title }) {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    dispatch(setSearchQuery(searchValue)); // Dispatch search query to Redux store
  };
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[#162427]">
        {title}
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-2xl">
          <Input
            className="pl-4 pr-12 py-6 text-base rounded-full bg-[#F7F7F7]"
            placeholder="Search for products"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button
            className="absolute right-2 top-1 bottom-0 px-4 rounded-full bg-[#001EB9] hover:bg-blue-500"
            onClick={handleSearchClick}
          >
            <Search className="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
        <div className="flex gap-2">
          <Link
            href="/add-new-product"
            className="flex flex-1 w-[250px] sm:flex-none justify-center items-center bg-[#001EB9] rounded-lg text-white text-sm hover:bg-blue-500"
          >
            New Product
          </Link>
          <Link
            href="/favourite-products"
            className="py-6 flex flex-1 w-[50px] sm:flex-none justify-center items-center bg-[#001EB9] rounded-lg text-white text-sm hover:bg-blue-500"
            variant="outline"
          >
            <Star className="w-5 h-5 fill-[#001EB9] border-[#001EB9]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
