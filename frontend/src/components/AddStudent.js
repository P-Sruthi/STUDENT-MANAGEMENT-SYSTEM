import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudent = ({ setStudents }) => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    course: '',
    enrollmentDate: '',
    status: 'Active'
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(' https://student-management-system-backend-5234.onrender.com/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
      });
      if (res.ok) {
        const newStudent = await res.json();
        setStudents(prev => [...prev, newStudent]);
        navigate('/students');
      } else {
        console.error('Failed to add student');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-400 min-h-screen p-6">
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add Student</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input
            name="firstName"
            placeholder="First Name"
            value={student.firstName}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={student.lastName}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="dob"
            type="date"
            placeholder="DOB"
            value={student.dob}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="course"
            placeholder="Course"
            value={student.course}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="enrollmentDate"
            type="number"
            placeholder="Enrollment Year"
            value={student.enrollmentDate}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="status"
            value={student.status}
            onChange={handleChange}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
