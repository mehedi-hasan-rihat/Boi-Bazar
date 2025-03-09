"use client";
import React, { useEffect, useState } from "react";
import { ArrowUpDown } from "lucide-react"; // Importing ArrowUpDown icon from Lucide
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import axios from "axios";


function UserManagementDashboard() {
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    const { data } = await axios(`http://localhost:3000/api/users`);
    setUsers(data)
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="p-6 overflow-hidden">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl lg:text-2xl font-semibold">
          User Management Dashboard
        </h2>

        {/* Search bar and filter */}
        <div className="flex flex-col justify-center items-end gap-2 xl:flex-row space-x-4">
          <Input
            type="text"
            placeholder="Search users by name"
            className="w-64 p-2 border rounded-md"
          />

          {/* Verified filter */}
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="unverified">Unverified</SelectItem>
            </SelectContent>
          </Select>

          <button className="px-4 py-2 bg-gray-300 text-black rounded-md">
            Reset
          </button>
        </div>
      </div>

      {/* Table */}
      <ScrollArea className=" w-full rounded-md border p-1">
        <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="py-2 px-4 text-left">
                <div className="flex items-center cursor-pointer">
                  Name
                  <ArrowUpDown className="w-5 h-5 ml-2" />
                </div>
              </th>
              <th className="py-2 px-4 text-left">User ID</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Phone</th>
              <th className="py-2 px-4 text-left">Date Joined</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Verification</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id} className="border-b">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.id}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.phone}</td>
                <td className="py-2 px-4">{user.dateJoined}</td>
                <td className="py-2 px-4">
                  {" "}
                  <Select>
                    <SelectTrigger className="w-max">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Seller</SelectItem>
                      <SelectItem value="verified">Customer</SelectItem>
                      <SelectItem value="unverified">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="py-2 px-4">
                  <Select>
                    <SelectTrigger className="w-max">
                      <SelectValue placeholder="Verifiy Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="verified">Verified</SelectItem>
                      <SelectItem value="unverified">Unverified</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="py-2 px-4 flex space-x-2">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-1 px-3 rounded-md text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default UserManagementDashboard;
