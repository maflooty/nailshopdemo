const mongoose = require('mongoose');

// Schema

const AppointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: false },
  city: { type: String, required: false },
  service: { type: String, required: true },
  aptdate: { type: String, required: true },
  apttime: { type: String, required: true },
  about: { type: String, required: false },
});

// Model

//const Appointment = mongoose.model('appointment', AppointmentSchema);

//module.exports = Appointment;

module.exports = mongoose.model('Appointment', AppointmentSchema);
