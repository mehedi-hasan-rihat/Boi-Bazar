"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

function SellerBookPost() {
  const { data: session } = useSession(); 
  const [bookData, setBookData] = useState({
    bookName: "",
    publisher: "",
    price: "",
    providhan: "",
    image: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setBookData((prev) => ({ ...prev, image: previewUrl }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addData = {
      ...bookData, sellerEmail : session.user?.email , status : "available"
    };
    const {data} = await axios.post("http://localhost:3000/api/books", addData);
    if(data.insertedId){
      toast.success("Book successfully added to your store.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Post a Book</h2>
        <p className="text-gray-600">
          Fill in the details to post a book for sale
        </p>
      </div>

      {/* Dashboard Layout */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Fields */}
          <div className="grid grid-cols-2 gap-6">
            <Input
              type="text"
              name="bookName"
              value={bookData.bookName}
              onChange={handleChange}
              placeholder="Book Name"
              required
            />
            <Input
              type="text"
              name="publisher"
              value={bookData.publisher}
              onChange={handleChange}
              placeholder="Publisher"
              required
            />
            <Input
              type="number"
              name="price"
              value={bookData.price}
              onChange={handleChange}
              placeholder="Price"
              required
            />
            <Input
              type="text"
              name="providhan"
              value={bookData.providhan}
              onChange={handleChange}
              placeholder="providhan"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="border border-gray-300 p-4 rounded-lg flex flex-col items-center">
            <label className="text-gray-600 font-medium">
              Upload Book Image
            </label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="mt-2"
            />
            {imagePreview && (
              <div className="mt-4 relative">
                <Image
                  src={imagePreview}
                  alt="Book Preview"
                  width={150}
                  height={150}
                  className="rounded-lg w-auto h-64 shadow-md"
                />
              </div>
            )}
          </div>

          {/* Description
          <textarea
            name="description"
            value={bookData.description}
            onChange={handleChange}
            placeholder="Description"
            className="p-3 border border-gray-300 rounded-md w-full min-h-36 focus:outline-blue-500"
            required
          /> */}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          >
            Post Book
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SellerBookPost;
