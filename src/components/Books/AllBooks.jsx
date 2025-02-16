import React from 'react'
import BookCard from './BookCard';

export default function AllBooks() {
    const books = [
      { name: "Computer Science", books: 215, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" },
      { name: "Electrical Engineering", books: 180, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" },
      { name: "Mechanical Engineering", books: 150, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" },
      { name: "Civil Engineering", books: 170, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" },
      { name: "Business & Management", books: 200, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" },
      { name: "Business & Management", books: 200, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" },
      { name: "Business & Management", books: 200, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" }, { name: "Business & Management", books: 200, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" }, { name: "Business & Management", books: 200, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" }, { name: "Business & Management", books: 200, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" }, { name: "Business & Management", books: 200, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" }, { name: "Business & Management", books: 200, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" }, { name: "Business & Management", books: 200, image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg" },
    ];
    
  return (
    <div className='container mx-auto my-36'>


        {/* all books card start here */}
         <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
               {
                books.map((book, idx) => {
                  return  <BookCard key={idx}/>
                })
               }
              
             </div>
    </div>
  )
}
