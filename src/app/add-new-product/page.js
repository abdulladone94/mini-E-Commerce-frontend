import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, User, Upload } from "lucide-react";
import Image from "next/image";

export default function ProductEditor() {
  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
          PRODUCTS &gt; <span className="text-[#001EB9]">Add new product</span>
        </h1>
      </header>

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <Label htmlFor="sku" className="w-20 flex-shrink-0">
              SKU
            </Label>
            <Input id="sku" className="flex-grow" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <Label htmlFor="name" className="w-20 flex-shrink-0">
              Name
            </Label>
            <Input id="name" className="flex-grow" />
          </div>
          <div className="flex items-center space-x-4">
            <Label htmlFor="qty" className="w-20 flex-shrink-0">
              QTY
            </Label>
            <Input id="qty" type="number" className="flex-grow" />
          </div>
        </div>

        <div>
          <Label htmlFor="description" className="mb-2 block">
            Product Description
          </Label>
          <p className="text-sm text-gray-500 mb-2">
            A small description about the product
          </p>
          <Textarea id="description" rows={4} />
        </div>

        {/* <div>
          <Label htmlFor="product-images" className="mb-2 block">
            Product Images
          </Label>
          <p className="text-sm text-gray-500 mb-2">
            JPEG, PNG, SVG or GIF (Maximum file size 50MB)
          </p>
          <div className="flex space-x-4 mb-4">
            <Image
              src="/placeholder.svg"
              alt="Product image 1"
              width={100}
              height={100}
              className="rounded-md"
            />
            <Image
              src="/placeholder.svg"
              alt="Product image 2"
              width={100}
              height={100}
              className="rounded-md"
            />
            <Image
              src="/placeholder.svg"
              alt="Product image 3"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Input
              id="product-images"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => {
                // Handle file upload logic here
                console.log(e.target.files);
              }}
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById("product-images")?.click()}
              className="flex items-center space-x-2"
            >
              <Upload size={16} />
              <span>Upload Images</span>
            </Button>
            <p className="text-sm text-gray-500">No file chosen</p>
          </div>
        </div> */}
        <div className="flex justify-end">
          <Button className="flex-1 sm:flex-none py-6 px-8 bg-[#001EB9] ">
            New Product
          </Button>
        </div>
      </form>
    </div>
  );
}
