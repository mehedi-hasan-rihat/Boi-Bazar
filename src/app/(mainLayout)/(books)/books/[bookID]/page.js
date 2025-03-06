import Image from "next/image";
import React from "react";
import testBook from "../../../../../../public/testBook.jpeg";
import ImageFuntion from "@/components/BookDetails/Image";
export default async function page({ params }) {
  const { bookID } = await params;
  const res = await fetch(`http://localhost:3000/api/books/${bookID}`);
  const bookData = await res.json();
  console.log(bookData);
  
  const { bookName, price, publisher, providhan, status, sellerEmail, image } =
    bookData;
  return (
    <div className="container mx-auto min-h-[calc(100vh-250px)] my-10 flex  items-center justify-center gap-2">
      <div className="rounded-xl">
      <ImageFuntion image={image } className={"h-96 w-96 object-contain rounded-xl"}/>
      </div>
      <div className="text-gray-700 text-sm flex-1 max-w-3xl">
        <p className="text-3xl font-semibold text-black ">{bookName}</p>

        <p className="text-lg mt-1 font-semibold ">
          TK. {price} <span className="text-sm">Only</span>
        </p>

        <div className="mt-4 flex gap-3 items-center">
          <Image
            src={"https://random.imagecdn.app/500/150"}
            alt="profileOfSeller"
            width={150}
            height={150}
            className="h-10 w-10 rounded-full bg-contain"
          />
          <div>
            <p className="text-md font-semibold">Mehedi Hasan</p>
            <p className="text-sm font-medium">01991401185</p>
          </div>
        </div>

        {/* <p className="text-md mt-4 line-clamp-4 overflow-hidden h-20">
          This book is a complete guide for diploma students and beginners to
          learn Java programming from scratch. It covers core Java concepts, OOP
          principles, exception handling, multithreading, GUI development
          (Swing, JavaFX), and database connectivity (JDBC). With practical
          examples and projects, it helps learners build strong programming
          skills for real-world applications. Ideal for students and aspiring
          developers!
        </p> */}

        <div className="mt-5">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Book Details</h2>
          <div className="grid grid-cols-2 gap-x-1 gap-y-1 w-max">
            <p className="uppercase font-semibold w-max">Publisher</p>
            <p className="font-medium">{publisher}</p>
            <p className="uppercase font-semibold w-max">Providhan</p>
            <p className="font-medium">{providhan}</p>
          </div>
        </div>

        <div className="mt-4 flex gap-4 w-[70%]">
          <button className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
            Add to Cart
          </button>

          <button
            type="button"
            className="block w-full rounded-sm bg-[#1EAACE] px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
