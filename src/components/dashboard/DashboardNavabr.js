'use client'
import { useState } from "react";
import { CiLogout, CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"; // Update path based on setup

const DashboardNavbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-white shadow-sm mb-5 p-4 flex justify-between items-center">
      {/* Left: Brand/Logo */}
      <div className="text-2xl font-bold text-gray-800">Dashboard</div>

      {/* Center: Search Bar */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Right: User Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-2 cursor-pointer">
          <FaUserCircle className="text-2xl text-gray-600" />
          <span className="hidden md:block text-gray-700">Mehedi</span>
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
