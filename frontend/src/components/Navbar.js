import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-green-600 p-4 shadow-md">
      <div className="flex justify-between items-center container mx-auto">
        <h1 className="text-white text-2xl font-bold">Student Management</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="text-lg hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/students" className="text-lg hover:text-gray-200">
              Students
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
