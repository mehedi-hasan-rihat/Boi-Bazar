import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
async function BookManagementDashboard() {
  const res = await fetch("http://localhost:3000/api/books");
  const books = await res.json();
  console.log(books);

  return (
    <div className="min-h-screen bg-gray-50 ">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Book Management Dashboard
          </h2>
        </div>

        {/* Table */}
        <div className=" rounded-lg px-2 w-full">
          <ScrollArea className=" w-full rounded-md border p-1">
            <table className="min-w-full border-separate border-spacing-y-3 ">
              {/* Table Head */}
              <thead>
                <tr className="bg-blue-100 text-gray-700 rounded-lg">
                  <th className="py-3 px-6 rounded-l-lg text-left">
                    Book Name
                  </th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Publisher</th>
                  <th className="py-3 px-6 text-left">Providhan</th>
                  <th className="py-3 px-6 text-left">Availability</th>
                  <th className="py-3 px-6 rounded-r-lg text-left">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {books.map((book, index) => (
                  <tr
                    key={book._id}
                    className={`shadow-sm rounded-lg transition-all duration-300  ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                    }`}
                  >
                    <td className="px-6 py-3 rounded-l-lg font-medium text-gray-800">
                      {book.bookName}
                    </td>
                    <td className="px-6 py-3 font-semibold text-gray-800">
                      ${book.price}
                    </td>
                    <td className="px-6 py-3">{book.publisher}</td>
                    <td className="px-6 py-3">{book.providhan}</td>
                    <td className="px-6 py-3">
                      <Badge
                        className={`px-3 py-1 rounded-md text-sm ${
                          book.status === "out of stock"
                            ? "bg-red-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {book.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-6 rounded-r-lg">
                      <div className="flex gap-3">
                        <button className="text-blue-500 hover:text-blue-700 font-medium transition">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700 font-medium transition">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
    </div>
  );
}

export default BookManagementDashboard;
