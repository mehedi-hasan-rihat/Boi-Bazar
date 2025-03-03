'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Next.js Image component for profile image

const EcommerceProfile = () => {
  // Sample data for user profile
  const [user, setUser] = useState({
    name: 'Mehedi',
    email: 'mehedi@example.com',
    phone: '123-456-7890',
    profilePicture: 'https://xsgames.co/randomusers/assets/avatars/male/69.jpg', // Image path for the profile picture
    shippingAddress: 'Patuakhali, Bangladesh',
    orderHistory: [
      { id: 1, date: '2025-02-20', status: 'Shipped', total: '$120' },
      { id: 2, date: '2025-01-15', status: 'Delivered', total: '$45' },
      { id: 3, date: '2025-01-05', status: 'Cancelled', total: '$30' },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Add logic for saving the profile data, such as an API request
    alert('Profile updated successfully!');
    setIsEditing(false); // Stop editing after the update
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Profile Header */}
        <div className="flex justify-center mb-6">
          {/* Next.js Image Component */}
          <Image
            src={user.profilePicture}
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-indigo-500"
          />
        </div>
        <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">My Profile</h2>

        {/* Profile Form or View */}
        {isEditing ? (
          <form onSubmit={handleProfileUpdate}>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
              <input
                id="name"
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
              <input
                id="phone"
                type="text"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
              />
            </div>

            {/* Shipping Address */}
            <div className="mb-4">
              <label htmlFor="shippingAddress" className="block text-lg font-medium text-gray-700">Shipping Address</label>
              <textarea
                id="shippingAddress"
                value={user.shippingAddress}
                onChange={(e) => setUser({ ...user, shippingAddress: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                rows="3"
              />
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div>
            {/* User Profile View Section */}
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">Full Name</h3>
              <p className="text-gray-800">{user.name}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">Email</h3>
              <p className="text-gray-800">{user.email}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">Phone</h3>
              <p className="text-gray-800">{user.phone}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">Shipping Address</h3>
              <p className="text-gray-800">{user.shippingAddress}</p>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700"
              >
                Edit Profile
              </button>
            </div>
          </div>
        )}

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order History</h3>
          <table className="min-w-full border-collapse table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border-b font-semibold text-gray-700">Order ID</th>
                <th className="px-4 py-2 text-left border-b font-semibold text-gray-700">Date</th>
                <th className="px-4 py-2 text-left border-b font-semibold text-gray-700">Status</th>
                <th className="px-4 py-2 text-left border-b font-semibold text-gray-700">Total</th>
              </tr>
            </thead>
            <tbody>
              {user.orderHistory.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 py-2 border-b text-gray-800">{order.id}</td>
                  <td className="px-4 py-2 border-b text-gray-800">{order.date}</td>
                  <td className="px-4 py-2 border-b text-gray-800">{order.status}</td>
                  <td className="px-4 py-2 border-b text-gray-800">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProfile;
