"use client";

import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Book,
  Users,
  ShoppingCart,
  Settings,
  Home,
} from "lucide-react";
import NavLink from "../Shared/NavLink";
import { CgProfile } from "react-icons/cg";

const DashboardNavList = () => {
  const user = "admin";
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <nav className="bg-black/95 text-white p-6 min-h-screen w-64 font-bold">
      <p className="shadow-lg bg-gray-600 py-3 px-2 rounded-md text-center text-2xl mb-5">
        Bookshelf
      </p>

      {user === "user" && (
        <ul className="space-y-4">
          {/* <NavLink
            href="/dashboard"
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
            onClick={() => handleNavigation("/dashboard")}
          >
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </NavLink> */}

          <NavLink
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
            href="/dashboard/my-cart"
          >
            <LayoutDashboard size={20} />
            <span>My Cart</span>
          </NavLink>

          <NavLink
            href={"/dashboard/payment"}
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
          >
            <Book size={20} />
            <span>My Payment</span>
          </NavLink>
          <li
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
            onClick={() => handleNavigation("/dashboard/users/my-orders")}
          >
            <Book size={20} />
            <span>My Orders</span>
          </li>
          {/* <li
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
            onClick={() => handleNavigation("/dashboard/books")}
          >
            <Book size={20} />
            <span>Wishlist</span>
          </li> */}

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
      ) }
      { user === "seller" &&(
        <ul className="space-y-4">
          <NavLink
            href="/seller"
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
    
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

          <NavLink
            href={"/dashboard/payment"}
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
          >
            <Book size={20} />
            <span>My Payment</span>
          </NavLink>

          <NavLink href={'/dashboard/post-book'}
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
         
          >
            <Book size={20} />
            <span>Sell Book</span>
          </NavLink>

          <NavLink href={'/dashboard/orders'}
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
         
          >
            <ShoppingCart size={20} />
            <span>Manage Orders</span>
          </NavLink>

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
      )}

      {user === 'admin'&& ( 
        <ul className="space-y-4">
        <NavLink
          href="/dashboard"
          className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
          onClick={() => handleNavigation("/dashboard")}
        >
          <LayoutDashboard size={20} />
          <span>Overview</span>
        </NavLink>
      
       
        <NavLink href={'/dashboard/users'}
          className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md transition"
          
        >
          <Users size={20} />
          <span>Manage Users</span>
        </NavLink>


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
      </ul>  )}
    </nav>
  );
};

export default DashboardNavList;
