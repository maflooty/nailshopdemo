const express = require('express');

const router = express.Router();

const Message = require('../models/Message');

// To Get All Messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

// To Post An Message
router.post('/', async (req, res) => {
  const message = new Message({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    message: req.body.message,
  });
  try {
    const newMessage = await message.save();
    res.json(newMessage);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
