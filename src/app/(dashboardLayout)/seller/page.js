"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Book, ShoppingCart, DollarSign } from "lucide-react";
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

const stats = [
  {
    icon: <Book size={28} className="text-blue-500" />,
    label: "Total Books",
    value: "1,200",
  },
  {
    icon: <ShoppingCart size={28} className="text-orange-500" />,
    label: "Books Sold Today",
    value: "15",
  },
  {
    icon: <DollarSign size={28} className="text-red-500" />,
    label: "Today's Earnings",
    value: "$450",
  },
  {
    icon: <DollarSign size={28} className="text-teal-500" />,
    label: "Total Earnings",
    value: "$5,000",
  },
];

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

const revenueData = [
  { month: "Jan", revenue: 0 },
  { month: "Feb", revenue: 0 },
  { month: "Mar", revenue: 0 },
  { month: "Apr", revenue: 0 },
  { month: "May", revenue: 0 },
  { month: "Jun", revenue: 0 },
  { month: "Jul", revenue: 0 },
  { month: "Aug", revenue: 0 },
  { month: "Sep", revenue: 0 },
  { month: "Oct", revenue: 0 },
  { month: "Nov", revenue: 0 },
  { month: "Dec", revenue: 0 },
];

const topSellingBooksData = [
  { book: "Book A", sold: 250 },
  { book: "Book B", sold: 300 },
  { book: "Book C", sold: 150 },
  { book: "Book D", sold: 200 },
  { book: "Book E", sold: 100 },
];

const stockStatusData = [
  { status: "In Stock", value: 800 },
  { status: "Sold", value: 400 },
];

const SellerDashboard = () => {
  const [salesData, setSalesData] = useState([]);
  useEffect(() => {
    setSalesData(generateSalesData());
  }, []);

  return (
    <div className="mt-6 space-y-8">
      {/* Seller Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </p>
                <h2 className="text-xl xl:text-2xl font-bold text-gray-800">
                  {stat.value}
                </h2>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Sales Trends Over Time & Additional Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sales Trends Over Time */}
        <div className="col-span-2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
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
 {/* Stock Status (Pie Chart) */}
 <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Stock Status
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stockStatusData}
                dataKey="value"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {stockStatusData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={index === 0 ? "#4CAF50" : "#FF5722"}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
   

             {/* Top Selling Books (Bar Chart) */}
             <div className="p-6 col-span-2 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Top Selling Books
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topSellingBooksData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="book" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sold" fill="#8884d8" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        
        {/* Revenue by Month (Line Chart) */}

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Revenue by Month
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

       
      </div>

      {/* Books Available for Sale Table */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Books Available for Sale
        </h2>
        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium text-gray-700 text-sm py-3 px-6">
                  Title
                </TableHead>
                <TableHead className="font-medium text-gray-700 text-sm py-3 px-6">
                  Author
                </TableHead>
                <TableHead className="font-medium text-gray-700 text-sm py-3 px-6">
                  Price
                </TableHead>
                <TableHead className="font-medium text-gray-700 text-sm py-3 px-6">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  title: "Book A",
                  author: "John Doe",
                  price: "$15",
                  status: "Available",
                },
                {
                  title: "Book B",
                  author: "Mary Johnson",
                  price: "$20",
                  status: "Sold",
                },
                {
                  title: "Book C",
                  author: "Samuel Green",
                  price: "$10",
                  status: "Available",
                },
              ].map((row, index) => (
                <TableRow
                  key={index}
                  className={`hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <TableCell className="py-3 px-6 text-sm">
                    {row.title}
                  </TableCell>
                  <TableCell className="py-3 px-6 text-sm">
                    {row.author}
                  </TableCell>
                  <TableCell className="py-3 px-6 text-sm">
                    {row.price}
                  </TableCell>
                  <TableCell className="py-3 px-6 text-sm">
                    {row.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;

