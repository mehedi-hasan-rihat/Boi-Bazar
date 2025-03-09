"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image"; // Next.js Image component for profile image
import axios from "axios";
import { useSession } from "next-auth/react";

const EcommerceProfile = () => {
  const { data: session } = useSession();
  console.log(session?.user.email);
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/users/${session?.user?.email}`
      );
      console.log(data);
      setUser(data);
    };
    fetchUser();
  }, [session?.user?.email]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-6">
          <Image
            src={
              user?.profilePicture ||
              "https://fastly.picsum.photos/id/563/200/200.jpg?hmac=AUY3PTIdje13MIMulUogg4h4AYMKO4XfeEZQaEGw8fQ"
            }
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-indigo-500"
          />
        </div>
        <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
          My Profile
        </h2>

        {isEditing ? (
          <form onSubmit={handleProfileUpdate}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Full Name
              </label>
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
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
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
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-700"
              >
                Phone
              </label>
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
              <label
                htmlFor="shippingAddress"
                className="block text-lg font-medium text-gray-700"
              >
                Shipping Address
              </label>
              <textarea
                id="shippingAddress"
                value={user.shippingAddress}
                onChange={(e) =>
                  setUser({ ...user, shippingAddress: e.target.value })
                }
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
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">Full Name</h3>
              <p className="text-gray-800">{user?.name}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">Email</h3>
              <p className="text-gray-800">{user?.email}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">Phone</h3>
              <p className="text-gray-800">{user?.phone}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">
                Shipping Address
              </h3>
              <p className="text-gray-800">{user?.shippingAddress}</p>
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
      </div>
    </div>
  );
};

export default EcommerceProfile;
