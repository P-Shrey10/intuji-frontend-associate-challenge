import React from 'react';
import DashboardSearch from '../components/dashboard/DashboardSearch';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import DashboardAnalytics from '../components/dashboard/DashboardAnalytics';
import SavingPlan from '../components/dashboard/DashboardSaving';
import RecentTransactions from '../components/dashboard/DashboardTransaction';

const dashboardData = {
  balance: 28891138,
  saving: 1050.44,
  expenses: 200.31,
  incomes: 21121.0,
  savingPlans: [
    { 
      name: 'Bali Vacation', 
      target: 'August 26, 2025', 
      current: 1950.21, 
      percentage: 48 
    },
    { 
      name: 'New Gadget', 
      target: 'August 26, 2025', 
      current: 790.21, 
      percentage: 79 
    },
    { 
      name: 'Charity', 
      target: 'August 26, 2025', 
      current: 32.11, 
      percentage: 32 
    }
  ],
  transactions: [
    { 
      name: 'Figma', 
      date: 'August 30, 2022', 
      amount: 100,
      status: 'Completed'
    },
    { 
      name: 'Youtube', 
      date: 'August 30, 2022', 
      amount: 120,
      status: 'Pending'
    },
    { 
      name: 'Spotify', 
      date: 'August 30, 2022', 
      amount: 15,
      status: 'Completed'
    },
    { 
      name: 'Freepik', 
      date: 'August 30, 2022', 
      amount: 300,
      status: 'Completed'
    }
  ],
  analyticsData: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      { 
        label: 'Label 1', 
        data: [5, 10, 7, 12, 9, 15, 11],
        color: '#6A5ACD'
      },
      { 
        label: 'Label 2', 
        data: [3, 6, 4, 8, 5, 9, 7],
        color: '#FFA500'
      }
    ]
  }
};

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="container mx-auto">
        <DashboardSearch />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 space-y-6">
            <DashboardOverview data={dashboardData} />
            <DashboardAnalytics data={dashboardData.analyticsData} />
          </div>
          <div className="space-y-6">
            <SavingPlan plans={dashboardData.savingPlans} />
            <RecentTransactions transactions={dashboardData.transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;