"use client";

import { useRouter } from "next/navigation";
import { LayoutDashboard, Book, Users, ShoppingCart, Settings, Home } from "lucide-react";
import NavLink from "../Shared/NavLink";
import { CgProfile } from "react-icons/cg";

const DashboardNavList = () => {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <nav className="bg-black/95 text-white p-6 min-h-screen w-64 font-bold">
     
      <ul className="space-y-4">
        <NavLink
          href="/dashboard"
          className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
          onClick={() => handleNavigation("/dashboard")}
        >
          <LayoutDashboard size={20} />
          <span>Overview</span>
        </NavLink>

        <li
          className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
          onClick={() => handleNavigation("/dashboard/books")}
        >
          <Book size={20} />
          <span>Manage Books</span>
        </li>

        <li
          className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
          onClick={() => handleNavigation("/users")}
        >
          <Users size={20} />
          <span>Manage Users</span>
        </li>

        <li
          className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
          onClick={() => handleNavigation("/orders")}
        >
          <ShoppingCart size={20} />
          <span>Manage Orders</span>
        </li>

        <li
          className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
          onClick={() => handleNavigation("/profile")}
        >
          <CgProfile size={20} />
          <span>Profile</span>
        </li>

        <NavLink
          href="/"
          className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
          onClick={() => handleNavigation("/")}
        >
          <Home size={20} />
          <span>Home</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default DashboardNavList;
