import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-400 min-h-screen flex items-center justify-center">
      <div className="text-center p-10 bg-white shadow-xl rounded-lg max-w-lg w-full">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Welcome to Student Management</h1>
        <p className="text-lg text-gray-700 mb-8">Effortlessly organize and track your students.</p>
        <div className="flex justify-center gap-8">
          <Link to="/students" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            View Students
          </Link>
          <Link to="/students/add" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
            Add Student
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
