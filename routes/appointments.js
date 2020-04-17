const express = require('express');

const router = express.Router();

const Appointment = require('../models/Appointment');

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

// Routes

// To Get All Appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

// To Post An Appointment
router.post('/', async (req, res) => {
  const appointment = new Appointment({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    city: req.body.city,
    service: req.body.service,
    aptdate: req.body.aptdate,
    apttime: req.body.apttime,
    about: req.body.about,
  });
  client.messages
    .create({
      to: `${req.body.phone}`,
      from: ' +12034968991',
      body: `Your appointment has been received for ${req.body.service} scheduled for ${req.body.aptdate} at ${req.body.apttime} . See you soon!`,
    })
    .then();
  try {
    const newAppointment = await appointment.save();
    res.json(newAppointment);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
