import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface OverviewProps {
  data: {
    balance: number;
    saving: number;
    expenses: number;
    incomes: number;
  };
}

const DashboardOverview: React.FC<OverviewProps> = ({ data }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    }).format(value);
  };

  return (
    <div className="space-y-6 p-4  bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Overview</h1>

      <div className="space-y-6">
        <div className="bg-[#4f46e5] text-white p-6 rounded-xl">
          <h2 className="text-sm font-medium mb-1">Your Balance</h2>
          <p className="text-xs text-[#a5b4fc] mb-2">
            15% compared with last month
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">
              {formatCurrency(data.balance)}
            </span>
            <FaArrowRight className="text-[#a5b4fc]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-sm font-medium text-gray-500 mb-1">Saving</h2>
            <p className="text-xs text-green-500 mb-2">
              10% compared with last month
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-800">
                {formatCurrency(data.saving)}
              </span>
              <FaArrowRight className="text-gray-300" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-sm font-medium text-gray-500 mb-1">Expenses</h2>
            <p className="text-xs text-green-500 mb-2">
              2% compared with last month
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-800">
                {formatCurrency(data.expenses)}
              </span>
              <FaArrowRight className="text-gray-300" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 col-span-2">
            <h2 className="text-sm font-medium text-gray-500 mb-1">Incomes</h2>
            <p className="text-xs text-green-500 mb-2">
              8% compared with last month
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-800">
                {formatCurrency(data.incomes)}
              </span>
              <FaArrowRight className="text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
