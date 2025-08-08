const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: { type: Date, required: true },
  reason: String,
  status: { type: String, enum: ['scheduled','completed','cancelled'], default: 'scheduled' }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
