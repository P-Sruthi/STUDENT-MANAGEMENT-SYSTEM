import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("/Students");
        const data = await response.json();
        setStudents(data);
      } catch (err) {
        console.error("Failed to fetch students:", err);
      }
    };
    fetchStudents();
  }, []);

  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-start space-x-4">
          <li>
            <Link to="/" className="hover:bg-gray-700 p-2 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link to="/students" className="hover:bg-gray-700 p-2 rounded">
              Students
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/students"
          element={<StudentList students={students} setStudents={setStudents} />}
        />
        <Route
          path="/students/add"
          element={<AddStudent setStudents={setStudents} />}
        />
        <Route
          path="/students/edit/:id"
          element={<EditStudent students={students} setStudents={setStudents} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
