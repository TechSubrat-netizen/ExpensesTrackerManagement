import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function MonthlyExpenseBarChart() {
    const [expenses, setExpenses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/expenses/get')
            .then((res) => res.json())
            .then((data) => setExpenses(data))
            .catch((err) => console.error('Error fetching expenses:', err));
    }, []);

    const monthlyTotals = expenses.reduce((acc, expense) => {
        const month = new Date(expense.date).toLocaleString('default', { month: 'short' });
        if (acc[month]) {
            acc[month] += expense.amount;
        } else {
            acc[month] = expense.amount;
        }
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(monthlyTotals),
        datasets: [
            {
                label: 'Monthly Expenses (₹)',
                data: Object.values(monthlyTotals),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, 
        aspectRatio: 1,
    };

    return (
        <div style={{ width: '50%', height: '400px' }}>
            <h2 className="text-center font-bold text-xl mb-4">Monthly Expenses</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
}

export default MonthlyExpenseBarChart;
