'use client'
import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react'; // Importing ArrowUpDown icon from Lucide
import { Input } from '@/components/ui/input';


// Expanded sample data for users
const usersData = [
  { id: 1, name: 'Mehedi', email: 'mehedi@example.com', phone: '123-456-7890', dateJoined: '2022-05-15', role: 'Admin', status: 'Active', verified: true },
  { id: 2, name: 'John Doe', email: 'johndoe@example.com', phone: '987-654-3210', dateJoined: '2021-04-22', role: 'User', status: 'Inactive', verified: false },
  { id: 3, name: 'Jane Smith', email: 'janesmith@example.com', phone: '555-555-5555', dateJoined: '2023-01-12', role: 'User', status: 'Active', verified: true },
  { id: 4, name: 'Sara Ali', email: 'saraali@example.com', phone: '444-555-6666', dateJoined: '2022-08-09', role: 'Admin', status: 'Active', verified: false },
  { id: 5, name: 'David Williams', email: 'davidwilliams@example.com', phone: '333-444-5555', dateJoined: '2021-07-20', role: 'User', status: 'Inactive', verified: true },
  { id: 6, name: 'Olivia Brown', email: 'oliviabrown@example.com', phone: '222-333-4444', dateJoined: '2020-10-10', role: 'Moderator', status: 'Active', verified: false },
  { id: 7, name: 'Liam Johnson', email: 'liamjohnson@example.com', phone: '111-222-3333', dateJoined: '2023-03-25', role: 'User', status: 'Active', verified: true },
  { id: 8, name: 'Emma Davis', email: 'emmadavis@example.com', phone: '666-777-8888', dateJoined: '2022-11-01', role: 'Admin', status: 'Inactive', verified: false },
  { id: 9, name: 'Ethan Miller', email: 'ethanmiller@example.com', phone: '555-444-3333', dateJoined: '2021-12-05', role: 'User', status: 'Active', verified: true },
  { id: 10, name: 'Sophia Wilson', email: 'sophiawilson@example.com', phone: '444-333-2222', dateJoined: '2022-04-18', role: 'User', status: 'Inactive', verified: false },
  { id: 11, name: 'Mason Moore', email: 'masonmoore@example.com', phone: '333-222-1111', dateJoined: '2023-06-22', role: 'User', status: 'Active', verified: true },
  { id: 12, name: 'Isabella Taylor', email: 'isabellataylor@example.com', phone: '222-111-0000', dateJoined: '2021-09-15', role: 'Moderator', status: 'Inactive', verified: false },
  { id: 13, name: 'James Anderson', email: 'jamesanderson@example.com', phone: '111-000-9999', dateJoined: '2023-02-03', role: 'Admin', status: 'Active', verified: true },
  { id: 14, name: 'Amelia Thomas', email: 'ameliathomas@example.com', phone: '888-777-6666', dateJoined: '2021-10-10', role: 'User', status: 'Active', verified: false },
  { id: 15, name: 'Benjamin Jackson', email: 'benjaminjackson@example.com', phone: '777-666-5555', dateJoined: '2020-05-30', role: 'Admin', status: 'Inactive', verified: true },
  { id: 16, name: 'Charlotte White', email: 'charlottewhite@example.com', phone: '555-111-9999', dateJoined: '2022-02-22', role: 'User', status: 'Active', verified: false },
];

function UserManagementDashboard() {
  const [search, setSearch] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [verifiedFilter, setVerifiedFilter] = useState('all');
  const [sortedUsers, setSortedUsers] = useState(usersData);

  // Handle search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handle sorting by name
  const handleSort = () => {
    const sorted = [...sortedUsers].sort((a, b) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();

      if (sortDirection === 'asc') {
        return aName < bName ? -1 : 1;
      } else {
        return aName < bName ? 1 : -1;
      }
    });

    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    setSortedUsers(sorted);
  };

  // Toggle verification status
  const toggleVerification = (userId) => {
    const updatedUsers = sortedUsers.map((user) => {
      if (user.id === userId) {
        return { ...user, verified: !user.verified };
      }
      return user;
    });
    setSortedUsers(updatedUsers);
  };

  // Filter users by search term and verification status
  const filteredUsers = sortedUsers.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase());
    const matchesVerification =
      verifiedFilter === 'all' || (verifiedFilter === 'verified' && user.verified) || (verifiedFilter === 'unverified' && !user.verified);
    
    return matchesSearch && matchesVerification;
  });

  return (
    <div className="p-6">
    <div className="mb-4 flex justify-between items-center">
      <h2 className="text-2xl font-semibold">User Management Dashboard</h2>
      
      {/* Search bar and filter */}
      <div className="flex space-x-4">
        <Input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search users by name"
          className="w-64 p-2 border rounded-md"
        />
        
        {/* Verified filter */}
        <select
          value={verifiedFilter}
          onChange={(e) => setVerifiedFilter(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="all">All Statuses</option>
          <option value="verified">Verified</option>
          <option value="unverified">Unverified</option>
        </select>
        <button 
           
            className="px-4 py-2 bg-gray-300 text-black rounded-md">
            Reset
          </button>
      </div>
    </div>
  
    {/* Table */}
    <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
      <thead>
        <tr className="border-b bg-gray-100">
          <th className="py-2 px-4 text-left">
            <div className="flex items-center cursor-pointer" onClick={handleSort}>
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
        {filteredUsers.map((user) => (
          <tr key={user.id} className="border-b">
            <td className="py-2 px-4">{user.name}</td>
            <td className="py-2 px-4">{user.id}</td>
            <td className="py-2 px-4">{user.email}</td>
            <td className="py-2 px-4">{user.phone}</td>
            <td className="py-2 px-4">{user.dateJoined}</td>
            <td className="py-2 px-4">{user.role}</td>
            <td className="py-2 px-4">
              <button
                onClick={() => toggleVerification(user.id)}
                className={`py-1 px-3 rounded-md text-sm ${user.verified ? 'bg-green-500' : 'bg-yellow-500'} text-white`}
              >
                {user.verified ? 'Verified' : 'Unverified'}
              </button>
            </td>
            <td className="py-2 px-4 flex space-x-2">
              <button className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm">Edit</button>
              <button className="bg-red-500 text-white py-1 px-3 rounded-md text-sm">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
}

export default UserManagementDashboard;
