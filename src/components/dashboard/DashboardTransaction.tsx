import React from "react";

interface TransactionProps {
  transactions: Array<{
    name: string;
    date: string;
    amount: number;
    status: string;
  }>;
}

const DashboardTransaction: React.FC<TransactionProps> = ({ transactions }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Recent Transaction</h3>
        <a href="#" className="text-sm text-blue-500 hover:underline">
          See All
        </a>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
          >
            <div>
              <h4 className="font-semibold">{transaction.name}</h4>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">${transaction.amount}</p>
              <p
                className={`text-sm ${
                  transaction.status === "Completed"
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                {transaction.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTransaction;
