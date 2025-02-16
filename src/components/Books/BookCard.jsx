import React from "react";
import { Oswald } from "next/font/google";

const Oswalds = Oswald({ weight: "500", subsets: ["latin"] });

export default function BookCard() {
  return (
    <div  className="group relative block overflow-hidden ">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-black/90 text-white/80 p-2 transition hover:text-white">
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <img
        src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg"
        alt=""
        className="h-64 py-5 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 border border-gray-100 border-b-0"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <p className="text-gray-700">
          $49.99
          <span className="text-gray-400 line-through  pl-2">$80</span>
        </p>

        <h3 className={`mt-1.5 text-lg font-normal  ${Oswalds.className}`}>
        Computer Architecture and Microprocessor
        </h3>

      
        <p className="mt-1.5 text-sm line-clamp-3 text-gray-700">
        Hoauk Publication
        </p>

        <form className="mt-4 flex gap-4">
          <button className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
            Add to Cart
          </button>

          <button
            type="button"
            className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Buy Now
          </button>
        </form>
      </div>
    </div>
  );
}
