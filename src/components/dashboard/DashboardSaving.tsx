import React from "react";

interface SavingProps {
  plans: Array<{
    name: string;
    target: string;
    current: number;
    percentage: number;
  }>;
}

const DashboardSaving: React.FC<SavingProps> = ({ plans }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Saving Plan</h3>
        <a href="#" className="text-sm text-blue-500 hover:underline">
          See All
        </a>
      </div>
      <div className="space-y-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <h4 className="font-semibold">{plan.name}</h4>
              <p className="text-sm text-gray-600">Target {plan.target}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${plan.percentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">${plan.current}</p>
              <p className="text-sm text-blue-600">{plan.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSaving;
