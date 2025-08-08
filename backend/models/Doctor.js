const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: String,
  experienceYears: Number,
  contact: String
});

module.exports = mongoose.model('Doctor', doctorSchema);
