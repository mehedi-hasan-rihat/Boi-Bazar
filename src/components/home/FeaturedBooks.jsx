import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import BookCard from "./BookCard";

export default function FeaturedBooks() {
  return (
   
  <div className="mt-32 py-20 px-4 bg-[#f5f7f8]">
     <div className="container mx-auto ">
      <SectionTitle text={"Featured Books"} />
      <div className="mt-14 grid grid-cols-4 gap-8">
        
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
      </div>
    </div>
  </div>
  );
}
