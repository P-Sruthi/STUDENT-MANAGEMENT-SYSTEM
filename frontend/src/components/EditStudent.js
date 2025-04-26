import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = ({ setStudents }) => {
  const [student, setStudent] = useState(null); // Start with null (not empty object)
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await fetch(`https://student-management-system-backend-p2gk.onrender.com/${id}`);
        if (res.ok) {
          const data = await res.json();
          setStudent(data);
        } else {
          console.error('Failed to fetch student');
        }
      } catch (err) {
        console.error('Error fetching student:', err);
      }
    };
  
    fetchStudent();
  }, [id]);
  

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://student-management-system-backend-p2gk.onrender.com/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
      });
      if (res.ok) {
        const updatedStudent = await res.json();
        setStudents(prevStudents =>
          prevStudents.map(s => (s._id === updatedStudent._id ? updatedStudent : s))
        );
        navigate('/students');
      } else {
        console.error('Failed to update student');
      }
    } catch (err) {
      console.error('Error updating student:', err);
    }
  };

  // Important: Show loading text if student is not yet fetched
  if (!student) {
    return <div className="text-center text-lg p-6">Loading student details...</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input name="firstName" placeholder="First Name" value={student.firstName || ''} onChange={handleChange} required className="border p-2 rounded" />
        <input name="lastName" placeholder="Last Name" value={student.lastName || ''} onChange={handleChange} required className="border p-2 rounded" />
        <input name="dob" type="date" value={student.dob ? student.dob.slice(0,10) : ''} onChange={handleChange} required className="border p-2 rounded" />
        <input name="email" type="email" placeholder="Email" value={student.email || ''} onChange={handleChange} required className="border p-2 rounded" />
        <input name="course" placeholder="Course" value={student.course || ''} onChange={handleChange} required className="border p-2 rounded" />
        <input name="enrollmentDate" type="number" placeholder="Enrollment Year" value={student.enrollmentDate || ''} onChange={handleChange} required className="border p-2 rounded" />
        <select name="status" value={student.status || 'Active'} onChange={handleChange} className="border p-2 rounded">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit" className="col-span-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
