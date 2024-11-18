"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import Link from "next/link";

export default function Component() {
  const [images, setImages] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xl">
          <Link href={"/"}>
            <span className="font-bold">PRODUCTS</span>
          </Link>
          <span className="text-muted-foreground">{">"}</span>
          <span className="text-blue-600">Add new product</span>
        </div>
      </div>

      <form className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="sku">SKU</Label>
            <Input id="sku" placeholder="Enter product SKU" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter product name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="qty">QTY</Label>
            <Input id="qty" type="number" placeholder="Enter quantity" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              placeholder="Enter price"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="favorite">Favorite</Label>
            <div className="flex items-center space-x-2">
              <Toggle
                id="favorite"
                aria-label="Toggle favorite"
                pressed={isFavorite}
                onPressedChange={setIsFavorite}
              >
                <Heart
                  className={`h-4 w-4 ${
                    isFavorite ? "fill-current text-primary" : ""
                  }`}
                />
              </Toggle>
              <span className="text-sm text-muted-foreground">
                {isFavorite ? "Favorited" : "Mark as favorite"}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Product Description</Label>
          <Textarea
            id="description"
            placeholder="A small description about the product"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-4">
          <div>
            <Label>Product Images</Label>
            <p className="text-xs text-muted-foreground">
              JPEG, PNG, SVG or GIF (Maximum file size 50MB)
            </p>
          </div>

          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <Input
              type="file"
              multiple
              accept="image/jpeg,image/png,image/svg+xml,image/gif"
              className="hidden"
              id="image-upload"
              onChange={(e) => setImages(e.target.files)}
            />
            <Label
              htmlFor="image-upload"
              className="text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              Add Images
            </Label>
            {images && (
              <div className="mt-2 text-sm text-muted-foreground">
                {images.length} file(s) selected
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="w-full w-auto md:w-[250px] bg-[#001EB9] rounded-lg text-white text-sm hover:bg-blue-500"
          >
            Add product
          </Button>
        </div>
      </form>
    </div>
  );
}

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { ChevronDown, User, Upload } from "lucide-react";
// import Image from "next/image";

// export default function ProductEditor() {
//   return (
//     <div className="container mx-auto p-6">
//       <header className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold">
//           PRODUCTS &gt; <span className="text-[#001EB9]">Add new product</span>
//         </h1>
//       </header>

//       <form className="space-y-6">
//         <div className="grid grid-cols-2 gap-6">
//           <div className="flex items-center space-x-4">
//             <Label htmlFor="sku" className="w-20 flex-shrink-0">
//               SKU
//             </Label>
//             <Input id="sku" className="flex-grow" />
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-6">
//           <div className="flex items-center space-x-4">
//             <Label htmlFor="name" className="w-20 flex-shrink-0">
//               Name
//             </Label>
//             <Input id="name" className="flex-grow" />
//           </div>
//           <div className="flex items-center space-x-4">
//             <Label htmlFor="qty" className="w-20 flex-shrink-0">
//               QTY
//             </Label>
//             <Input id="qty" type="number" className="flex-grow" />
//           </div>
//         </div>

//         <div>
//           <Label htmlFor="description" className="mb-2 block">
//             Product Description
//           </Label>
//           <p className="text-sm text-gray-500 mb-2">
//             A small description about the product
//           </p>
//           <Textarea id="description" rows={4} />
//         </div>

//         {/* <div>
//           <Label htmlFor="product-images" className="mb-2 block">
//             Product Images
//           </Label>
//           <p className="text-sm text-gray-500 mb-2">
//             JPEG, PNG, SVG or GIF (Maximum file size 50MB)
//           </p>
//           <div className="flex space-x-4 mb-4">
//             <Image
//               src="/placeholder.svg"
//               alt="Product image 1"
//               width={100}
//               height={100}
//               className="rounded-md"
//             />
//             <Image
//               src="/placeholder.svg"
//               alt="Product image 2"
//               width={100}
//               height={100}
//               className="rounded-md"
//             />
//             <Image
//               src="/placeholder.svg"
//               alt="Product image 3"
//               width={100}
//               height={100}
//               className="rounded-md"
//             />
//           </div>
//           <div className="flex items-center space-x-2">
//             <Input
//               id="product-images"
//               type="file"
//               accept="image/*"
//               multiple
//               className="hidden"
//               onChange={(e) => {
//                 // Handle file upload logic here
//                 console.log(e.target.files);
//               }}
//             />
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => document.getElementById("product-images")?.click()}
//               className="flex items-center space-x-2"
//             >
//               <Upload size={16} />
//               <span>Upload Images</span>
//             </Button>
//             <p className="text-sm text-gray-500">No file chosen</p>
//           </div>
//         </div> */}
//         <div className="flex justify-end">
//           <Button className="flex-1 sm:flex-none py-6 px-8 bg-[#001EB9] ">
//             New Product
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }
