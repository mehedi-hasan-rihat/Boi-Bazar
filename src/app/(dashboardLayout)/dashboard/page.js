import Charts from "@/components/dashboard/Charts";
import StatsDashboard from "@/components/dashboard/StatsDashboard";
import React from "react";

export default function Overview() {
  return (
    <div>
      <StatsDashboard />
      <Charts />
    </div>
  );
}
