'use client'
import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react'; // Importing ArrowUpDown icon from Lucide
import { Input } from '@/components/ui/input';

// Expanded sample data for orders with additional fields
const ordersData = [
  { id: 1, orderId: 'ORD001', customer: 'Mehedi', dateOrdered: '2023-01-10', estimatedDelivery: '2023-01-15', location: 'Dhaka', deliveryStatus: 'Pending', totalAmount: 150, paymentStatus: 'Paid' },
  { id: 2, orderId: 'ORD002', customer: 'John Doe', dateOrdered: '2023-02-14', estimatedDelivery: '2023-02-20', location: 'Chittagong', deliveryStatus: 'Shipped', totalAmount: 200, paymentStatus: 'Pending' },
  { id: 3, orderId: 'ORD003', customer: 'Jane Smith', dateOrdered: '2023-03-01', estimatedDelivery: '2023-03-05', location: 'Sylhet', deliveryStatus: 'Delivered', totalAmount: 180, paymentStatus: 'Paid' },
  { id: 4, orderId: 'ORD004', customer: 'Sara Ali', dateOrdered: '2023-03-10', estimatedDelivery: '2023-03-15', location: 'Rajshahi', deliveryStatus: 'Pending', totalAmount: 220, paymentStatus: 'Pending' },
  { id: 5, orderId: 'ORD005', customer: 'David Williams', dateOrdered: '2023-03-12', estimatedDelivery: '2023-03-18', location: 'Barisal', deliveryStatus: 'Cancelled', totalAmount: 130, paymentStatus: 'Paid' },
  // Add more sample orders as necessary
];

function OrderManagementDashboard() {
  const [search, setSearch] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortedOrders, setSortedOrders] = useState(ordersData);

  // Handle search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handle sorting by order ID
  const handleSort = () => {
    const sorted = [...sortedOrders].sort((a, b) => {
      const aOrderId = a.orderId.toLowerCase();
      const bOrderId = b.orderId.toLowerCase();

      if (sortDirection === 'asc') {
        return aOrderId < bOrderId ? -1 : 1;
      } else {
        return aOrderId < bOrderId ? 1 : -1;
      }
    });

    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    setSortedOrders(sorted);
  };

  // Cancel order
  const cancelOrder = (orderId) => {
    const updatedOrders = sortedOrders.map((order) =>
      order.orderId === orderId ? { ...order, deliveryStatus: 'Cancelled' } : order
    );
    setSortedOrders(updatedOrders);
  };

  // Filter orders by search term and status
  const filteredOrders = sortedOrders.filter((order) => {
    const matchesSearch = order.orderId.toLowerCase().includes(search.toLowerCase()) || order.customer.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || order.deliveryStatus.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Order Management Dashboard</h2>
        <span className='text-xs font-light'> WANT TO ADD SOMETHING IN TOP OF THIS PAGE FOLLOW DAHSBOARD COLLECTION</span>
        
        {/* Search bar and filter */}
        <div className="flex space-x-4">
          <Input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search orders by ID or customer"
            className="w-64 p-2 border rounded-md"
          />
          
          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button 
            onClick={() => {
              setSearch('');
              setStatusFilter('all');
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
                Order ID
                <ArrowUpDown className="w-5 h-5 ml-2" />
              </div>
            </th>
            <th className="py-2 px-4 text-left">Customer</th>
            <th className="py-2 px-4 text-left">Date Ordered</th>
            <th className="py-2 px-4 text-left">Estimated Delivery</th>
            <th className="py-2 px-4 text-left">Location</th>
            <th className="py-2 px-4 text-left">Total Amount</th>
            <th className="py-2 px-4 text-left">Payment Status</th>
            <th className="py-2 px-4 text-left">Delivery Status</th>
            <th className="py-2 px-4 text-left">Cancel Order</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="py-2 px-4">{order.orderId}</td>
              <td className="py-2 px-4">{order.customer}</td>
              <td className="py-2 px-4">{order.dateOrdered}</td>
              <td className="py-2 px-4">{order.estimatedDelivery}</td>
              <td className="py-2 px-4">{order.location}</td>
              <td className="py-2 px-4">{`$${order.totalAmount}`}</td>
              <td className="py-2 px-4">
                <button
                  className={`py-1 px-3 rounded-md text-sm ${
                    order.paymentStatus === 'Paid' ? 'bg-green-500' : 'bg-red-500'
                  } text-white`}
                >
                  {order.paymentStatus}
                </button>
              </td>
              <td className="py-2 px-4">
                <button
                  className={`py-1 px-3 rounded-md text-sm ${
                    order.deliveryStatus === 'Delivered'
                      ? 'bg-green-500'
                      : order.deliveryStatus === 'Shipped'
                      ? 'bg-blue-500'
                      : order.deliveryStatus === 'Pending'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  } text-white`}
                >
                  {order.deliveryStatus}
                </button>
              </td>
              <td className="py-2 px-4">
                {order.deliveryStatus !== 'Cancelled' && (
                  <button
                    onClick={() => cancelOrder(order.orderId)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md text-sm"
                  >
                    Cancel Order
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

export default OrderManagementDashboard;
