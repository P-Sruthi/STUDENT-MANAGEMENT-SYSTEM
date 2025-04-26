const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: String,
  email: String,
  course: String,
  enrollmentDate: String,
  status: String
});

module.exports = mongoose.model('Student', studentSchema);
