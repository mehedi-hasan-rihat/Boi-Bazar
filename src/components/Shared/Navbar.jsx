import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center text-black justify-around pt-5 pb-2">
      <div className="">
        <img
          src="https://bookshelf.themerex.net/wp-content/uploads/2021/07/Logo.png"
          alt="Logo"
        />
      </div>
      <div className="">
        <ul className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href={"/books"}>Books</Link>
          <Link href={"resources"}>Resources</Link>
          <Link href={"/about"}>About</Link>
        </ul>
      </div>
      <div className="">
        <button className="px-4 py-1 bg-[#1DBB90] rounded">Login</button>
      </div>
    </div>
  );
}
