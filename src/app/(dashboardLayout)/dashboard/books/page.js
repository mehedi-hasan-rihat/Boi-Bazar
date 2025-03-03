'use client'
import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react'; // Importing ArrowUpDown icon from Lucide
import { Input } from '@/components/ui/input';

// Expanded sample data for books with additional fields
const booksData = [
  { id: 1, title: 'Book One', author: 'Mehedi', genre: 'Fiction', price: 150, availability: 'Available' },
  { id: 2, title: 'Book Two', author: 'John Doe', genre: 'Non-fiction', price: 200, availability: 'Sold' },
  { id: 3, title: 'Book Three', author: 'Jane Smith', genre: 'Science', price: 180, availability: 'Available' },
  { id: 4, title: 'Book Four', author: 'Sara Ali', genre: 'Fantasy', price: 220, availability: 'Available' },
  { id: 5, title: 'Book Five', author: 'David Williams', genre: 'History', price: 130, availability: 'Sold' },
  // Add more sample books as necessary
];

function BookManagementDashboard() {
  const [search, setSearch] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [genreFilter, setGenreFilter] = useState('all');
  const [sortedBooks, setSortedBooks] = useState(booksData);

  // Handle search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handle sorting by title
  const handleSort = () => {
    const sorted = [...sortedBooks].sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();

      if (sortDirection === 'asc') {
        return aTitle < bTitle ? -1 : 1;
      } else {
        return aTitle < bTitle ? 1 : -1;
      }
    });

    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    setSortedBooks(sorted);
  };

  // Mark book as sold
  const markAsSold = (bookId) => {
    const updatedBooks = sortedBooks.map((book) =>
      book.id === bookId ? { ...book, availability: 'Sold' } : book
    );
    setSortedBooks(updatedBooks);
  };

  // Filter books by search term and genre
  const filteredBooks = sortedBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    const matchesGenre =
      genreFilter === 'all' || book.genre.toLowerCase() === genreFilter.toLowerCase();
    
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="p-6">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Book Management Dashboard</h2>
        <span className='text-xs font-light'>Want to add something to the top of this page? Follow dashboard collection!</span>
        
        {/* Search bar and filter */}
        <div className="flex space-x-4">
          <Input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search books by title or author"
            className="w-64 p-2 border rounded-md"
          />
          
          {/* Genre filter */}
          <select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="all">All Genres</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-fiction</option>
            <option value="science">Science</option>
            <option value="fantasy">Fantasy</option>
            <option value="history">History</option>
            {/* Add more genres as needed */}
          </select>
          <button 
            onClick={() => {
              setSearch('');
              setGenreFilter('all');
            }}
            className="px-4 py-2 bg-gray-300 text-black rounded-md"
          >
            Reset
          </button>
        </div>
      </div>
    
      {/* Table */}
      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="py-2 px-4 text-left">
              <div className="flex items-center cursor-pointer" onClick={handleSort}>
                Book Title
                <ArrowUpDown className="w-5 h-5 ml-2" />
              </div>
            </th>
            <th className="py-2 px-4 text-left">Author</th>
            <th className="py-2 px-4 text-left">Genre</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Availability</th>
            <th className="py-2 px-4 text-left">Mark as Sold</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id} className="border-b">
              <td className="py-2 px-4">{book.title}</td>
              <td className="py-2 px-4">{book.author}</td>
              <td className="py-2 px-4">{book.genre}</td>
              <td className="py-2 px-4">{`$${book.price}`}</td>
              <td className="py-2 px-4">
                <button
                  className={`py-1 px-3 rounded-md text-sm ${
                    book.availability === 'Sold' ? 'bg-red-500' : 'bg-green-500'
                  } text-white`}
                >
                  {book.availability}
                </button>
              </td>
              <td className="py-2 px-4">
                {book.availability !== 'Sold' && (
                  <button
                    onClick={() => markAsSold(book.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md text-sm"
                  >
                    Mark as Sold
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookManagementDashboard;
