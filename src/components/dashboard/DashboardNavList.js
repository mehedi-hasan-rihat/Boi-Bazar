'use client'

import { useRouter } from "next/navigation";
import { FaBook, FaUsers, FaCartPlus, FaCog } from "react-icons/fa";
import NavLink from "../Shared/NavLink";
 // For navigation

const DashboardNavList = () => {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route); // Navigate to different routes
  };

  return (
    <nav className="bg-gray-800 text-white p-6  min-h-screen">
      <div className="text-xl xl:text-[22px] font-bold mb-6 text-center">
        Admin Dashboard
      </div>

      <ul className="space-y-4">
      <NavLink href={'/dashboard'} className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md" onClick={() => handleNavigation('/admin')}>
          <FaBook className="text-xl" />
          <span>Overview</span>
        </NavLink>

        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md" onClick={() => handleNavigation('/admin')}>
          <FaBook className="text-xl" />
          <span>Manage Books</span>
        </li>

        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md" onClick={() => handleNavigation('/admin/users')}>
          <FaUsers className="text-xl" />
          <span>Manage Users</span>
        </li>

        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md" onClick={() => handleNavigation('/admin/orders')}>
          <FaCartPlus className="text-xl" />
          <span>Manage Orders</span>
        </li>

        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md" onClick={() => handleNavigation('/admin/settings')}>
          <FaCog className="text-xl" />
          <span>Settings</span>
        </li>
        <NavLink href={'/'} className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md" onClick={() => handleNavigation('/admin/settings')}>
          <FaCog className="text-xl" />
          <span>Home</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default DashboardNavList;
