import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#F5F7F8] border-t border-gray-200 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between gap-5 sm:gap-10 md:gap-20">
        <div className="w-full md:w-1/4 mb-6">
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p className="text-sm">
            We are a platform dedicated to helping students buy and sell old books conveniently. Join our community and save money on textbooks!
          </p>
        </div>
  

        <div className="w-full md:w-1/4 mb-6">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#home" className="text-sm hover:text-gray-700">Home</a></li>
            <li><a href="#browse" className="text-sm hover:text-gray-700">Browse Books</a></li>
            <li><a href="#post" className="text-sm hover:text-gray-700">Post a Book</a></li>
            <li><a href="#contact" className="text-sm hover:text-gray-700">Contact Us</a></li>
          </ul>
        </div>
  

        <div className="w-full md:w-1/4 mb-6">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <ul>
            <li className="text-sm">Email: <a href="mailto:info@example.com" className="">mehedi6381@gmail.com</a></li>
            <li className="text-sm">Phone: +8801991401185</li>
            <li className="text-sm">Address: Patuakhali Polytechnic Institute, Patuakhali</li>
          </ul>
        </div>
  
      
      
      </div>
  

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-800">&copy; 2025 BookShelf. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}
