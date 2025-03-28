import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface AnalyticsProps {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      color: string;
    }>;
  };
}

const DashboardAnalytics: React.FC<AnalyticsProps> = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    label1: data.datasets[0].data[index],
    label2: data.datasets[1].data[index],
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Analytics</h3>

        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: data.datasets[0].color }}
            ></div>
            <span className="text-sm text-gray-600">
              {data.datasets[0].label}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: data.datasets[1].color }}
            ></div>
            <span className="text-sm text-gray-600">
              {data.datasets[1].label}
            </span>
          </div>
          <select className="border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-600">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="label1"
            stroke={data.datasets[0].color}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="label2"
            stroke={data.datasets[1].color}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardAnalytics;
