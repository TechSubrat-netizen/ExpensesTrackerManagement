import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ExpenseForm() {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); 



  function getEditExpenses() {
    fetch(`http://localhost:3000/expenses/getbyId/${id}`)
      .then(res => res.json())
      .then(data => {
        setAmount(data.amount);
        setCategory(data.category);
        setDescription(data.description);
        setDate(data.date);
      })
      .catch(err => console.error('Error fetching expense:', err));
  }

  // Handle form submit (add or edit)
  function handleSubmit(e) {
    e.preventDefault();
    const expense = { amount, category, description, date };

    if (id) {
      fetch(`http://localhost:3000/expenses/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
      })
        .then(() => {
        
          navigate('/expenseslist');
        })
        .catch(err => console.error('Error updating expense:', err));
    } else {
   
      fetch('http://localhost:3000/expenses/add', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
      })
        .then(() => {

          navigate('/expenseslist');
        })
        .catch(err => console.error('Error adding expense:', err));
    }

 
    setAmount('');
    setCategory('');
    setDescription('');
    setDate('');
  }
  useEffect(() => {
    if (id) {
      getEditExpenses(); 
    }
  }, [id]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {id ? 'Edit Expense' : 'Add Expense'}
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount:</label>
          <input
            type="number"
            placeholder="Enter your amount"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category:</label>
          <select
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Shopping">Shopping</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description:</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date:</label>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
          >
            {id ? 'Update Expense' : 'Add Expense'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
