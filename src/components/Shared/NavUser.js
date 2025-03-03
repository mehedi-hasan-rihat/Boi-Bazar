import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CgLogOut } from "react-icons/cg";
import NavLink from "./NavLink";
export default function NavUser({ session }) {
  return (
    <div className="flex gap-2 items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Image
            src={session.user?.image}
            alt="profileImage"
            width={150}
            height={150}
            className="w-11 h-11 rounded-full"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="space-y-1">

            <DropdownMenuItem className="hover:bg-gray-200">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-200">
              My Cart
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-200">
              My Books
            </DropdownMenuItem>
           <NavLink href={'/dashboard'}> <DropdownMenuItem className="hover:bg-gray-200">
              Dashboard
            </DropdownMenuItem></NavLink>
            <DropdownMenuItem className="hover:bg-gray-200">
            <span>Logout</span> <span className="text-xl -ml-[2px]"><CgLogOut/> </span>
</DropdownMenuItem>

          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <button
        onClick={() => signOut()}
        className="px-6 font-semibold py-2 text-white bg-[#1EAACE] rounded"
      >
        Logout
      </button>
    </div>
  );
}
