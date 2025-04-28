import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate=useNavigate()
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white min-h-screen flex flex-col">
      
      <header className="p-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-wider">Expense Trackerr</h1>
        <p className="mt-2 text-lg font-light">Track • Manage • Save</p>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-bounce">
          Welcome to Expense Tracker System
        </h2>
        <p className="text-lg md:text-2xl max-w-2xl">
          Easily manage your daily expenses, view detailed reports, and stay on top of your finances.
        </p>
        <button className="mt-8 bg-white text-indigo-600 font-bold px-6 py-3 rounded-full hover:bg-indigo-100 transition duration-300" onClick={()=>navigate('/expensesform')}>
          Get Started
        </button>
      </main>

      <footer className="p-4 text-center text-sm">
        © 2025 Expense Manager. All rights reserved.
      </footer>

    </div>
  );
}

export default HomePage;
