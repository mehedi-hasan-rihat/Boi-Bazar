import Image from "next/image";
import React from "react";
import { Oswald } from "next/font/google";

const Oswalds = Oswald({ weight: "600", subsets: ["latin"] });

export default function BookCard() {
  return (
    <div className="group flex flex-col justify-center text-center items-center  py-4">
      <div className="w-[250px] sm:w-[85%] h-[320px] bg-white/80 flex items-center justify-center cursor-pointer rounded-md">
        <div className="transition-all duration-500 w-44 h-64 transform group-hover:scale-110">
          <Image
            src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg"
            alt="Book"
            width={150}
            height={150}
            className="w-full rounded h-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-1 mt-2">
        <p className="mt-2 font-semibold text-xl hover:text-[#1EAACE] duration-100 cursor-default">
          Operating System
        </p>
        <p className="font-medium">Hoauk Publication</p>
        <p className="font-medium">420 taka</p>
        <div className="group relative inline-block overflow-hidden border border-[#318ef1] !mt-3 px-5 focus:outline-none cursor-pointer py-2 rounded-md">
          <span className="absolute inset-y-0 left-0 w-px bg-[#318ef1] transition-all duration-300 group-hover:w-full group-active:bg-indigo-500"></span>

          <p className="relative text-sm font-medium text-[#1c85f5] transition-colors group-hover:text-white">
          Purchase Now
          </p>
        </div>
       
        {/* <div className="group cursor-pointer flex items-center justify-between gap-2 rounded-md border border-[#318ef1] bg-[#318ef1] mt-2 px-5 transition-colors hover:bg-transparent focus:outline-none focus:ring py-1 ">
          <span className="font-medium text-white transition-colors group-hover:text-[#0f82fd] group-active:text-indigo-500">
            Purchase Now
          </span>

          <span className="shrink-0 rounded-full border border-current bg-white p-2 text-[#0f82fd] group-active:text-indigo-500">
            <svg
              className="size-4 -rotate-45 group-hover:rotate-0 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div> */}
      </div>
    </div>
  );
}
