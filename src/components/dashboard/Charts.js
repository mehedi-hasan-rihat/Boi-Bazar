"use client";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the dynamic sales data generation logic
const generateSalesData = () => {
  const sales = [];
  const currentDate = new Date();

  for (let i = 11; i >= 0; i--) {
    const monthDate = new Date(currentDate);
    monthDate.setMonth(currentDate.getMonth() - i);
    const formattedDate = `${monthDate.getFullYear()}-${(
      monthDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-01`;
    const booksSold = Math.floor(Math.random() * 100) + 50;

    sales.push({ date: formattedDate, booksSold });
  }

  return sales;
};

const Dashboard = () => {
  const [salesData, setSalesData] = useState([]);
  useEffect(() => {
    setSalesData(generateSalesData());
  }, []);

  const categorySalesData = [
    { category: "Science", sold: 400 },
    { category: "Fiction", sold: 500 },
    { category: "Biography", sold: 200 },
    { category: "Non-Fiction", sold: 300 },
    { category: "Science", sold: 400 },
  ];

  const transactionData = [
    {
      buyer: "Samuel Green",
      seller: "Anna White",
      book: "Book C",
      price: "$10",
    },
    { buyer: "John Doe", seller: "Jane Smith", book: "Book A", price: "$15" },
    {
      buyer: "Mary Johnson",
      seller: "Paul Brown",
      book: "Book B",
      price: "$20",
    },
    {
      buyer: "Samuel Green",
      seller: "Anna White",
      book: "Book C",
      price: "$10",
    },
    { buyer: "John Doe", seller: "Jane Smith", book: "Book A", price: "$15" }, { buyer: "John Doe", seller: "Jane Smith", book: "Book A", price: "$15" },
  ];

  return (
    <div className="mt-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 h-full">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
        {`Today's Sale`}
            </h2>
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {`Today's Sale`}
              </h3>
              <p className="text-3xl font-bold text-teal-600 mb-4">
                $
                {salesData.length > 0
                  ? salesData[salesData.length - 1]?.booksSold
                  : 0}
              </p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  data={[
                    {
                      name: "Today",
                      sales:
                        salesData.length > 0
                          ? salesData[salesData.length - 1]?.booksSold
                          : 0,
                    },
                  ]}
                >
                  <Bar dataKey="sales" fill="#61C3C5" />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="pr-2 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 p-6">
              Sales Trends Over Time
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="booksSold" stroke="#61C3C5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  xl:grid-cols-2 gap-8">
        <div className=" bg-white rounded-lg shadow-md pr-2">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 p-6">
            Books Sold by Category
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categorySalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sold" fill="#4B89A1" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Book Distribution by Category
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categorySalesData}
                dataKey="sold"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#4B89A1"
                label
              >
                {categorySalesData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? "#5C8D8E" : "#61C5C5"}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-8">
    {/* Recent Transactions Section */}
    <div className="p-6 col-span-2 xl:col-span-3 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Recent Transactions
      </h2>
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium text-gray-700 text-sm py-3 px-6">
                Buyer
              </TableHead>
              <TableHead className="font-medium text-gray-700 text-sm py-3 px-6">
                Seller
              </TableHead>
              <TableHead className="font-medium text-gray-700 text-sm py-3 px-6">
                Book
              </TableHead>
              <TableHead className="font-medium text-gray-700 text-sm py-3 px-6">
                Price
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactionData.map((row, index) => (
              <TableRow
                key={index}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : ""
                }`}
              >
                <TableCell className="py-3 px-6 text-sm">{row.buyer}</TableCell>
                <TableCell className="py-3 px-6 text-sm">{row.seller}</TableCell>
                <TableCell className="py-3 px-6 text-sm">{row.book}</TableCell>
                <TableCell className="py-3 px-6 text-sm">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>

    {/* Transaction Payment Section */}
    <div className="p-6 bg-white rounded-lg shadow-md col-span-1">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Transaction Payment
      </h2>
      <div className="space-y-4">
        {transactionData.map((row, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 px-6 border-b border-gray-200"
          >
            <div className="text-sm text-gray-700">{row.buyer} paid</div>
            <div className="text-sm font-semibold text-teal-600">{row.price}</div>
            <div className="text-sm text-gray-700">for {row.book}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      {/* <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recent Transactions
        </h2>
        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium text-gray-700 text-sm py-3 px-6">
                  Buyer
                </TableHead>
                <TableHead className="font-medium text-gray-700 text-sm py-3 px-6">
                  Seller
                </TableHead>
                <TableHead className="font-medium text-gray-700 text-sm py-3 px-6">
                  Book
                </TableHead>
                <TableHead className="font-medium text-gray-700 text-sm py-3 px-6">
                  Price
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactionData.map((row, index) => (
                <TableRow
                  key={index}
                  className={`hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <TableCell className="py-3 px-6 text-sm">
                    {row.buyer}
                  </TableCell>
                  <TableCell className="py-3 px-6 text-sm">
                    {row.seller}
                  </TableCell>
                  <TableCell className="py-3 px-6 text-sm">
                    {row.book}
                  </TableCell>
                  <TableCell className="py-3 px-6 text-sm">
                    {row.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
