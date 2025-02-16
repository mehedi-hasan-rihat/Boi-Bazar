import Link from "next/link";
import React from "react";
import { Mulish } from "next/font/google"; // Import Mulish font
import NavLink from "./NavLink";

const mulish = Mulish({ weight: "500", subsets: ["latin"] });

export default function Navbar() {
  return (
   <div className=" bg-white top-0 sticky z-50"> <div
   className={`flex items-center  text-black justify-between gap-5 px-3 pt-3 pb-2 container mx-auto shadow-sm ${mulish.className}`}
 >
   <div className="hidden sm:block">
     <img
       src="https://bookshelf.themerex.net/wp-content/uploads/2021/07/Logo.png"
       alt="Logo"

       className="w-[70%]"
     />
   </div>
   <div className="sm:hidden border border-gray-400 px-3 py-2 rounded text-white bg-black">Trigrer</div>
   <div className="hidden sm:block">
     <ul className="flex items-center justify-center gap-6 lg:gap-12  duration-300 font-semibold z-50">
       <NavLink activeClassName={"text-lg text-[#1EAACE]"} href="/">
         Home
       </NavLink>
       <NavLink activeClassName={"text-lg text-[#1EAACE]"} href={"/books"}>
         Books
       </NavLink>
       <NavLink activeClassName={"text-lg text-[#1EAACE]"} href={"resources"}>
      Blog
       </NavLink>
       <NavLink activeClassName={"text-lg text-[#1EAACE]"} href={"/about"}>
         About
       </NavLink>
     </ul>
   </div>
   <div className="">
     <button className={` px-6 font-semibold py-2 text-white bg-[#1EAACE] rounded`}>
       Login
     </button>
   </div>
 </div></div>
  );
}
