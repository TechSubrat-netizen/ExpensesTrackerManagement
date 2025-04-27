import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ExpenseList() {
    let [expenses, setExpenses] = useState([]); 
    const navigate = useNavigate();

    // Get Expenses 
    function getExpenses() {
        fetch('http://localhost:3000/expenses/get')
            .then(res => res.json())
            .then(data => setExpenses(data))
            .catch(err => console.error('Error fetching expenses:', err)); 
    }

    useEffect(() => {
        getExpenses();
    }, []);

    // Edit Expenses
    function editExpenses(id) {
        navigate(`/expensesform/${id}`);
    }

    // Delete Expenses
    function deleteExpenses(id) {
        fetch(`http://localhost:3000/expenses/delete/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(() => {
        
            setExpenses(prevExpenses => prevExpenses.filter(expense => expense._id !== id));
        })
        .catch(err => {
            console.error('Error deleting expense:', err);
        });
    }

    return (
        <div>
            {expenses.length > 0 ? (
                expenses.map((e) => (
                    <div key={e._id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">{e.category}</h3>
                            <p className="text-gray-600">{e.description}</p>
                            <p className="text-sm text-gray-400">{e.date}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-green-600 text-lg font-bold">₹ {e.amount}</p>

                            <div className="mt-2 space-x-2">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                                    onClick={() => editExpenses(e._id)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                                    onClick={() => deleteExpenses(e._id)} 
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No expenses found.</p> 
            )}
        </div>
    );
}

export default ExpenseList;
