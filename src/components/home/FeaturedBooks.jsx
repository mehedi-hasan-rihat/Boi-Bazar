import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import BookCard from "./BookCard";

export default function FeaturedBooks() {
  return (
   
  <div className="mt-32 py-20 px-4 bg-[#f5f7f8] text-center">
     <div className="container mx-auto ">
      <SectionTitle text={"Featured Books"} />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8">
        
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
      </div>

      <button className={` w-max mt-20 px-6 py-3 bg-[#1EAACE] hover:bg-[#119cbf] text-white text-lg font-semibold rounded-lg transition-all duration-300`}>
           See All Books
          </button>
    </div>
  </div>
  );
}
