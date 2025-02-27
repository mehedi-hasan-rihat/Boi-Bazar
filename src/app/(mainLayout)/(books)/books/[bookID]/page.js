import Image from "next/image";
import React from "react";

export default async function page({ params }) {
  const { bookID } = await params;
  const res = await fetch(`http://localhost:3000/api/books/${bookID}`);
  const bookData = await res.json();
  console.log(bookData);
  const { _id, image, bookName, writer, price } = bookData;
  return (
    <div className="container mx-auto min-h-[calc(100vh-250px)] my-10 flex ">
      <div>
        <Image src={image} alt=""  width={150} height={150} className="h-96 w-96 object-contain " />
      </div>
      <div className="text-gray-700 text-sm">
        <p className="text-4xl text-black">{bookName}</p>
        <p className="mt-3">Publiced by <span className="text-black text-base">{writer}</span></p>
        <p className="">{price}</p>
      </div>
    </div>
  );
}
