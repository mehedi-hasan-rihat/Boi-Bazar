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
  console.log(session);
  const user = 'admin'
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
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            <div className="text-center flex flex-col justify-center items-center py-2">
              <Image
                src={session.user?.image}
                alt="profileImage"
                width={150}
                height={150}
                className="w-11 h-11 rounded-full"
              />
              <div className="mt-2">
         
                <p className="font-semibold text-[15px]">{session.user?.name}</p>
              </div>
              <p className="font-medium">{session.user?.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="space-y-1">
           
           {user === "user" && <> <DropdownMenuItem className="hover:bg-gray-200">
              My Cart
            </DropdownMenuItem>  <DropdownMenuSeparator /></>}
         {user === "seller" && <>   <DropdownMenuItem className="hover:bg-gray-200">
                       My Orders
            </DropdownMenuItem>  <DropdownMenuSeparator /></>}
            {user === "seller" && <>   <DropdownMenuItem className="hover:bg-gray-200">
                       Manage Orders
            </DropdownMenuItem>  <DropdownMenuSeparator /></>}
            {user === "seller" && <>   <DropdownMenuItem className="hover:bg-gray-200">
                     Post a book
            </DropdownMenuItem>  <DropdownMenuSeparator /></>}
            {user === "user" && <> <DropdownMenuItem className="hover:bg-gray-200">
              My Orders
            </DropdownMenuItem>  <DropdownMenuSeparator /></>}
        
            <NavLink href={"/dashboard"}>
           
              <DropdownMenuItem className="hover:bg-gray-200">
                Dashboard
              </DropdownMenuItem>
            </NavLink>  <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:bg-gray-200">
              <span>Logout</span>{" "}
              <span className="text-xl -ml-[2px]">
                <CgLogOut />{" "}
              </span>
            </DropdownMenuItem>  <DropdownMenuSeparator />
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
