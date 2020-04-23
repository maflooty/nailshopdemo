const mongoose = require('mongoose');

// Schema

const MessageSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  message: { type: String },
});

// Model

//const Appointment = mongoose.model('appointment', MessageSchema);

//module.exports = Appointment;

module.exports = mongoose.model('Message', MessageSchema);
