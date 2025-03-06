import React from 'react'
import BookCard from './BookCard';
import axios from 'axios';

export default async function AllBooks() {
  const res = await fetch('http://localhost:3000/api/books')
  const book = await res.json()

  return (
    <div className='container mx-auto my-36'>


        {/* all books card start here */}
         <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
               {
                book.map((book, idx) => {
                  return  <BookCard key={idx} book={book}/>
                })
               }
              
             </div>
    </div>
  )
}
