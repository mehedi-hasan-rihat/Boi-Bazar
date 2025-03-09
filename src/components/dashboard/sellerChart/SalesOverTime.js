"use client";
import React, { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
export default function SalesOverTime() {
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
  const [salesData, setSalesData] = useState([]);
  useEffect(() => {
    setSalesData(generateSalesData());
  }, []);

  return (
   
      <div className="">
        <div className="px-2 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pt-6 pb-2 px-6 ">
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
  );
}
