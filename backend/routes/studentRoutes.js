const express = require('express');
const Student = require('../models/student');
const router = express.Router();

// Add a new student
router.post('/students', async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.json(newStudent);
});

// Fetch all students
router.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Fetch student by ID
router.get('/students/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});

// Update student
router.put('/students/:id', async (req, res) => {
  const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedStudent);
});

// Delete student
router.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
});

module.exports = router;
