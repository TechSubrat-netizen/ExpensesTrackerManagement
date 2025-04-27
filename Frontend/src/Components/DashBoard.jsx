import React from 'react';
import CategoryPieChart from '../Chart/CategoryPieChart';
import MonthlyExpenseBarChart from '../Chart/MonthlyBarChart';

function DashBoard() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen p-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 shadow-md p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
          Expense Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="bg-white shadow-lg p-8 rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Category Distribution</h3>
            <div className="h-120  flex justify-center items-center">
              <CategoryPieChart />
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white shadow-lg p-8 rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Monthly Expense Trends</h3>
            <div className="h-120  flex justify-center items-center">
              <MonthlyExpenseBarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
