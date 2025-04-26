// src/components/StudentsPage.js
import React, { useState } from 'react';
import AddStudent from './AddStudent';
import StudentList from './StudentList';
import EditStudent from './EditStudent';

function StudentsPage() {
  const [activeView, setActiveView] = useState('');

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-6 mb-8">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          onClick={() => setActiveView('add')}
        >
          ➕ Add Student
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          onClick={() => setActiveView('view')}
        >
          📄 View Students
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          onClick={() => setActiveView('edit')}
        >
          ✏️ Edit Records
        </button>
      </div>

      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-2xl">
        {activeView === 'add' && <AddStudent />}
        {activeView === 'view' && <StudentList />}
        {activeView === 'edit' && <EditStudent />}
      </div>
    </div>
  );
}

export default StudentsPage;
