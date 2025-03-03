import { Card, CardContent } from "@/components/ui/card";
import { Book, Users, ShoppingCart, DollarSign } from "lucide-react";

const stats = [
  { icon: <Book size={28} className="text-blue-500" />, label: "Total Books", value: "1,200" },
  { icon: <Users size={28} className="text-green-500" />, label: "Total Participants", value: "500" },
  { icon: <ShoppingCart size={28} className="text-orange-500" />, label: "Total Books Sold", value: "850" },
  { icon: <DollarSign size={28} className="text-red-500" />, label: "Today's Sales", value: "15" },
];

export default function StatsDashboard() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-3 lg:gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              <h2 className="text-xl xl:text-2xl font-bold text-gray-800">{stat.value}</h2>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
