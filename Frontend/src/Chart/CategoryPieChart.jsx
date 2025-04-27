import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

function CategoryPieChart() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
       
        fetch('http://localhost:3000/expenses/get')
            .then((res) => res.json())
            .then((data) => setExpenses(data))
            .catch((err) => console.error('Error fetching expenses:', err));
    }, []);

    const categoryTotals = expenses.reduce((acc, expense) => {
        if (acc[expense.category]) {
            acc[expense.category] += expense.amount;
        } else {
            acc[expense.category] = expense.amount;
        }
        return acc;
    }, {});

    
    const chartData = {
        labels: Object.keys(categoryTotals),
        datasets: [
            {
                label: 'Expenses by Category',
                data: Object.values(categoryTotals), 
                backgroundColor: [
                    'red',  
                    'blue',  
                    'yellow',  
                    'green',  
                    'purple', 
                    'orange',  
                ],
                hoverOffset: 4,
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
            <h2 className="text-center font-bold text-xl mb-4">Category Expenses</h2>
            <Pie
                data={chartData}
                options={options}
                height={100} 
                width={10}  
            />
        </div>
    );
}

export default CategoryPieChart;
