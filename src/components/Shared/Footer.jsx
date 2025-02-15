import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-[#F5F7F8] border-t border-gray-200 py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between gap-20">
        <div class="w-full md:w-1/4 mb-6">
          <h3 class="text-lg font-bold mb-2">About Us</h3>
          <p class="text-sm">
            We are a platform dedicated to helping students buy and sell old books conveniently. Join our community and save money on textbooks!
          </p>
        </div>
  

        <div class="w-full md:w-1/4 mb-6">
          <h3 class="text-lg font-bold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#home" class="text-sm hover:text-gray-700">Home</a></li>
            <li><a href="#browse" class="text-sm hover:text-gray-700">Browse Books</a></li>
            <li><a href="#post" class="text-sm hover:text-gray-700">Post a Book</a></li>
            <li><a href="#contact" class="text-sm hover:text-gray-700">Contact Us</a></li>
          </ul>
        </div>
  

        <div class="w-full md:w-1/4 mb-6">
          <h3 class="text-lg font-bold mb-2">Contact</h3>
          <ul>
            <li class="text-sm">Email: <a href="mailto:info@example.com" class="">mehedi6381@gmail.com</a></li>
            <li class="text-sm">Phone: +8801991401185</li>
            <li class="text-sm">Address: Patuakhali Polytechnic Institute, Patuakhali</li>
          </ul>
        </div>
  
      
      
      </div>
  

      <div class="mt-8 text-center">
        <p class="text-sm text-gray-800">&copy; 2025 BookShelf. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}
