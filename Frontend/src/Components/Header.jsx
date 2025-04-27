import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo Section (left side) */}
        <div className="flex items-center">
          <img
            src="your-logo-url.png"
            alt="Logo"
            className="w-12 h-12 inline-block mr-2"
          />
          <span className="text-xl font-bold">Expenses Tracker</span>
        </div>

        {/* Navigation Links Section (right side) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/expenseslist" className="hover:text-gray-400">Expenses List</Link>
          <Link to="/expensesform" className="hover:text-gray-400">Expenses Form</Link>
          <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
        </div>

        {/* Hamburger Menu (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when the menu is open) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <Link to="/" className="block text-white hover:text-gray-400">Home</Link>
          <Link to="/expenses-list" className="block text-white hover:text-gray-400">Expenses List</Link>
          <Link to="/expenses-form" className="block text-white hover:text-gray-400">Expenses Form</Link>
          <Link to="/dashboard" className="block text-white hover:text-gray-400">Dashboard</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
