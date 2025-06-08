import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { data } from "../../result"

const Top5RequirementChart = () => {
  // Group requirement totals by product
  const requirementMap = {};

  data.forEach((item) => {
    const product = item.product;
    const requirement = parseFloat(item.requirement_in_mt || item.requirement_in_mt_ || "0");
    if (!requirementMap[product]) {
      requirementMap[product] = 0;
    }
    requirementMap[product] += requirement;
  });

  //  Convert to array and get top 5
  const top5 = Object.entries(requirementMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([product, requirement]) => ({
      product,
      requirement: Number(requirement.toFixed(2)),
    }));

  //  Render chart
  return (
    <div style={{ padding: "20px" }}>
      <h2>Top 5 Fertilizers by Requirement</h2>
      <BarChart width={600} height={300} data={top5}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="requirement" fill="#8884d8" name="Requirement (MT)" />
      </BarChart>
    </div>
  );
};

export default Top5RequirementChart;
