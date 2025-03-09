"use client";
import { useState } from "react";
import { CiLogout, CiSearch } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Update path based on setup
import { useSession } from "next-auth/react";
import Image from "next/image";

const DashboardNavbar = () => {
  const [search, setSearch] = useState("");
  const { data: session } = useSession();
  // console.log(session);
  return (
    <nav className="bg-white z-50 shadow-sm mb-5 p-2 flex justify-between items-center sticky top-0">
      {/* Left: Brand/Logo */}
      <div className="text-2xl font-bold text-gray-800">Dashboard</div>
      {/* Right: User Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-2 cursor-pointer outline-none">
          <div className="flex flex-col justify-center items-center border px-2 py-1 rounded">
            {" "}
            {session && (
              <Image
                src={session?.user?.image}
                alt="profileImage"
                width={150}
                height={150}
                className="w-8 h-8 rounded-full"
              />
            )}
            <p className="hidden md:block text-gray-700 text-sm">
              {session?.user?.name}
            </p>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white shadow-md rounded-md p-2 w-40">
          <DropdownMenuItem className="hover:bg-gray-200 cursor-pointer p-2 flex items-center space-x-2">
            <CiLogout className="text-lg" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default DashboardNavbar;
