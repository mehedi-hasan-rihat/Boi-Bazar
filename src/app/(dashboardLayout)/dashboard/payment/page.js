import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

async function OrderManagementDashboard() {
  const res = await fetch("http://localhost:3000/api/payment");
  const orders = await res.json();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Order Management Dashboard
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg px-2">
        <ScrollArea className=" w-full rounded-md border p-1">
          {" "}
          <table className="w-full border-separate border-spacing-y-3">
            {/* Table Head */}
            <thead>
              <tr className="bg-blue-100 text-gray-700 rounded-lg">
                <th className="py-3 px-6 rounded-l-lg text-left">Order ID</th>
                <th className="py-3 px-6 text-left">Customer Email</th>
                <th className="py-3 px-6 text-left">Total Amount</th>
                <th className="py-3 px-6 text-left">Delivery Status</th>
                <th className="py-3 px-6 text-left">Refund Status</th>
                <th className="py-3 px-6 text-left">Payment Method</th>
                <th className="py-3 px-6 rounded-r-lg text-left">Tnx ID</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order._id}
                  className={`shadow-sm rounded-lg transition-all duration-300  ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  }`}
                >
                  <td className="px-6 py-3 rounded-l-lg font-medium text-gray-800">
                    {order.orderId}
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    {order.customerEmail}
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    ${order.totalAmount}
                  </td>
                  <td className="px-6 py-3">
                    <Badge
                      className={`${
                        order.deliveryStatus === "Delivered"
                          ? "bg-green-500"
                          : order.deliveryStatus === "Shipped"
                          ? "bg-blue-500"
                          : order.deliveryStatus === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      } text-white py-1 px-3 rounded-md text-sm`}
                    >
                      {order.deliveryStatus}
                    </Badge>
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    {order.refundStatus}
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    {order.paymentMethod}
                  </td>
                  <td className="px-6 py-3 rounded-r-lg text-gray-700">
                    {order.tnxId}
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

export default OrderManagementDashboard;
