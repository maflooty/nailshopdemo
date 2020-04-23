// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

// Import Routes
const appointmentRoute = require('./routes/appointments');
const messageRoute = require('./routes/messages');
// Middleware
app.use(bodyParser.json());
app.use('/appointments', appointmentRoute);
app.use('/messages', messageRoute);

// Step 2
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// HTTP request logger
app.use(morgan('tiny'));

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
