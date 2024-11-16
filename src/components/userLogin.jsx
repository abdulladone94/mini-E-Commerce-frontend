"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LoggedUser() {
  return (
    <div className="bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <div className="ml-auto flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-normal text-[#162427]">
                  ADMIN
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#001EB9]" />
        </div>
      </header>
    </div>
  );
}
