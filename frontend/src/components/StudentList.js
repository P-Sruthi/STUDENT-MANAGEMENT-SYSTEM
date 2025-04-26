import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  // Fetch students data on page load
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch('https://student-management-system-backend-p2gk.onrender.com');
        if (res.ok) {
          const data = await res.json();
          setStudents(data);
        } else {
          console.error('Failed to fetch students');
        }
      } catch (err) {
        console.error('Error fetching students:', err);
      }
    };

    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      await fetch(`https://student-management-system-backend-p2gk.onrender.com/${id}`, {
        method: "DELETE",
      });
      // Remove the student from the list after successful deletion
      setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-400 min-h-screen p-6">
      <div className="text-center bg-white shadow-xl rounded-lg max-w-7xl mx-auto p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6" >Student List</h2>
        <Link to="/students/add">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-6 hover:bg-blue-700 transition">
            Add Student
          </button>
        </Link>
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4 border-b">First Name</th>
                <th className="py-3 px-4 border-b">Last Name</th>
                <th className="py-3 px-4 border-b">DOB</th>
                <th className="py-3 px-4 border-b">Email</th>
                <th className="py-3 px-4 border-b">Course</th>
                <th className="py-3 px-4 border-b">Enrollment Year</th>
                <th className="py-3 px-4 border-b">Status</th>
                <th className="py-3 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id} className="text-gray-800 hover:bg-gray-100">
                  <td className="py-3 px-4 border-b">{student.firstName}</td>
                  <td className="py-3 px-4 border-b">{student.lastName}</td>
                  <td className="py-3 px-4 border-b">{student.dob}</td>
                  <td className="py-3 px-4 border-b">{student.email}</td>
                  <td className="py-3 px-4 border-b">{student.course}</td>
                  <td className="py-3 px-4 border-b">{student.enrollmentDate}</td>
                  <td className="py-3 px-4 border-b">{student.status}</td>
                  <td className="py-3 px-4 border-b">
                    <Link to={`/students/edit/${student._id}`}>
                      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-yellow-600 transition">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteStudent(student._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
